import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { FaShoppingBag } from "react-icons/fa";
import Reviews from "../Components/Reviews";
const ProductDetails = () => {
  const { id } = useParams();
  const [clickHeart, setClickHeart] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [activeButton, setActiveButton] = useState("description");

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

  const sizes = [
    { weight: "500g", itemPrice: productDetails?.price || 0 },
    { weight: "1kg", itemPrice: (productDetails?.price || 0) * 2 },
    { weight: "2kg", itemPrice: (productDetails?.price || 0) * 4 },
    { weight: "5kg", itemPrice: (productDetails?.price || 0) * 5 },
  ];

  const [selectedSize, setSelectedSize] = useState(sizes[0]); // ✅ default 500g

  const oldPrice = (
    productDetails?.option?.includes("g")
      ? selectedSize.itemPrice +
        (selectedSize.itemPrice * productDetails.discount) / 100
      : productDetails.price +
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
            <span className="mr-2 text-[35px] text-[#6a9c06]/90">
              $
              {Number(
                productDetails?.option?.includes("g")
                  ? selectedSize.itemPrice
                  : productDetails?.price,
              ).toFixed(2)}
            </span>
            <span className="text-slate-400/70 line-through mr-1 text-[20px]">
              ${Number(oldPrice).toFixed(2)}
            </span>
          </p>
          {/* Quantity section */}

          {productDetails?.option?.includes("g") ? (
            <div className="w-full mb-10">
              {/* <p className="mb-3 font-medium text-gray-700">Weight</p> */}

              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <div
                    key={size.weight}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                    className={`px-4.5 py-1.5 rounded-full cursor-pointer border transition-all duration-200 text-sm font-medium
        ${
          selectedSize.weight === size.weight
            ? "bg-black text-white shadow-md scale-105"
            : "bg-white text-gray-700 border-gray-300 hover:border-black hover:shadow-sm"
        }`}
                  >
                    {size.weight}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className=" py-1 tracking-[2px] border w-fit font-bold  text-[15px] px-3">
              {productDetails.option}
            </div>
          )}

          {/* calculation button section */}
          <div className="w-full flex items-center gap-5 mt-14">
            {/* top button */}
            <div className="w-[250px] flex items-center justify-center gap-7 py-2 rounded-[5px]">
              <button className="text-[15px] h-8 w-8 rounded-full flex justify-center items-center hover:bg-[#6a9c06] hover:text-white">
                <FaMinus />
              </button>
              <p className="text-[30px] font-semibold">0</p>

              <button className="text-[15px] h-8 w-8 rounded-full flex justify-center items-center hover:bg-[#6a9c06] hover:text-white">
                <FaPlus />
              </button>
            </div>

            {/* cart button */}
            <div className="w-full bg-[#6a9c06]/80 rounded-full text-white flex items-center justify-center gap-3 py-3.5 rounded-[5px] hover:bg-[#6a9c06]">
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
