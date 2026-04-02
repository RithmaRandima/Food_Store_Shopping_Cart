import dotenv from "dotenv";
dotenv.config(); // load .env first

import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const server = express();
server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

server.use("/api/user", userRouter);
server.use("/api/product", productRouter);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log("Server Running on Port:", PORT);
  });
});
