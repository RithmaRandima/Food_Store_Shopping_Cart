import React from "react";
import heroImg from "../assets/hero-img.png";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
const Hero = () => {
  return (
    <div className="w-full flex h-[80vh]  bg-gradient-to-t from-green-500 to-white ">
      {/* left */}
      <div className="basis-[35%] pt-20 ">
        <h1 className="font-extrabold text-[45px]">
          Make healthy Life with <span className="text-green-600">Fresh</span>{" "}
          Grocery
        </h1>
        <p className="font-bold mt-5">
          Get the besr quality and most delicious grocery food in the world, you
          can get the all from here
        </p>
        <button className="my-10 bg-green-600 text-[20px] text-white btn-primary border-0 rounded-l-none p-2 pr-10">
          Shop now
        </button>
      </div>
      {/* right */}

      <div className="basis-[65%] relative">
        {/* img1 */}
        <div className="absolute w-[220px] h-[220px] bottom-0 left-5 bgwhite">
          <img src={img1} alt="" />
        </div>

        {/* img2 */}
        <div className="absolute w-[370px] h-[350px] -bottom-30 right-10 overflow-hidden z-2">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-contain shadow-xl shadow-black"
          />
        </div>

        {/* img3 */}
        <div className="absolute w-[400px] h-[500px] -bottom-20 -right-20 overflow-hidden z-1">
          <img
            src={img3}
            alt=""
            className="w-full h-full object-contain shadow-xl shadow-black"
          />
        </div>

        {/* main img */}
        <div className=" w-[450px] h-[500px] absolute right-[50%] translate-x-[50%] bottom-0">
          <img
            src={heroImg}
            alt="Fresh grocery hero"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
