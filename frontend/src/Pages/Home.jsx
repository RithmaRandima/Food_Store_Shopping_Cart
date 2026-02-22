import React from "react";
import Shopping from "./Shopping";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Shopping />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
