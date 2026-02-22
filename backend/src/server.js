import dotenv from "dotenv";
dotenv.config(); // load .env first

import express from "express";
import registerRoute from "./routes/registerRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const server = express();
server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

server.use("/api/v1/user", registerRoute);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log("Server Running on Port:", PORT);
  });
});
