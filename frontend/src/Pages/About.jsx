import React from "react";
import Navbar from "../Components/Navbar";
import FeatureSection from "../Components/FeatureSection";

const About = () => {
  return (
    <div className="bg-black overflow-hdden">
      <Navbar />
      <div className="py-5">
        <h1 className="text-white text-center text-[80px] font-bold my-10">
          About Us
        </h1>
        <p className="text-white text-center w-[70%] mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          nostrum laudantium incidunt, aspernatur aperiam assumenda.
        </p>
        <FeatureSection />
      </div>
    </div>
  );
};

export default About;
