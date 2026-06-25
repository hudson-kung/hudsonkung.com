const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || process.argv[2] || 3055);
const root = __dirname;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const server = http.createServer((request, response) => {
  if (request.method === "POST" && request.url === "/api/generate") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) request.destroy();
    });

    request.on("end", async () => {
      try {
        const payload = JSON.parse(body || "{}");
        const html = await generateWithNvidia(payload);

        response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ html, source: "nvidia" }));
      } catch (error) {
        response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ error: error.message || "Generation failed" }));
      }
    });

    return;
  }

  const urlPath = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname);
  const safePath = path.normalize(urlPath).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath ? safePath : "index.html");

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
    });
    response.end(content);
  });
});

server.listen(port, () => {
  console.log(`SiteForge AI running at http://localhost:${port}`);
});

async function generateWithNvidia(payload) {
  const apiKey = process.env.NVIDIA_API_KEY || process.env.NVIDIA_NIM_API_KEY;
  if (!apiKey) {
    throw new Error("NVIDIA_API_KEY is not set on the local server.");
  }

  const prompt = String(payload.prompt || "").trim();
  const siteType = String(payload.siteType || "startup");
  const mood = String(payload.mood || "clean");

  if (!prompt) {
    throw new Error("A site description is required.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 75_000);

  const apiResponse = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
    method: "POST",
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.NVIDIA_MODEL || "meta/llama-3.1-8b-instruct",
      messages: [
        {
          role: "system",
          content:
            "You are a senior product designer and front-end engineer. Generate polished, premium, production-quality single-file HTML websites. Return only complete HTML. Do not wrap it in markdown. The page must include internal CSS, responsive layout, tasteful mixed colors, strong visual hierarchy, cards or feature bands, and no visible instructions. Avoid plain empty blocks, generic centered-only pages, huge blank dark slabs, and placeholder-looking layouts.",
        },
        {
          role: "user",
          content: `Create a complete responsive homepage.\nSite type: ${siteType}\nMood: ${mood}\nDescription: ${prompt}\n\nDesign requirements:\n- Make it visually impressive and specific to the prompt.\n- Use real, natural marketing copy with a memorable brand name.\n- Include a nav, hero, proof/stat strip, 3 feature/service cards, showcase/gallery or benefits section, testimonial/trust section, and final call to action.\n- Use layered backgrounds, tasteful gradients, image-like CSS panels, and mixed accent colors inspired by the prompt.\n- Keep hero typography readable inside a preview iframe; avoid clipped text and huge empty blocks.\n- Add custom subtle scrollbars in the generated CSS.\n- Avoid using the user's raw prompt as the page title.\n- Return only the HTML document.`,
        },
      ],
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 3400,
      stream: false,
    }),
  }).finally(() => clearTimeout(timeout));

  if (!apiResponse.ok) {
    const errorText = await apiResponse.text();
    throw new Error(`NVIDIA API error ${apiResponse.status}: ${errorText.slice(0, 300)}`);
  }

  const data = await apiResponse.json();
  const content = data?.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("NVIDIA returned an empty response.");
  }

  return polishGeneratedHtml(stripCodeFence(content));
}

function stripCodeFence(value) {
  return value
    .replace(/^```html\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

function polishGeneratedHtml(value) {
  const polish = `<style>
    html, body { overflow-x: hidden; scrollbar-width: thin; scrollbar-color: rgba(120, 92, 255, 0.45) transparent; }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(120, 92, 255, 0.45); border: 2px solid transparent; border-radius: 999px; background-clip: content-box; }
    body { min-height: 100vh; }
    section { position: relative; }
    nav, header, main, section, footer { max-width: none; }
    h1 { font-size: clamp(2.6rem, 7vw, 5.6rem) !important; line-height: 0.96 !important; letter-spacing: 0 !important; }
    h2 { font-size: clamp(1.8rem, 4vw, 3.4rem) !important; line-height: 1.05 !important; }
    p { max-width: 72ch; }
    a, button { transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease; }
    a:hover, button:hover { transform: translateY(-1px); }
    img, video { max-width: 100%; height: auto; }
  </style>`;

  if (value.includes("</head>")) {
    return value.replace("</head>", `${polish}</head>`);
  }

  return `${polish}${value}`;
}
