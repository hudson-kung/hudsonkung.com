const skins = {
  blaze: {
    className: "skin-blaze",
    name: "Blaze Bot",
    bio: "A fast answer streak specialist with molten confidence.",
    trait: "Speed +8",
    rarity: "Rare"
  },
  mint: {
    className: "skin-mint",
    name: "Mint Mage",
    bio: "A cool-headed point wizard that keeps calm in bonus rounds.",
    trait: "Focus +10",
    rarity: "Epic"
  },
  candy: {
    className: "skin-candy",
    name: "Candy Byte",
    bio: "Bright, chaotic, and suspiciously lucky on multiple choice.",
    trait: "Luck +6",
    rarity: "Uncommon"
  },
  shadow: {
    className: "skin-shadow",
    name: "Shadow Ace",
    bio: "A late-game leaderboard climber built for comeback rounds.",
    trait: "Clutch +12",
    rarity: "Legendary"
  },
  glitch: {
    className: "skin-glitch",
    name: "Glitch Pop",
    bio: "A scrambled answer machine that thrives in chaos rounds.",
    trait: "Chaos +9",
    rarity: "Epic"
  },
  solar: {
    className: "skin-solar",
    name: "Solar Crown",
    bio: "A blazing champion skin for players who like the spotlight.",
    trait: "Glow +12",
    rarity: "Legendary"
  },
  frost: {
    className: "skin-frost",
    name: "Frost Byte",
    bio: "A cool quiz specialist that freezes under pressure never.",
    trait: "Calm +7",
    rarity: "Rare"
  }
};

