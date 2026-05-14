const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const rooms = new Map();
let globalMessage = "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(data));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 10000) {
        reject(new Error("Body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function generateCode() {
  let code;
  do {
    code = String(Math.floor(100000 + Math.random() * 900000));
  } while (rooms.has(code));
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

function broadcast(room) {
  const payload = `data: ${JSON.stringify(publicRoom(room))}\n\n`;
  for (const client of room.clients) {
    client.write(payload);
  }
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
    const correctAnswers = Array.isArray(item.correctAnswers)
      ? item.correctAnswers
      : [item.correct];
    const cleanCorrectAnswers = correctAnswers
      .map((answerIndex) => Number(answerIndex))
      .filter((answerIndex) => Number.isInteger(answerIndex) && answerIndex >= 0 && answerIndex < cleanAnswers.length);
    const timeLimit = Math.max(5, Math.min(120, Number(item.timeLimit) || 20));
    const type = item.type === "true-false" ? "true-false" : "multiple-choice";

    return {
      question: String(item.question || "").trim().slice(0, 160),
      answers: cleanAnswers,
      correct: cleanCorrectAnswers[0] ?? 0,
      correctAnswers: cleanCorrectAnswers.length ? cleanCorrectAnswers : [0],
      timeLimit,
      randomOrder: Boolean(item.randomOrder),
      type
    };
  }).filter((item) => item.question && item.answers.length >= 2);
}

function getRoomFromUrl(url, suffix) {
  const match = url.pathname.match(/^\/api\/rooms\/(\d{6})(?:\/(.+))?$/);
  if (!match || match[2] !== suffix) return null;
  return rooms.get(match[1]);
}

function getRoomByCode(url) {
  const match = url.pathname.match(/^\/api\/rooms\/(\d{6})$/);
  if (!match) return null;
  return rooms.get(match[1]);
}

function serveStatic(request, response, url) {
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(ROOT, requestedPath));

  if (!filePath.startsWith(ROOT)) {
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
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(content);
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "POST" && url.pathname === "/api/rooms") {
    try {
      const body = await readJson(request);
      const code = generateCode();
      const questions = sanitizeQuestions(body.questions);
      const gameTime = Math.max(60, Math.min(600, Number(body.gameTime) || 120));
      const room = {
        code,
        mode: String(body.mode || "classic"),
        questionSetTitle: String(body.questionSetTitle || "Built-in questions").slice(0, 48),
        gameTime,
        questions,
        started: false,
        players: [],
        scores: [],
        logs: [],
        clients: new Set()
      };
      addLog(room, `Room ${code} created.`);
      rooms.set(code, room);
      sendJson(response, 201, publicRoom(room));
    } catch {
      sendJson(response, 400, { error: "Invalid room request" });
    }
    return;
  }

  if (url.pathname === "/api/global-message") {
    if (request.method === "GET") {
      sendJson(response, 200, { message: globalMessage });
      return;
    }

    if (request.method === "POST") {
      try {
        const body = await readJson(request);
        globalMessage = String(body.message || "").trim().slice(0, 160);
        sendJson(response, 200, { message: globalMessage });
      } catch {
        sendJson(response, 400, { error: "Invalid message request" });
      }
      return;
    }

    if (request.method === "DELETE") {
      globalMessage = "";
      sendJson(response, 200, { message: "" });
      return;
    }
  }

  if (request.method === "POST" && /^\/api\/rooms\/\d{6}\/join$/.test(url.pathname)) {
    const room = getRoomFromUrl(url, "join");
    if (!room) {
      sendJson(response, 404, { error: "Room not found" });
      return;
    }

    try {
      const body = await readJson(request);
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
      broadcast(room);
      sendJson(response, 200, publicRoom(room));
    } catch {
      sendJson(response, 400, { error: "Invalid join request" });
    }
    return;
  }

  if (request.method === "GET" && /^\/api\/rooms\/\d{6}$/.test(url.pathname)) {
    const room = getRoomByCode(url);
    if (!room) {
      sendJson(response, 404, { error: "Room not found" });
      return;
    }

    sendJson(response, 200, publicRoom(room));
    return;
  }

  if (request.method === "POST" && /^\/api\/rooms\/\d{6}\/start$/.test(url.pathname)) {
    const room = getRoomFromUrl(url, "start");
    if (!room) {
      sendJson(response, 404, { error: "Room not found" });
      return;
    }

    room.started = true;
    addLog(room, `Game started with ${room.players.length} player${room.players.length === 1 ? "" : "s"}.`);
    broadcast(room);
    sendJson(response, 200, publicRoom(room));
    return;
  }

  if (request.method === "POST" && /^\/api\/rooms\/\d{6}\/score$/.test(url.pathname)) {
    const room = getRoomFromUrl(url, "score");
    if (!room) {
      sendJson(response, 404, { error: "Room not found" });
      return;
    }

    try {
      const body = await readJson(request);
      const name = String(body.name || "Player").trim().slice(0, 18) || "Player";
      const score = Math.max(0, Number(body.score) || 0);
      const correct = Math.max(0, Number(body.correct) || 0);
      const total = Math.max(0, Number(body.total) || 0);
      const existingScore = room.scores.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
      const scoreEntry = {
        name,
        score,
        correct,
        total,
        submittedAt: Date.now()
      };

      if (existingScore) {
        Object.assign(existingScore, scoreEntry);
      } else {
        room.scores.push(scoreEntry);
      }

      addLog(room, `${name} finished with ${score} points (${correct}/${total}).`);
      broadcast(room);
      sendJson(response, 200, publicRoom(room));
    } catch {
      sendJson(response, 400, { error: "Invalid score request" });
    }
    return;
  }

  if (request.method === "GET" && /^\/api\/rooms\/\d{6}\/events$/.test(url.pathname)) {
    const room = getRoomFromUrl(url, "events");
    if (!room) {
      response.writeHead(404);
      response.end("Room not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    });
    response.write(`data: ${JSON.stringify(publicRoom(room))}\n\n`);
    room.clients.add(response);
    request.on("close", () => room.clients.delete(response));
    return;
  }

  serveStatic(request, response, url);
});

server.listen(PORT, () => {
  console.log(`Polymath running at http://localhost:${PORT}`);
});
