const { addLog, generateCode, getBody, publicRoom, rooms, sanitizeQuestions } = require("./roomStore");

function sendRoom(response, room) {
  response.status(200).json(publicRoom(room));
}

module.exports = function handler(request, response) {
  const rawPath = Array.isArray(request.query.path) ? request.query.path.join("/") : String(request.query.path || "");
  const path = rawPath.split("/").filter(Boolean);
  const body = getBody(request);

  if (request.method === "POST" && path.length === 0) {
    const code = generateCode();
    const room = {
      code,
      mode: String(body.mode || "classic"),
      questionSetTitle: String(body.questionSetTitle || "Built-in questions").slice(0, 48),
      gameTime: Math.max(60, Math.min(600, Number(body.gameTime) || 120)),
      questions: sanitizeQuestions(body.questions),
      started: false,
      players: [],
      scores: [],
      logs: []
    };

    addLog(room, `Room ${code} created.`);
    rooms.set(code, room);
    response.status(201).json(publicRoom(room));
    return;
  }

  const code = path[0];
  const action = path[1] || "";
  const room = rooms.get(code);

  if (!room) {
    response.status(404).json({ error: "Room not found" });
    return;
  }

  if (request.method === "GET" && path.length === 1) {
    sendRoom(response, room);
    return;
  }

  if (request.method === "POST" && action === "join") {
    const name = String(body.name || "Player").trim().slice(0, 18) || "Player";
    const icon = String(body.icon || "blaze").replace(/[^a-z]/g, "").slice(0, 18) || "blaze";
    const existingPlayer = room.players.find((player) => player.name.toLowerCase() === name.toLowerCase());

    if (existingPlayer) {
      existingPlayer.icon = icon;
      addLog(room, `${name} updated their icon.`);
    } else {
      room.players.push({ name, icon, joinedAt: Date.now() });
      addLog(room, `${name} joined the lobby.`);
    }

    sendRoom(response, room);
    return;
  }

  if (request.method === "POST" && action === "start") {
    room.started = true;
    addLog(room, `Game started with ${room.players.length} player${room.players.length === 1 ? "" : "s"}.`);
    sendRoom(response, room);
    return;
  }

  if (request.method === "POST" && action === "score") {
    const name = String(body.name || "Player").trim().slice(0, 18) || "Player";
    const score = Math.max(0, Number(body.score) || 0);
    const correct = Math.max(0, Number(body.correct) || 0);
    const total = Math.max(0, Number(body.total) || 0);
    const existingScore = room.scores.find((entry) => entry.name.toLowerCase() === name.toLowerCase());

    if (existingScore) {
      existingScore.score = Math.max(existingScore.score, score);
      existingScore.correct = Math.max(existingScore.correct, correct);
      existingScore.total = Math.max(existingScore.total, total);
    } else {
      room.scores.push({ name, score, correct, total });
    }

    addLog(room, `${name} finished with ${score} points.`);
    sendRoom(response, room);
    return;
  }

  response.status(404).json({ error: "Route not found" });
};
