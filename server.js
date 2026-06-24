const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || process.argv[2] || 3055);
const root = __dirname;
const envPath = path.join(root, ".env");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.+?)\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function decodeEntity(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractOutputText(payload) {
  if (payload.output_text) return payload.output_text;
  if (!Array.isArray(payload.output)) return "";

  return payload.output
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .filter(Boolean)
    .join("\n")
    .trim();
}

function postJson(url, headers, payload) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    const body = JSON.stringify(payload);
    const request = https.request(
      {
        hostname: target.hostname,
        path: `${target.pathname}${target.search}`,
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body)
        }
      },
      (response) => {
        let responseBody = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          responseBody += chunk;
        });
        response.on("end", () => {
          let parsed = {};
          try {
            parsed = responseBody ? JSON.parse(responseBody) : {};
          } catch (error) {
            reject(new Error("AI provider returned invalid JSON"));
            return;
          }
          resolve({ ok: response.statusCode >= 200 && response.statusCode < 300, status: response.statusCode, body: parsed });
        });
      }
    );

    request.on("error", reject);
    request.setTimeout(30000, () => {
      request.destroy(new Error("AI provider request timed out"));
    });
    request.write(body);
    request.end();
  });
}

function systemPrompt() {
  return "You are a practical AI business coach inside an app called TrendSearcher. Reply conversationally, directly, and briefly. Help users choose or improve business ideas using their budget, skills, risk, and trend signals. Do not pretend trend data is guaranteed current. Give concrete next steps.";
}

async function callNvidia({ message, context }) {
  const result = await postJson(
    "https://integrate.api.nvidia.com/v1/chat/completions",
    {
      Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
    },
    {
      model: process.env.NVIDIA_MODEL || "meta/llama-3.1-8b-instruct",
      max_tokens: 420,
      temperature: 0.4,
      messages: [
        { role: "system", content: systemPrompt() },
        {
          role: "user",
          content: `User message: ${message}\n\nApp context JSON:\n${JSON.stringify(context || {}, null, 2)}`
        }
      ]
    }
  );

  if (!result.ok) {
    const error = new Error(result.body.error?.message || "NVIDIA request failed");
    error.statusCode = result.status;
    throw error;
  }

  return result.body.choices?.[0]?.message?.content?.trim() || "";
}

async function callOpenAi({ message, context }) {
  const model = process.env.OPENAI_MODEL || "gpt-5.5";
  const payload = {
    model,
    reasoning: { effort: "low" },
    max_output_tokens: 420,
    input: [
      {
        role: "developer",
        content: systemPrompt()
      },
      {
        role: "user",
        content: `User message: ${message}\n\nApp context JSON:\n${JSON.stringify(context || {}, null, 2)}`
      }
    ]
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result.error?.message || "OpenAI request failed");
    error.statusCode = response.status;
    throw error;
  }

  return extractOutputText(result) || "I could not produce a response. Try asking again with a little more detail.";
}

async function callAi({ message, context }) {
  if (process.env.NVIDIA_API_KEY) return callNvidia({ message, context });
  if (process.env.OPENAI_API_KEY) return callOpenAi({ message, context });

  const error = new Error("Missing NVIDIA_API_KEY or OPENAI_API_KEY");
  error.statusCode = 401;
  throw error;
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeEntity(match?.[1] || "");
}

function fetchGoogleTrends() {
  const url = "https://trends.google.com/trends/trendingsearches/daily/rss?geo=US";

  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "TrendSearcher/1.0" } }, (response) => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`Google Trends returned ${response.statusCode}`));
          response.resume();
          return;
        }

        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          const items = [...body.matchAll(/<item>([\s\S]*?)<\/item>/gi)].slice(0, 10);
          resolve(
            items.map((item, index) => ({
              title: readTag(item[1], "title") || `Trend ${index + 1}`,
              traffic: readTag(item[1], "ht:approx_traffic") || "rising",
              news: readTag(item[1], "ht:news_item_title")
            }))
          );
        });
      })
      .on("error", reject)
      .setTimeout(5000, function onTimeout() {
        this.destroy(new Error("Google Trends request timed out"));
      });
  });
}

const server = http.createServer((req, res) => {
  const urlPath = req.url === "/" ? "/index.html" : req.url.split("?")[0];

  if (urlPath === "/api/chat" && req.method === "POST") {
    readJsonBody(req)
      .then((body) => {
        if (!body.message || typeof body.message !== "string") {
          sendJson(res, 400, { error: "Message is required" });
          return null;
        }
        return callAi({ message: body.message.slice(0, 2000), context: body.context });
      })
      .then((reply) => {
        if (reply) sendJson(res, 200, { reply });
      })
      .catch((error) => {
        sendJson(res, error.statusCode || 500, { error: error.message || "AI request failed" });
      });
    return;
  }

  if (urlPath === "/api/config") {
    sendJson(res, 200, {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ""
    });
    return;
  }

  if (urlPath === "/api/trends") {
    fetchGoogleTrends()
      .then((trends) => {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ source: "Google Trends daily searches", trends }));
      })
      .catch(() => {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(
          JSON.stringify({
            source: "Fallback trend signals",
            trends: [
              { title: "AI tools", traffic: "500K+" },
              { title: "summer travel", traffic: "200K+" },
              { title: "meal prep", traffic: "100K+" },
              { title: "electric bills", traffic: "100K+" },
              { title: "side hustles", traffic: "50K+" },
              { title: "short form video", traffic: "50K+" },
              { title: "personal finance", traffic: "50K+" },
              { title: "home services", traffic: "20K+" }
            ]
          })
        );
      });
    return;
  }

  const safePath = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "text/plain" });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`TrendSearcher running at http://localhost:${port}`);
});
