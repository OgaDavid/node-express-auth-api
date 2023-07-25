import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("server is running");
});

export default app;
