import React from "react";
import itemTomato from "../assets/item-tomato.png";
import itemBucket from "../assets/about-vegetable.png";
import itemOrange from "../assets/item-orange.png";
import stroke from "../assets/brush-stroke-bg.png";

const Hero = () => {
  return (
    <div className="relative w-full flex h-[90vh] bg-[#6a9c06] overflow-hidden">
      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden md:block w-full h-full relative">
        {/* text section */}
        <div className="absolute w-[550px] pt-15 z-30">
          <h1 className="font-extrabold text-[55px] leading-18 text-white">
            Make healthy Life with <span className="text-black">Fresh</span>{" "}
            Grocery
          </h1>
          <p className="font-bold mt-5 text-black">
            Get the best quality and most delicious grocery food in the world,
            you can get the all from here
          </p>
          <button className="my-8 bg-black text-[20px] text-white btn-primary border-0 rounded-l-none p-2 pr-10 cursor-pointer">
            Shop now
          </button>
        </div>

        {/* tomato */}
        <div className="absolute w-[350px] h-[350px] bottom-10 left-30 z-10 ">
          <img src={itemTomato} alt="" />
        </div>

        {/* bucket */}
        <div className=" w-[350px] h-[350px] absolute right-10 rotate-12 bottom-30">
          <img src={itemBucket} alt="" className="w-full h-full object-cover" />
        </div>

        {/* stroke */}
        <div className="absolute bottom-0 h-[500px] z-1 left-0 right-0 ">
          <img
            src={stroke}
            className="h-full w-full object-cover object-bottom"
            alt=""
          />
        </div>

        {/* orange */}
        <div className="absolute h-[400px] w-[400px] z-1 right-80 -top-60 ">
          <img src={itemOrange} className="h-full w-full object-cover" alt="" />
        </div>
      </div>

      {/* ================= MOBILE VIEW (NEW MODERN DESIGN) ================= */}
      <div className="md:hidden relative w-full flex flex-col items-center justify-center text-center px-6 relative z-20">
        {/* background soft glow */}
        <div className="absolute w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl top-10"></div>

        {/* title */}
        <h1 className="text-white text-3xl font-extrabold leading-snug mt-25">
          Make healthy life with{" "}
          <span className="text-black">Fresh Grocery</span>
        </h1>

        {/* description */}
        <p className="text-black font-medium mt-4 text-sm">
          Get fresh, healthy and organic groceries delivered fast to your home.
        </p>

        {/* button */}
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
          Shop now
        </button>

        {/* images stack */}
        <div className="relative mt-10 flex items-center justify-center">
          <img
            src={itemTomato}
            className="w-[260px] absolute -left-50 -top-45"
          />

          <img src={itemBucket} className="w-[230px] z-10" />

          <img
            src={itemOrange}
            className="w-[170px] absolute -right-27 -top-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
