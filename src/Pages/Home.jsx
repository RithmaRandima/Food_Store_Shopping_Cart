import React from "react";
import Shopping from "./Shopping";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50 overflow-x-hidden">
      <Hero />
      <About />
      <Shopping />
      <Newsletter />
    </div>
  );
};

export default Home;
