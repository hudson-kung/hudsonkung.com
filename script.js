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
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const loginName = document.querySelector("#loginName");
const loginPassword = document.querySelector("#loginPassword");
const signupName = document.querySelector("#signupName");
const signupPassword = document.querySelector("#signupPassword");
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
const addQuestion = document.querySelector("#addQuestion");
const setStatus = document.querySelector("#setStatus");
const setCount = document.querySelector("#setCount");
const setQuestionPreview = document.querySelector("#setQuestionPreview");
const savedSets = document.querySelector("#savedSets");
const hostSetSelect = document.querySelector("#hostSetSelect");
const createRoom = document.querySelector("#createRoom");
const selectedModeLabel = document.querySelector("#selectedModeLabel");
const lobbyModeLabel = document.querySelector("#lobbyModeLabel");
const hostLobbyStatus = document.querySelector("#hostLobbyStatus");
const playerCount = document.querySelector("#playerCount");
const playerGrid = document.querySelector("#playerGrid");
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
const playAgain = document.querySelector("#playAgain");
const viewLinks = document.querySelectorAll("[data-view-link]");
const views = document.querySelectorAll(".app-view");
const validViews = ["home", "join", "player-lobby", "skins", "packs", "sets", "host", "host-lobby", "game", "leaderboard"];
const modeNames = {
  classic: "Classic",
  speed: "Speed Run",
  team: "Teams",
  gold: "Gold Quest"
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
  ]
};

let toastTimeout;
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
let roomStream = null;
let roomPoller = null;
let gameState = {
  mode: "classic",
  index: 0,
  score: 0,
  streak: 0,
  correct: 0,
  locked: false,
  timer: null,
  seconds: 15,
  submitted: false,
  questions: null
};

function canUseServer() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
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

function setAuthMode(mode) {
  const isSignup = mode === "signup";
  showLogin.classList.toggle("active", !isSignup);
  showSignup.classList.toggle("active", isSignup);
  loginForm.classList.toggle("active", !isSignup);
  signupForm.classList.toggle("active", isSignup);
  authStatus.textContent = isSignup ? "Make your QuizRush account." : "Log in to keep playing.";
  authStatus.classList.remove("ready");
}

function applyAuthState() {
  document.body.classList.toggle("signed-in", Boolean(activeUser));

  if (!activeUser) return;

  const name = activeUser.name || "Player";
  navUserName.textContent = name;
  navUserInitial.textContent = name.slice(0, 1).toUpperCase();
  playerName.value = playerName.value || name;
  currentPlayerName = currentPlayerName || name;
}

function signInUser(user) {
  activeUser = {
    name: user.name,
    signedInAt: Date.now()
  };
  window.localStorage.setItem("quizrush-active-user", JSON.stringify(activeUser));
  applyAuthState();
  showView("home", false);
  showToast(`Welcome, ${activeUser.name}`);
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

function renderHostMonitor(room = {}) {
  const scores = room.scores || [];
  const logs = room.logs || [];

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
  renderPlayers();
  renderHostMonitor(room);
  hostLobbyStatus.textContent = room.started
    ? `Game started with ${joinedPlayers.length} players.`
    : joinedPlayers.length > 0
      ? "Waiting for host to start..."
      : "Waiting for players...";

  if (currentPlayerName && cleanCode(room.code) === currentRoomCode) {
    waitingRoom.textContent = room.started
      ? "The host started the game. Get ready."
      : "You are in. Hang tight until the host starts the game.";
    playerLobbyStatus.textContent = room.started ? "Game started" : "Waiting for host...";
    if (room.started && !document.querySelector("#game").classList.contains("active")) {
      startQuiz(room.mode, room.questions, room.questionSetTitle);
    }
  }
}

function currentQuestions() {
  return gameState.questions?.length ? gameState.questions : (quizQuestions[gameState.mode] || quizQuestions.classic);
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

function startQuiz(mode = selectedMode, questions = null, title = "") {
  gameState = {
    mode,
    index: 0,
    score: 0,
    streak: 0,
    correct: 0,
    locked: false,
    timer: null,
    seconds: mode === "speed" ? 10 : 15,
    submitted: false,
    questions: Array.isArray(questions) && questions.length ? questions : null
  };
  gameModeLabel.textContent = title || modeNames[mode] || "Classic";
  gameAvatar.className = `avatar large ${skins[selectedPlayerIcon]?.className || skins.blaze.className}`;
  showView("game");
  renderQuestion();
}

function renderQuestion() {
  window.clearInterval(gameState.timer);
  const questions = currentQuestions();

  if (gameState.index >= questions.length) {
    gameQuestion.textContent = "Game complete";
    gameProgress.textContent = "Results";
    gameTimer.textContent = "0";
    gameAnswers.innerHTML = "";
    gameFeedback.textContent = `Final score: ${gameState.score}. You got ${gameState.correct} of ${questions.length} correct.`;
    updateGameStats();
    submitGameScore();
    return;
  }

  const question = questions[gameState.index];
  gameState.locked = false;
  gameState.seconds = question.timeLimit || (gameState.mode === "speed" ? 10 : 15);
  gameState.answerMap = shuffleAnswers(question);
  gameProgress.textContent = `Question ${gameState.index + 1} / ${questions.length}`;
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
    gameTimer.textContent = String(gameState.seconds);
    if (gameState.seconds <= 0) {
      answerQuestion(-1);
    }
  }, 1000);
}

