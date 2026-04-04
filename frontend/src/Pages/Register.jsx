import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import SigninForm from "../Components/SigninForm";
import RegisterForm from "../Components/RegisterForm";

import img1 from "../assets/placeholder-image-5.png";
import img2 from "../assets/placeholder-image-7.png";
import img3 from "../assets/placeholder-image-8.png";
import img4 from "../assets/placeholder-image-4.png";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "error",
    bgColor: "",
  });

  return (
    <div className="w-full flex h-[100vh] overflow-hidden  bg-[#6a9c06] relative">
      <Link
        to="/home"
        className="absolute right-5 top-5 flex items-center gap-2 z-30 bg-white hover:text-white hover:bg-black font-bold tracking-[1px] py-2 rounded-full px-4 text-[13px] hover:scale-105 duration-150 transition-all"
      >
        <FaArrowLeft /> Home
      </Link>

      {/* img1 */}
      <div className="absolute w-[400px] h-[300px] rotate-3 bottom-5 right-0 overflow-hidden z-2 opacity-40">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-contain shadow-xl shadow-black"
        />
      </div>

      {/* img2 */}
      <div
        className="absolute w-[800px] h-[800px] 
         -bottom-1 -left-110 overflow-hidden z-1"
      >
        <img
          src={img2}
          alt=""
          className="w-full h-full object-contain opacity-20"
        />
      </div>

      {/* img3 */}
      <div
        className="absolute w-[400px] h-[400px] 
         -top-25 -right-30 overflow-hidden z-1 -rotate-12"
      >
        <img
          src={img3}
          alt=""
          className="w-full h-full object-contain opacity-20"
        />
      </div>

      {/* img4 */}
      <div
        className="absolute w-[400px] h-[400px] 
         -bottom-75 -left-15 overflow-hidden z-1"
      >
        <img
          src={img4}
          alt=""
          className="w-full h-full object-contain opacity-30"
        />
      </div>

      {/* overlay */}
      <div className="absolute w-full min-h-screen z-3 flex justify-center items-center">
        {isRegister ? (
          <RegisterForm
            switchToSignin={() => setIsRegister(false)}
            popup={popup}
            setPopup={setPopup}
          />
        ) : (
          <SigninForm
            switchToSignin={() => setIsRegister(true)}
            popup={popup}
            setPopup={setPopup}
          />
        )}
      </div>
    </div>
  );
};

export default Register;

{
  /* */
}