const showLogin = document.querySelector("#showLogin");
const showSignup = document.querySelector("#showSignup");
const showResetPassword = document.querySelector("#showResetPassword");
const cancelResetPassword = document.querySelector("#cancelResetPassword");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const resetPasswordForm = document.querySelector("#resetPasswordForm");
const loginName = document.querySelector("#loginName");
const loginPassword = document.querySelector("#loginPassword");
const signupName = document.querySelector("#signupName");
const signupPassword = document.querySelector("#signupPassword");
const resetName = document.querySelector("#resetName");
const resetPassword = document.querySelector("#resetPassword");
const guestMode = document.querySelector("#guestMode");
const authStatus = document.querySelector("#authStatus");
const logoutButton = document.querySelector("#logoutButton");
const navUserInitial = document.querySelector("#navUserInitial");
const navUserName = document.querySelector("#navUserName");
const roomCode = document.querySelector("#roomCode");
const playerName = document.querySelector("#playerName");
const previewCode = document.querySelector("#previewCode");
const joinStatus = document.querySelector("#joinStatus");
const joinForm = document.querySelector("#joinForm");
const randomCode = document.querySelector("#randomCode");
const playerIconButtons = document.querySelectorAll("[data-player-icon]");
const waitingAvatar = document.querySelector("#waitingAvatar");
const waitingName = document.querySelector("#waitingName");
const waitingRoom = document.querySelector("#waitingRoom");
const waitingMode = document.querySelector("#waitingMode");
const waitingCode = document.querySelector("#waitingCode");
const statAccuracy = document.querySelector("#statAccuracy");
const statStreak = document.querySelector("#statStreak");
const statRank = document.querySelector("#statRank");
const playerLobbyStatus = document.querySelector("#playerLobbyStatus");
const ownedSkinCount = document.querySelector("#ownedSkinCount");
const toast = document.querySelector("#toast");
const mainAvatar = document.querySelector("#mainAvatar");
const skinName = document.querySelector("#skinName");
const skinBio = document.querySelector("#skinBio");
const skinTrait = document.querySelector("#skinTrait");
const skinRarity = document.querySelector("#skinRarity");
const copyCode = document.querySelector("#copyCode");
const hostCode = document.querySelector("#hostCode");
const joinUrl = document.querySelector("#joinUrl");
const packCards = document.querySelectorAll("[data-pack]");
const packBox = document.querySelector("#packBox");
const packLabel = document.querySelector("#packLabel");
const packRewardAvatar = document.querySelector("#packRewardAvatar");
const packRewardRarity = document.querySelector("#packRewardRarity");
const packRewardName = document.querySelector("#packRewardName");
const packRewardText = document.querySelector("#packRewardText");
const openPack = document.querySelector("#openPack");
const setForm = document.querySelector("#setForm");
const setTitle = document.querySelector("#setTitle");
const setQuestion = document.querySelector("#setQuestion");
const setAnswers = document.querySelectorAll(".set-answer");
const setCorrectAnswers = document.querySelectorAll(".set-correct");
const questionTimeLimit = document.querySelector("#questionTimeLimit");
const questionRandomOrder = document.querySelector("#questionRandomOrder");
const questionType = document.querySelector("#questionType");
const setsView = document.querySelector("#sets");
const createSetToggle = document.querySelector("#createSetToggle");
const closeSetCreator = document.querySelector("#closeSetCreator");
const addQuestion = document.querySelector("#addQuestion");
const setStatus = document.querySelector("#setStatus");
const setCount = document.querySelector("#setCount");
const setQuestionPreview = document.querySelector("#setQuestionPreview");
const savedSets = document.querySelector("#savedSets");
const hostSetSelect = document.querySelector("#hostSetSelect");
const hostGameTime = document.querySelector("#hostGameTime");
const createRoom = document.querySelector("#createRoom");
const hostLobbyView = document.querySelector("#host-lobby");
const selectedModeLabel = document.querySelector("#selectedModeLabel");
const lobbyModeLabel = document.querySelector("#lobbyModeLabel");
const hostLobbyStatus = document.querySelector("#hostLobbyStatus");
const playerCount = document.querySelector("#playerCount");
const playerGrid = document.querySelector("#playerGrid");
const hostStatPlayers = document.querySelector("#hostStatPlayers");
const hostStatFinished = document.querySelector("#hostStatFinished");
const hostStatTopScore = document.querySelector("#hostStatTopScore");
const hostLeaderboard = document.querySelector("#hostLeaderboard");
const hostLogs = document.querySelector("#hostLogs");
const startGame = document.querySelector("#startGame");
const resetLobby = document.querySelector("#resetLobby");
const gameModeLabel = document.querySelector("#gameModeLabel");
const gameProgress = document.querySelector("#gameProgress");
const gameTimer = document.querySelector("#gameTimer");
const gameQuestion = document.querySelector("#gameQuestion");
const gameAnswers = document.querySelector("#gameAnswers");
const gameFeedback = document.querySelector("#gameFeedback");
const gameAvatar = document.querySelector("#gameAvatar");
const gameScore = document.querySelector("#gameScore");
const gameStreak = document.querySelector("#gameStreak");
const gameCorrect = document.querySelector("#gameCorrect");
const towerPanel = document.querySelector("#towerPanel");
const towerCoins = document.querySelector("#towerCoins");
const towerBase = document.querySelector("#towerBase");
const towerWave = document.querySelector("#towerWave");
const towerEnemy = document.querySelector("#towerEnemy");
const towerStatus = document.querySelector("#towerStatus");
const towerButtons = document.querySelectorAll("[data-tower]");
const adminAccountCount = document.querySelector("#adminAccountCount");
const adminAccountList = document.querySelector("#adminAccountList");
const globalMessageInput = document.querySelector("#globalMessageInput");
const sendGlobalMessage = document.querySelector("#sendGlobalMessage");
const clearGlobalMessage = document.querySelector("#clearGlobalMessage");
const globalMessagePreview = document.querySelector("#globalMessagePreview");
const globalMessage = document.querySelector("#globalMessage");
const settingsAvatar = document.querySelector("#settingsAvatar");
const settingsRole = document.querySelector("#settingsRole");
const settingsName = document.querySelector("#settingsName");
const settingsStatus = document.querySelector("#settingsStatus");
const settingsUsername = document.querySelector("#settingsUsername");
const settingsSkins = document.querySelector("#settingsSkins");
const settingsMode = document.querySelector("#settingsMode");
const settingsAdmin = document.querySelector("#settingsAdmin");
const settingsPasswordStatus = document.querySelector("#settingsPasswordStatus");
const settingsPasswordForm = document.querySelector("#settingsPasswordForm");
const currentPassword = document.querySelector("#currentPassword");
const newPassword = document.querySelector("#newPassword");
const togglePasswordVisibility = document.querySelector("#togglePasswordVisibility");
const settingsPasswordStatusText = document.querySelector("#settingsPasswordStatusText");
const settingsLogout = document.querySelector("#settingsLogout");
const settingsTabs = document.querySelectorAll("[data-settings-tab]");
const settingsPanels = document.querySelectorAll("[data-settings-panel]");
const compactUi = document.querySelector("#compactUi");
const reduceMotion = document.querySelector("#reduceMotion");
const playAgain = document.querySelector("#playAgain");
const viewLinks = document.querySelectorAll("[data-view-link]");
const views = document.querySelectorAll(".app-view");
const validViews = ["home", "join", "player-lobby", "skins", "packs", "sets", "host", "host-lobby", "game", "leaderboard", "settings", "admin"];
const guestViews = ["home", "join", "player-lobby", "game", "leaderboard", "settings"];
const modeNames = {
  classic: "Classic",
  speed: "Speed Run",
  team: "Teams",
  gold: "Gold Quest",
  tower: "Tower Defense"
};
const packNames = {
  starter: "Common Pack",
  mystic: "Rare Pack",
  legend: "Legendary Pack"
};
const packPools = {
  starter: [
    { skin: "blaze", odds: 2 },
    { skin: "candy", odds: 4 },
    { skin: "mint", odds: 8 },
    { skin: "frost", odds: 18 },
    { skin: "glitch", odds: 45 }
  ],
  mystic: [
    { skin: "candy", odds: 3 },
    { skin: "mint", odds: 6 },
    { skin: "frost", odds: 14 },
    { skin: "glitch", odds: 35 },
    { skin: "shadow", odds: 100 }
  ],
  legend: [
    { skin: "frost", odds: 8 },
    { skin: "glitch", odds: 25 },
    { skin: "shadow", odds: 85 },
    { skin: "solar", odds: 250 }
  ]
};
const quizQuestions = {
  classic: [
    { question: "Which planet has the most moons?", answers: ["Saturn", "Jupiter", "Neptune", "Mars"], correct: 0 },
    { question: "What does HTML stand for?", answers: ["HyperText Markup Language", "High Tech Modern Logic", "Home Tool Markup Link", "Hyperlink Text Machine"], correct: 0 },
    { question: "Which ocean is the largest?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2 },
    { question: "What is 12 x 8?", answers: ["88", "96", "104", "108"], correct: 1 },
    { question: "Which gas do plants absorb?", answers: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"], correct: 1 }
  ],
  speed: [
    { question: "Fast math: 9 + 14?", answers: ["21", "22", "23", "24"], correct: 2 },
    { question: "Which is a primary color?", answers: ["Green", "Purple", "Red", "Orange"], correct: 2 },
    { question: "How many sides does a hexagon have?", answers: ["5", "6", "7", "8"], correct: 1 },
    { question: "Which animal is known as man's best friend?", answers: ["Dog", "Cat", "Horse", "Rabbit"], correct: 0 },
    { question: "What freezes at 32°F?", answers: ["Milk", "Water", "Oil", "Juice"], correct: 1 }
  ],
  team: [
    { question: "Which word means working together?", answers: ["Solo", "Teamwork", "Random", "Silent"], correct: 1 },
    { question: "Best tool for a team plan?", answers: ["Map", "Helmet", "Fork", "Pillow"], correct: 0 },
    { question: "What keeps a team in sync?", answers: ["Communication", "Guessing", "Hiding", "Pausing"], correct: 0 },
    { question: "A shared goal is called a...", answers: ["Mission", "Mistake", "Secret", "Shortcut"], correct: 0 },
    { question: "Which role tracks points?", answers: ["Scorekeeper", "Painter", "Driver", "Chef"], correct: 0 }
  ],
  gold: [
    { question: "In Gold Quest, what should you protect?", answers: ["Coins", "Clouds", "Sand", "Shadows"], correct: 0 },
    { question: "Which choice is a risk?", answers: ["Bank points", "Spend all coins", "Read question", "Answer carefully"], correct: 1 },
    { question: "What helps a comeback?", answers: ["Boost", "Quit", "Skip every round", "Lose coins"], correct: 0 },
    { question: "Which is worth more?", answers: ["10", "50", "25", "5"], correct: 1 },
    { question: "A treasure chest usually holds...", answers: ["Rewards", "Homework", "Rain", "Passwords"], correct: 0 }
  ],
  tower: [
    { question: "What resource buys towers?", answers: ["Coins", "Smoke", "Clouds", "Keys"], correct: 0 },
    { question: "What should towers protect?", answers: ["The base", "The enemy", "The shop", "The timer"], correct: 0 },
    { question: "Which tower sounds strongest?", answers: ["Cannon", "Leaf", "Blanket", "Bubble"], correct: 0 },
    { question: "What happens when an enemy reaches the base?", answers: ["Base loses HP", "Coins double", "Timer stops", "All towers sell"], correct: 0 },
    { question: "Best strategy after earning coins?", answers: ["Buy towers", "Ignore waves", "Skip answers", "Close shop"], correct: 0 }
  ]
};

let toastTimeout;
let globalMessagePoller;
let uiSettings = JSON.parse(window.localStorage.getItem("polymath-ui-settings") || "{\"compact\":false,\"reduceMotion\":false}");
let selectedMode = "classic";
let selectedPack = "starter";
let packOpening = false;
let draftQuestions = [];
let activeUser = JSON.parse(window.localStorage.getItem("quizrush-active-user") || "null");
let questionSets = JSON.parse(window.localStorage.getItem("quizrush-question-sets") || "[]");
let selectedPlayerIcon = window.localStorage.getItem("quizrush-player-icon") || "blaze";
let ownedSkins = JSON.parse(window.localStorage.getItem("quizrush-owned-skins") || "[\"blaze\"]");
if (!ownedSkins.includes(selectedPlayerIcon)) {
  selectedPlayerIcon = ownedSkins[0] || "blaze";
}
let joinedPlayers = [];
let currentRoomCode = cleanCode(hostCode.textContent);
let currentPlayerName = "";
let playerRoomCode = "";
let roomStream = null;
let roomPoller = null;
let gameState = {
  mode: "classic",
  index: 0,
  score: 0,
  streak: 0,
  correct: 0,
  answered: 0,
  locked: false,
  timer: null,
  seconds: 15,
  questionDuration: 15,
  gameTime: 120,
  remainingGameTime: 120,
  tower: null,
  submitted: false,
  questions: null
};

function canUseServer() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

function canUseEventStream() {
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
}

function roomJoinLink(code) {
  return `${window.location.origin}${window.location.pathname}?room=${code}#join`;
}

function cleanCode(value) {
  return value.replace(/\D/g, "").slice(0, 6);
}

function formatCode(value) {
  const digits = cleanCode(value);
  return digits.length > 3 ? `${digits.slice(0, 3)} ${digits.slice(3)}` : digits;
}

function showToast(message) {
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function getUsers() {
  return JSON.parse(window.localStorage.getItem("quizrush-users") || "[]");
}

function saveUsers(users) {
  window.localStorage.setItem("quizrush-users", JSON.stringify(users));
}

function isAdminUser() {
  return activeUser?.name?.trim().toLowerCase() === "hudson kung" && !activeUser.guest;
}

function setAuthMode(mode) {
  const isSignup = mode === "signup";
  const isReset = mode === "reset";
  showLogin.classList.toggle("active", !isSignup && !isReset);
  showSignup.classList.toggle("active", isSignup);
  loginForm.classList.toggle("active", !isSignup && !isReset);
  signupForm.classList.toggle("active", isSignup);
  resetPasswordForm.classList.toggle("active", isReset);
  authStatus.textContent = isReset
    ? "Reset your password for an account on this browser."
    : isSignup
      ? "Make your Polymath account."
      : "Log in to keep playing.";
  authStatus.classList.remove("ready");
}

function applyAuthState() {
  document.body.classList.toggle("signed-in", Boolean(activeUser));
  document.body.classList.toggle("guest-session", activeUser?.guest === true);
  document.body.classList.toggle("admin-session", isAdminUser());

  if (!activeUser) return;

  const name = activeUser.name || "Player";
  navUserName.textContent = name;
  navUserInitial.textContent = name.slice(0, 1).toUpperCase();
  logoutButton.title = activeUser.guest ? "Leave guest mode" : "Log out";
  playerName.value = playerName.value || name;
  renderAdminPanel();
  renderSettings();
}

function signInUser(user) {
  activeUser = {
    name: user.name,
    guest: false,
    signedInAt: Date.now()
  };
  window.localStorage.setItem("quizrush-active-user", JSON.stringify(activeUser));
  applyAuthState();
  showView("home", false);
  showToast(`Welcome, ${activeUser.name}`);
}

function startGuestSession() {
  activeUser = {
    name: "Guest",
    guest: true,
    signedInAt: Date.now()
  };
  currentPlayerName = "";
  playerRoomCode = "";
  playerName.value = "";
  applyAuthState();
  showView("join", false);
  showToast("Guest mode: join games without an account.");
}

function canOpenView(viewId) {
  if (viewId === "admin") return isAdminUser();
  return !activeUser?.guest || guestViews.includes(viewId);
}

function renderAdminPanel() {
  if (!adminAccountList || !adminAccountCount) return;

  const users = getUsers();
  adminAccountCount.textContent = `${users.length} account${users.length === 1 ? "" : "s"}`;
  adminAccountList.innerHTML = users.length
    ? users.map((user, index) => {
        const safeName = escapeHtml(user.name || "Unnamed");
        const created = user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Unknown";
        const isCurrent = activeUser?.name?.toLowerCase() === String(user.name || "").toLowerCase();
        return `
          <div class="admin-account-row">
            <div>
              <strong>${safeName}</strong>
              <span>Created: ${escapeHtml(created)}</span>
            </div>
            <div class="admin-actions">
              <button class="button ghost" type="button" data-delete-account="${index}" ${isCurrent ? "disabled" : ""}>Delete</button>
            </div>
          </div>
        `;
      }).join("")
    : `<div class="empty-lobby"><strong>No accounts yet</strong><span>Created accounts on this browser will appear here.</span></div>`;
}

function renderGlobalMessage(message = window.localStorage.getItem("polymath-global-message") || "") {
  globalMessage.classList.toggle("show", Boolean(message));
  globalMessage.textContent = message;
  if (globalMessagePreview) {
    globalMessagePreview.textContent = message ? `Active message: ${message}` : "No global message is active.";
  }
}

async function refreshGlobalMessage() {
  if (!canUseServer()) {
    renderGlobalMessage();
    return;
  }

  try {
    const response = await fetch("/api/global-message", { cache: "no-store" });
    if (!response.ok) throw new Error("Global message unavailable");
    const data = await response.json();
    window.localStorage.setItem("polymath-global-message", data.message || "");
    renderGlobalMessage(data.message || "");
  } catch {
    renderGlobalMessage();
  }
}

function renderSettings() {
  if (!settingsName) return;

  const name = activeUser?.name || "Player";
  const isGuest = activeUser?.guest === true;
  settingsAvatar.className = `avatar large ${skins[selectedPlayerIcon]?.className || skins.blaze.className}`;
  settingsRole.textContent = isAdminUser() ? "Admin" : isGuest ? "Guest" : "Player";
  settingsName.textContent = name;
  settingsStatus.textContent = isGuest
    ? "Guest mode can join games without an account."
    : "Signed in and ready to play.";
  settingsUsername.textContent = name;
  settingsSkins.textContent = String(ownedSkins.length);
  settingsMode.textContent = isGuest ? "Guest" : "Account";
  settingsAdmin.textContent = isAdminUser() ? "Yes" : "No";
  settingsPasswordStatus.textContent = isGuest ? "None" : "Hidden";
  settingsPasswordForm.classList.toggle("disabled", isGuest);
  settingsPasswordForm.querySelectorAll("input, button").forEach((element) => {
    element.disabled = isGuest;
  });
}

function applyUiSettings() {
  document.body.classList.toggle("compact-ui", Boolean(uiSettings.compact));
  document.body.classList.toggle("reduced-motion", Boolean(uiSettings.reduceMotion));
  if (compactUi) compactUi.checked = Boolean(uiSettings.compact);
  if (reduceMotion) reduceMotion.checked = Boolean(uiSettings.reduceMotion);
}

function saveUiSettings() {
  window.localStorage.setItem("polymath-ui-settings", JSON.stringify(uiSettings));
  applyUiSettings();
}

function setSettingsTab(tab) {
  settingsTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsTab === tab);
  });
  settingsPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.settingsPanel === tab);
  });
}

