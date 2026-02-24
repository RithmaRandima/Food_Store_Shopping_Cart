import React from "react";
import mainImg from "../assets/newsletter-img.png";
import img1 from "../assets/about-dairy.png";

import img2 from "../assets/about-fruits.png";
import img3 from "../assets/about-bakery.png";
import img4 from "../assets/about-vegetable.png";
import img5 from "../assets/about-meat.png";
import NewsletterBox from "./NewsletterBox";

const Newsletter = () => {
  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      {/* main img */}
      <div className="absolute -bottom-5 -left-14 w-[500px] h-[560px] ">
        <img src={mainImg} alt="" className="h-full w-full object-cover" />
      </div>

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
  );
};

export default Newsletter;
