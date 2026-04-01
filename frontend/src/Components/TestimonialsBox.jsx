import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsBox = (props) => {
  return (
    <div className="w-[90%] md:w-[99%] mx-auto flex flex-col items-center h-[350px] m-2  relative p-4 py-5">
      {/* userImg */}
      <div className="w-[120px] h-[120px]  rounded-full overflow-hidden mx-auto shadow-[1px_1px_5px_rgba(0,0,0,0.5)] border-8 border-white mb-10">
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
  );
};

export default TestimonialsBox;
