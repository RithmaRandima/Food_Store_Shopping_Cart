import React, { useContext } from "react";
import ShopContext from "../context/Shop-context";
import { TiMinus, TiPlus } from "react-icons/ti";

const CartItem = (props) => {
  const { id, name, img, newPrice, quantity, oldPrice } = props.data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div
      className="bg-white my-2 mb-3  flex items-center shadow-[0px_1px_10px_rgba(0,0,0,0.1)] rounded-full p-2 px-4 w-[90%] mx-auto
      hover:-translate-y-1
      hover:shadow-[0px_1px_7px_rgba(0,0,0,0.2)]
      duration-150
    "
    >
      {/* img section */}
      <div className="w-32 h-30">
        <img src={img} alt={name} className="w-32 h-32 object-cover " />
      </div>
      {/* description and info */}
      <div className="flex-2 p-4 ">
        <p className="text-[22px] tracking-[1px]">
          <b>{name}</b>
        </p>
        <p className="text-[18px] mb-3 text-gray-500 font-semibold mt-1 ml-3">
          ${quantity}
        </p>
        {/* count handeler */}
        <div className=" flex items-center gap-4">
          <button
            onClick={() => {
              removeFromCart(id);
            }}
            className="h-6 w-10 bg-green-600/60 flex items-center justify-center rounded-4xl hover:bg-green-600/80 transition-all duration-100 hover:scale-105"
          >
            <TiMinus className="text-green-800 text-[14px]" />
          </button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), id);
            }}
            className="text-center w-[20%] p-1 shadow-2xl font-bold"
          />
          <button
            onClick={() => {
              addToCart(id);
            }}
            className="h-6 w-10 bg-green-600/60 flex items-center justify-center rounded-4xl hover:bg-green-600/80 transition-all duration-100 hover:scale-105"
          >
            <TiPlus className="text-green-800 text-[14px]" />
          </button>
        </div>
      </div>

      {/* price section */}
      <div className=" flex-1">
        <p className="font-extrabold text-green-500 text-[25px]">
          ${Number(newPrice.toFixed(2))}
        </p>
        <p className="line-through text-gray-400 font-semibold ml-4">
          ${Number(oldPrice.toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
