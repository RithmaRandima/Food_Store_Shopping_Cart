import React from "react";
import { FaCircle, FaStar } from "react-icons/fa";

const AboutCard = ({ img, name, itemCount }) => {
  return (
    <div className="relative mx-auto pt-3">
      {/* img */}
      <div className="absolute w-[120px] h-[120px] rounded-full left-[50%] translate-x-[-50%] -top-14">
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-full onject-cover"
        />
      </div>
      {/* box */}
      <div className="w-[140px] h-[140px]  bg-gradient-to-b from-white/30 to-white rounded-[10px]  pt-10">
        {/* item details */}
        <div className=" mt-3 text-center relative">
          <h1 className="font-bold text-[18px] text-black">{name}</h1>
        </div>

        <div className="flex gap-1 mt-1 justify-center">
          <FaStar className="text-[13px] text-black" />
          <FaStar className="text-[13px] text-black" />
          <FaStar className="text-[13px] text-black" />
          <FaStar className="text-[13px] text-black" />
          <FaStar className="text-[13px] text-black" />
        </div>

        <div className="bg-black w-fit p-1 text-[12px] font-bold absolute bottom-0 rounded-bl-[10px] rounded-tr-[10px]">
          <h1>{itemCount} items</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