function normalizeUsername(value) {
  return value.trim().replace(/\s+/g, " ").slice(0, 18);
}

function updateJoinState() {
  const digits = cleanCode(roomCode.value);
  roomCode.value = formatCode(roomCode.value);
  previewCode.textContent = digits.length ? formatCode(digits).padEnd(7, "-") : "------";

  if (digits.length === 6) {
    joinStatus.textContent = "Room found. Ready to enter the lobby.";
    joinStatus.classList.add("ready");
    return;
  }

  joinStatus.textContent = `${6 - digits.length} more digit${6 - digits.length === 1 ? "" : "s"} needed.`;
  joinStatus.classList.remove("ready");
}

function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function selectSkin(skinId, notify = true) {
  const skin = skins[skinId];
  if (!skin) return;

  mainAvatar.className = `avatar large ${skin.className}`;
  skinName.textContent = skin.name;
  skinBio.textContent = skin.bio;
  skinTrait.textContent = skin.trait;
  skinRarity.textContent = skin.rarity;

  document.querySelectorAll(".skin-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.skin === skinId);
  });

  window.localStorage.setItem("quizrush-skin", skinId);
  if (notify) {
    showToast(`${skin.name} equipped`);
  }
}

function selectPlayerIcon(iconId, notify = true) {
  if (!skins[iconId] || !ownedSkins.includes(iconId)) return;

  selectedPlayerIcon = iconId;
  window.localStorage.setItem("quizrush-player-icon", iconId);
  document.querySelectorAll("[data-player-icon]").forEach((button) => {
    button.classList.toggle("active", button.dataset.playerIcon === iconId);
  });

  if (waitingAvatar) {
    waitingAvatar.className = `avatar large ${skins[iconId].className}`;
  }

  if (notify) {
    showToast(`${skins[iconId].name} selected`);
  }
}

