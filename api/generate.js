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

async function generateWithNvidia({ prompt, siteType, mood }) {
  if (!process.env.NVIDIA_API_KEY) {
    throw Object.assign(new Error("Missing NVIDIA_API_KEY"), { statusCode: 401 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 75_000);

  const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
    method: "POST",
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.NVIDIA_MODEL || "meta/llama-3.1-8b-instruct",
      messages: [
        {
          role: "system",
          content:
            "You are a senior product designer and front-end engineer. Generate polished, premium, production-quality single-file HTML websites. Return only complete HTML. Do not wrap it in markdown. The page must include internal CSS, responsive layout, tasteful mixed colors, strong visual hierarchy, cards or feature bands, and no visible instructions. Avoid plain empty blocks, generic centered-only pages, huge blank dark slabs, and placeholder-looking layouts."
        },
        {
          role: "user",
          content: `Create a complete responsive homepage.\nSite type: ${siteType}\nMood: ${mood}\nDescription: ${prompt}\n\nDesign requirements:\n- Make it visually impressive and specific to the prompt.\n- Use real, natural marketing copy with a memorable brand name.\n- Include a nav, hero, proof/stat strip, 3 feature/service cards, showcase/gallery or benefits section, testimonial/trust section, and final call to action.\n- Use layered backgrounds, tasteful gradients, image-like CSS panels, and mixed accent colors inspired by the prompt.\n- Keep hero typography readable inside a preview iframe; avoid clipped text and huge empty blocks.\n- Add custom subtle scrollbars in the generated CSS.\n- Avoid using the user's raw prompt as the page title.\n- Return only the HTML document.`
        }
      ],
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 3400,
      stream: false
    })
  }).finally(() => clearTimeout(timeout));

  const payload = await response.json();
  if (!response.ok) {
    const message = payload.error?.message || `NVIDIA API error ${response.status}`;
    throw Object.assign(new Error(message), { statusCode: response.status });
  }

  const content = payload.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw Object.assign(new Error("NVIDIA returned an empty response."), { statusCode: 502 });
  }

  return polishGeneratedHtml(stripCodeFence(content));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { prompt, siteType = "startup", mood = "clean" } = req.body || {};
  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "A site description is required." });
    return;
  }

  try {
    const html = await generateWithNvidia({
      prompt: prompt.slice(0, 4000),
      siteType: String(siteType),
      mood: String(mood)
    });
    res.status(200).json({ html, source: "nvidia" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message || "Generation failed" });
  }
};
