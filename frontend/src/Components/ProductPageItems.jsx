import React, { useEffect, useState } from "react";
import { btnCategories } from "../assets/ItemsData.js";
import ItemCard from "../Components/ItemCard";
import img1 from "../assets/item-turkey.png";
import img2 from "../assets/item-yogurt.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";
const ProductPageItems = () => {
  const [selected, setSelected] = useState("Vegetables");
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredItems = list.filter((item) => item.category === selected);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/product/all-products",
        );
        if (data.success) {
          setList(data.products);
        } else {
          toast.error("Failed to Load Data");
        }
      } catch (error) {
        console.error("Error on fetchList function on ProductList Page", error);
        toast.error("Something went wrong while fetching products");
      }
    };

    fetchList();
  }, []);

  return (
    <div className="relative -mt-1 py-5">
      {/* ================= MOBILE VIEW ONLY ================= */}
      <div className="md:hidden">
        {/* hero */}
        <div className="product-hero h-[250px] flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-extrabold text-[28px] text-white">
            BESTSELLER <span className="text-green-600">PROCUDTS</span>
          </h1>
          <p className="font-bold mt-2 text-[13px] text-white/70">
            Get the besr quality and most delicious grocery food in the world,
            you can get the all from here
          </p>
        </div>

        {/* categories */}
        <div className="scroll-hide flex overflow-x-auto gap-2 px-3 py-10 scrollbar-hide">
          {btnCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelected(category.name)}
              className={`flex items-center gap-2 flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full border transition-all duration-200 ${
                selected === category.name
                  ? "bg-green-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              <img
                src={category.image}
                className="w-5 h-5 object-contain flex-shrink-0"
                alt=""
              />
              <span className="text-sm sm:text-base">{category.name}</span>
            </button>
          ))}
        </div>

        {/* sort bar */}
        <div className="flex justify-between items-center px-4 py-2">
          <p className="text-[16px] font-bold">Items 10</p>

          <div className="flex items-center gap-1 text-sm border px-3 py-1 rounded-full">
            <p className="text-slate-500">Sort By</p>
            <MdKeyboardArrowDown />
          </div>
        </div>

        {/* items */}
        <div className="grid grid-cols-2 gap-3 px-3 pb-10 bg-slate-100/60 rounded-[15px] mx-2 py-5">
          {currentItems.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-center items-center gap-2 my-8 flex-wrap">
          <button
            className="px-4 py-2 border rounded-full disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded-full ${
                currentPage === i + 1
                  ? "bg-green-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-4 py-2 border rounded-full disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* promo box 1 */}
        <div className="px-3 mb-3">
          <div className="rounded-[10px] bg-red-500 p-3 text-white relative overflow-hidden">
            <h1 className="font-bold text-[14px]">
              Fresh and Quality Meat item with discount
            </h1>
            <p className="text-[12px] text-gray-200 mt-1">
              Get your clean supplies.
            </p>
          </div>
        </div>

        {/* promo box 2 */}
        <div className="px-3 pb-6">
          <div className="rounded-[10px] bg-black p-3 text-white relative overflow-hidden">
            <h1 className="font-bold text-[14px]">
              Get over{" "}
              <span className="text-yellow-300 font-extrabold">25%</span>{" "}
              Discount for Dairy Items
            </h1>
            <p className="text-[12px] text-gray-800 mt-1">
              Get your clean supplies.
            </p>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden md:block">
        {/* box 01 */}
        <div className="absolute rounded-[5px] w-[350px] pl-2 h-[90px] z-1 bg-red-400/30 right-3 items-center pr-5 top-80 flex text-white">
          <img
            src={img1}
            alt=""
            className="absolute w-[160px] h-[100px] -bottom-10 right-0 object-cover"
          />
          <div className="ml-2">
            <h1 className="font-bold mb-1 text-[18px]">
              Fresh and Quality Meat item with discount
            </h1>
            <p className="text-gray-400 text-[14px] mt-2">
              Get your clean supplies.
            </p>
          </div>
        </div>

        {/* box-2 */}
        <div className="absolute rounded-[5px] w-[350px] pl-2 h-[100px] z-1 bg-green-400/35 right-95 items-center pr-5 top-90 flex text-white">
          <img
            src={img2}
            alt=""
            className="absolute -left-12 -top-10 w-[150px] h-[130px]  object-cover"
          />
          <div className="ml-25">
            <h1 className="font-bold mb-1 text-[18px]">
              Get over{" "}
              <span className="text-[20px] font-extrabold text-amber-400">
                25%
              </span>{" "}
              Discount for Dairy Items
            </h1>
            <p className="text-gray-800 text-[14px] mt-2">
              Get your clean supplies.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {/* heading section */}
          <div className="product-hero h-[400px] flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-[50px] text-white text-center">
              BESTSELLER <span className="text-green-600">PROCUDTS</span>
            </h1>
            <p className="font-bold mt-1 mb-5 w-[400px] mx-auto text-center text-white/70">
              Get the besr quality and most delicious grocery food in the world,
              you can get the all from here
            </p>
          </div>

          {/* content */}
          <div className="relative flex">
            {/* button section */}
            <div className=" w-[220px] p-2">
              <div className=" text-cener">
                {btnCategories.map((category, index) => {
                  return (
                    <button
                      key={index}
                      className={
                        selected === category.name
                          ? "btn-sidebar active"
                          : "btn-sidebar"
                      }
                      onClick={() => setSelected(category.name)}
                    >
                      <img
                        src={category.image}
                        className="w-8 hidden md:block "
                        alt=""
                      />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* item section */}
            <div className="px-5 pt-15 pb-4 w-[calc(100vw-220px)]">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[20px] font-bold">Items 10</p>
                <div className="flex items-center gap-2 font-semibold">
                  <p className="text-slate-400">Sort By: </p>
                  <div className="flex items-top border p-1 px-2 rounded-full">
                    <p>Sorting Options</p>
                    <MdKeyboardArrowDown className="text-[25px]" />
                  </div>
                </div>
              </div>

              {/* items */}
              <div className="grid grid-cols-4 gap-7 px-10 pb-10 bg-slate-100/60 rounded-[15px] mx-2 py-5">
                {currentItems.map((item) => (
                  <ItemCard key={item._id} item={item} />
                ))}
              </div>

              {/* pagination */}
              <div className="flex justify-center items-center gap-2 my-8 flex-wrap">
                <button
                  className="px-4 py-1.5 border rounded-full disabled:opacity-50"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 border rounded-full ${
                      currentPage === i + 1
                        ? "bg-green-600 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="px-4 py-1.5 border rounded-full disabled:opacity-50"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageItems;
