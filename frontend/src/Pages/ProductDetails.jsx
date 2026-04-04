import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { FaShoppingBag } from "react-icons/fa";
import Reviews from "../Components/Reviews";
import ShopContext from "../context/Shop-context";
const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const [clickHeart, setClickHeart] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [activeButton, setActiveButton] = useState("description");
  const cartItemAmount = cartItems[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/product/${id}`,
        );
        if (data.success) {
          setProductDetails(data.product);
        } else {
          toast.error("Somethings went wrong");
        }
      } catch (error) {
        console.error(
          "Error on fetchProductData function on ProductDetails Page",
          error,
        );
        toast.error("Something went wrong while fetching product Data");
      }
    };
    fetchProductData();
  }, [id]);

  const categoryColors = {
    Vegetables: "text-green-500",
    Fruits: "text-yellow-400",
    Meat: "text-red-400",
    Dairy: "bg-white border border-gray-300 text-black",
    Bakery: "text-orange-400",
  };

  const oldPrice = (
    productDetails.price +
    (productDetails.price * productDetails.discount) / 100
  ).toFixed(2);
  return (
    <div className="">
      <Navbar />
      {/* top */}
      <div className="w-full h-[100vh] flex">
        {/* left section */}
        <div className="w-full h-full p-7 relative">
          {/* image container */}
          <div className="w-full h-full border border-gray-300 rounded-[10px] relative">
            <img
              src={`http://localhost:5001/images/${productDetails.image}`}
              className="w-full h-full object-contain"
              alt={productDetails.name}
            />
          </div>

          {/* discount section */}
          {productDetails.discount !== 0 && (
            <div className="scale-up flex absolute top-10 right-10 rotate-12 flex-col items-center justify-center rounded-full bg-red-500 w-[80px] h-[80px]">
              <p className=" text-[25px] font-extrabold cursor-pointer text-white">
                {productDetails.discount}%
              </p>
              <p className="text-[19px] font-extrabold text-white -mt-3">OFF</p>
            </div>
          )}
        </div>

        {/* right Section */}
        <div className="relative w-full h-full p-7">
          {/* product details */}

          {/* category */}
          <p
            className={`text-[15px] mt-5  tracking-[1px]  ${categoryColors[productDetails.category] || "bg-gray-200"}`}
          >
            {productDetails.category}
          </p>

          {/* name and favourite */}
          <div className="flex items-center -mt-2">
            <h1 className="font-semibold  text-[40px]">
              {productDetails.name}
            </h1>
            <div className="ml-2  text-[30px]">
              {clickHeart === false ? (
                <FaRegHeart
                  className=""
                  onClick={() => {
                    setClickHeart(true);
                  }}
                />
              ) : (
                <FaHeart
                  className=""
                  onClick={() => {
                    setClickHeart(false);
                  }}
                />
              )}
            </div>
          </div>

          {/* rating stars */}
          <div className="flex gap-0.5">
            <FaStar className="text-[10px] text-black" />
            <FaStar className="text-[10px] text-black" />
            <FaStar className="text-[10px] text-black" />
            <FaStar className="text-[10px] text-black" />
            <FaStar className="text-[10px] text-black" />
          </div>

          {/* status */}
          <p
            className={`text-[11px] border w-fit px-3 py-[2px] rounded-full my-6   ${productDetails.status === "In Stock" ? "bg-green-300/20 border-green-500 text-green-500" : "bg-red-300/20 border-red-500 text-red-500"}`}
          >
            {productDetails.status}
          </p>

          {/* Product Description */}
          <p className="text-[15px] tracking-[1px] my-10 text-slate-600">
            {productDetails?.description?.split(".").slice(0, 2).join(".")}.
          </p>

          {/* price section */}
          <p className="font-bold mb-4">
            <span className="mr-2 text-[35px] font-extrabold text-[#000]/90">
              ${Number(productDetails.price).toFixed(2)}
            </span>
            <span className="text-slate-400/70 line-through mr-1 text-[20px]">
              ${Number(oldPrice).toFixed(2)}
            </span>
          </p>

          <div className=" py-1 tracking-[2px] border w-fit font-bold  text-[17px] px-4">
            {productDetails.option}
          </div>

          {/* total section */}
          {cartItemAmount > 0 && (
            <div className="absolute bottom-30 right-9 py-1 tracking-[2px] bordr w-fit font-bold  text-[20px] px-4">
              Total:{" "}
              <span className="text-[35px] font-bold ">
                ${(productDetails.price * cartItemAmount).toFixed(2)}
              </span>
            </div>
          )}

          {/* calculation button section */}
          <div className="w-[90%] flex items-center gap-5 mt-25">
            {/* top button */}
            <div className="w-[40%] bg-[#6a9c06]/10 rounded-full flex items-center justify-center gap-6.5 py-1 rounded-[5px] ">
              <button
                onClick={() => removeFromCart(id)}
                className="border-2 text-[#6a9c06] text-[13px] h-5 w-5 rounded-full flex justify-center items-center hover:bg-[#6a9c06] hover:text-white hover:border-[#6a9c06]"
              >
                <FaMinus />
              </button>
              <p className="text-[25px] font-semibold text-[#6a9c06]">
                {cartItemAmount || 0}
              </p>

              <button
                onClick={() => addToCart(id)}
                className="border-2 text-[#6a9c06] text-[13px] h-5 w-5 rounded-full flex justify-center items-center hover:bg-[#6a9c06] hover:text-white hover:border-[#6a9c06]"
              >
                <FaPlus />
              </button>
            </div>

            {/* cart button */}
            <div
              onClick={() => addToCart(id)}
              className="cursor-pointer w-full bg-[#6a9c06]/80 rounded-full text-white flex items-center justify-center gap-3 py-3.5 rounded-[5px] hover:bg-[#6a9c06]"
            >
              <FaShoppingBag className="text-[22px]" />
              <p className="text-[16px] font-semibold">Add to Cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="w-full h-fit pt-5 pb-10 px-7">
        {/* buttons section*/}
        <div className="w-full border-b-1 border-slate-200">
          <button
            className={`text-[18px] font-semibold pb-1 mr-5 ${activeButton === "description" && "border-b-2 border-b-[#6a9c06]"}`}
            onClick={() => setActiveButton("description")}
          >
            Description
          </button>
          <button
            className={`text-[18px] font-semibold pb-1 ${activeButton === "reviews" && "border-b-2 border-b-[#6a9c06]"}`}
            onClick={() => setActiveButton("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeButton === "description" ? (
          <div className="w-full bg-red-30">
            {/* description section */}
            <div className="w-full mt-9">
              <h1 className="font-bold text-[22px] ">Description</h1>
              <p className=" leading-[30px] my-10 text-slate-600">
                {productDetails?.description}
              </p>
            </div>
          </div>
        ) : (
          // comment section
          <Reviews priductId={productDetails._id} />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
