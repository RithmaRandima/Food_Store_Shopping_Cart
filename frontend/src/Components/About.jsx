import React from "react";
import AboutCard from "./AboutCard";
import { aboutItemList } from "../assets/ItemsData";
import placeholderImage from "../assets/placeholder-image.png";

const About = () => {
  return (
    <div className="relative mx-auto p-6 flex flex-col gap-6 text-white py-8 pb-20 w-[90%]">
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block">
        {/* placeholder img */}
        <img
          src={placeholderImage}
          className="absolute -left-55 bottom-[20px] opacity-70 w-[400px] h-[400px] object-contain"
          alt=""
        />

        {/* text */}
        <div className="text-center mb-5">
          <h5 className="text-[12px] tracking-[4px] text-black font-semibold uppercase my-2">
            TASTY AND HEALTHEY
          </h5>
          <h1 className="font-extrabold text-[45px] text-black">
            OUR POPULAR GOODS
          </h1>
          <p className="max-w-[600px] mx-auto text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, atque
            expedita, incidunt quam, libero quod consectetur quaerat optio vitae
            fugiat eveniet quisquam vero nostrum qui!lorem
          </p>
        </div>

        {/* list */}
        <div className="grid grid-cols-1 md:gap-6 md:grid-cols-5 pb-2 md:pb-6 md:p-10 w-[90%] mx-auto">
          {aboutItemList.map((item) => (
            <AboutCard
              key={item.name}
              img={item.img}
              name={item.name}
              itemCount={item.itemCount}
            />
          ))}
        </div>
      </div>

      {/* ================= MOBILE (NEW MODERN VERSION) ================= */}
      <div className="md:hidden relative flex flex-col items-center text-center gap-6">
        {/* floating background image */}
        <div className="absolute w-full flex  -left-40 top-40  justify-center">
          <img src={placeholderImage} className="w-[270px] opacity-30" alt="" />
        </div>

        {/* title */}
        <div>
          <h5 className="text-[10px] tracking-[3px] text-black font-semibold uppercase">
            TASTY AND HEALTHY
          </h5>
          <h1 className="font-extrabold text-[28px] text-black mt-2">
            OUR POPULAR GOODS
          </h1>
          <p className="text-black text-sm mt-3 px-4">
            Fresh, organic and high quality products delivered to your doorstep.
          </p>
        </div>

        {/* horizontal scroll cards (mobile UX upgrade) */}
        <div className="w-full overflow-x-auto pt-20 pb-3">
          <div className="flex gap-4 px-2 w-max">
            {aboutItemList.map((item) => (
              <div key={item.name} className="min-w-[140px]">
                <AboutCard
                  img={item.img}
                  name={item.name}
                  itemCount={item.itemCount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
