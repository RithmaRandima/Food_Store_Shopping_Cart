import User from "../models/User.js";

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
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = new User({ username, email, password });
    const saveUser = await user.save();

    res.status(201).json(saveUser);
  } catch (error) {
    console.log("error on registerUser function", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    console.log("Login attempt:", { email, password });

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res
      .status(200)
      .json({ message: "Login successful", user: { email: user.email } });
  } catch (error) {
    console.log("error on loginUser function", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
