import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import topStroke from "../assets/brush-stroke-bg-reverse.png";
import bottomStroke from "../assets/brush-stroke-bg.png";
import itemBeetroot from "../assets/item-beetroot.png";
import itemPomegranat from "../assets/item-pomegranat.png";
import itemAvocados from "../assets/item-avocado.png";
import itemOrange from "../assets/item-orange.png";
import itemBellPepper from "../assets/item-bell-pepper.png";
import itemcabbage from "../assets/item-purple-cabbage.png";

// Boxes data
const boxesData = [
  {
    image: itemBeetroot,
    baseOffset: 330,
    width: 160,
    height: 160,
    speed: 0.3,
    left: 5, // manual left % for right side
  },
  {
    image: itemPomegranat,
    baseOffset: 370,
    width: 280,
    height: 280,
    speed: 0.35,
    left: 50,
  },
  {
    image: itemcabbage,
    baseOffset: 730,
    width: 200,
    height: 200,
    speed: 0.35,
    left: 28,
  },
  {
    image: itemBellPepper,
    baseOffset: 350,
    width: 150,
    height: 150,
    speed: 0.2,
    left: 30,
  },
  {
    image: itemOrange,
    baseOffset: 780,
    width: 160,
    height: 160,
    speed: 0.5,
    left: 1,
  },
  {
    image: itemAvocados,
    baseOffset: 1400,
    width: 210,
    height: 200,
    speed: 0.9,
    left: 65,
  },
];

const DealsSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = { fontFamily: "Great Vibes, cursive" };

  return (
    <div className="relative h-[80vh]  overflow-hidden flex">
      {/* Left side - static content */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-[#6a9c06] relative">
        {/* Top Stroke Section */}
        <div className="absolute top-0 h-[150px] z-[1] w-full ">
          <img
            src={topStroke}
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </div>

        {/* Bottom Stroke Section */}
        <div className="absolute -bottom-1 h-[150px]  z-[1] w-full ">
          <img
            src={bottomStroke}
            className="h-full w-full object-cover object-bottom"
            alt=""
          />
        </div>

        {/* right Stroke Section */}
        <div className="absolute -right-61 h-[150px]  z-[1] w-full -rotate-90 ">
          <img
            src={bottomStroke}
            className="h-full w-full object-cover object-bottom"
            alt=""
          />
        </div>

        <h1 className="text-[50px] font-extrabold tracking-[3px] text-white mb-4">
          Organic Vegetables
        </h1>
        <p className="text-white w-[80%] leading-[30px] text-[18px] tracking-[2px] mx-auto text-center">
          Enjoy fresh, nutrient-rich organic vegetables grown naturally without
          chemicals. Savor vibrant flavors and farm-to-table quality, supporting
          healthier meals and sustainable practices for your body and the
          planet.
        </p>
      </div>

      {/* Right side - moving boxes */}
      <div className="w-1/2 relative overflow-hidden">
        {boxesData.map((box, index) => (
          <motion.div
            key={index}
            className={`${box.color} w-[${box.width}px] h-[${box.height}px] absolute `}
            style={{
              top: `${box.baseOffset}px`,
              left: `${box.left}%`,
              transform: `translateY(${scrollY * -box.speed}px)`,
            }}
          >
            <img
              src={box.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
