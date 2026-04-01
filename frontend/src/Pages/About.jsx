import React from "react";
import Navbar from "../Components/Navbar";
import FeatureSection from "../Components/FeatureSection";
import img1 from "../assets/item-orange.png";
import img2 from "../assets/item-garlic.png";
import img3 from "../assets/item-cheese.png";
import img4 from "../assets/item-tomato.png";

const About = () => {
  return (
    <div className="overflow-hdden relative">
      {/* img 01 */}
      <div className="absolute w-[210px] pl-2 h-[210px] z-1 right-0 items-center top-20 flex">
        <img src={img1} alt="" className=" w-full h-full object-cover" />
      </div>

      {/* img 02 */}
      <div className="absolute w-[320px] pl-2 h-[320px] left-10 items-center top-70 flex">
        <img src={img2} alt="" className=" w-full h-full object-cover" />
      </div>

      {/* img 03 */}
      <div className="absolute w-[340px] pl-2 h-[340px] right-0 items-center top-230 flex">
        <img src={img3} alt="" className=" w-full h-full object-cover" />
      </div>

      {/* img 04 */}
      <div className="absolute w-[400px] pl-2 h-[400px] left-4 items-center -bottom-10 flex">
        <img src={img4} alt="" className=" w-full h-full object-cover" />
      </div>

      <Navbar />
      <div className="py-5">
        <h1 className="text-center text-[80px] font-bold ">About Us</h1>
        <p className=" text-center w-[70%] mx-auto mb-10">
          Grocery store offers a wide range of fresh produce, quality meats, and
          everyday essentials at affordable prices. From organic and gluten-free
          options to freshly baked goods and pantry staples, we have something
          for everyone. We support local farmers and suppliers to ensure
          freshness and quality.
        </p>
        <FeatureSection />
      </div>
    </div>
  );
};

export default About;
