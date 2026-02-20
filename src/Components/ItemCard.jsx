import React, { useContext } from "react";
import {
  FaCircle,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import ShopContext from "../context/Shop-context";
import { IoMdAdd } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

const ItemCard = ({ item }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[item.id];
  return (
    <div
      key={item.id}
      className="bg-gradient-to-t from-white to-white/40 shadow-[1px_1px_5px_rgba(0,0,0,0.1)]  p-4 pt-5 h-fit relative rounded-2xl w-full mt-10"
    >
      <div className="absolute w-[150px] h-[150px] rounded-full left-[50%] translate-x-[-50%] -top-22">
        <img
          src={item.img}
          alt={item.name}
          className="h-50 w-full object-contain"
        />
      </div>

      {/* rating */}
      <div className="flex flex-col items-end absolute right-2 top-16">
        <div className="mr-2 my-1">
          <FaRegHeart className="text-[17px]" />
        </div>
        <div className="flex gap-0.5">
          <FaStar className="text-[12px] text-black" />
          <FaStar className="text-[12px] text-black" />
          <FaStar className="text-[12px] text-black" />
          <FaStar className="text-[12px] text-black" />
          <FaStar className="text-[12px] text-black" />
        </div>
      </div>
      {/* item details */}
      <div className="mt-15">
        <h1 className="font-bold text-[20px]">{item.name}</h1>
        <p className="text-[10px] uppercase tracking-[4px] font-bold text-gray-500">
          {item.category}
        </p>
        <p className="mt-2 font-bold">
          <span className="font-extrabold mr-2 text-[19px] text-green-500">
            ${item.newPrice}
          </span>
          <span className="text-gray-300 mr-1 text-[16px]">
            ${item.oldPrice}
          </span>
        </p>
        <button
          className="absolute bottom-1 p-2 ronded-tl-2xl right-3 bg-green-500  text-white my-2 text-[14px]"
          onClick={() => addToCart(item.id)}
        >
          <TiShoppingCart className="text-[20px]" />{" "}
        </button>

        {/* count */}
        {cartItemAmount > 0 && (
          <div className="absolute w-[35px] h-[35px] flex items-center justify-center font-extrabold text-black top-0 right-0">
            {cartItemAmount}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
