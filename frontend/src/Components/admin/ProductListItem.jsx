import React from "react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductListItem = ({ item }) => {
  const categoryColors = {
    Vegetables: "bg-green-300",
    Fruits: "bg-yellow-300",
    Meat: "bg-red-400",
    Dairy: "bg-white border border-gray-300",
    Bakery: "bg-orange-300",
  };

  const oldPrice = (item.price + (item.price * item.discount) / 100).toFixed(2);

  const getStockUnit = (option) => {
    const lowerOption = option.toLowerCase();

    if (lowerOption.includes("g") || lowerOption.includes("kg")) return "kg";
    if (lowerOption.includes("pack")) return " Packs";
    if (lowerOption.includes("item")) return " Items";
    if (lowerOption.includes("bottle")) return " Bottles";

    return ""; // fallback if no match
  };

  return (
    <Link
      // to={`/listProduct/${item._id}`}
      className="flex items-center w-full bg-gray-200/30 p-2 rounded-[10px] gap-3 mb-1 hover:shadow-[1px_1px_5px_rgba(0,0,0,0.3)] relative transition-all hover:-translate-y-0.5"
      title="Click For Update"
    >
      {/* discount section */}
      {item.discount !== 0 && (
        <div className="flex absolute -top-4 -right-3 flex-col items-center justify-center rounded-full bg-red-500 w-[65px] h-[65px]">
          <p className=" text-[18px] font-extrabold cursor-pointer text-white">
            {item.discount}%
          </p>
          <p className="text-[12px] font-extrabold text-white -mt-1">OFF</p>
        </div>
      )}

      {/* Option section */}
      <div className="absolute left-3 bottom-2 bg-white px-3 p-0.5 rounded-full ">
        <p className="text-[18px] font-bold">{item.option}</p>
      </div>

      {/* status section */}
      <div className="absolute flex flex-col items-end bottom-2 right-4">
        <p
          className={`${item.status === "In Stock" ? "text-green-600" : "text-red-600"} text-[16px] font-semibold cursor-pointer`}
        >
          {item.status}
        </p>
        <p className="text-black flex items-end gap-1 px-1 font-semibold">
          <span className="text-[13px]">In Stock:</span>
          <span className="text-[17px] font-bold">
            {item.stock}
            {getStockUnit(item.option)}
          </span>
        </p>
      </div>

      {/* img section */}
      <div className="flex items-center gap-3">
        {/*big img section */}
        <div className="w-[160px] h-[160px]">
          <img
            src={`http://localhost:5001/images/${item?.image}`}
            alt=""
            className="w-[160px] h-[160px] object-contain"
          />
        </div>
      </div>

      {/* info section */}
      <div className="flex-1 relative">
        <p className="text-[22px] font-bold tracking-[1px]">{item.name}</p>
        <p
          className={`text-[8px] bg-green-300 w-fit px-2 py-0.5 mt-1 text-black uppercase font-semibold tracking-[1px] mb-3  ${categoryColors[item.category] || "bg-gray-200"}`}
        >
          {item.category}
        </p>

        {/* price section */}
        <p className="text-[30px] font-bold text-green-500 mt-7">
          ${Number(item.price).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductListItem;
