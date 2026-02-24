import express from "express";
import {
  loginUser,
  registerUser,
  getAllRegisteredUsers,
} from "../controllers/registerControllers.js";

const registerRoute = express.Router();

registerRoute.get("/all-users/", getAllRegisteredUsers);
registerRoute.post("/register/", registerUser);
registerRoute.post("/login/", loginUser);

export default registerRoute;
