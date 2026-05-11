import React from "react";
import { FaStar } from "react-icons/fa";

const NewsletterBox = ({ img, name }) => {
  return (
    <>
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block relative w-[370px] h-[70px] hover:-translate-y-1 transition duration-300">
        {/* img */}
        <div className="w-[100px] h-[100px] rounded-full absolute top-[50%] -translate-y-[50%] -left-10 z-2">
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>

        {/* box */}
        <div className="bg-white shadow-[2px_2px_5px_rgba(0,0,0,0.3)] w-fit p-3 rounded-r-full pl-10 absolute top-[50%] -translate-y-[50%] z-1 left-6">
          <h1 className="text-[10px] uppercase tracking-[2px] font-bold text-black mb-2">
            {name}
          </h1>

          <div className="flex ml-1 gap-0.5">
            <FaStar className="text-[12px] text-black" />
            <FaStar className="text-[12px] text-black" />
            <FaStar className="text-[12px] text-black" />
            <FaStar className="text-[12px] text-black" />
            <FaStar className="text-[12px] text-black" />
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW (NEW MODERN UI) ================= */}
      <div className="md:hidden flex items-center gap-4 bg-white shadow-md rounded-xl p-3 w-full">
        {/* image */}
        <div className="w-[55px] h-[55px] rounded-full overflow-hidden flex-shrink-0">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>

        {/* text */}
        <div className="flex flex-col">
          <h1 className="text-[12px] font-semibold text-black leading-tight">
            {name}
          </h1>

          {/* stars */}
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[10px] text-black" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterBox;
