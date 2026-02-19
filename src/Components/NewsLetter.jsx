import React from "react";
import mainImg from "../assets/newsletter-img.png";

const Newsletter = () => {
  return (
    <div className="relative w-full overflow-hidden h-[400px] bg-red200">
      {/* main img */}
      <div className="absolute -bottom-5 -left-14 w-[500px] h-[470px] ">
        <img src={mainImg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Newsletter;
