import React from "react";
import Shopping from "./Shopping";
import Hero from "../Components/Hero";
import About from "../Components/About";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50 overflow-x-hidden">
      <Hero />
      <About />
      <Shopping />
    </div>
  );
};

export default Home;
