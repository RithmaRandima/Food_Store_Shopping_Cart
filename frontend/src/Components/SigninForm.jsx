import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import bgImg from "../assets/signin-bg.jpg";
import { FaFacebook, FaGooglePlus, FaInstagram } from "react-icons/fa";
import Popupmessage from "./Popupmessage";
import LoadingWindow from "./LoadingWindow";
import ShopContext from "../context/Shop-context";

const SigninForm = ({ switchToSignin, popup, setPopup }) => {
  const { navigate, setUserDetails, setToken } = useContext(ShopContext); // ✅ fixed

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    // ✅ validation
    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/user/login",
        { email, password },
      );

      console.log("LOGIN RESPONSE:", response.data);

      if (response.data?.success) {
        toast.success(response.data.message || "Login successful!");

        // ✅ update context (localStorage handled automatically)
        setToken(response.data.token);
        setUserDetails(response.data.user);

        // ✅ redirect
        navigate("/home");
      } else {
        toast.error(response.data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);

      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      toast.error(message);
    }
  };

  return (
    <div className="w-[800px] h-[500px] flex shadow-[1px_1px_5px_rgba(0,0,0,0.9)] bg-white relative">
      {/* loading window */}
      {popup.show && popup.type === "success" && <LoadingWindow />}

      {/* Left Side */}
      <div className="flex-1 flex flex-col relative">
        <div className="text-[#6a9c06] p-4 font-extrabold text-[37px]">
          <h1>Sign In</h1>
        </div>

        <form onSubmit={handelSubmit}>
          {/* email */}
          <div className="m-5">
            <label className="block text-[17px] font-bold text-[#6a9c06]">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={user.email}
              className="w-full my-2 px-3 py-2 border text-black border-[#6a9c06]"
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
                setPopup({ ...popup, show: false });
              }}
            />
          </div>

          {/* password */}
          <div className="m-5">
            <label className="block text-[17px] font-bold text-[#6a9c06]">
              Password
            </label>
            <input
              name="password"
              type="password" // ✅ fixed
              placeholder="Enter Password"
              value={user.password}
              className="w-full my-2 px-3 py-2 border text-black border-[#6a9c06]"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          {/* button */}
          <div>
            <button
              className="mb-8 mt-5 bg-[#6a9c06] text-[18px] text-white border-0 p-1 pr-10 -ml-3 shadow-[1px_1px_5px_rgba(0,0,0,0.9)] font-extrabold"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* footer */}
        <div className="text-center text-black font-bold tracking-[2px] text-[12px]">
          <p>
            Don't have an account{" "}
            <span
              className="text-[#6a9c06] font-extrabold cursor-pointer"
              onClick={() => switchToSignin(true)}
            >
              Register
            </span>
          </p>

          <div className="flex justify-center items-center mt-4 gap-5">
            <FaGooglePlus className="text-2xl text-black" />
            <FaFacebook className="text-2xl black" />
            <FaInstagram className="text-2xl text-black" />
          </div>

          {/* popup */}
          {popup.show && (
            <div
              className={`absolute bottom-3 right-0 ${
                popup.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <Popupmessage message={popup.message} />
            </div>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-full h-[85vh] absolute shadow-[1px_1px_5px_rgba(0,0,0,0.9)]">
          <img src={bgImg} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
