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
import Testimonials from "./Testimonials";
import NewsLetterContent from "./NewsLetterContent";

// Boxes data
const boxesData = [
  {
    image: itemBeetroot,
    baseOffset: 1030,
    width: 160,
    height: 160,
    speed: 0.3,
    left: 5, // manual left % for right side
  },
  {
    image: itemPomegranat,
    baseOffset: 1870,
    width: 280,
    height: 280,
    speed: 0.35,
    left: 50,
  },
  {
    image: itemcabbage,
    baseOffset: 1230,
    width: 200,
    height: 200,
    speed: 0.35,
    left: 28,
  },
  {
    image: itemBellPepper,
    baseOffset: 830,
    width: 150,
    height: 150,
    speed: 0.2,
    left: 30,
  },
  {
    image: itemOrange,
    baseOffset: 1900,
    width: 160,
    height: 160,
    speed: 0.5,
    left: 1,
  },
  {
    image: itemAvocados,
    baseOffset: 3000,
    width: 210,
    height: 200,
    speed: 0.9,
    left: 65,
  },
];

const Newsletter = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = { fontFamily: "Great Vibes, cursive" };

  return (
    <div className="relative min-h-full  overflow-hidden flex flex-col">
      {/* Left side - static content */}

      {/* Right side - moving boxes */}
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
          <img src={box.image} className="w-full h-full object-cover" alt="" />
        </motion.div>
      ))}

      <div className="bg-emerald-300 h-[100vh] ">
        <Testimonials />
      </div>
      <div className="bg-emerald-300 h-fit bg-red-400">
        <NewsLetterContent />
      </div>
    </div>
  );
};

export default Newsletter;
