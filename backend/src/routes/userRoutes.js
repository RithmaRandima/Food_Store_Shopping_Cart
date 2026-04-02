import express from "express";
import {
  getAllRegisteredUsers,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.get("/all-users/", getAllRegisteredUsers);
userRouter.post("/register/", registerUser);
userRouter.post("/login/", loginUser);

export default userRouter;
