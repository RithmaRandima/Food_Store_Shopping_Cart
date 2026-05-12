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
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* left section */}
        <div className="w-full lg:w-1/2 h-[50vh] mx-auto lg:h-auto p-4 sm:p-7 relative">
          <div className="w-[330px] mx-auto md:w-full h-full border border-gray-300 rounded-[10px] relative">
            <img
              src={`http://localhost:5001/images/${productDetails.image}`}
              className="w-full h-full object-contain"
              alt={productDetails.name}
            />
          </div>

          {productDetails.discount !== 0 && (
            <div className="scale-up flex absolute top-5 right-5 sm:top-10 sm:right-10 rotate-12 flex-col items-center justify-center rounded-full bg-red-500 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]">
              <p className="text-[18px] sm:text-[25px] font-extrabold text-white">
                {productDetails.discount}%
              </p>
              <p className="text-[14px] sm:text-[19px] font-extrabold text-white -mt-2 sm:-mt-3">
                OFF
              </p>
            </div>
          )}
        </div>

        {/* right section */}
        <div className="relative w-full lg:w-1/2 h-full p-4 sm:p-7">
          {/* category */}
          <p
            className={`text-[13px] sm:text-[15px] mt-3 sm:mt-5 tracking-[1px] ${
              categoryColors[productDetails.category] || "bg-gray-200"
            }`}
          >
            {productDetails.category}
          </p>

          {/* name + heart */}
          <div className="flex items-start sm:items-center justify-between flex-wrap gap-2 mt-2">
            <h1 className="font-semibold text-[28px] sm:text-[40px]">
              {productDetails.name}
            </h1>

            <div className="mr-3 text-[35px] cursor-pointer">
              {clickHeart ? (
                <FaHeart onClick={() => setClickHeart(false)} />
              ) : (
                <FaRegHeart onClick={() => setClickHeart(true)} />
              )}
            </div>
          </div>

          {/* rating */}
          <div className="flex gap-1 text-amber-500 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[12px]" />
            ))}
          </div>

          {/* status */}
          <p
            className={`text-[10px] sm:text-[11px] border w-fit px-3 py-[2px] rounded-full my-4 sm:my-6 ${
              productDetails.status === "In Stock"
                ? "bg-green-300/20 border-green-500 text-green-500"
                : "bg-red-300/20 border-red-500 text-red-500"
            }`}
          >
            {productDetails.status}
          </p>

          {/* description */}
          <p className="text-[13px] sm:text-[15px] tracking-[1px] my-6 sm:my-10 text-slate-600">
            {productDetails?.description?.split(".").slice(0, 2).join(".")}.
          </p>

          {/* price */}
          <p className="font-bold mb-4">
            <span className="mr-2 text-[26px] sm:text-[35px] font-extrabold">
              ${Number(productDetails.price).toFixed(2)}
            </span>
            <span className="text-slate-400 line-through text-[16px] sm:text-[20px]">
              ${Number(oldPrice).toFixed(2)}
            </span>
          </p>

          {/* option */}
          <div className="py-1 tracking-[2px] border w-fit font-bold text-[14px] sm:text-[17px] px-3 sm:px-4">
            {productDetails.option}
          </div>

          {/* total */}
          {cartItemAmount > 0 && (
            <div className="mt-5 lg:absolute lg:bottom-20 lg:right-5 text-[16px] sm:text-[20px]">
              Total:
              <span className="text-[24px] sm:text-[35px] font-bold ml-2">
                ${(productDetails.price * cartItemAmount).toFixed(2)}
              </span>
            </div>
          )}

          {/* buttons */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10 sm:mt-20">
            {/* quantity */}
            <div className="w-full sm:w-[40%] bg-[#6a9c06]/10 rounded-full flex items-center justify-center gap-4 py-2">
              <button
                onClick={() => removeFromCart(id)}
                className="text-[#6a9c06] h-6 w-6 rounded-full flex items-center justify-center border"
              >
                <FaMinus />
              </button>

              <p className="text-[20px] sm:text-[25px] font-semibold text-[#6a9c06]">
                {cartItemAmount || 0}
              </p>

              <button
                onClick={() => addToCart(id)}
                className="text-[#6a9c06] h-6 w-6 rounded-full flex items-center justify-center border"
              >
                <FaPlus />
              </button>
            </div>

            {/* add to cart */}
            <div
              onClick={() => addToCart(id)}
              className="cursor-pointer w-full bg-[#6a9c06]/80 rounded-full text-white flex items-center justify-center gap-3 py-3 hover:bg-[#6a9c06]"
            >
              <FaShoppingBag className="text-[18px] sm:text-[22px]" />
              <p className="text-[14px] sm:text-[16px] font-semibold">
                Add to Cart
              </p>
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
          <Reviews productId={productDetails._id} />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
