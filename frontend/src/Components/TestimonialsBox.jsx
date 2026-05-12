import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const TestimonialsBox = (props) => {
  return (
    <>
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:flex w-[90%] md:w-[99%] mx-auto flex-col items-center h-[350px] m-2 relative p-4 py-5">
        {/* userImg */}
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mx-auto shadow-[1px_1px_5px_rgba(0,0,0,0.5)] pt-5 border-4 border-white mb-5 flex items-center justify-center bg-gray-100">
          <FaUser className="text-black w-10 h-10" />
        </div>
        {/* message */}
        <p className="font-semiblod text-[20px] mb-1 text-center w-[90%] mx-auto ">
          {props.message}
        </p>

        <div className="flex items-center justify-between mt-5 gap-5">
          <p className="text-black text-[16px] md:text-[14px] tracking-[2px]">
            {props.name}
          </p>
        </div>

        <div className="flex gap-1 mt-3 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
        </div>
      </div>

      {/* ================= MOBILE (NEW UI ONLY) ================= */}
      <div className="md:hidden w-full flex flex-col items-center text-center px-4 py-6">
        {/* avatar */}
        {/* userImg */}
        <div className="w-[70px] h-[70px] rounded-full overflow-hidden mx-auto shadow-[1px_1px_5px_rgba(0,0,0,0.5)] pt-7 border-4 border-white mb-5 flex items-center justify-center bg-gray-100">
          <FaUser className="text-black w-11 h-11" />
        </div>

        {/* message */}
        <p className="text-gray-700 text-[15px] leading-relaxed">
          “{props.message}”
        </p>

        {/* stars */}
        <div className="flex gap-1 mt-3 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
        </div>

        {/* name */}
        <p className="mt-3 text-black font-semibold text-[15px] tracking-wide">
          {props.name}
        </p>
      </div>
    </>
  );
};

export default TestimonialsBox;
