import React, { useContext } from "react";
import ShopContext from "../context/Shop-context";
import { TiMinus, TiPlus } from "react-icons/ti";

const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const { _id, name, image, price, discount, option } = props.data;
  const cartItemAmount = cartItems[_id];

  return (
    <div
      className="bg-white relative p-2.5 flex items-center my-6 justify-center hover:border-b border-slate-300/40 w-full mx-auto
      
    "
    >
      {/* img section */}
      <div className="w-30 h-30 flex items-center justify-center rounded-[10px]">
        <img
          src={`http://localhost:5001/images/${image}`}
          alt={name}
          className="w-30 h-30 object-contain "
        />
      </div>

      {/* description and info */}
      <div className=" ml-8 relative">
        <div className="flex-2 ">
          <p className="text-[20px] font-semibold tracking-[0.4px]">{name}</p>
          <p className="text-[15px] my-1 text-slate-400">
            Unit Price: ${price.toFixed(2)}
          </p>
        </div>

        {/* count handeler */}
        <div className=" flex items-center my-2">
          <button
            onClick={() => {
              removeFromCart(_id);
            }}
            className="h-7 w-7 border border-slate-300 text-slate-700 flex items-center justify-center rounded-4xl hover:bg-[#6a9c06]/80 hover:text-white transition-all duration-100 hover:scale-105"
          >
            <TiMinus className=" text-[14px]" />
          </button>
          <input
            type="text"
            value={cartItems[_id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), _id);
            }}
            className="text-center w-[13%] p-1 shadow-2xl font-bold"
          />
          <button
            onClick={() => {
              addToCart(_id);
            }}
            className="h-7 w-7 border border-slate-300 text-slate-700 flex items-center justify-center rounded-4xl hover:bg-[#6a9c06]/80 hover:text-white transition-all duration-100 hover:scale-105"
          >
            <TiPlus className="text-[14px]" />
          </button>
        </div>
      </div>

      {/* discount */}
      {discount > 0 && (
        <div className="absolute top-4 right-6 font-bold bg-red-400 text-white text-[11px] py-[1px] px-2 rounded-full animate-pulse">
          -{discount}%
        </div>
      )}
      {/* option */}
      <p className="absolute tracking-[1px] left-23 bottom-5 bg-black text-white px-1 text-[14px] font-extrabold">
        {option}
      </p>

      {/* price section */}
      <div className=" flex-1 -mt-13 text-center">
        <p className="font-bold text-black text-[25px]">
          ${(price * cartItemAmount).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
