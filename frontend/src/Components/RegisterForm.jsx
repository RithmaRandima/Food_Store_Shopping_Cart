import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaGooglePlus, FaInstagram } from "react-icons/fa";
import bgImg from "../assets/register-bg.jpg";
import Popupmessage from "./Popupmessage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterForm = ({ switchToSignin, popup, setPopup }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = user;

    // ✅ Frontend validation
    if (!username || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/user/register",
        user,
      );

      // ✅ Success case
      if (response.data?.success) {
        toast.success(response.data.message || "Registration successful!");

        console.log("User Registered:", response.data);

        setTimeout(() => {
          switchToSignin();
        }, 200);
      } else {
        toast.error(response.data?.message || "Registration failed");
      }
    } catch (error) {
      // ✅ Proper error handling
      const message =
        error.response?.data?.message || // backend message
        error.message || // axios/network message
        "Something went wrong";

      toast.error(message);

      console.error("Failed to Register User:", error.response || error);
    }
  };

  return (
    <div className="w-[800px] h-[500px] flex  shadow-[1px_1px_5px_rgba(0,0,0,0.9)]  bg-gradient-to-r from-green-500/50 to-black/60  rounded-4xl">
      {/* Left Side */}
      <div className="flex-1 flex flex-col relative">
        <div className="text-white p-4 font-extrabold text-[37px] pb-1\2">
          <h1>Register</h1>
        </div>
        <form onSubmit={handelSubmit}>
          {/* input username */}
          <div className=" m-5 my-2">
            <label className="block text-[17px] font-bold text-white">
              Username:{" "}
            </label>
            <input
              name={"username"}
              type="text"
              placeholder="Enter Username"
              value={user.username}
              className="w-full my-2 px-3 py-2 rounded-4xl border text-white border-white"
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
                setPopup({ ...popup, show: false });
              }}
            />
          </div>

          {/* input email */}
          <div className="m-5 my-2">
            <label className="block text-[17px] font-bold text-white">
              Email{" "}
            </label>
            <input
              name={"email"}
              type="text"
              placeholder="Enter Email"
              value={user.email}
              className="w-full my-2 px-3 py-2 rounded-4xl border text-white border-white"
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
                setPopup({ ...popup, show: false });
              }}
            />
          </div>

          {/* input password */}
          <div className="m-5 my-2">
            <label className="block text-[17px] font-bold text-white">
              Password:{" "}
            </label>
            <input
              name={"password"}
              type="text"
              placeholder="Enter Password"
              value={user.password}
              className="w-full my-2 px-3 py-2 rounded-4xl border text-white border-white"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          {/* button */}
          <div>
            <button
              className="mb-3 mt-2 bg-green-600 text-[18px] text-white btn-primary border-0 rounded-l-none p-1 pr-10 -ml-3  shadow-[1px_1px_5px_rgba(0,0,0,0.9)] font-extrabold "
              type="submit"
            >
              Register User
            </button>
          </div>
        </form>

        <div className="text-center text-white font-bold tracking-[2px] text-[12px]">
          <p>
            All ready have a account{" "}
            <span
              className="text-green-500 font-extrabold cursor-pointer"
              onClick={() => switchToSignin(false)}
            >
              Sign in
            </span>
          </p>
          <div className="flex justify-center items-center mt-4 gap-5">
            <FaGooglePlus className="text-2xl text-green-500" />
            <FaFacebook className="text-2xl text-green-500" />
            <FaInstagram className="text-2xl text-green-500" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-2">
        <div className="w-full h-full bg-yelow-50 overflow-hidden rounded-r-4xl rounded-2xl">
          <img src={bgImg} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
