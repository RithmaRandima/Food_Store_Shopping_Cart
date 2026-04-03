import React from "react";
import contentImage from "../assets/placeholder-image-2.png";

const Reviews = ({ priductId }) => {
  return (
    <div className=" flex mt-9 gap-5">
      {/* left side */}
      <div className="w-full">
        <h1 className="font-bold text-[22px] ">Reviews</h1>
        {/* review Container */}
        <div className=" w-full h-50 mt-5 border rounded-[10px] border-slate-300 h-[500px] overflow-y-scroll">
          <div className="bg-red-200 mb-3 h-[150px]"></div>
          <div className="bg-red-200 mb-3 h-[150px]"></div>
          <div className="bg-red-200 mb-3 h-[150px]"></div>
          <div className="bg-red-200 mb-3 h-[150px]"></div>
          <div className="bg-red-200 mb-3 h-[150px]"></div>
        </div>
      </div>

      {/* right side */}
      <div className="mt-15 w-[820px] relative ">
        <div>
          <h1 className="font-semibold text-[20px] ">
            Share your thoughts about this product!
          </h1>
          <p className="font-extralight text-slate-500">
            We love hearing from our shoppers
          </p>
        </div>

        {/* middle image */}
        <img
          src={contentImage}
          className="absolute h-[250px] w-[250px] -z-[1] opacity-7 object-cover"
          alt=""
        />

        {/* form */}
        <form className="flex flex-col gap-5 mt-10 ">
          {/* name input */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-black rounded-full px-4 py-2  focus:outline-1"
          />

          {/* comment input */}
          <textarea
            rows="3"
            placeholder="Write your comment..."
            className=" border border-black rounded-[12px] my-2 px-4 py-2 focus:outline-1 resize-none"
          ></textarea>

          {/* button */}
          <button
            type="submit"
            className="bg-black font-bold text-[16px] tracking-[1px] text-white py-3 rounded-full hover:scale-105 transition-transform duration-200 w-[60%] mx-auto"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
