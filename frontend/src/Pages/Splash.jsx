import React from "react";
import logo from "../assets/img-3.png";

const Splash = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-t from-green-500 to-white px-4">
      {/* Spinning Circle */}
      <div className="absolute w-10 h-10 bottom-15 border-7 border-white border-t-transparent rounded-full animate-spin"></div>

      {/* Centered content */}
      <div className="relative text-center space-y-6 z-10">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-64 h-64 mx-auto object-contain drop-shadow-lg"
        />

        {/* Heading with bouncing brand name */}
        <h1 className="text-black text-4xl sm:text-5xl font-extrabold">
          Welcome to{" "}
          <span className="text-white inline-block animate-bounce">
            FRESHMET
          </span>
        </h1>

        {/* Description */}
        <p className="font-medium text-gray-700 mt-3 max-w-md mx-auto text-sm sm:text-base">
          Get the best quality and most delicious grocery food in the world.
          Everything you need is right here.
        </p>
      </div>
    </div>
  );
};

export default Splash;
