import React from "react";
// import BackgroundImage from "../../assets/Testimonials-Background.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialData } from "../assets/ItemsData";
import TestimonialsBox from "./TestimonialsBox";
import placeholderImage from "../assets/item-strawberries.png";

const Testimonials = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-full flex flex-col my-15 ">
      {/* placeholder img */}
      <img
        src={placeholderImage}
        className="absolute left-5  top-[20px] w-[280px] h-[280px] object-contain"
        alt=""
      />

      {/* text section */}
      <div className="text-center">
        <h5 className="text-[12px] tracking-[4px] text-black font-semibold uppercase my-2">
          Testimonial
        </h5>
        <h1 className="font-extrabold text-[45px] text-black">
          What People Say
        </h1>
      </div>

      <div className="w-[65%] md:w-[65%] mx-auto mb-4 p-2">
        <Slider {...settings}>
          {testimonialData.map((data) => {
            return (
              <TestimonialsBox
                key={data.id}
                img={data.img}
                title={data.title}
                name={data.name}
                city={data.city}
                message={data.message}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
