const examples = {
  fitness:
    "A high-energy website for a personal fitness coach in Denver. The audience is busy professionals who want strength training, nutrition guidance, proof from clients, and a clear way to book a free consultation.",
  saas:
    "A clean launch page for a SaaS product that helps small teams automate customer support. It should feel trustworthy, modern, and conversion-focused with features, metrics, pricing, and a trial call to action.",
  cafe:
    "A warm website for a neighborhood cafe and bakery. Highlight seasonal drinks, fresh pastries, cozy seating, opening hours, a simple menu, and directions for local customers.",
};

const palettes = {
  clean: {
    bg: "#f7faf8",
    text: "#16211b",
    muted: "#65736b",
    accent: "#168352",
    soft: "#d9f5e6",
    contrast: "#ffffff",
  },
  bold: {
    bg: "#fff8f0",
    text: "#16100d",
    muted: "#6d6057",
    accent: "#e8503f",
    soft: "#ffd66b",
    contrast: "#ffffff",
  },
  warm: {
    bg: "#fffaf2",
    text: "#211912",
    muted: "#725f4d",
    accent: "#b75f36",
    soft: "#f3d7a6",
    contrast: "#ffffff",
  },
  editorial: {
    bg: "#f6f3ee",
    text: "#171717",
    muted: "#64605a",
    accent: "#1f5c73",
    soft: "#d7eaf0",
    contrast: "#ffffff",
  },
};

