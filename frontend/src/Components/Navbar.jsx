import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";
import ShopContext from "../context/Shop-context";

const Navbar = () => {
  const { userDetails, token } = useContext(ShopContext);

  console.log(userDetails?.username?.includes("r"));
  console.log(token);
  return (
    <div className="flex p-3 px-10 items-center justify-between bg-white">
      {/* logo */}
      <div className="relative">
        <h1 className="text-[20px] font-bold">FRESHMET</h1>
        <BiSolidLeaf className="absolute top-[0%] -right-6 text-[30px] rotate-20 text-green-600" />
      </div>
      {/* middle nav */}
      <div className="fle">
        <Link to={"/home"} className="mx-5 font-semibold text-[17px]">
          Home
        </Link>
        <Link to="/about" className="mx-5 font-semibold text-[17px]">
          About
        </Link>
        <Link to={"/products"} className="mx-5 font-semibold text-[17px]">
          Products
        </Link>
      </div>
      {/* cart section */}
      <div className="flex gap-4 items-center">
        <Link to={"/cart"}>
          <HiShoppingBag className="text-[35px] text-black/90  hover:text-green-600 hover:scale-105 duration-150 transition-all" />
        </Link>
        {userDetails?.username?.includes("r") && (
          <Link
            to="/admin"
            className="bg-black text-white font-semibold tracking-[1px] py-2 rounded-full px-4 text-[13px] hover:scale-105 duration-150 transition-all"
          >
            Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
