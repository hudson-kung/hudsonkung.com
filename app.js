const trendData = [
  {
    name: "AI workflow setup",
    description: "Build automations, chatbots, and document workflows for small businesses.",
    category: "technical",
    budget: "low",
    risk: "balanced",
    region: ["us", "global", "urban", "suburban"],
    trend: [48, 52, 57, 66, 71, 79, 88],
    demand: 94,
    competition: 62,
    startupCost: 450,
    firstSaleDays: 14,
    tags: ["B2B", "AI", "service"],
    plan: [
      "Pick one niche, like realtors, dentists, or contractors.",
      "Make a one-page offer with three fixed packages.",
      "Audit ten local businesses and send custom improvement videos.",
      "Turn the first project into a repeatable checklist."
    ]
  },
  {
    name: "Short-form content studio",
    description: "Create clips, hooks, captions, and posting systems for founders and local brands.",
    category: "creative",
    budget: "low",
    risk: "balanced",
    region: ["us", "global", "urban"],
    trend: [54, 60, 63, 68, 72, 76, 82],
    demand: 87,
    competition: 71,
    startupCost: 700,
    firstSaleDays: 10,
    tags: ["creator economy", "retainers", "marketing"],
    plan: [
      "Choose a vertical with money behind it, like fitness, home services, or finance.",
      "Create three sample edits from public footage or your own demos.",
      "Sell a monthly batch of clips instead of one-off posts.",
      "Track leads generated so clients see business value."
    ]
  },
  {
    name: "Home energy tune-ups",
    description: "Help homeowners lower bills with insulation checks, smart thermostats, and rebates.",
    category: "local",
    budget: "medium",
    risk: "safe",
    region: ["us", "suburban"],
    trend: [39, 43, 51, 55, 61, 69, 77],
    demand: 81,
    competition: 48,
    startupCost: 2400,
    firstSaleDays: 28,
    tags: ["local", "savings", "sustainability"],
    plan: [
      "Research utility rebates in your county.",
      "Offer a fixed-price home efficiency report.",
      "Partner with HVAC and insulation installers for referrals.",
      "Add seasonal packages before summer and winter."
    ]
  },
  {
    name: "Micro learning products",
    description: "Sell focused templates, courses, and coaching for one painful skill gap.",
    category: "education",
    budget: "low",
    risk: "bold",
    region: ["us", "global"],
    trend: [44, 47, 50, 58, 65, 68, 73],
    demand: 78,
    competition: 69,
    startupCost: 300,
    firstSaleDays: 21,
    tags: ["digital product", "education", "scalable"],
    plan: [
      "Find one repeat problem people already pay to solve.",
      "Pre-sell a workshop before recording a full course.",
      "Bundle worksheets, prompts, and examples.",
      "Use buyer questions to build the next module."
    ]
  },
  {
    name: "Niche lead generation",
    description: "Generate booked calls for specific service businesses using search and social ads.",
    category: "sales",
    budget: "medium",
    risk: "bold",
    region: ["us", "urban", "suburban"],
    trend: [51, 49, 55, 60, 67, 74, 80],
    demand: 89,
    competition: 74,
    startupCost: 1800,
    firstSaleDays: 18,
    tags: ["sales", "ads", "B2B"],
    plan: [
      "Choose a service with high customer lifetime value.",
      "Build one landing page and one simple ad funnel.",
      "Offer pay-per-qualified-lead after a setup fee.",
      "Use call tracking to prove attribution."
    ]
  },
  {
    name: "Personalized meal prep",
    description: "Make health-specific weekly meals for busy people with clear dietary goals.",
    category: "local",
    budget: "medium",
    risk: "safe",
    region: ["us", "urban", "suburban"],
    trend: [46, 50, 56, 61, 63, 70, 75],
    demand: 82,
    competition: 58,
    startupCost: 3200,
    firstSaleDays: 20,
    tags: ["local", "health", "subscription"],
    plan: [
      "Start with two diet lanes, such as high-protein and diabetic-friendly.",
      "Sell five beta subscriptions before buying equipment.",
      "Standardize ingredients to keep margins predictable.",
      "Add corporate lunch drops once reviews are strong."
    ]
  },
  {
    name: "Mobile car detailing",
    description: "Clean and detail cars at customers' homes using simple booking, before-after photos, and local search demand.",
    category: "local",
    budget: "low",
    risk: "safe",
    region: ["us", "urban", "suburban"],
    trend: [42, 46, 52, 57, 64, 71, 79],
    demand: 84,
    competition: 52,
    startupCost: 350,
    firstSaleDays: 7,
    tags: ["cars", "cleaning", "local"],
    plan: [
      "Buy only the basic cleaning kit and towels first.",
      "Offer five discounted details to neighbors for before-after photos.",
      "Post results in local Facebook groups and Google Business Profile.",
      "Add monthly maintenance plans after the first ten customers."
    ]
  },
  {
    name: "Local errand service",
    description: "Run errands, pickups, and simple tasks for busy families, seniors, and local professionals.",
    category: "local",
    budget: "low",
    risk: "safe",
    region: ["us", "urban", "suburban"],
    trend: [35, 40, 46, 50, 56, 61, 67],
    demand: 73,
    competition: 39,
    startupCost: 120,
    firstSaleDays: 5,
    tags: ["local", "services", "low cost"],
    plan: [
      "Pick a small service area you can reach quickly.",
      "Make a simple menu: pickups, returns, grocery runs, and admin tasks.",
      "Post a local intro offer with clear prices.",
      "Ask every customer for one referral."
    ]
  },
  {
    name: "AI resume and job kit",
    description: "Use AI to help job seekers rewrite resumes, cover letters, LinkedIn profiles, and interview answers.",
    category: "technical",
    budget: "low",
    risk: "balanced",
    region: ["us", "global"],
    trend: [50, 54, 61, 69, 75, 82, 90],
    demand: 88,
    competition: 66,
    startupCost: 80,
    firstSaleDays: 8,
    tags: ["AI", "jobs", "templates"],
    plan: [
      "Create one strong sample resume makeover.",
      "Sell a fixed package with resume, LinkedIn, and interview prep.",
      "Find customers in student groups and job search communities.",
      "Turn repeated edits into templates."
    ]
  }
];

