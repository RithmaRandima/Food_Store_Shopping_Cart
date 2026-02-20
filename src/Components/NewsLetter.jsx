import React from "react";
import mainImg from "../assets/newsletter-img.png";
import img1 from "../assets/img-2.png";
import NewsletterBox from "./NewsletterBox";

const Newsletter = () => {
  return (
    <div className="relative w-full overflow-hidden h-[450px]">
      {/* main img */}
      <div className="absolute -bottom-5 -left-14 w-[500px] h-[530px] ">
        <img src={mainImg} alt="" className="h-full w-full object-cover" />
      </div>

      {/* box 01 */}
      <div className="absolute right-110 top-0">
        <NewsletterBox img={img1} name={"FRESH & HEALTHY FOODS"} />
      </div>

      {/* box 02 */}
      <div className="absolute right-70 top-25">
        <NewsletterBox img={img1} name={"FRESH & HEALTHY FOODS"} />
      </div>

      {/* box 03 */}
      <div className="absolute right-80 top-55">
        <NewsletterBox img={img1} name={"FRESH & HEALTHY FOODS"} />
      </div>

      {/* box 04 */}
      <div className="absolute right-100 top-85">
        <NewsletterBox img={img1} name={"FRESH & HEALTHY FOODS"} />
      </div>
    </div>
  );
};

export default Newsletter;
