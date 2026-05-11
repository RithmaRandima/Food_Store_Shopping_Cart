import React from "react";
import mainImg from "../assets/newsletter-img.png";
import img1 from "../assets/about-dairy.png";
import img2 from "../assets/about-fruits.png";
import img3 from "../assets/about-bakery.png";
import img4 from "../assets/about-vegetable.png";
import img5 from "../assets/about-meat.png";
import NewsletterBox from "./NewsletterBox";
import placeholderImage from "../assets/placeholder-image-6.png";

const NewsLetterContent = () => {
  return (
    <div className="relative w-full overflow-hidden h-fit md:h-[500px]">
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block">
        {/* main img */}
        <div className="absolute -bottom-5 -left-14 w-[500px] h-[560px] ">
          <img src={mainImg} alt="" className="h-full w-full object-cover" />
        </div>

        {/* placeholder img */}
        <img
          src={placeholderImage}
          className="absolute left-45 -z-1 opacity-10 -top-[10px] w-[500px] h-[500px] object-contain"
          alt=""
        />

        {/* box 01 */}
        <div className="absolute right-90 top-0">
          <NewsletterBox
            img={img1}
            name={"Creamy dairy for rich comforting dishes."}
          />
        </div>

        {/* box 02 */}
        <div className="absolute right-60 top-25">
          <NewsletterBox
            img={img2}
            name={"Naturally sweet bites of pure sunshine"}
          />
        </div>

        {/* box 03 */}
        <div className="absolute right-40 top-52">
          <NewsletterBox
            img={img3}
            name={"Freshly baked delights, warm from oven"}
          />
        </div>

        {/* box 04 */}
        <div className="absolute right-65 top-80">
          <NewsletterBox
            img={img4}
            name={"Fresh vegetables for vibrant homemade meals."}
          />
        </div>

        {/* box 05 */}
        <div className="absolute right-90 top-105">
          <NewsletterBox
            img={img5}
            name={"Tender cuts crafted for hearty meals"}
          />
        </div>
      </div>

      {/* ================= MOBILE VIEW (NEW MODERN UI) ================= */}
      <div className="md:hidden flex flex-col items-center px-5 py-5 text-center -mt-5">
        {/* background glow */}

        {/* title */}
        <h2 className="text-2xl font-extrabold text-black">
          Fresh Grocery Picks
        </h2>

        <p className="text-gray-600 text-sm mt-2">
          Discover daily fresh essentials delivered to you
        </p>

        {/* cards */}
        <div className="w-full mt-6 flex flex-col gap-3">
          <NewsletterBox
            img={img1}
            name={"Creamy dairy for rich comforting dishes."}
          />
          <NewsletterBox
            img={img2}
            name={"Naturally sweet bites of pure sunshine"}
          />
          <NewsletterBox
            img={img3}
            name={"Freshly baked delights, warm from oven"}
          />
          <NewsletterBox
            img={img4}
            name={"Fresh vegetables for vibrant homemade meals."}
          />
          <NewsletterBox
            img={img5}
            name={"Tender cuts crafted for hearty meals"}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetterContent;
