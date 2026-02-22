import React, { useContext } from "react";
import { itemList } from "../assets/ItemsData";
import ShopContext from "../context/Shop-context";
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar />
      <div>
        <h1>Your Cart items</h1>
      </div>
      {/* cart items */}
      <div>
        {itemList.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
      {/* checkput section */}
      {totalAmount ? (
        <div>
          <p>Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
