import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.status(200).send("server is running.");
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
