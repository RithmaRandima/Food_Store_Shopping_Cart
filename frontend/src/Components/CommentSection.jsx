import React from "react";
import topStroke from "../assets/brush-stroke-bg-reverse.png";
import bottomStroke from "../assets/brush-stroke-bg.png";
import contentImage from "../assets/placeholder-image-2.png";

const CommentSection = () => {
  return (
    <div className="comment-section min-h-screen relative">
      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden md:block">
        {/* Top Stroke Section */}
        <div className="absolute top-0 h-[150px] z-[1] w-full ">
          <img
            src={topStroke}
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </div>

        {/* Bottom Stroke Section */}
        <div className="absolute bottom-0 h-[150px] z-[1] w-full ">
          <img
            src={bottomStroke}
            className="h-full w-full object-cover object-bottom"
            alt=""
          />
        </div>

        {/* content section */}
        <div className="absolute left-20 p-8 z-30 bg-white top-[60px] transform-gpu w-[530px] h-[530px] rounded-full flex items-center justify-center">
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
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-black rounded-full px-4 py-2 focus:outline-1"
              />

              <textarea
                rows="3"
                placeholder="Write your comment..."
                className="border border-black rounded-[12px] w-[90%] mx-auto px-4 py-2 focus:outline-1 resize-none"
              ></textarea>

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

      {/* ================= MOBILE VIEW (FIXED VISIBILITY) ================= */}
      <div className="md:hidden flex flex-col items-center justify-center px-6 py-16 text-center relative z-10">
        {/* 🔥 DARK OVERLAY (fix visibility on light bg) */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-0"></div>

        {/* CONTENT CARD */}
        <div className="relative z-10 w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6">
          {/* image */}
          <img src={contentImage} className="w-[160px] mx-auto mb-4" alt="" />

          {/* heading */}
          <h1 className="text-2xl font-extrabold text-gray-900">
            What You Think ?
          </h1>

          <p className="text-gray-600 text-sm mt-2 px-2">
            Share your experience with our fresh products and service
          </p>

          {/* form */}
          <form className="w-full mt-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
            />

            <textarea
              rows="4"
              placeholder="Write your comment..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 resize-none bg-white"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
