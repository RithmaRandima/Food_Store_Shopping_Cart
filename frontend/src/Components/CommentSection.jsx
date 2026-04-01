import React from "react";
import topStroke from "../assets/brush-stroke-bg-reverse.png";
import bottomStroke from "../assets/brush-stroke-bg.png";
import contentImage from "../assets/placeholder-image-2.png";

const CommentSection = () => {
  return (
    <div className="comment-section min-h-screen relative">
      {/* Top Stroke Section */}
      <div className="absolute top-0 h-[150px] z-[1] w-full ">
        <img
          src={topStroke}
          className="h-full w-full object-cover object-top"
          alt=""
        />
      </div>
      {/* Bottom Stroke Section */}
      <div className="absolute bottom-0 h-[150px]  z-[1] w-full ">
        <img
          src={bottomStroke}
          className="h-full w-full object-cover object-bottom"
          alt=""
        />
      </div>
      {/* content section */}
      <div className="absolute left-20 p-8 z-30 bg-white top-[60px]  transform-gpu w-[530px] h-[530px] rounded-full flex items-center justify-center">
        {/* content */}
        <div className="w-[90%]">
          {/* heading */}
          <div className="text-center mb-5">
            <h1 className="text-[35px] font-extrabold text-gray-800">
              What You Think ?
            </h1>
            <p className="text-gray-500 mt-2 text-[16px] tracking-[2px] w-[340px] mx-auto">
              Share your experience with our fresh products and service
            </p>
          </div>

          {/* form */}
          <form className="flex flex-col gap-5 mt-10">
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
              className=" border border-black rounded-[12px] w-[90%] mx-auto px-4 py-2 focus:outline-1 resize-none"
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

        {/* middle image */}
        <img
          src={contentImage}
          className="absolute h-[250px] w-[250px] -z-[1] opacity-10 object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default CommentSection;