const state = {
  risk: "safe",
  ranked: [],
  liveTrends: [],
  lastPrompt: "",
  hasAsked: false
};

const elements = {
  budget: document.querySelector("#budget"),
  skill: document.querySelector("#skill"),
  hours: document.querySelector("#hours"),
  hoursValue: document.querySelector("#hoursValue"),
  region: document.querySelector("#region"),
  segments: document.querySelectorAll(".segment"),
  generate: document.querySelector("#generate"),
  ideaList: document.querySelector("#ideaList"),
  marketScore: document.querySelector("#marketScore"),
  aiSearchForm: document.querySelector("#aiSearchForm"),
  aiPrompt: document.querySelector("#aiPrompt"),
  aiAskButton: document.querySelector("#aiAskButton"),
  chatThread: document.querySelector("#chatThread"),
  resultsPanel: document.querySelector("#resultsPanel"),
  aiPick: document.querySelector("#aiPick"),
  aiReason: document.querySelector("#aiReason"),
  startupCost: document.querySelector("#startupCost"),
  firstSale: document.querySelector("#firstSale"),
  launchPlan: document.querySelector("#launchPlan"),
  trendHeadline: document.querySelector("#trendHeadline"),
  canvas: document.querySelector("#trendCanvas"),
  trendBars: document.querySelector("#trendBars"),
  trendSource: document.querySelector("#trendSource")
};

function getInputs() {
  return {
    budget: elements.budget.value,
    skill: elements.skill.value,
    hours: Number(elements.hours.value),
    risk: state.risk,
    region: elements.region.value
  };
}

