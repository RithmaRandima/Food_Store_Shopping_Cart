import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsBox = (props) => {
  return (
    <>
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:flex w-[90%] md:w-[99%] mx-auto flex-col items-center h-[350px] m-2 relative p-4 py-5">
        {/* userImg */}
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto shadow-[1px_1px_5px_rgba(0,0,0,0.5)] border-8 border-white mb-10">
          <img
            src={props.img}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
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
      </div>

      {/* ================= MOBILE (NEW UI ONLY) ================= */}
      <div className="md:hidden w-full flex flex-col items-center text-center px-4 py-6">
        {/* avatar */}
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <img
            src={props.img}
            alt=""
            className="w-full h-full object-contain"
          />
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
