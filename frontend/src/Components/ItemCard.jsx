import React, { useContext, useState } from "react";
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
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[item.id];
  const [clickHeart, setClickHeart] = useState(false);
  const oldPrice = (item.price + (item.price * item.discount) / 100).toFixed(2);

  return (
    <Link to={`/products/${item._id}`}>
      <div
        key={item.id}
        className=" bg-gradient-to-t from-white to-white/40 shadow-[1px_1px_5px_rgba(0,0,0,0.1)]  p-4 pt-5 h-fit relative rounded-2xl w-full mt-10
      hover:shadow-[1px_1px_5px_rgba(0,0,0,0.2)] 
      hover:-translate-y-1
      duration-200
      "
      >
        {/* discount section */}
        {item.discount !== 0 && (
          <div className="scale-up flex absolute -top-8 -right-4 flex-col items-center justify-center rounded-full bg-red-500 w-[55px] h-[55px]">
            <p className=" text-[15px] font-extrabold cursor-pointer text-white">
              {item.discount}%
            </p>
            <p className="text-[11px] font-extrabold text-white -mt-1">OFF</p>
          </div>
        )}

        {/* image section */}
        <div className="absolute w-[150px] h-[150px] rounded-full left-[50%] translate-x-[-50%] -top-22">
          <img
            src={`http://localhost:5001/images/${item.image}`}
            alt={item.name}
            className="h-50 w-full object-contain"
          />
        </div>

        {/* rating */}
        <div className="flex flex-col items-end absolute right-2 top-13">
          <div className="mr-2 my-1">
            {clickHeart === false ? (
              <FaRegHeart
                className={`$text-[17px]`}
                onClick={() => {
                  setClickHeart(true);
                }}
              />
            ) : (
              <FaHeart
                className={`$text-[17px]`}
                onClick={() => {
                  setClickHeart(false);
                }}
              />
            )}
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
          <p className="absolute bordr px-2 rounded-full text-[14px] uppercase font-bold bg-white text-black my-1 top-1 left-1">
            {item.option}
          </p>
          <p className="mt-2 font-bold">
            <span className="font-extrabold mr-2 text-[19px] text-green-500">
              ${Number(item.price).toFixed(2)}
            </span>
            <span className="text-slate-400/70 line-through mr-1 text-[16px]">
              ${Number(oldPrice).toFixed(2)}
            </span>
          </p>
          <button
            className="absolute bottom-1 p-2 ronded-tl-2xl right-3 bg-green-500 rounded-full text-white my-2 text-[14px]
          hover:scale-105
          duration-150
          transition-all
          "
            onClick={(e) => {
              e.preventDefault();
              addToCart(item.id);
            }}
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
    </Link>
  );
};

export default ItemCard;
