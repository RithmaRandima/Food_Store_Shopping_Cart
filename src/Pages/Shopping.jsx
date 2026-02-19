import React, { useState } from "react";
import { itemList } from "../assets/ItemsData";
import ItemCard from "../Components/ItemCard";

const Shopping = () => {
  const [selected, setSelected] = useState("Vegetables");
  const btnCategories = ["Vegetables", "Fruits", "Dairy", "Bakery"];
  return (
    <div className="-mt-1 py-5 pb-100">
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
        <div className="my-3 mb-7 pl-10">
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
          {/* {itemList.map((item) => {
            return <ItemCard item={item} />;
          })} */}
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