function saveOwnedSkins() {
  window.localStorage.setItem("quizrush-owned-skins", JSON.stringify(ownedSkins));
}

function unlockSkin(skinId) {
  if (!ownedSkins.includes(skinId)) {
    ownedSkins.push(skinId);
    saveOwnedSkins();
  }
}

function saveQuestionSets() {
  window.localStorage.setItem("quizrush-question-sets", JSON.stringify(questionSets));
}

function normalizeQuestion(question, answers, correctInputs) {
  const cleanQuestion = question.trim();
  const type = questionType.value === "true-false" ? "true-false" : "multiple-choice";
  const answerLimit = type === "true-false" ? 2 : 4;
  const answerPairs = [...answers].slice(0, answerLimit).map((answer, index) => ({
    text: answer.value.trim(),
    originalIndex: index
  })).filter((answer) => answer.text);
  const cleanAnswers = answerPairs.map((answer) => answer.text);
  if (!cleanQuestion || cleanAnswers.length < 2) return null;

  const correctIndexes = answerPairs
    .map((answer, newIndex) => correctInputs[answer.originalIndex]?.checked ? newIndex : -1)
    .filter((index) => index >= 0);

  return {
    question: cleanQuestion,
    answers: cleanAnswers,
    correct: correctIndexes[0] ?? 0,
    correctAnswers: correctIndexes.length ? correctIndexes : [0],
    timeLimit: Math.max(5, Math.min(120, Number(questionTimeLimit.value) || 20)),
    randomOrder: questionRandomOrder.checked,
    type
  };
}

function syncQuestionTypeFields() {
  const isTrueFalse = questionType.value === "true-false";
  setAnswers.forEach((answer, index) => {
    answer.disabled = isTrueFalse && index > 1;
    setCorrectAnswers[index].disabled = isTrueFalse && index > 1;

    if (isTrueFalse) {
      if (index === 0 && !answer.value.trim()) answer.value = "True";
      if (index === 1 && !answer.value.trim()) answer.value = "False";
      if (index > 1) {
        answer.value = "";
        setCorrectAnswers[index].checked = false;
      }
    }
  });

  if (!Array.from(setCorrectAnswers).some((answer) => answer.checked && !answer.disabled)) {
    setCorrectAnswers[0].checked = true;
  }
}

function renderDraftQuestions() {
  if (draftQuestions.length === 0) {
    setQuestionPreview.innerHTML = `
      <div class="empty-lobby">
        <strong>No draft questions</strong>
        <span>Add questions on the left, then save the set.</span>
      </div>
    `;
    return;
  }

  setQuestionPreview.innerHTML = draftQuestions.map((item, index) => `
    <div class="question-preview-row">
      <strong>${index + 1}. ${escapeHtml(item.question)}</strong>
      <span>${item.type === "true-false" ? "True / False" : "Multiple Choice"} | Correct: ${(item.correctAnswers || [item.correct]).map((answerIndex) => escapeHtml(item.answers[answerIndex])).join(", ")} | ${item.timeLimit || 20}s</span>
    </div>
  `).join("");
}

function renderQuestionSets() {
  setCount.textContent = `${questionSets.length} set${questionSets.length === 1 ? "" : "s"}`;
  savedSets.innerHTML = questionSets.length
    ? questionSets.map((set, index) => `
        <div class="saved-set-row">
          <div>
            <strong>${escapeHtml(set.title)}</strong>
            <span>${set.questions.length} question${set.questions.length === 1 ? "" : "s"}</span>
          </div>
          <button class="button ghost" type="button" data-delete-set="${index}">Delete</button>
        </div>
      `).join("")
    : `<div class="empty-lobby"><strong>No saved sets</strong><span>Create one to use it while hosting.</span></div>`;

  hostSetSelect.innerHTML = `
    <option value="">Built-in ${modeNames[selectedMode]}</option>
    ${questionSets.map((set, index) => `<option value="${index}">${escapeHtml(set.title)}</option>`).join("")}
  `;

  document.querySelectorAll("[data-delete-set]").forEach((button) => {
    button.addEventListener("click", () => {
      questionSets.splice(Number(button.dataset.deleteSet), 1);
      saveQuestionSets();
      renderQuestionSets();
      showToast("Question set deleted");
    });
  });
}

function selectedQuestionSet() {
  const index = hostSetSelect.value;
  return index === "" ? null : questionSets[Number(index)];
}

function selectedHostGameTime() {
  return Math.max(60, Math.min(600, Number(hostGameTime.value) || 120));
}

function choosePackReward(packId) {
  const pool = packPools[packId];
  const weighted = pool.map((entry) => ({
    ...entry,
    weight: 1 / entry.odds
  }));
  const totalWeight = weighted.reduce((total, entry) => total + entry.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const entry of weighted) {
    roll -= entry.weight;
    if (roll <= 0) return entry;
  }

  return weighted[weighted.length - 1];
}

function showPackFlash(entry) {
  const skin = skins[entry.skin];
  packRewardAvatar.className = `avatar large ${skin.className}`;
  packRewardRarity.textContent = `${skin.rarity} | 1 in ${entry.odds}`;
  packRewardName.textContent = `${skin.name}: 1 in ${entry.odds}`;
  packRewardText.textContent = "Rolling...";
}

