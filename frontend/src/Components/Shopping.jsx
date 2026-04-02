import React, { useEffect, useState } from "react";
import { itemList } from "../assets/ItemsData";
import ItemCard from "./ItemCard";
import img1 from "../assets/img-3.PNG";
import placeholderImage from "../assets/placeholder-image-3.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Shopping = () => {
  const [selected, setSelected] = useState("Vegetables");
  const btnCategories = ["Vegetables", "Fruits", "Dairy", "Bakery", "Meat"];

  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/product/all-products",
        );
        if (data.success) {
          setList(data.products);
        } else {
          toast.error("Failed to Load Data");
        }
      } catch (error) {
        console.error("Error on fetchList function on ProductList Page", error);
        toast.error("Something went wrong while fetching products");
      }
    };

    fetchList();
  }, []);

  return (
    <div className="relative py-5 pb-20 mt-15">
      {/* bg img */}
      <img
        src={img1}
        className="absolute left-[50%] -translate-x-[50%]  top-[230px] opacity-40 w-[750px] h-[750px] object-cover"
        alt=""
      />

      {/* placeholder img */}
      <img
        src={placeholderImage}
        className="absolute -right-5  -top-[40px] opacity-70 w-[320px] h-[320px] object-contain"
        alt=""
      />

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
        <div className="my-3 pl-10 mt-10 mb-5">
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
          {list
            .filter((item) => item.category === selected) // filter first
            .map((item, index) => ({ ...item, index })) // add index
            .filter((_, idx) => idx < 8) // limit to first 8
            .map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
        </div>

        <div className="mx-auto mt-15 mb-10">
          <Link
            className="bg-black text-white font-semibold tracking-[1px] py-2 rounded-full px-6 text-[20px] hover:scale-105 duration-150 transition-all"
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
