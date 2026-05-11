import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialData } from "../assets/ItemsData";
import TestimonialsBox from "./TestimonialsBox";
import placeholderImage from "../assets/placeholder-image-5.png";

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-full flex flex-col my-15">
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block">
        {/* placeholder img */}
        <img
          src={placeholderImage}
          className="absolute left-5 top-[20px] w-[280px] h-[280px] object-contain opacity-20"
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
            {testimonialData.map((data) => (
              <TestimonialsBox
                key={data.id}
                img={data.img}
                title={data.title}
                name={data.name}
                city={data.city}
                message={data.message}
              />
            ))}
          </Slider>
        </div>
      </div>

      {/* ================= MOBILE VIEW (SLIDER VERSION) ================= */}
      <div className="md:hidden relative flex flex-col items-center px-6 text-center relative">
        {/* background glow */}
        <div className="absolute w-[220px] h-[220px] bg-green-200 blur-3xl opacity-40 rounded-full top-10"></div>

        {/* image */}
        <img
          src={placeholderImage}
          className="w-[160px] opacity-80 mb-4"
          alt=""
        />

        {/* heading */}
        <h5 className="text-[10px] tracking-[3px] text-gray-500 uppercase">
          Testimonial
        </h5>

        <h1 className="font-extrabold text-[28px] text-black mt-1">
          What People Say
        </h1>

        {/* MOBILE SLIDER */}
        <div className="w-full mt-6">
          <Slider
            {...{
              arrows: false,
              dots: true,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 4000,
              speed: 800,
              slidesToShow: 1,
              slidesToScroll: 1,
            }}
          >
            {testimonialData.map((data) => (
              <div key={data.id} className="px-2">
                <div className="bg-white shadow-lg rounded-2xl p-5 text-left">
                  <TestimonialsBox
                    img={data.img}
                    title={data.title}
                    name={data.name}
                    city={data.city}
                    message={data.message}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
