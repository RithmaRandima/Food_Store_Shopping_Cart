import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import { BiSolidLeaf } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import ShopContext from "../context/Shop-context";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { userDetails, token, cartItemCount, logout } = useContext(ShopContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-6 md:px-10 h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <h1 className="text-xl font-bold tracking-wide">FRESHMET</h1>
          <BiSolidLeaf className="text-2xl text-green-600 rotate-12" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-1 transition hover:text-green-600 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-600 after:transition-all
      ${isActive ? "after:w-full text-green-600" : "after:w-0 hover:after:w-full"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-1 transition hover:text-green-600 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-600 after:transition-all
      ${isActive ? "after:w-full text-green-600" : "after:w-0 hover:after:w-full"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative pb-1 transition hover:text-green-600 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-600 after:transition-all
      ${isActive ? "after:w-full text-green-600" : "after:w-0 hover:after:w-full"}`
            }
          >
            Products
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/cart" className="relative">
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] flex items-center justify-center bg-red-500 text-white rounded-full">
                {cartItemCount}
              </span>
            )}
            <HiShoppingBag className="text-3xl hover:text-green-600 transition" />
          </Link>

          {/* Profile */}
          {!(userDetails && token) ? (
            <button
              onClick={() => navigate("/register")}
              className="bg-black text-white  shadow-md hover:shadow-lg  active:scale-95 transition-all duration-200 font-bold tracking-[1px] py-2 rounded-full px-6 cursor-pointer text-[13px] hover:scale-105 duration-150 transition-all"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              {/* Avatar */}
              <div
                onClick={() => setOpenProfile(!openProfile)}
                className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold uppercase cursor-pointer"
              >
                {userDetails?.username
                  ?.split(" ")
                  .map((name) => name[0])
                  .join("") || "U"}
              </div>

              {/* Dropdown */}
              {openProfile && (
                <div className="absolute -right-11 md:-right-5 mt-3 w-62 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* USER HEADER */}
                  <div className="p-4 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center font-bold text-lg uppercase shadow-sm">
                      {userDetails?.username
                        ?.split(" ")
                        .map((name) => name[0])
                        .join("") || "U"}
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate capitalize">
                        {userDetails?.username}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {userDetails?.email}
                      </p>
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="h-px bg-gray-100" />

                  {/* MENU SECTION */}
                  <div className="p-2 space-y-1 text-sm">
                    {/* Dashboard */}
                    {userDetails?.username?.includes("r") && (
                      <Link
                        to="/admin"
                        onClick={() => setOpenProfile(false)}
                        className="group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                      >
                        <span className="group-hover:text-green-600">
                          Dashboard
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition" />
                      </Link>
                    )}

                    {/* Orders */}
                    <Link
                      // need to create page
                      to="/"
                      onClick={() => setOpenProfile(false)}
                      className="group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <span className="group-hover:text-green-600">
                        My Orders
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </div>

                  {/* DIVIDER */}
                  <div className="h-px bg-gray-100" />

                  {/* FOOTER ACTION */}
                  <button
                    onClick={() => {
                      logout();
                      setOpenProfile(false);
                    }}
                    className="w-full px-3 py-3 text-sm text-left text-red-500 hover:bg-red-50 transition font-medium"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => {
              setMobileMenu(!mobileMenu);
              setOpenProfile(false);
            }}
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-gray-700 font-medium">
          <NavLink
            to="/"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-green-600 underline" : "hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-green-600 underline" : "hover:text-green-600"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive ? "text-green-600 underline" : "hover:text-green-600"
            }
          >
            Products
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
