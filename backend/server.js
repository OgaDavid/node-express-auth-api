import http from "http";
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// connect to mongoDB
connectDB();

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
