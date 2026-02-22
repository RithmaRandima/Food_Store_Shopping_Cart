import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import SigninForm from "../Components/SigninForm";
import RegisterForm from "../Components/RegisterForm";

const Register = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="bg-amber-950 w-full min-h-screen flex justify-center items-center">
      {/* {isRegister ? (
        <RegisterForm switchToSignin={() => setIsRegister(false)} />
        ) : (
          <SigninForm />
          )} */}

      <SigninForm />
    </div>
  );
};

export default Register;
