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

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(401).json({ error: "Missing OPENAI_API_KEY" });
    return;
  }

  const { message, context } = req.body || {};
  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Message is required" });
    return;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.5",
        reasoning: { effort: "low" },
        max_output_tokens: 420,
        input: [
          {
            role: "developer",
            content:
              "You are a practical AI business coach inside an app called TrendSearcher. Reply conversationally, directly, and briefly. Help users choose or improve business ideas using their budget, skills, risk, and trend signals. Do not pretend trend data is guaranteed current. Give concrete next steps."
          },
          {
            role: "user",
            content: `User message: ${message.slice(0, 2000)}\n\nApp context JSON:\n${JSON.stringify(context || {}, null, 2)}`
          }
        ]
      })
    });

    const payload = await response.json();
    if (!response.ok) {
      res.status(response.status).json({ error: payload.error?.message || "OpenAI request failed" });
      return;
    }

    res.status(200).json({
      reply: extractOutputText(payload) || "I could not produce a response. Try asking again with a little more detail."
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "AI request failed" });
  }
};
