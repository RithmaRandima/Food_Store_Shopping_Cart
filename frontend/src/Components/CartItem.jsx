import React, { useContext } from "react";
import ShopContext from "../context/Shop-context";

const CartItem = (props) => {
  const { id, name, img, newPrice } = props.data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div>
      <img src={img} alt={name} />
      {/* description and info */}
      <div>
        <p>
          <b>{name}</b>
        </p>
        <p>${newPrice}</p>
        {/* count handeler */}
        <div>
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), id);
            }}
          />
          <button
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
