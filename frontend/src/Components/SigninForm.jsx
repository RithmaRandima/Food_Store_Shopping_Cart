import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/signin-bg.jpg";
import { FaFacebook, FaGooglePlus, FaInstagram } from "react-icons/fa";
import Popupmessage from "./Popupmessage";
import LoadingWindow from "./LoadingWindow";

const SigninForm = ({ switchToSignin, popup, setPopup }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    let message;

    if (!email || !password) {
      message = "All Fields Are Required";
      setPopup({ show: true, message, type: "error" });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/user/login",
        { email, password },
      );

      console.log(response.data);
      // Show success toast
      message = response.data.message || "Successfully Registered";

      setPopup({ show: true, message: message, type: "success" });

      // Wait 3 seconds before navigating

      await new Promise((resolve) => setTimeout(resolve, 1000));
      // check if user exists in response
      if (response.data.user) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Login Error:", error);
      message = "Enter Valid Email and Password";
      setPopup({ show: true, message, type: "error" });
      return;
    }
  };

  return (
    <div className="w-[800px] h-[500px] flex  shadow-[1px_1px_5px_rgba(0,0,0,0.9)]  bg-gradient-to-r from-green-500/50 to-black/60  rounded-4xl relative ">
      {/* loading window */}
      {popup.show && popup.type === "success" && <LoadingWindow />}

      {/* Left Side */}
      <div className="flex-1 flex flex-col relative">
        <div className="text-white p-4 font-extrabold text-[37px]">
          <h1>Sing In</h1>
        </div>
        <form onSubmit={handelSubmit}>
          {/* input email */}
          <div className="m-5">
            <label className="block text-[17px] font-bold text-white">
              Email{" "}
            </label>
            <input
              name={"email"}
              type="email"
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
          <div className="m-5">
            <label className="block text-[17px] font-bold text-white">
              Username
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
              className="mb-8 mt-5 bg-green-600 text-[18px] text-white btn-primary border-0 rounded-l-none p-1 pr-10 -ml-3  shadow-[1px_1px_5px_rgba(0,0,0,0.9)] font-extrabold "
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center text-white font-bold tracking-[2px] text-[12px]">
          <p>
            Don't have a account{" "}
            <span
              className="text-green-500 font-extrabold cursor-pointer"
              onClick={() => switchToSignin(true)}
            >
              Register
            </span>
          </p>
          <div className="flex justify-center items-center mt-4 gap-5">
            <FaGooglePlus className="text-2xl text-green-500" />
            <FaFacebook className="text-2xl text-green-500" />
            <FaInstagram className="text-2xl text-green-500" />
          </div>

          {/* popup box */}
          {popup.show && (
            <div
              className={`absolute bottom-3 right-0 ${popup.type === "success" ? "bg-green-500" : "bg-red-500"}`}
            >
              <Popupmessage message={popup.message} />
            </div>
          )}
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

export default SigninForm;