function renderSkinCollections() {
  const skinGrid = document.querySelector("#skinGrid");
  const iconGrid = document.querySelector(".join-icon-grid");
  ownedSkinCount.textContent = String(ownedSkins.length);
  skinGrid.innerHTML = ownedSkins.map((skinId) => {
    const skin = skins[skinId];
    return `
      <button class="skin-card${skinId === window.localStorage.getItem("quizrush-skin") ? " active" : ""}" type="button" data-skin="${skinId}">
        <span class="avatar ${skin.className}"></span>
        <strong>${skin.name}</strong>
        <small>${skin.rarity}</small>
      </button>
    `;
  }).join("");

  iconGrid.innerHTML = ownedSkins.map((skinId) => {
    const skin = skins[skinId];
    return `
      <button class="join-icon${skinId === selectedPlayerIcon ? " active" : ""}" type="button" data-player-icon="${skinId}" aria-label="${skin.name} icon">
        <span class="avatar ${skin.className}"></span>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".skin-card").forEach((card) => {
    card.addEventListener("click", () => selectSkin(card.dataset.skin));
  });

  document.querySelectorAll("[data-player-icon]").forEach((button) => {
    button.addEventListener("click", () => selectPlayerIcon(button.dataset.playerIcon));
  });
}

function showView(viewId, updateHash = true) {
  const nextView = validViews.includes(viewId) ? viewId : "home";
  const leavingGame = !["game"].includes(nextView) && document.querySelector("#game").classList.contains("active");

  if (leavingGame) {
    window.clearInterval(gameState.timer);
  }

  views.forEach((view) => {
    view.classList.toggle("active", view.id === nextView);
  });

  viewLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === nextView);
  });

  if (updateHash) {
    window.history.replaceState(null, "", `#${nextView}`);
  }

  if (nextView === "admin") {
    renderAdminPanel();
    renderGlobalMessage();
  }

  if (nextView === "settings") {
    renderSettings();
  }

  if (nextView === "host-lobby" && currentRoomCode) {
    watchRoom(currentRoomCode);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function renderPlayers() {
  if (joinedPlayers.length === 0) {
    playerGrid.innerHTML = `
      <div class="empty-lobby">
        <strong>No players yet</strong>
        <span>Players will appear here after they enter this room code on the Join page.</span>
      </div>
    `;
    playerCount.textContent = "0 players";
    hostLobbyStatus.textContent = "Waiting for players...";
    return;
  }

  playerGrid.innerHTML = joinedPlayers.map((name, index) => {
    const colors = ["#ff5c5c", "#37a2ff", "#28d6a3", "#7467f0", "#ff8a3d", "#2ecb70"];
    const playerName = typeof name === "string" ? name : name.name;
    const playerIcon = typeof name === "string" ? null : name.icon;
    const safeName = escapeHtml(playerName);
    const iconClass = skins[playerIcon] ? skins[playerIcon].className : "";
    return `
      <div class="player-tile">
        <span class="player-token ${iconClass}" style="${iconClass ? "" : `background: ${colors[index % colors.length]}`}">${safeName.slice(0, 1).toUpperCase()}</span>
        <div>
          <strong>${safeName}</strong>
          <span>Ready in lobby</span>
        </div>
      </div>
    `;
  }).join("");

  playerCount.textContent = `${joinedPlayers.length} player${joinedPlayers.length === 1 ? "" : "s"}`;
  hostLobbyStatus.textContent = joinedPlayers.length > 0 ? "Waiting for host to start..." : "Waiting for players...";
}

function setSetCreatorOpen(open) {
  setsView.classList.toggle("creating", Boolean(open));
  createSetToggle.textContent = "Create set";
}

function setHostGameStarted(started) {
  hostLobbyView.classList.toggle("game-started", Boolean(started));
}

function renderHostMonitor(room = {}) {
  const scores = room.scores || [];
  const logs = room.logs || [];
  hostStatPlayers.textContent = String((room.players || []).length);
  hostStatFinished.textContent = String(scores.length);
  hostStatTopScore.textContent = String(scores[0]?.score || 0);

  if (scores.length === 0) {
    hostLeaderboard.innerHTML = `
      <div class="empty-lobby">
        <strong>No scores yet</strong>
        <span>Player scores will appear here when they finish the game.</span>
      </div>
    `;
  } else {
    hostLeaderboard.innerHTML = scores.map((entry, index) => `
      <div class="score-row">
        <span class="score-rank">#${index + 1}</span>
        <div>
          <strong>${escapeHtml(entry.name)}</strong>
          <span>${entry.correct}/${entry.total} correct</span>
        </div>
        <em>${entry.score}</em>
      </div>
    `).join("");
  }

  hostLogs.innerHTML = logs.length
    ? logs.map((log) => `
        <p>
          <strong>${escapeHtml(log.time)}</strong>
          <span>${escapeHtml(log.message)}</span>
        </p>
      `).join("")
    : `<p><strong>Ready</strong><span>Game activity will show up here.</span></p>`;
}

function makePlayerStats(name) {
  const scoreSeed = [...name].reduce((total, character) => total + character.charCodeAt(0), 0);
  const accuracy = 72 + (scoreSeed % 24);
  const streak = 3 + (scoreSeed % 9);
  const ranks = ["Rookie", "Sharp", "Quick", "Brainy", "Elite"];
  return {
    accuracy: `${accuracy}%`,
    streak: String(streak),
    rank: ranks[scoreSeed % ranks.length]
  };
}

function showPlayerLobby(room, name) {
  currentPlayerName = name;
  currentRoomCode = cleanCode(room.code);
  playerRoomCode = currentRoomCode;
  const stats = makePlayerStats(name);
  waitingName.textContent = name;
  waitingRoom.textContent = room.started
    ? "The game is starting now."
    : "You are in. Hang tight until the host starts the game.";
  waitingMode.textContent = `Set: ${room.questionSetTitle || modeNames[room.mode] || "Classic"}`;
  waitingCode.textContent = `Code: ${formatCode(room.code)}`;
  statAccuracy.textContent = stats.accuracy;
  statStreak.textContent = stats.streak;
  statRank.textContent = stats.rank;
  playerLobbyStatus.textContent = room.started ? "Game started" : "Waiting for host...";
  selectPlayerIcon(selectedPlayerIcon, false);
  watchRoom(currentRoomCode);
  showView("player-lobby");
}

function addPlayer(name) {
  const cleanName = name.trim() || "Player";
  const alreadyJoined = joinedPlayers.some((player) => {
    const playerName = typeof player === "string" ? player : player.name;
    return playerName.toLowerCase() === cleanName.toLowerCase();
  });

  if (!alreadyJoined) {
    joinedPlayers.push(cleanName);
  }
  renderPlayers();
}

function applyRoom(room) {
  currentRoomCode = cleanCode(room.code);
  hostCode.textContent = formatCode(currentRoomCode);
  joinUrl.textContent = `Join link: ${roomJoinLink(currentRoomCode)}`;
  joinedPlayers = room.players || [];
  window.localStorage.setItem("quizrush-active-room", currentRoomCode);
  lobbyModeLabel.textContent = modeNames[room.mode] || modeNames[selectedMode];
  setHostGameStarted(room.started);
  renderPlayers();
  renderHostMonitor(room);
  hostLobbyStatus.textContent = room.started
    ? `Game started with ${joinedPlayers.length} players.`
    : joinedPlayers.length > 0
      ? "Waiting for host to start..."
      : "Waiting for players...";

  if (currentPlayerName && playerRoomCode && cleanCode(room.code) === playerRoomCode) {
    waitingRoom.textContent = room.started
      ? "The host started the game. Get ready."
      : "You are in. Hang tight until the host starts the game.";
    playerLobbyStatus.textContent = room.started ? "Game started" : "Waiting for host...";
    if (room.started && !document.querySelector("#game").classList.contains("active")) {
      startQuiz(room.mode, room.questions, room.questionSetTitle, room.gameTime);
    }
  }
}

function currentQuestions() {
  return gameState.questions?.length ? gameState.questions : (quizQuestions[gameState.mode] || quizQuestions.classic);
}

function makeTowerState() {
  return {
    coins: 25,
    baseHp: 10,
    wave: 1,
    enemyHp: 70,
    enemyMaxHp: 70,
    towers: {
      bolt: 0,
      cannon: 0
    }
  };
}

function renderTowerDefense() {
  const active = gameState.mode === "tower";
  towerPanel.classList.toggle("active", active);
  if (!active || !gameState.tower) return;

  const tower = gameState.tower;
  towerCoins.textContent = String(tower.coins);
  towerBase.textContent = String(tower.baseHp);
  towerWave.textContent = String(tower.wave);
  towerEnemy.textContent = `HP ${tower.enemyHp}/${tower.enemyMaxHp}`;
  towerEnemy.style.left = `${Math.max(8, 82 - (tower.enemyHp / tower.enemyMaxHp) * 64)}%`;
  towerButtons.forEach((button) => {
    const cost = button.dataset.tower === "bolt" ? 40 : 75;
    const count = tower.towers[button.dataset.tower] || 0;
    button.disabled = tower.coins < cost || tower.baseHp <= 0;
    button.textContent = `${button.dataset.tower === "bolt" ? "Bolt tower" : "Cannon tower"} - ${cost} (${count})`;
  });
}

function runTowerDefenseTurn(wasCorrect) {
  if (gameState.mode !== "tower" || !gameState.tower) return;

  const tower = gameState.tower;
  if (wasCorrect) {
    tower.coins += 35 + (gameState.streak * 5);
  } else {
    tower.baseHp -= 1;
  }

  const damage = (tower.towers.bolt * 18) + (tower.towers.cannon * 42);
  tower.enemyHp -= damage;

  if (tower.enemyHp <= 0) {
    tower.wave += 1;
    tower.coins += 25;
    tower.enemyMaxHp = 70 + (tower.wave * 28);
    tower.enemyHp = tower.enemyMaxHp;
    towerStatus.textContent = `Wave cleared. +25 coins. Wave ${tower.wave} incoming.`;
  } else if (damage > 0) {
    towerStatus.textContent = `Towers dealt ${damage} damage.`;
  } else {
    towerStatus.textContent = wasCorrect ? "Coins earned. Buy a tower." : "Enemy hit your base.";
  }

  if (tower.baseHp <= 0) {
    tower.baseHp = 0;
    gameState.remainingGameTime = 0;
    towerStatus.textContent = "Base destroyed.";
  }

  renderTowerDefense();
}

function buyTower(type) {
  if (gameState.mode !== "tower" || !gameState.tower) return;
  const cost = type === "bolt" ? 40 : 75;
  if (gameState.tower.coins < cost) {
    showToast("Not enough coins yet.");
    return;
  }

  gameState.tower.coins -= cost;
  gameState.tower.towers[type] += 1;
  towerStatus.textContent = `${type === "bolt" ? "Bolt" : "Cannon"} tower placed.`;
  renderTowerDefense();
}

function shuffleAnswers(question) {
  const correctAnswers = question.correctAnswers || [question.correct ?? 0];
  const paired = question.answers.map((answer, index) => ({
    answer,
    wasCorrect: correctAnswers.includes(index)
  }));

  if (question.randomOrder) {
    for (let index = paired.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [paired[index], paired[swapIndex]] = [paired[swapIndex], paired[index]];
    }
  }

  return paired;
}

function formatClock(totalSeconds) {
  const seconds = Math.max(0, Number(totalSeconds) || 0);
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
}

function endGame(reason = "Game complete") {
  window.clearInterval(gameState.timer);
  gameQuestion.textContent = reason;
  gameProgress.textContent = "Results";
  gameTimer.textContent = "0";
  gameAnswers.innerHTML = "";
  gameFeedback.textContent = `Final score: ${gameState.score}. You got ${gameState.correct} of ${gameState.answered} correct.`;
  updateGameStats();
  submitGameScore();
}

function startQuiz(mode = selectedMode, questions = null, title = "", gameTime = 120) {
  const totalGameTime = Math.max(60, Math.min(600, Number(gameTime) || 120));
  gameState = {
    mode,
    index: 0,
    score: 0,
    streak: 0,
    correct: 0,
    answered: 0,
    locked: false,
    timer: null,
    seconds: 15,
    questionDuration: 15,
    gameTime: totalGameTime,
    remainingGameTime: totalGameTime,
    tower: mode === "tower" ? makeTowerState() : null,
    submitted: false,
    questions: Array.isArray(questions) && questions.length ? questions : null
  };
  gameModeLabel.textContent = title || modeNames[mode] || "Classic";
  gameAvatar.className = `avatar large ${skins[selectedPlayerIcon]?.className || skins.blaze.className}`;
  renderTowerDefense();
  showView("game");
  renderQuestion();
}

function renderQuestion() {
  window.clearInterval(gameState.timer);
  const questions = currentQuestions();

  if (gameState.remainingGameTime <= 0) {
    endGame("Time is up");
    return;
  }

  const question = questions[gameState.index % questions.length];
  gameState.locked = false;
  gameState.questionDuration = Math.min(15, gameState.remainingGameTime);
  gameState.seconds = gameState.questionDuration;
  gameState.answerMap = shuffleAnswers(question);
  gameProgress.textContent = `Question ${gameState.answered + 1} | Game ${formatClock(gameState.remainingGameTime)}`;
  gameQuestion.textContent = question.question;
  gameTimer.textContent = String(gameState.seconds);
  gameFeedback.textContent = "Pick the best answer before time runs out.";
  gameAnswers.innerHTML = gameState.answerMap.map((item, index) => (
    `<button type="button" data-answer="${index}">${item.answer}</button>`
  )).join("");
  gameAnswers.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer)));
  });
  updateGameStats();
  gameState.timer = window.setInterval(() => {
    gameState.seconds -= 1;
    gameState.remainingGameTime -= 1;
    gameTimer.textContent = String(gameState.seconds);
    gameProgress.textContent = `Question ${gameState.answered + 1} | Game ${formatClock(gameState.remainingGameTime)}`;
    if (gameState.remainingGameTime <= 0) {
      answerQuestion(-1);
      return;
    }
    if (gameState.seconds <= 0) {
      answerQuestion(-1);
    }
  }, 1000);
}

