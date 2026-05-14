const globalStore = globalThis.__polymathRooms || {
  globalMessage: "",
  rooms: new Map()
};

globalThis.__polymathRooms = globalStore;

function generateCode() {
  let code;
  do {
    code = String(Math.floor(100000 + Math.random() * 900000));
  } while (globalStore.rooms.has(code));
  return code;
}

function publicRoom(room) {
  return {
    code: room.code,
    mode: room.mode,
    questionSetTitle: room.questionSetTitle,
    gameTime: room.gameTime,
    questions: room.questions,
    started: room.started,
    players: room.players,
    scores: [...room.scores].sort((a, b) => b.score - a.score),
    logs: room.logs.slice(-40).reverse()
  };
}

function addLog(room, message) {
  room.logs.push({
    message,
    time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" })
  });
  if (room.logs.length > 80) {
    room.logs = room.logs.slice(-80);
  }
}

function sanitizeQuestions(value) {
  if (!Array.isArray(value)) return [];

  return value.slice(0, 30).map((item) => {
    const answers = Array.isArray(item.answers)
      ? item.answers
      : String(item.answers || "").split(/\s{2,}|\|/);
    const cleanAnswers = answers.map((answer) => String(answer).trim().slice(0, 80)).filter(Boolean).slice(0, 4);
    const correctAnswers = Array.isArray(item.correctAnswers) ? item.correctAnswers : [item.correct];
    const cleanCorrectAnswers = correctAnswers
      .map((answerIndex) => Number(answerIndex))
      .filter((answerIndex) => Number.isInteger(answerIndex) && answerIndex >= 0 && answerIndex < cleanAnswers.length);

    return {
      question: String(item.question || "").trim().slice(0, 160),
      answers: cleanAnswers,
      correct: cleanCorrectAnswers[0] ?? 0,
      correctAnswers: cleanCorrectAnswers.length ? cleanCorrectAnswers : [0],
      timeLimit: Math.max(5, Math.min(120, Number(item.timeLimit) || 20)),
      randomOrder: Boolean(item.randomOrder),
      type: item.type === "true-false" ? "true-false" : "multiple-choice"
    };
  }).filter((item) => item.question && item.answers.length >= 2);
}

function getBody(request) {
  return request.body && typeof request.body === "object" ? request.body : {};
}

module.exports = {
  addLog,
  generateCode,
  getBody,
  publicRoom,
  rooms: globalStore.rooms,
  sanitizeQuestions,
  store: globalStore
};
