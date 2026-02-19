import React from "react";
import AboutCard from "./AboutCard";
import { aboutItemList } from "../assets/ItemsData";
// import img2 from "../assest/img-2.png";

const About = () => {
  return (
    <div className=" mx-auto p-6 flex flex-col gap-6 text-white py-8 bg-gradient-to-b from-green-500 to-white rounded-b-full pb-20 pt-20 w-[90%]">
      <div className="grid grid-cols-1 md:gap-6 md:grid-cols-5 pb-2 md:pb-6 md:p-10 w-[80%] mx-auto">
        {aboutItemList.map((item) => (
          <AboutCard img={item.img} name={item.name} />
        ))}
      </div>

      <div className="text-center">
        <h5 className="text-[12px] tracking-[4px] text-white font-semibold uppercase my-2">
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
    </div>
  );
};

export default About;