function answerQuestion(answerIndex) {
  if (gameState.locked) return;
  gameState.locked = true;
  window.clearInterval(gameState.timer);

  const questions = currentQuestions();
  const question = questions[gameState.index % questions.length];
  const answerMap = gameState.answerMap || shuffleAnswers(question);
  const isCorrect = answerIndex >= 0 && answerMap[answerIndex]?.wasCorrect;
  const buttons = gameAnswers.querySelectorAll("button");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (answerMap[index]?.wasCorrect) button.classList.add("correct");
    if (index === answerIndex && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    gameState.streak += 1;
    gameState.correct += 1;
    const speedRatio = gameState.questionDuration ? gameState.seconds / gameState.questionDuration : 0;
    const speedPoints = Math.round(500 * speedRatio);
    const streakBonus = Math.min(gameState.streak * 50, 250);
    const earnedPoints = 500 + speedPoints + streakBonus;
    gameState.score += earnedPoints;
    gameFeedback.textContent = `Correct. +${earnedPoints} points. Streak x${gameState.streak}.`;
  } else {
    gameState.streak = 0;
    gameFeedback.textContent = answerIndex === -1
      ? `Time up. Correct: ${answerMap.filter((item) => item.wasCorrect).map((item) => item.answer).join(", ")}.`
      : `Not quite. Correct: ${answerMap.filter((item) => item.wasCorrect).map((item) => item.answer).join(", ")}.`;
  }

  runTowerDefenseTurn(isCorrect);
  gameState.answered += 1;
  updateGameStats();
  window.setTimeout(() => {
    if (gameState.remainingGameTime <= 0) {
      endGame(gameState.tower?.baseHp === 0 ? "Base destroyed" : "Time is up");
      return;
    }
    gameState.index += 1;
    renderQuestion();
  }, 1300);
}

function updateGameStats() {
  gameScore.textContent = String(gameState.score);
  gameStreak.textContent = String(gameState.streak);
  gameCorrect.textContent = String(gameState.correct);
}

