const { getBody, store } = require("./roomStore");

module.exports = function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json({ message: store.globalMessage || "" });
    return;
  }

  if (request.method === "POST") {
    const body = getBody(request);
    store.globalMessage = String(body.message || "").trim().slice(0, 160);
    response.status(200).json({ message: store.globalMessage });
    return;
  }

  if (request.method === "DELETE") {
    store.globalMessage = "";
    response.status(200).json({ message: "" });
    return;
  }

  response.status(405).json({ error: "Method not allowed" });
};
