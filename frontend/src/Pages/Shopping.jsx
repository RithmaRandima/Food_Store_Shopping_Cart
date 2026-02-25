import React, { useState } from "react";
import { itemList } from "../assets/ItemsData";
import ItemCard from "../Components/ItemCard";
import img1 from "../assets/img-3.PNG";
import img2 from "../assets/about-dairy.png";

const Shopping = () => {
  const [selected, setSelected] = useState("Vegetables");
  const btnCategories = ["Vegetables", "Fruits", "Dairy", "Bakery", "Meat"];
  return (
    <div id="products" className="relative -mt-1 py-5 pb-20">
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
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 mx-auto w-[75%] gap-10 mt-15">
          {itemList
            .filter((item) => item.category === selected)
            .map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shopping;
