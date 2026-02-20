import React from "react";
import { FaStar } from "react-icons/fa";

const NewsletterBox = ({ img, text }) => {
  return (
    <div className="relative w-[300px] h-[110px] hover:scale-105 transition duration-300">
      {/* img */}
      <div className="w-[150px] h-[150px] bg-re-600 rounded-full absolute top-[50%] -translate-y-[50%] -left-18 z-2">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>

      {/* box */}
      <div className="bg-gradient-to-l from-black to-black/30 w-fit p-4 rounded-r-full pl-10 absolute top-[50%] -translate-y-[50%] z-1 left-6">
        <h1 className="text-[10px] uppercase tracking-[4px] font-bold text-white mb-1">
          FRESH & HEALTHY FOODS
          {text}
        </h1>
        <div className="flex ml-2 gap-0.5">
          <FaStar className="text-[12px] text-white" />
          <FaStar className="text-[12px] text-white" />
          <FaStar className="text-[12px] text-white" />
          <FaStar className="text-[12px] text-white" />
          <FaStar className="text-[12px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterBox;
