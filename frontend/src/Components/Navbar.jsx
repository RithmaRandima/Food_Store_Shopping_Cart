import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex p-3 px-10 items-center justify-between bg-white">
      {/* logo */}
      <div className="relative">
        <h1 className="text-[20px] font-bold">FRESHMET</h1>
        <BiSolidLeaf className="absolute top-[0%] -right-6 text-[30px] rotate-20 text-green-600" />
      </div>
      {/* middle nav */}
      <div className="flex">
        <Link to={"/home"} className="mx-5 font-semibold text-[17px]">
          Home
        </Link>
        <Link to={"/"} className="mx-5 font-semibold text-[17px]">
          About
        </Link>
        <a href="#products" className="mx-5 font-semibold text-[17px]">
          Products
        </a>
      </div>
      {/* cart section */}
      <div className="flex gap-2 items-center">
        <FaSearch className="text-[18px] text-green-600" />
        <Link to={"/cart"}>
          <HiShoppingBag className="text-[25px] text-green-600" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
