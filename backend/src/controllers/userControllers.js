import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

export const getAllRegisteredUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
    console.log("error on getAllRegisteredUsers function", error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body || {};

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existsUser = await User.findOne({ email });

    if (existsUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter valid Email!" });
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number and symbol",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });

    const saveUser = await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "5h",
      },
    );

    res.status(201).json({
      success: true,
      user,
      token,
      message: "Registration Successfull!",
    });
  } catch (error) {
    console.log("error on registerUser function", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are required!" });
    }
    console.log("Login attempt:", { email, password });

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: true, message: "User not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5h" },
    );

    res.status(201).json({
      success: true,
      user,
      token,
      message: "Login Successfull!",
    });
  } catch (error) {
    console.log("error on loginUser function", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
