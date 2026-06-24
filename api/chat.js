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

function systemPrompt() {
  return "You are a practical AI business coach inside an app called TrendSearcher. Reply conversationally, directly, and briefly. Help users choose or improve business ideas using their budget, skills, risk, and trend signals. Do not pretend trend data is guaranteed current. Give concrete next steps.";
}

async function callNvidia({ message, context }) {
  const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.NVIDIA_MODEL || "meta/llama-3.1-8b-instruct",
      max_tokens: 420,
      temperature: 0.4,
      messages: [
        { role: "system", content: systemPrompt() },
        {
          role: "user",
          content: `User message: ${message.slice(0, 2000)}\n\nApp context JSON:\n${JSON.stringify(context || {}, null, 2)}`
        }
      ]
    })
  });

  const payload = await response.json();
  if (!response.ok) {
    const error = new Error(payload.error?.message || "NVIDIA request failed");
    error.statusCode = response.status;
    throw error;
  }

  return payload.choices?.[0]?.message?.content?.trim() || "";
}

async function callOpenAi({ message, context }) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5.5",
      reasoning: { effort: "low" },
      max_output_tokens: 420,
      input: [
        { role: "developer", content: systemPrompt() },
        {
          role: "user",
          content: `User message: ${message.slice(0, 2000)}\n\nApp context JSON:\n${JSON.stringify(context || {}, null, 2)}`
        }
      ]
    })
  });

  const payload = await response.json();
  if (!response.ok) {
    const error = new Error(payload.error?.message || "OpenAI request failed");
    error.statusCode = response.status;
    throw error;
  }

  return extractOutputText(payload);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.NVIDIA_API_KEY && !process.env.OPENAI_API_KEY) {
    res.status(401).json({ error: "Missing NVIDIA_API_KEY or OPENAI_API_KEY" });
    return;
  }

  const { message, context } = req.body || {};
  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Message is required" });
    return;
  }

  try {
    const reply = process.env.NVIDIA_API_KEY
      ? await callNvidia({ message, context })
      : await callOpenAi({ message, context });
    res.status(200).json({ reply: reply || "I could not produce a response. Try asking again with a little more detail." });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message || "AI request failed" });
  }
};
