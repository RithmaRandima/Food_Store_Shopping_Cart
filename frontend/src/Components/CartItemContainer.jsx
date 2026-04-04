import React, { useContext } from "react";
import CartItem from "./CartItem";
import ShopContext from "../context/Shop-context";

const CartItemContainer = () => {
  const { cartItems, defaultCart } = useContext(ShopContext);

  // console.log(cartItems);
  return (
    <div className="flex-1 w-full min-h-screen px-5 ">
      <div>
        {defaultCart.map((item) => {
          if ((cartItems[item._id] || 0) > 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default CartItemContainer;