function answerQuestion(answerIndex) {
  if (gameState.locked) return;
  gameState.locked = true;
  window.clearInterval(gameState.timer);

  const question = currentQuestions()[gameState.index];
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
    gameState.score += 500 + (gameState.streak * 100) + (gameState.seconds * 10);
    gameFeedback.textContent = `Correct. Streak x${gameState.streak}.`;
  } else {
    gameState.streak = 0;
    gameFeedback.textContent = answerIndex === -1
      ? `Time up. Correct: ${answerMap.filter((item) => item.wasCorrect).map((item) => item.answer).join(", ")}.`
      : `Not quite. Correct: ${answerMap.filter((item) => item.wasCorrect).map((item) => item.answer).join(", ")}.`;
  }

  updateGameStats();
  window.setTimeout(() => {
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
        total: currentQuestions().length
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

  if (!window.EventSource) return;

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
    showView(link.dataset.viewLink);
  });
});

window.addEventListener("hashchange", () => {
  if (!activeUser) return;
  showView(window.location.hash.replace("#", ""), false);
});

showLogin.addEventListener("click", () => setAuthMode("login"));
showSignup.addEventListener("click", () => setAuthMode("signup"));

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

logoutButton.addEventListener("click", () => {
  activeUser = null;
  currentPlayerName = "";
  window.localStorage.removeItem("quizrush-active-user");
  document.body.classList.remove("signed-in");
  window.history.replaceState(null, "", window.location.pathname);
  setAuthMode("login");
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
        joinStatus.textContent = "No hosted room found for that code.";
        joinStatus.classList.remove("ready");
        showToast("That room code is not active.");
        return;
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
      showToast("Could not reach the lobby server.");
      return;
    }
  }

  if (!currentRoomCode || digits === currentRoomCode) {
    addPlayer(name);
    joinStatus.textContent = `${name} joined room ${formatCode(digits)}. Waiting for host...`;
    joinStatus.classList.add("ready");
    showPlayerLobby({ code: digits, mode: selectedMode, started: false }, name);
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
  renderDraftQuestions();
  renderQuestionSets();
  showToast("Question set saved");
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
  if (canUseServer()) {
    try {
      const response = await fetch("/api/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: selectedMode,
          questionSetTitle: set?.title || `Built-in ${modeNames[selectedMode]}`,
          questions: set?.questions || []
        })
      });
      const room = await response.json();
      applyRoom(room);
      watchRoom(room.code);
      startGame.textContent = "Start game";
      startGame.disabled = false;
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
  showToast("Starting game...");
  showView("host-lobby");
});

playAgain.addEventListener("click", () => {
  startQuiz(gameState.mode);
});

resetLobby.addEventListener("click", () => {
  joinedPlayers = [];
  startGame.textContent = "Start game";
  startGame.disabled = false;
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
syncQuestionTypeFields();
selectSkin(window.localStorage.getItem("quizrush-skin") || ownedSkins[0], false);
selectPlayerIcon(selectedPlayerIcon, false);
updateJoinState();
renderPlayers();
applyAuthState();
setAuthMode("login");
if (activeUser) {
  const startingRoom = cleanCode(new URLSearchParams(window.location.search).get("room") || "");
  if (startingRoom) {
    roomCode.value = formatCode(startingRoom);
    updateJoinState();
    showView("join", false);
  } else {
    showView(window.location.hash.replace("#", ""), false);
  }
}
