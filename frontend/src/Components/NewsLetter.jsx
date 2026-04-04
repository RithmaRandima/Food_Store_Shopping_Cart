import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import itemPomegranat from "../assets/item-pomegranat.png";
import itemPassion from "../assets/item_passion.png";
import itemBlueberry from "../assets/item-blueberry.png";
import Testimonials from "./Testimonials";
import NewsLetterContent from "./NewsLetterContent";

// Boxes data
const boxesData = [
  {
    image: itemPomegranat,
    baseOffset: 2400,
    width: 350,
    height: 350,
    speed: 0.47,
    left: 75,
  },

  {
    image: itemBlueberry,
    baseOffset: 2150,
    width: 300,
    height: 300,
    speed: 0.5,
    left: 2,
  },
  {
    image: itemPassion,
    baseOffset: 3200,
    width: 400,
    height: 400,
    speed: 0.9,
    left: 80,
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

      <div>
        <Testimonials />
      </div>
      <div>
        <NewsLetterContent />
      </div>
    </div>
  );
};

export default Newsletter;