const typeDefaults = {
  startup: {
    sections: ["Problem", "Features", "Results"],
    cta: "Start your free trial",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  portfolio: {
    sections: ["Selected Work", "Process", "Availability"],
    cta: "View the work",
    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  restaurant: {
    sections: ["Menu", "Atmosphere", "Visit"],
    cta: "Reserve a table",
    heroImage:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
  },
  agency: {
    sections: ["Strategy", "Creative", "Growth"],
    cta: "Book a strategy call",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  event: {
    sections: ["Schedule", "Speakers", "Tickets"],
    cta: "Get tickets",
    heroImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
};

const form = document.querySelector("#builderForm");
const promptInput = document.querySelector("#sitePrompt");
const typeInput = document.querySelector("#siteType");
const moodInput = document.querySelector("#siteMood");
const preview = document.querySelector("#sitePreview");
const codeOutput = document.querySelector("#codeOutput");
const previewTitle = document.querySelector("#previewTitle");
const copyButton = document.querySelector("#copyCode");
const downloadButton = document.querySelector("#downloadCode");
const openFullPageButton = document.querySelector("#openFullPage");
const generateButton = document.querySelector("#builderForm .primary-button");
const projectName = document.querySelector("#projectName");

let currentHtml = "";

if (form) {
  initializeBuilder();
}

function getStoredSites() {
  return JSON.parse(localStorage.getItem("siteforge-sites") || "[]");
}

function titleCase(value) {
  return value
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 5)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function inferName(prompt, type) {
  const cleanedPrompt = prompt
    .replace(/\b(gimmie|gimme|give me|make me|build me|create me)\b/gi, "")
    .replace(/\b(wiuth|wih|withh)\b/gi, "with")
    .replace(/\b(pronto|please|pls)\b/gi, "")
    .trim();

  const descriptiveLead = cleanedPrompt.match(
    /(?:website|site|page)\s+for\s+(?:a|an|the)?\s*([^.,]{6,64})/i
  );
  if (descriptiveLead?.[1]) {
    return titleCase(descriptiveLead[1].replace(/\s+in\s+[A-Za-z ]+$/i, ""));
  }

  const simpleCategory = cleanedPrompt.match(
    /(?:a|an)?\s*([a-z0-9 '&-]{3,42}?)\s+(?:website|site|page)\b/i
  );
  if (simpleCategory?.[1]) {
    return titleCase(`${simpleCategory[1]} website`);
  }

  const patterns = [
    /(?:for|called|named)\s+(?:a|an|the)?\s*([A-Z][A-Za-z0-9 '&-]{2,42})/,
    /([A-Z][A-Za-z0-9 '&-]{2,42})\s+(?:website|site|app|studio|cafe|agency)/,
  ];

  for (const pattern of patterns) {
    const match = cleanedPrompt.match(pattern);
    if (match?.[1]) return titleCase(match[1]);
  }

  const fallback = cleanedPrompt.split(".")[0].split(" for ").pop() || `${type} website`;
  return titleCase(fallback) || "New Website";
}

function getGeneratedDocumentTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match?.[1]?.trim();
}

function inferAudience(prompt) {
  const audienceMatch = prompt.match(/(?:audience is|for|helps|serves)\s+([^.,]{8,80})/i);
  return audienceMatch?.[1]?.trim() || "people who need a better, easier way to get started";
}

function inferKeywords(prompt) {
  const words = prompt
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4 && !["website", "modern", "should", "clear", "focused"].includes(word));

  return [...new Set(words)].slice(0, 6);
}

function inferSiteType(prompt) {
  const text = prompt.toLowerCase();
  if (/(restaurant|cafe|coffee|bakery|bar|food|menu)/.test(text)) return "restaurant";
  if (/(portfolio|photography|designer|artist|studio|creator|resume)/.test(text)) return "portfolio";
  if (/(agency|service|consulting|marketing|coach|consultant)/.test(text)) return "agency";
  if (/(event|conference|festival|summit|wedding|ticket)/.test(text)) return "event";
  return "startup";
}

function inferMood(prompt) {
  const text = prompt.toLowerCase();
  if (/(warm|cozy|brown|orange|friendly|soft|handmade|local)/.test(text)) return "warm";
  if (/(bold|loud|bright|energetic|fitness|sports|launch)/.test(text)) return "bold";
  if (/(editorial|luxury|elegant|magazine|refined|minimal)/.test(text)) return "editorial";
  return "clean";
}

function buildSite(prompt, type, mood) {
  const palette = palettes[mood];
  const defaults = typeDefaults[type];
  const name = inferName(prompt, type);
  const audience = inferAudience(prompt);
  const keywords = inferKeywords(prompt);
  const benefit = keywords.length ? keywords.slice(0, 3).join(", ") : "clarity, confidence, and momentum";
  const cards = defaults.sections.map((section, index) => {
    const detail = keywords[index] || ["strategy", "experience", "growth"][index];
    return `
      <article class="card">
        <span>0${index + 1}</span>
        <h3>${section}</h3>
        <p>Purpose-built around ${detail} so ${audience} can move from interest to action without friction.</p>
      </article>`;
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: ${palette.text};
      background: ${palette.bg};
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: ${palette.accent} transparent;
    }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb {
      background: ${palette.accent};
      border: 2px solid transparent;
      border-radius: 999px;
      background-clip: content-box;
    }
    a { color: inherit; text-decoration: none; }
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 22px clamp(18px, 5vw, 64px);
      border-bottom: 1px solid rgba(0,0,0,0.08);
    }
    .logo { font-weight: 900; font-size: 1.05rem; }
    .nav a:last-child, .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 18px;
      color: white;
      background: ${palette.accent};
      border-radius: 8px;
      font-weight: 800;
    }
    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(320px, 0.84fr);
      gap: clamp(26px, 5vw, 72px);
      align-items: center;
      padding: clamp(34px, 6vw, 72px) clamp(18px, 5vw, 64px);
    }
    .eyebrow {
      margin: 0 0 12px;
      color: ${palette.accent};
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h1 {
      max-width: 760px;
      margin: 0;
      font-size: clamp(2.8rem, 7vw, 5.4rem);
      line-height: 0.94;
      letter-spacing: 0;
    }
    .lead {
      max-width: 650px;
      color: ${palette.muted};
      font-size: clamp(1.05rem, 2vw, 1.35rem);
      line-height: 1.7;
    }
    .hero-image {
      min-height: 380px;
      background: linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url("${defaults.heroImage}");
      background-position: center;
      background-size: cover;
      border-radius: 12px;
      box-shadow: 0 22px 70px rgba(0,0,0,0.16);
    }
    .strip {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: rgba(0,0,0,0.08);
      margin: 0 clamp(18px, 5vw, 64px);
      border: 1px solid rgba(0,0,0,0.08);
      border-radius: 10px;
      overflow: hidden;
    }
    .stat {
      padding: 24px;
      background: ${palette.contrast};
    }
    .stat strong {
      display: block;
      font-size: clamp(1.8rem, 4vw, 3.1rem);
      line-height: 1;
    }
    .stat span, .card p, .final p {
      color: ${palette.muted};
      line-height: 1.65;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: clamp(42px, 7vw, 86px) clamp(18px, 5vw, 64px);
    }
    .card {
      min-height: 260px;
      padding: 24px;
      background: ${palette.contrast};
      border: 1px solid rgba(0,0,0,0.08);
      border-radius: 10px;
    }
    .card span {
      color: ${palette.accent};
      font-weight: 900;
    }
    .card h3 {
      margin: 58px 0 10px;
      font-size: 1.45rem;
    }
    .final {
      margin: 0 clamp(18px, 5vw, 64px) clamp(42px, 7vw, 86px);
      padding: clamp(30px, 6vw, 64px);
      background: ${palette.soft};
      border-radius: 12px;
    }
    .final h2 {
      max-width: 760px;
      margin: 0;
      font-size: clamp(2.1rem, 5vw, 4.5rem);
      line-height: 0.98;
    }
    @media (max-width: 850px) {
      .hero, .cards, .strip { grid-template-columns: 1fr; }
      .hero-image { min-height: 310px; }
      .nav a:last-child { display: none; }
    }
  </style>
</head>
<body>
  <nav class="nav">
    <a class="logo" href="#">${name}</a>
    <a href="#contact">${defaults.cta}</a>
  </nav>
  <main>
    <section class="hero">
      <div>
        <p class="eyebrow">${type} website</p>
        <h1>${name} helps your audience choose with confidence.</h1>
        <p class="lead">A focused homepage shaped around ${benefit}. Built for ${audience}, with crisp messaging, strong visual rhythm, and a simple next step.</p>
        <a class="button" href="#contact">${defaults.cta}</a>
      </div>
      <div class="hero-image" role="img" aria-label="${name} website visual"></div>
    </section>
    <section class="strip" aria-label="Highlights">
      <div class="stat"><strong>3x</strong><span>Clearer path from visit to action</span></div>
      <div class="stat"><strong>24h</strong><span>Fast launch-ready starter direction</span></div>
      <div class="stat"><strong>100%</strong><span>Responsive layout for every screen</span></div>
    </section>
    <section class="cards">
      ${cards.join("")}
    </section>
    <section class="final" id="contact">
      <p class="eyebrow">Next step</p>
      <h2>Ready to make ${name} the obvious choice?</h2>
      <p>Use this section for booking, purchasing, subscribing, or starting a conversation. Keep the ask simple and the promise specific.</p>
      <a class="button" href="mailto:hello@example.com">${defaults.cta}</a>
    </section>
  </main>
</body>
</html>`;
}

function renderLocalSite() {
  const prompt = promptInput.value.trim() || examples.saas;
  const siteType = typeInput?.value || inferSiteType(prompt);
  const mood = moodInput?.value || inferMood(prompt);
  currentHtml = buildSite(prompt, siteType, mood);
  preview.srcdoc = currentHtml;
  codeOutput.textContent = currentHtml;
  const name = inferName(prompt, siteType);
  previewTitle.textContent = `${name} preview`;
  if (projectName) projectName.textContent = name;
  saveSiteRecord({ name, prompt, siteType, source: "Preview" });
}

async function renderGeneratedSite() {
  const prompt = promptInput.value.trim() || examples.saas;
  const siteType = typeInput?.value || inferSiteType(prompt);
  const mood = moodInput?.value || inferMood(prompt);
  previewTitle.textContent = "Generating with AI...";
  if (generateButton) {
    generateButton.disabled = true;
    generateButton.textContent = "Generating...";
  }

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        siteType,
        mood,
      }),
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.error || "AI generation failed.");
    }

  const payload = await response.json();
  currentHtml = payload.html;
  } catch (error) {
    console.warn(error);
    currentHtml = buildSite(prompt, siteType, mood);
    previewTitle.textContent = `${inferName(prompt, siteType)} generated locally`;
  } finally {
    if (generateButton) {
      generateButton.disabled = false;
      generateButton.textContent = "Generate site";
    }
  }

  preview.srcdoc = currentHtml;
  codeOutput.textContent = currentHtml;
  const generatedTitle = getGeneratedDocumentTitle(currentHtml);
  const displayName = generatedTitle && generatedTitle.length < 64 ? generatedTitle : inferName(prompt, siteType);
  if (!previewTitle.textContent.includes("locally")) {
    previewTitle.textContent = `${displayName} generated with AI`;
  }
  const name = displayName;
  if (projectName) projectName.textContent = name;
  saveSiteRecord({ name, prompt, siteType, source: previewTitle.textContent.includes("locally") ? "Local" : "AI" });
}

function saveSiteRecord({ name, prompt, siteType, source }) {
  const existing = getStoredSites();
  const next = [
    {
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "site",
      name,
      prompt,
      type: siteType.charAt(0).toUpperCase() + siteType.slice(1),
      status: source === "AI" ? "Generated" : "Draft",
      updatedAt: new Date().toISOString(),
    },
    ...existing.filter((site) => site.name !== name),
  ].slice(0, 12);

  localStorage.setItem("siteforge-sites", JSON.stringify(next));
}

function useExample(key) {
  promptInput.value = examples[key];
  const typeByExample = { fitness: "agency", saas: "startup", cafe: "restaurant" };
  const moodByExample = { fitness: "bold", saas: "clean", cafe: "warm" };
  if (typeInput) typeInput.value = typeByExample[key];
  if (moodInput) moodInput.value = moodByExample[key];
  renderLocalSite();
  document.querySelector(".builder-app").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initializeBuilder() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void renderGeneratedSite();
  });

  document.querySelectorAll("[data-example]").forEach((button) => {
    button.addEventListener("click", () => useExample(button.dataset.example));
  });

  copyButton.addEventListener("click", async () => {
    if (!currentHtml) await renderGeneratedSite();
    await navigator.clipboard.writeText(currentHtml);
    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = "Copy code";
    }, 1400);
  });

  downloadButton.addEventListener("click", async () => {
    if (!currentHtml) await renderGeneratedSite();
    const blob = new Blob([currentHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "generated-site.html";
    link.click();
    URL.revokeObjectURL(url);
  });

  openFullPageButton.addEventListener("click", async () => {
    if (!currentHtml) await renderGeneratedSite();
    const blob = new Blob([currentHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  });

  const params = new URLSearchParams(window.location.search);
  const siteId = params.get("site");
  const existingSite = siteId ? getStoredSites().find((site) => site.id === siteId) : null;

  if (existingSite) {
    promptInput.value = existingSite.prompt;
    if (projectName) projectName.textContent = existingSite.name;
  }

  if (promptInput.value.trim() || existingSite) {
    renderLocalSite();
  } else {
    currentHtml = "";
    preview.srcdoc = emptyPreviewHtml();
    codeOutput.textContent = "";
    previewTitle.textContent = "No site selected";
    if (projectName) projectName.textContent = "Untitled site";
  }
}

function emptyPreviewHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Empty preview</title>
  <style>
    body {
      min-height: 100vh;
      margin: 0;
      display: grid;
      place-items: center;
      color: #66736d;
      background: #f8faf7;
      font-family: Inter, system-ui, sans-serif;
      text-align: center;
    }
    h1 { margin: 0 0 10px; color: #151917; font-size: clamp(2.2rem, 7vw, 5rem); }
    p { margin: 0; font-size: 1.05rem; }
  </style>
</head>
<body>
  <main>
    <h1>Empty preview</h1>
    <p>Describe a site and generate your first draft.</p>
  </main>
</body>
</html>`;
}
