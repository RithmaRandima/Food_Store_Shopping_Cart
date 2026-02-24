import React from "react";
import { FaStar } from "react-icons/fa";

const NewsletterBox = ({ img, name }) => {
  return (
    <div className="relative w-[370px] h-[70px] hover:scale-105 transition duration-300">
      {/* img */}
      <div className="w-[100px] h-[100px] bg-re-600 rounded-full absolute top-[50%] -translate-y-[50%] -left-10 z-2">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>

      {/* box */}
      <div className="bg-gradient-to-l from-green-500 to-white/30 w-fit  py-2 px-3 rounded-r-full pl-10 absolute top-[50%] -translate-y-[50%] z-1 left-6">
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
  );
};

export default NewsletterBox;
