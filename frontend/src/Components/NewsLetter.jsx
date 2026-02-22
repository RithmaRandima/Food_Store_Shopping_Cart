import React from "react";
import mainImg from "../assets/newsletter-img.png";
import img1 from "../assets/img-2.png";
import img2 from "../assets/newsletter-delivery.png";
import img3 from "../assets/newsletter-low.png";
import img4 from "../assets/newsletter-best-service.png";
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
        <NewsletterBox img={img1} name={"FRESH & HEALTHY FOODS"} />
      </div>

      {/* box 02 */}
      <div className="absolute right-60 top-30">
        <NewsletterBox img={img2} name={"FRESH & HEALTHY FOODS"} />
      </div>

      {/* box 03 */}
      <div className="absolute right-70 top-65">
        <NewsletterBox img={img3} name={"FRESH & HEALTHY FOODS"} />
      </div>

      {/* box 04 */}
      <div className="absolute right-100 top-95">
        <NewsletterBox img={img4} name={"FRESH & HEALTHY FOODS"} />
      </div>
    </div>
  );
};

export default Newsletter;
