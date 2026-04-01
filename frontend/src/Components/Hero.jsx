import React from "react";
import itemTomato from "../assets/item-tomato.png";
import itemBucket from "../assets/about-vegetable.png";
import itemOrange from "../assets/item-orange.png";
import stroke from "../assets/brush-stroke-bg.png";
const Hero = () => {
  return (
    <div className="relative w-full flex h-[90vh] bg-[#6a9c06] overflow-hidden">
      {/* text section */}
      <div className="absolute w-[550px] pt-15 z-30">
        <h1 className="font-extrabold text-[55px] leading-18 text-white">
          Make healthy Life with <span className="text-black">Fresh</span>{" "}
          Grocery
        </h1>
        <p className="font-bold mt-5 text-black">
          Get the best quality and most delicious grocery food in the world, you
          can get the all from here
        </p>
        <button className="my-8 bg-black text-[20px] text-white btn-primary border-0 rounded-l-none p-2 pr-10 cursor-pointer">
          Shop now
        </button>
      </div>

      {/* img tomato */}
      <div className="absolute w-[350px] h-[350px] bottom-10 left-30 z-10 ">
        <img src={itemTomato} alt="" />
      </div>

      {/* image Bucket img */}
      <div className=" w-[350px] h-[350px] absolute right-10 rotate-12 bottom-30">
        <img
          src={itemBucket}
          alt="Fresh grocery hero"
          className=" w-full h-full object-cover"
        />
      </div>

      {/* bg stroke section */}
      <div className="absolute bottom-0 h-[500px] z-1 bg-red400 left-0 right-0 ">
        <img
          src={stroke}
          className="h-full w-full object-cover object-bottom"
          alt=""
        />
      </div>

      {/* bg orange img */}
      <div className="absolute h-[400px] w-[400px] z-1 right-80 -top-60 ">
        <img
          src={itemOrange}
          className="h-full w-full object-cover object-bottom"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
