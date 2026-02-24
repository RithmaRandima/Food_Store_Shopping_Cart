import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import SigninForm from "../Components/SigninForm";
import RegisterForm from "../Components/RegisterForm";

import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";

const Register = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "error",
    bgColor: "",
  });

  return (
    <div className="w-full flex h-[100vh]  bg-gradient-to-t from-green-500 to-white relative">
      <div className="basis-[65%] relative overflow-hidden">
        {/* img2 */}
        <div className="absolute w-[400px] h-[300px] rotate-3 bottom-0 left-30 overflow-hidden z-2">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-contain shadow-xl shadow-black"
          />
        </div>

        {/* img3 */}
        <div
          className="absolute w-[400px] h-[600px] 
         bottom-0 left-0 overflow-hidden z-1"
        >
          <img
            src={img3}
            alt=""
            className="w-full h-full object-cover shadow-xl shadow-black"
          />
        </div>
      </div>

      {/* overlay */}
      <div className="absolute bg-black/80 backdrop-blur-[2px] w-full min-h-screen z-3 flex justify-center items-center">
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
