import React from "react";
import Shopping from "../Components/Shopping";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CommentSection from "../Components/CommentSection";
import Testimonials from "../Components/Testimonials";
import DealsSection from "../Components/DealsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-green50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <DealsSection />
      <Shopping />
      <CommentSection />
      {/* <Testimonials /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