async function submitGameScore() {
  if (gameState.submitted || !canUseServer() || !currentRoomCode || !currentPlayerName) return;

  gameState.submitted = true;
  try {
    await fetch(`/api/rooms/${currentRoomCode}/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: currentPlayerName,
        score: gameState.score,
        correct: gameState.correct,
        total: gameState.answered
      })
    });
  } catch {
    showToast("Could not submit score to host.");
  }
}

async function refreshRoom(code) {
  if (!canUseServer() || !code) return;

  try {
    const response = await fetch(`/api/rooms/${code}`, { cache: "no-store" });
    if (response.ok) {
      applyRoom(await response.json());
    }
  } catch {
    hostLobbyStatus.textContent = "Trying to reconnect to lobby...";
  }
}

function watchRoom(code) {
  if (!canUseServer()) return;
  if (roomStream) {
    roomStream.close();
  }
  if (roomPoller) {
    window.clearInterval(roomPoller);
  }

  refreshRoom(code);
  roomPoller = window.setInterval(() => refreshRoom(code), 1000);

  if (!window.EventSource || !canUseEventStream()) return;

  roomStream = new EventSource(`/api/rooms/${code}/events`);
  roomStream.onmessage = (event) => applyRoom(JSON.parse(event.data));
  roomStream.onerror = () => {
    hostLobbyStatus.textContent = "Trying to reconnect to lobby...";
  };
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!activeUser) {
      setAuthMode("login");
      return;
    }
    if (!canOpenView(link.dataset.viewLink)) {
      showToast(link.dataset.viewLink === "admin" ? "Hudson Kung admin only." : "Sign in to use skins, packs, sets, or hosting.");
      return;
    }
    showView(link.dataset.viewLink);
  });
});

window.addEventListener("hashchange", () => {
  if (!activeUser) return;
  const hashView = window.location.hash.replace("#", "");
  showView(canOpenView(hashView) ? hashView : "join", false);
});

showLogin.addEventListener("click", () => setAuthMode("login"));
showSignup.addEventListener("click", () => setAuthMode("signup"));
showResetPassword.addEventListener("click", () => {
  resetName.value = loginName.value;
  resetPassword.value = "";
  setAuthMode("reset");
});
cancelResetPassword.addEventListener("click", () => setAuthMode("login"));

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = normalizeUsername(loginName.value);
  const password = loginPassword.value;
  const user = getUsers().find((savedUser) => savedUser.name.toLowerCase() === name.toLowerCase());

  if (!user || user.password !== password) {
    authStatus.textContent = "That username or password is wrong.";
    authStatus.classList.remove("ready");
    return;
  }

  authStatus.textContent = "Logged in.";
  authStatus.classList.add("ready");
  signInUser(user);
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = normalizeUsername(signupName.value);
  const password = signupPassword.value;
  const users = getUsers();

  if (name.length < 2 || password.length < 4) {
    authStatus.textContent = "Use a name and a password with at least 4 characters.";
    authStatus.classList.remove("ready");
    return;
  }

  if (users.some((user) => user.name.toLowerCase() === name.toLowerCase())) {
    authStatus.textContent = "That username is already taken on this browser.";
    authStatus.classList.remove("ready");
    return;
  }

  const user = { name, password, createdAt: Date.now() };
  users.push(user);
  saveUsers(users);
  authStatus.textContent = "Account created.";
  authStatus.classList.add("ready");
  signInUser(user);
});

resetPasswordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = normalizeUsername(resetName.value);
  const password = resetPassword.value;
  const users = getUsers();
  const user = users.find((savedUser) => savedUser.name.toLowerCase() === name.toLowerCase());

  if (!user) {
    authStatus.textContent = "No account with that username is saved on this browser.";
    authStatus.classList.remove("ready");
    return;
  }

  if (password.length < 4) {
    authStatus.textContent = "New password needs at least 4 characters.";
    authStatus.classList.remove("ready");
    return;
  }

  user.password = password;
  saveUsers(users);
  authStatus.textContent = "Password reset. You are logged in.";
  authStatus.classList.add("ready");
  signInUser(user);
});

guestMode.addEventListener("click", startGuestSession);

logoutButton.addEventListener("click", () => {
  activeUser = null;
  currentPlayerName = "";
  playerRoomCode = "";
  window.localStorage.removeItem("quizrush-active-user");
  document.body.classList.remove("signed-in", "guest-session", "admin-session");
  window.history.replaceState(null, "", window.location.pathname);
  setAuthMode("login");
});

adminAccountList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-account]");
  if (!deleteButton || !isAdminUser()) return;

  const accountIndex = Number(deleteButton.dataset.deleteAccount);
  const users = getUsers();
  const accountName = users[accountIndex]?.name || "Account";
  users.splice(accountIndex, 1);
  saveUsers(users);
  renderAdminPanel();
  showToast(`${accountName} removed.`);
});

sendGlobalMessage.addEventListener("click", () => {
  if (!isAdminUser()) return;
  const message = globalMessageInput.value.trim().slice(0, 160);
  if (!message) {
    showToast("Type a message first.");
    return;
  }

  window.localStorage.setItem("polymath-global-message", message);
  globalMessageInput.value = "";
  renderGlobalMessage();
  if (canUseServer()) {
    fetch("/api/global-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    }).catch(() => showToast("Saved locally, but server broadcast failed."));
  }
  showToast("Global message sent.");
});

clearGlobalMessage.addEventListener("click", () => {
  if (!isAdminUser()) return;
  window.localStorage.removeItem("polymath-global-message");
  renderGlobalMessage();
  if (canUseServer()) {
    fetch("/api/global-message", { method: "DELETE" }).catch(() => showToast("Cleared locally, but server clear failed."));
  }
  showToast("Global message cleared.");
});

settingsLogout.addEventListener("click", () => {
  logoutButton.click();
});

settingsTabs.forEach((button) => {
  button.addEventListener("click", () => setSettingsTab(button.dataset.settingsTab));
});

settingsPasswordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (activeUser?.guest) {
    settingsPasswordStatusText.textContent = "Guest mode does not have a password.";
    return;
  }

  const users = getUsers();
  const user = users.find((savedUser) => savedUser.name.toLowerCase() === activeUser.name.toLowerCase());
  if (!user || user.password !== currentPassword.value) {
    settingsPasswordStatusText.textContent = "Current password is incorrect.";
    return;
  }

  if (newPassword.value.length < 4) {
    settingsPasswordStatusText.textContent = "New password needs at least 4 characters.";
    return;
  }

  user.password = newPassword.value;
  saveUsers(users);
  currentPassword.value = "";
  newPassword.value = "";
  settingsPasswordStatusText.textContent = "Password updated.";
  showToast("Password updated.");
});

togglePasswordVisibility.addEventListener("click", () => {
  const shouldShow = currentPassword.type === "password";
  currentPassword.type = shouldShow ? "text" : "password";
  newPassword.type = shouldShow ? "text" : "password";
  togglePasswordVisibility.textContent = shouldShow ? "Hide password fields" : "Show password fields";
});

compactUi.addEventListener("change", () => {
  uiSettings.compact = compactUi.checked;
  saveUiSettings();
});

reduceMotion.addEventListener("change", () => {
  uiSettings.reduceMotion = reduceMotion.checked;
  saveUiSettings();
});

roomCode.addEventListener("input", updateJoinState);

randomCode.addEventListener("click", () => {
  roomCode.value = currentRoomCode || window.localStorage.getItem("quizrush-active-room") || generateCode();
  updateJoinState();
  roomCode.focus();
});

joinForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const digits = cleanCode(roomCode.value);
  const name = playerName.value.trim() || "Player";

  if (digits.length !== 6) {
    showToast("Enter a 6 digit room code first.");
    roomCode.focus();
    return;
  }

  if (canUseServer()) {
    try {
      const response = await fetch(`/api/rooms/${digits}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, icon: selectedPlayerIcon })
      });

      if (!response.ok) {
        throw new Error("Room not found");
      }

      const room = await response.json();
      joinStatus.textContent = `${name} joined room ${formatCode(digits)}. Waiting for host...`;
      joinStatus.classList.add("ready");
      window.localStorage.setItem("quizrush-last-joined-room", digits);
      previewCode.textContent = formatCode(room.code);
      showPlayerLobby(room, name);
      showToast("You are in the lobby.");
      return;
    } catch {
      showToast("Checking this browser for a local room...");
    }
  }

  const localRoomCode = currentRoomCode || window.localStorage.getItem("quizrush-active-room") || "";
  if (localRoomCode && digits === cleanCode(localRoomCode)) {
    addPlayer(name);
    joinStatus.textContent = `${name} joined room ${formatCode(digits)}. Waiting for host...`;
    joinStatus.classList.add("ready");
    showPlayerLobby({ code: digits, mode: selectedMode, started: false, gameTime: selectedHostGameTime() }, name);
    showToast("You are in the lobby.");
    return;
  }

  joinStatus.textContent = "No hosted room found for that code.";
  joinStatus.classList.remove("ready");
  showToast("That room code is not active.");
});

packCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectedPack = card.dataset.pack;
    packCards.forEach((packCard) => packCard.classList.toggle("selected", packCard === card));
    packLabel.textContent = packNames[selectedPack];
    showToast(`${packNames[selectedPack]} selected`);
  });
});

addQuestion.addEventListener("click", () => {
  const normalized = normalizeQuestion(setQuestion.value, setAnswers, setCorrectAnswers);
  if (!normalized) {
    setStatus.textContent = "Add a question and at least 2 answers.";
    setStatus.classList.remove("ready");
    return;
  }

  draftQuestions.push(normalized);
  setQuestion.value = "";
  setAnswers.forEach((answer) => {
    answer.value = "";
  });
  setCorrectAnswers.forEach((answer, index) => {
    answer.checked = index === 0;
  });
  syncQuestionTypeFields();
  setStatus.textContent = `${draftQuestions.length} question${draftQuestions.length === 1 ? "" : "s"} in draft.`;
  setStatus.classList.add("ready");
  renderDraftQuestions();
});

questionType.addEventListener("change", syncQuestionTypeFields);

setForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = setTitle.value.trim() || "Untitled Set";
  if (draftQuestions.length === 0) {
    setStatus.textContent = "Add at least one question before saving.";
    setStatus.classList.remove("ready");
    return;
  }

  questionSets.push({
    title,
    questions: draftQuestions
  });
  saveQuestionSets();
  draftQuestions = [];
  setTitle.value = "";
  setStatus.textContent = `${title} saved.`;
  setStatus.classList.add("ready");
  setSetCreatorOpen(false);
  renderDraftQuestions();
  renderQuestionSets();
  showToast("Question set saved");
});

createSetToggle.addEventListener("click", () => {
  setSetCreatorOpen(true);
});

closeSetCreator.addEventListener("click", () => {
  setSetCreatorOpen(false);
});

openPack.addEventListener("click", () => {
  const pool = packPools[selectedPack];
  const rewardEntry = choosePackReward(selectedPack);
  const rewardId = rewardEntry.skin;
  const reward = skins[rewardId];

  if (packOpening) return;
  packOpening = true;
  openPack.disabled = true;

  packBox.classList.remove("opening");
  void packBox.offsetWidth;
  packBox.classList.add("opening");
  packRewardText.textContent = "Rolling...";

  const flashes = 18;
  let step = 0;

  function flashNext() {
    const isFinal = step >= flashes;
    const entry = isFinal ? rewardEntry : pool[Math.floor(Math.random() * pool.length)];
    showPackFlash(entry);
    packLabel.textContent = isFinal ? "Unlocked" : skins[entry.skin].name;

    if (isFinal) {
      const isNew = !ownedSkins.includes(rewardId);
      unlockSkin(rewardId);
      renderSkinCollections();
      packRewardText.textContent = isNew
        ? `${reward.name} was added to your locker.`
        : `Duplicate pull. ${reward.name} is already in your locker.`;
      showToast(isNew ? `${reward.name} unlocked` : "Duplicate skin pulled");
      packOpening = false;
      openPack.disabled = false;
      packLabel.textContent = packNames[selectedPack];
      return;
    }

    step += 1;
    const delay = 45 + (step * 18);
    window.setTimeout(flashNext, delay);
  }

  flashNext();
});

document.querySelectorAll(".mode-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".mode-card").forEach((mode) => mode.classList.remove("selected"));
    card.classList.add("selected");
    selectedMode = card.dataset.mode;
    selectedModeLabel.textContent = modeNames[selectedMode];
    lobbyModeLabel.textContent = modeNames[selectedMode];
    renderQuestionSets();
    showToast(`${modeNames[selectedMode]} selected`);
  });
});

createRoom.addEventListener("click", async () => {
  const set = selectedQuestionSet();
  const gameTime = selectedHostGameTime();
  window.localStorage.setItem("quizrush-host-game-time", String(gameTime));
  if (canUseServer()) {
    try {
      const response = await fetch("/api/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: selectedMode,
          questionSetTitle: set?.title || `Built-in ${modeNames[selectedMode]}`,
          gameTime,
          questions: set?.questions || []
        })
      });
      if (!response.ok) throw new Error("Room API unavailable");
      const room = await response.json();
      applyRoom(room);
      watchRoom(room.code);
      startGame.textContent = "Start game";
      startGame.disabled = false;
      setHostGameStarted(false);
      showView("host-lobby");
      showToast("Host lobby created");
      return;
    } catch {
      showToast("Could not create a server room. Using local mode.");
    }
  }

  currentRoomCode = generateCode();
  hostCode.textContent = formatCode(currentRoomCode);
  joinUrl.textContent = `Join link: ${roomJoinLink(currentRoomCode)}`;
  window.localStorage.setItem("quizrush-active-room", currentRoomCode);
  joinedPlayers = [];
  lobbyModeLabel.textContent = set?.title || modeNames[selectedMode];
  hostLobbyStatus.textContent = "Waiting for players...";
  startGame.textContent = "Start game";
  startGame.disabled = false;
  setHostGameStarted(false);
  renderPlayers();
  showView("host-lobby");
  showToast("Host lobby created");
});

startGame.addEventListener("click", async () => {
  if (joinedPlayers.length === 0) {
    showToast("Starting a solo host game.");
  }

  if (canUseServer() && currentRoomCode) {
    await fetch(`/api/rooms/${currentRoomCode}/start`, { method: "POST" });
  }

  hostLobbyStatus.textContent = `Game started with ${joinedPlayers.length} players.`;
  startGame.textContent = "Game running";
  startGame.disabled = true;
  setHostGameStarted(true);
  showToast("Starting game...");
  showView("host-lobby");
});

playAgain.addEventListener("click", () => {
  startQuiz(gameState.mode, gameState.questions, gameModeLabel.textContent, gameState.gameTime);
});

towerButtons.forEach((button) => {
  button.addEventListener("click", () => buyTower(button.dataset.tower));
});

resetLobby.addEventListener("click", () => {
  joinedPlayers = [];
  playerRoomCode = "";
  startGame.textContent = "Start game";
  startGame.disabled = false;
  setHostGameStarted(false);
  renderPlayers();
  showToast("Lobby reset");
});

copyCode.addEventListener("click", async () => {
  const code = hostCode.textContent;
  try {
    await navigator.clipboard.writeText(code.replace(/\s/g, ""));
    showToast(`Copied ${code}`);
  } catch {
    showToast(`Room code: ${code}`);
  }
});

renderSkinCollections();
renderDraftQuestions();
renderQuestionSets();
setSetCreatorOpen(false);
syncQuestionTypeFields();
selectSkin(window.localStorage.getItem("quizrush-skin") || ownedSkins[0], false);
selectPlayerIcon(selectedPlayerIcon, false);
updateJoinState();
renderPlayers();
hostGameTime.value = window.localStorage.getItem("quizrush-host-game-time") || "120";
refreshGlobalMessage();
globalMessagePoller = window.setInterval(refreshGlobalMessage, 5000);
applyUiSettings();
applyAuthState();
setAuthMode("login");
if (activeUser) {
  const startingRoom = cleanCode(new URLSearchParams(window.location.search).get("room") || "");
  if (startingRoom) {
    roomCode.value = formatCode(startingRoom);
    updateJoinState();
    showView("join", false);
  } else {
    const startView = window.location.hash.replace("#", "");
    showView(canOpenView(startView) ? startView : "join", false);
  }
}
