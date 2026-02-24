import React, { useContext } from "react";
import { FaTags } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ShopContext from "../context/Shop-context";

const CartTotalSection = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const generateAmount = (amount, taxrate) => {
    return Number((amount * taxrate).toFixed(2));
  };

  const shippingCost = generateAmount(totalAmount, 0.11);
  const discount = generateAmount(totalAmount, 0.17);
  const tax = generateAmount(totalAmount, 0.1);

  const navigate = useNavigate();

  return (
    <div className="w-[500px] bg-white h-full  fixed top-13 right-0 pt-1 pb-1 pr-1 ">
      <div className=" p-3 pr-20 pt-4  ">
        <h1 className="text-[30px] font-bold mb-2">Total</h1>
        {/* promo section */}
        <div>
          <p className="teacking-[1px] text-[12px] font-semibold text-gray-500">
            ENTER PROMO CODE
          </p>
          <div className="w-full border flex mb-2">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-[100%] pl-2"
            />
            <button className="w-[200px] bg-black text-white py-2 font-semibold text-[14px] tracking-[1px] px-">
              Submit
            </button>
          </div>
        </div>

        {/* price section */}

        <div className="px-2">
          <div className="flex items-center justify-between my-1">
            <p className="font-semibold capitalize text-[15px]">Items Total</p>
            <p className="text-black font-semibold text-[20px]">
              ${totalAmount}
            </p>
          </div>

          <div className="flex items-center justify-between my-1">
            <p className="font-semibold capitalize text-[15px]">Discount</p>
            <p className="text-black font-semibold text-[18px]">$ {discount}</p>
          </div>

          <hr className="text-black/20 my-2" />

          <div className="flex items-center justify-between my-2">
            <p className="font-bold capitalize text-[18px]">Subtotal</p>
            <p className="text-black font-bold text-[20px]">
              $ {Number((totalAmount - discount).toFixed(2))}
            </p>
          </div>

          <div className="flex items-center justify-between my-1">
            <p className="font-semibold capitalize text-[15px]">tax(10%)</p>
            <p className="text-black font-semibold text-[18px]">$ {tax}</p>
          </div>

          <div className="flex items-center justify-between my-1">
            <p className="font-semibold capitalize text-[15px]">
              delivery cost
            </p>
            <p className="text-black font-semibold text-[18px]">
              $ {shippingCost}
            </p>
          </div>

          <hr className="text-black/20 my-1" />

          {/* Estimate total section */}
          <div className="flex items-center justify-between my-2 mt-4">
            <p className="font-bold capitalize text-[20px]">Estmate Total</p>
            <p className="text-black font-extrabold text-[20px]">
              $
              {Number((totalAmount + shippingCost + tax - discount).toFixed(2))}
            </p>
          </div>

          <button
            className="mt-10 mx-auto block bg-green-600 text-[17px] text-white btn-primary border-0  p-2 px-30 cursor-pointer"
            onClick={() => {
              navigate("/home");
            }}
          >
            Checkout
          </button>

          <p className="teacking-[1px] text-[12px] font-semibold text-gray-500 text-center mt-4">
            if you wanna continue shopping{" "}
            <span
              onClick={() => navigate("/")}
              className="text-green-500 cursor-pointer"
            >
              Click Here
            </span>
          </p>
          <p className="text-[30px] absolute right-25 bottom-30 text-green-600/60 ">
            <FaTags />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotalSection;
