import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/about-feature-img-1.jpg";
import img2 from "../assets/about-feature-img-2.jpg";
import img3 from "../assets/about-feature-img-3.jpg";
const FeatureSection = () => {
  const style = {
    fontFamily: "Great Vibes, cursive",
  };

  const [scrollY, setScrollY] = useState(0);
  const baseOffset1 = 370;
  const baseOffset2 = 800;
  const baseOffset3 = 1450;
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-full p-5 px-20 flex flex-col gap-10 ">
      {/* top */}
      <div className=" flex ">
        <div className="flex-1 flex justify-center items-center text-center">
          {/* text section */}
          <motion.div
            className="bg-green-400/70 p-4 py-6"
            style={{
              transform: `translateY(${baseOffset1 + scrollY * -1}px)`,
            }}
          >
            {/* header */}
            <div className="text-center ">
              <h1
                style={style}
                className="text-black font-exd text-[22px] tracking-[4px] -mb-4"
              >
                Fresh
              </h1>
              <h1 className="text-white uppercase text-[50px] tracking-[5px] font-extrabold mb-4">
                Living
              </h1>
            </div>
            <p className="text-black text-[19px] font-extralight">
              "We bring you the freshest groceries every day, carefully sourced
              from trusted farms and suppliers. From crisp vegetables to daily
              essentials, we make healthy living simple, convenient, and
              accessible for every home."
            </p>

            <p className="text-black text-[19px] font-extralight my-2">
              Enjoy quality you can trust, delivered with care to your
              doorstep—so you spend less time shopping and more time living.
            </p>
            <p className="text-black text-[19px] font-extralight">
              We make everyday shopping effortless with reliable delivery and
              handpicked products you can count on.
            </p>

            <p className="underline text-black text-[20px] mt-5">Shop Mow</p>
          </motion.div>
        </div>
        <div className=" flex-1 px-10 h-150">
          <img src={img1} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      {/* middle */}
      <div className=" flex ">
        <div className="flex-2 px-5 pr-15 h-120">
          <img src={img2} alt="" className="h-full w-full object-cover" />
        </div>

        <div className=" flex-1">
          {/* text section */}
          <motion.div
            className="bg-purple-500/60 p-4 py-6 "
            style={{
              transform: `translateY(${baseOffset2 + scrollY * -0.8}px)`,
            }}
          >
            {/* header */}
            <div className="text-center ">
              <h1
                style={style}
                className="text-black font-exd text-[22px] tracking-[4px] -mb-4"
              >
                Explore
              </h1>

              <h1 className="text-white uppercase text-[40px] tracking-[2px] font-extrabold mb-4">
                Our Store
              </h1>
            </div>
            <p className="text-black text-center text-[19px] font-extralight">
              "Discover a wide range of fresh produce, pantry essentials, and
              daily needs all in one place. We focus on quality, affordability,
              and convenience to make your grocery shopping smooth and
              enjoyable."
            </p>

            <p className="underline text-black text-center text-[17px] mt-5">
              Browse Products
            </p>
          </motion.div>
        </div>
      </div>
      {/* bottom */}
      <div className=" flex ">
        <div className=" flex-1 flex justify-center items-center text-center">
          {/* text section */}
          <motion.div
            className="bg-red-400/60 p-4 py-6"
            style={{
              transform: `translateY(${baseOffset3 + scrollY * -1}px)`,
            }}
          >
            {/* header */}
            <div className="text-center">
              <h1
                style={style}
                className="text-black font-exd text-[22px] tracking-[4px] -mb-4"
              >
                Trusted
              </h1>
              <h1 className="text-white uppercase text-[50px] tracking-[5px] font-extrabold mb-4">
                Quality
              </h1>
            </div>
            <p className="text-balc text-[19px] font-extralight">
              "We partner with trusted farmers and suppliers to bring you
              high-quality products you can rely on. Every item is carefully
              selected to ensure freshness, nutrition, and value for your
              everyday needs."
            </p>

            <p className="underline text-black text-[20px] mt-5">LEarn More</p>
          </motion.div>
        </div>
        <div className=" flex-1 px-10 h-150">
          <img src={img3} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
