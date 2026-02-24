import React, { useContext } from "react";
import CartItem from "./CartItem";
import { itemList } from "../assets/ItemsData";
import ShopContext from "../context/Shop-context";

const CartItemContainer = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className=" bg-white flex-3 w-full min-h-screen px-7 pt-1 py-5 ">
      <div>
        {itemList.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default CartItemContainer;