function scoreIdea(idea, inputs) {
  const trendGrowth = idea.trend.at(-1) - idea.trend[0];
  let score = 28 + idea.demand * 0.34 + idea.trend.at(-1) * 0.18 + trendGrowth * 0.38 - idea.competition * 0.22;

  if (idea.category === inputs.skill) score += 20;
  if (idea.budget === inputs.budget) score += 13;
  if (idea.risk === inputs.risk) score += 11;
  if (idea.region.includes(inputs.region)) score += 8;
  if (inputs.hours >= 25 && idea.risk !== "safe") score += 7;
  if (inputs.hours < 15 && idea.startupCost < 1000) score += 6;
  if (inputs.budget === "low" && idea.startupCost > 1500) score -= 22;
  if (inputs.risk === "safe" && idea.competition > 68) score -= 8;

  return Math.max(1, Math.min(99, Math.round(score)));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readPromptProfile(prompt) {
  const text = prompt.toLowerCase();
  const budgetMatch = text.match(/\$?\b(\d{2,6})\b|\b(\d{2,6})\s*(dollars|bucks|usd)\b/);
  const budgetAmount = budgetMatch ? Number(budgetMatch[1] || budgetMatch[2]) : null;
  const profile = {
    budget: budgetAmount && budgetAmount < 1000 ? "low" : budgetAmount && budgetAmount <= 10000 ? "medium" : budgetAmount ? "high" : null,
    skill: null,
    region: null,
    risk: null,
    hours: null,
    budgetAmount,
    themes: []
  };

  const skillSignals = [
    { skill: "creative", words: ["video", "editing", "design", "content", "tiktok", "youtube", "photo", "brand"] },
    { skill: "technical", words: ["ai", "code", "software", "automation", "website", "bot", "app", "data"] },
    { skill: "sales", words: ["sales", "marketing", "ads", "leads", "sell", "clients", "outreach"] },
    { skill: "local", words: ["local", "cleaning", "cars", "lawn", "home", "dog", "house", "neighborhood"] },
    { skill: "education", words: ["teach", "course", "coach", "school", "tutor", "learn", "training"] }
  ];

  for (const signal of skillSignals) {
    if (signal.words.some((word) => text.includes(word))) {
      profile.skill = signal.skill;
      profile.themes.push(...signal.words.filter((word) => text.includes(word)).slice(0, 2));
      break;
    }
  }

  if (text.includes("safe") || text.includes("easy") || text.includes("low risk")) profile.risk = "safe";
  if (text.includes("scale") || text.includes("big") || text.includes("risky")) profile.risk = "bold";
  if (text.includes("online") || text.includes("global")) profile.region = "global";
  if (text.includes("city")) profile.region = "urban";
  if (text.includes("suburb") || text.includes("near me")) profile.region = "suburban";
  if (text.includes("local")) profile.region = "suburban";

  const hourMatch = text.match(/\b(\d{1,2})\s*(hours|hrs)\b/);
  if (hourMatch) profile.hours = Number(hourMatch[1]);

  return profile;
}

function promptScoreIdea(idea, prompt, baseInputs) {
  const profile = readPromptProfile(prompt);
  const text = prompt.toLowerCase();
  const haystack = [idea.name, idea.description, idea.category, idea.budget, idea.risk, ...idea.tags].join(" ").toLowerCase();
  const words = text.split(/[^a-z0-9]+/).filter((word) => word.length > 2);
  let score = scoreIdea(idea, {
    ...baseInputs,
    budget: profile.budget || baseInputs.budget,
    skill: profile.skill || baseInputs.skill,
    region: profile.region || baseInputs.region,
    risk: profile.risk || baseInputs.risk,
    hours: profile.hours || baseInputs.hours
  });

  score += words.reduce((sum, word) => sum + (haystack.includes(word) ? 5 : 0), 0);
  if (profile.budgetAmount && idea.startupCost <= profile.budgetAmount) score += 18;
  if (profile.budgetAmount && idea.startupCost > profile.budgetAmount * 2) score -= 24;
  if (profile.skill === idea.category) score += 18;
  if (profile.risk === idea.risk) score += 10;

  return Math.max(1, Math.min(99, Math.round(score)));
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function renderIdeas(ranked) {
  if (!state.hasAsked) return;
  elements.ideaList.innerHTML = ranked
    .slice(0, 3)
    .map(
      (item, index) => `
        <article class="idea-card">
          <div class="rank">${index + 1}</div>
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <div class="tags">
              ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
          <div class="fit">
            <span>${item.score}</span>
            fit
          </div>
        </article>
      `
    )
    .join("");
}

function renderRecommendation(best, averageScore) {
  if (!state.hasAsked) return;
  elements.marketScore.textContent = averageScore;
  elements.aiPick.textContent = `Start with: ${best.name}.`;
  elements.aiReason.textContent = `${best.description} The signal is strong because demand is ${best.demand}/100, competition is manageable at ${best.competition}/100, and the trend line is up ${best.trend.at(-1) - best.trend[0]} points.`;
  elements.startupCost.textContent = money(best.startupCost);
  elements.firstSale.textContent = `${best.firstSaleDays} days`;
  if (elements.launchPlan) elements.launchPlan.innerHTML = best.plan.map((step) => `<li>${step}</li>`).join("");
  if (elements.trendHeadline) {
    elements.trendHeadline.textContent = `${best.name} is the strongest match for your budget, skill set, region, and risk level.`;
  }
}

function analyzePrompt(prompt, ranked) {
  const cleanPrompt = prompt.trim();
  const text = cleanPrompt.toLowerCase();
  if (!text) return;

  const inputs = getInputs();
  const promptRanked = trendData
    .map((idea) => ({ ...idea, score: promptScoreIdea(idea, cleanPrompt, inputs) }))
    .sort((a, b) => b.score - a.score);
  const best = promptRanked[0];
  const profile = readPromptProfile(cleanPrompt);
  const averageScore = Math.round(promptRanked.slice(0, 3).reduce((sum, item) => sum + item.score, 0) / 3);

  const meaningfulWords = text.split(/[^a-z0-9]+/).filter((word) => word.length > 3);
  const trendHint = state.liveTrends
    .slice(0, 5)
    .find((trend) => {
      const title = trend.title.toLowerCase();
      return text.includes(title) || meaningfulWords.some((word) => title.includes(word));
    });
  const trendLine = trendHint
    ? ` Also, "${trendHint.title}" is hot right now, so look for a way to connect your offer to that attention.`
    : "";
  const budgetLine = profile.budgetAmount
    ? ` Since you mentioned about ${money(profile.budgetAmount)}, I avoided ideas that need too much money upfront.`
    : "";
  const firstStep = best.plan[0] ? ` First move: ${best.plan[0]}` : "";

  elements.marketScore.textContent = averageScore;
  elements.aiPick.textContent = `Start with: ${best.name}.`;
  elements.aiReason.textContent = `${best.description} Validate it by selling one simple version before building anything complicated.`;
  elements.startupCost.textContent = money(best.startupCost);
  elements.firstSale.textContent = `${best.firstSaleDays} days`;
  state.ranked = promptRanked;
  renderIdeas(promptRanked);
  return {
    best,
    summary: `${best.description} This fits your prompt with a ${best.score}/100 score.${budgetLine}${trendLine}${firstStep}`
  };
}

function parseTraffic(value, fallbackIndex) {
  const clean = String(value || "").replace(/\+/g, "").trim().toLowerCase();
  const number = Number.parseFloat(clean.replace(/[^0-9.]/g, ""));
  const multiplier = clean.includes("m") ? 1000000 : clean.includes("k") ? 1000 : 1;
  return Number.isFinite(number) && number > 0 ? number * multiplier : (10 - fallbackIndex) * 10000;
}

function renderLiveTrends(trends, sourceLabel) {
  const visible = trends.slice(0, 8);
  const maxTraffic = Math.max(...visible.map((trend, index) => parseTraffic(trend.traffic, index)), 1);

  elements.trendSource.textContent = sourceLabel;
  if (!state.hasAsked) return;
  elements.trendBars.innerHTML = visible
    .map((trend, index) => {
      const traffic = parseTraffic(trend.traffic, index);
      const width = Math.max(12, Math.round((traffic / maxTraffic) * 100));
      return `
        <div class="trend-row">
          <span class="trend-name">${escapeHtml(trend.title)}</span>
          <span class="bar-track"><span class="bar-fill" style="width: ${width}%"></span></span>
          <span class="trend-count">${escapeHtml(trend.traffic || "rising")}</span>
        </div>
      `;
    })
    .join("");
}

async function loadLiveTrends() {
  const fallback = [
    { title: "AI tools", traffic: "500K+" },
    { title: "summer travel", traffic: "200K+" },
    { title: "meal prep", traffic: "100K+" },
    { title: "electric bills", traffic: "100K+" },
    { title: "side hustles", traffic: "50K+" },
    { title: "short form video", traffic: "50K+" },
    { title: "personal finance", traffic: "50K+" },
    { title: "home services", traffic: "20K+" }
  ];

  try {
    const response = await fetch("/api/trends");
    if (!response.ok) throw new Error("Trends request failed");
    const payload = await response.json();
    state.liveTrends = payload.trends?.length ? payload.trends : fallback;
    renderLiveTrends(state.liveTrends, payload.source || "Google Trends");
  } catch (error) {
    state.liveTrends = fallback;
    renderLiveTrends(fallback, "Fallback trend signals");
  }
}

function drawChart(ranked) {
  const canvas = elements.canvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const pad = 28;
  const colors = ["#36d399", "#5fb3ff", "#f7c948"];
  const top = ranked.slice(0, 3);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#10211f";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i += 1) {
    const y = pad + ((height - pad * 2) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  top.forEach((idea, ideaIndex) => {
    const points = idea.trend.map((value, index) => {
      const x = pad + ((width - pad * 2) / (idea.trend.length - 1)) * index;
      const y = height - pad - (value / 100) * (height - pad * 2);
      return { x, y };
    });

    ctx.strokeStyle = colors[ideaIndex];
    ctx.lineWidth = 4;
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();

    points.forEach((point) => {
      ctx.fillStyle = colors[ideaIndex];
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = colors[ideaIndex];
    ctx.font = "700 13px system-ui";
    ctx.fillText(idea.name, pad + 4, 24 + ideaIndex * 20);
  });
}

function update() {
  const inputs = getInputs();
  const ranked = trendData
    .map((idea) => ({ ...idea, score: scoreIdea(idea, inputs) }))
    .sort((a, b) => b.score - a.score);
  const averageScore = Math.round(ranked.slice(0, 3).reduce((sum, item) => sum + item.score, 0) / 3);
  state.ranked = ranked;

  renderIdeas(ranked);
  renderRecommendation(ranked[0], averageScore);
  drawChart(ranked);

  if (state.lastPrompt) {
    analyzePrompt(state.lastPrompt, ranked);
  }
}

elements.hours.addEventListener("input", () => {
  elements.hoursValue.textContent = `${elements.hours.value} hrs/week`;
});

elements.segments.forEach((button) => {
  button.addEventListener("click", () => {
    elements.segments.forEach((segment) => segment.classList.remove("active"));
    button.classList.add("active");
    state.risk = button.dataset.risk;
    update();
  });
});

[elements.budget, elements.skill, elements.hours, elements.region].forEach((control) => {
  control.addEventListener("input", update);
});

elements.generate.addEventListener("click", () => {
  update();
  if (state.lastPrompt) sendChat(state.lastPrompt, { echoUser: false });
});

function addMessage(role, text, options = {}) {
  const message = document.createElement("article");
  message.className = `message ${role === "user" ? "user-message" : "assistant-message"}${options.loading ? " loading-message" : ""}`;
  if (options.id) message.id = options.id;

  const label = document.createElement("strong");
  label.textContent = role === "user" ? "You" : "AI business coach";
  const body = document.createElement("p");
  body.textContent = text;

  message.append(label, body);
  elements.chatThread.append(message);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
  return message;
}

function showResults() {
  if (state.hasAsked) return;
  state.hasAsked = true;
  elements.resultsPanel.classList.remove("hidden");
  if (state.ranked.length) {
    renderIdeas(state.ranked);
    const averageScore = Math.round(state.ranked.slice(0, 3).reduce((sum, item) => sum + item.score, 0) / 3);
    renderRecommendation(state.ranked[0], averageScore);
  }
  if (state.liveTrends.length) renderLiveTrends(state.liveTrends, elements.trendSource.textContent || "Trend signals");
}

function fallbackReply(prompt, analysis) {
  return `${analysis.best.name} is the best fit I can recommend from the local trend model right now.\n\n${analysis.summary}\n\nTo make it real: sell one tiny version first, talk to 10 possible customers, and only build more after someone says yes.`;
}

async function askRealAi(prompt, analysis) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: prompt,
      context: {
        recommendation: analysis.best,
        trendSignals: state.liveTrends.slice(0, 6),
        preferences: getInputs()
      }
    })
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "AI request failed");
  return payload.reply;
}

async function sendChat(prompt, options = { echoUser: true }) {
  const cleanPrompt = prompt.trim();
  if (!cleanPrompt) return;

  state.lastPrompt = cleanPrompt;
  if (!state.ranked.length) update();
  showResults();
  const analysis = analyzePrompt(cleanPrompt, state.ranked);

  if (options.echoUser) addMessage("user", cleanPrompt);
  const loading = addMessage("assistant", "Thinking...", { id: "thinkingMessage", loading: true });
  elements.aiAskButton.disabled = true;
  elements.aiAskButton.textContent = "Sending";

  try {
    const reply = await askRealAi(cleanPrompt, analysis);
    loading.querySelector("p").textContent = reply;
  } catch (error) {
    loading.querySelector("p").textContent = `${fallbackReply(cleanPrompt, analysis)}\n\nReal AI is not connected yet. Set OPENAI_API_KEY on the server to enable live model replies.`;
  } finally {
    loading.classList.remove("loading-message");
    loading.removeAttribute("id");
    elements.aiAskButton.disabled = false;
    elements.aiAskButton.textContent = "Send";
  }
}

elements.aiSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  showResults();
  sendChat(elements.aiPrompt.value);
  elements.aiPrompt.value = "";
});

elements.aiAskButton.addEventListener("click", (event) => {
  event.preventDefault();
  elements.aiSearchForm.requestSubmit();
});

elements.aiPrompt.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    elements.aiSearchForm.requestSubmit();
  }
});

update();
loadLiveTrends();
