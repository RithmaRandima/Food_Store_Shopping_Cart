import React, { useContext } from "react";
import ShopContext from "../context/Shop-context";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EmptyCart from "../Components/EmptyCart";

import CartItemContainer from "../Components/CartItemContainer";
import CartTotalSection from "../Components/CartTotalSection";

const Cart = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div>
      <div className="fixed left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Cart Page Title */}

      {/* checkput section */}
      {totalAmount ? (
        <div>
          <div className="py-7">
            <h1 className="pt-11 pb-3 pl-15 font-extrabold text-[35px] border-b border-black/20">
              My Cart
            </h1>
          </div>
          <div className="flex pb-10">
            <CartItemContainer />
            <div className=" flex-2 relative w-full min-h-screen ">
              <CartTotalSection />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
        // <h1>Your Cart is Empty</h1>
      )}
      <div className="fixed left-0 right-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
