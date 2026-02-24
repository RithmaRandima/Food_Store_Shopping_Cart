import React from "react";
import logo from "../assets/img-3.png";

const Splash = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-gradient-to-t from-green-500 to-white ">
      {/* Animated Item */}
      <div className="text-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[250px] h-[250px] mx-auto animate-pulse object-contain"
        />
        <h1 className=" text-black text-4xl font-extrabold ">
          Welcome to FRESHMET
        </h1>
        <p className="font-bold mt-5 mx-auto w-[400px] text-[12px]">
          Get the besr quality and most delicious grocery food in the world, you
          can get the all from here
        </p>
      </div>
    </div>
  );
};

export default Splash;
