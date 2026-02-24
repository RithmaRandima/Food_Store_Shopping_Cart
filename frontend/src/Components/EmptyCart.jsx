import React from "react";
import { LiaOpencart } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-green-500 to-white ">
      <LiaOpencart className="text-[80px] text-green-600" />
      <h1 className="font-extrabold text-[40px]">
        Your Cart is <span className="text-green-600">Empty</span>
      </h1>
      <p className="font-bold mt-2">
        must add items on the cart before you preceed to chek out.
      </p>
      <button
        className="my-7 bg-green-600 text-[17px] text-white btn-primary border-0  p-2 px-10 cursor-pointer"
        onClick={() => {
          navigate("/home");
        }}
      >
        Return to Shop
      </button>
    </div>
  );
};

export default EmptyCart;
