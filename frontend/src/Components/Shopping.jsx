import React, { useState } from "react";
import { itemList } from "../assets/ItemsData";
import ItemCard from "./ItemCard";
import img1 from "../assets/img-3.PNG";
import img2 from "../assets/about-dairy.png";
import { Link } from "react-router-dom";

const Shopping = () => {
  const [selected, setSelected] = useState("Vegetables");
  const btnCategories = ["Vegetables", "Fruits", "Dairy", "Bakery", "Meat"];
  return (
    <div className="relative -mt-1 py-5 pb-20">
      {/* img 01 */}
      <div className="absolute w-[350px] h-[350px] bg-lack -right-10 -top-40">
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>

      {/* img 02 */}

      <div className="absolute w-[170px] h-[150px] bg-lack right-40 top-10">
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>

      {/* heading section */}
      <div className="flex flex-col">
        <h1 className="font-extrabold text-[40px] text-black text-center">
          BESTSELLER <span className="text-green-600">PROCUDTS</span>
        </h1>
        <p className="font-bold mt-1 mb-5 w-[400px] mx-auto text-center">
          Get the besr quality and most delicious grocery food in the world, you
          can get the all from here
        </p>

        {/* button section */}
        <div className="my-3 pl-10">
          {btnCategories.map((category, index) => {
            return (
              <button
                key={index}
                className={
                  selected === category ? "btn-primary active" : "btn-primary"
                }
                onClick={() => setSelected(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* item section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-[75%] gap-10 mt-15">
          {itemList
            .filter((item) => item.category === selected) // filter first
            .map((item, index) => ({ ...item, index })) // add index
            .filter((_, idx) => idx < 8) // limit to first 8
            .map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
        </div>

        <div className="mx-auto my-10">
          <Link
            className="bg-black text-white font-semibold tracking-[1px] py-2 rounded-full px-4 text-[13px] hover:scale-105 duration-150 transition-all"
            to={"/products"}
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
