import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // user must provide a name
    },
    email: {
      type: String,
      required: true, // user must provide email
      unique: true, // prevent duplicate emails
    },
    password: {
      type: String,
      required: true, // user must provide password
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
