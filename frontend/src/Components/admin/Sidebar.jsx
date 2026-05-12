import React, { useContext } from "react";
import { FaComment, FaHome, FaList, FaPlus, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ShopContext from "../../context/Shop-context";
import { BiSolidLeaf } from "react-icons/bi";

const Sidebar = () => {
  const { open, setOpen, navigate, userDetails } = useContext(ShopContext);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      />

      {/* ================= MOBILE SLIDE SIDEBAR ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-[270px] bg-white z-50 transform transition-transform duration-300 md:hidden shadow-xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ================= TOP BRAND AREA ================= */}
        <div className="px-4 py-5 border-b flex items-center justify-between">
          {/* logo */}
          <div
            className="relative cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <h1 className="text-[18px] font-extrabold tracking-wide">
              FRESHMET
            </h1>
            <BiSolidLeaf className="text-[26px] text-green-600 rotate-12" />
          </div>

          {/* close button (optional feel better UX) */}
          <button onClick={handleClose} className="text-gray-500 text-sm">
            ✕
          </button>
        </div>

        {/* ================= USER SECTION ================= */}
        <div className="flex flex-col justify-center text-center items-center gap-3 px-4 py-4 bg-gray-50 mt-2">
          {/* avatar */}
          <div className="w-14 h-14 rounded-full bg-green-600 uppercase text-white flex items-center justify-center font-bold text-[20px]">
            {userDetails?.username
              ?.split(" ")
              .map((name) => name[0])
              .join("") || "A"}
          </div>

          {/* name + email */}
          <div className="flex flex-col">
            <p className="text-[14px] font-semibold text-gray-800 capitalize">
              {userDetails?.username || "Admin User"}
            </p>
            <p className="text-[12px] text-gray-500">{userDetails?.email}</p>
          </div>
        </div>

        {/* ================= NAV LINKS ================= */}
        <div className="flex flex-col pt-4 px-2 gap-1">
          <NavLink
            end
            to="/admin"
            onClick={handleClose}
            className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
          >
            <FaHome />
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            to="/admin/addProduct"
            onClick={handleClose}
            className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
          >
            <FaPlus />
            <p>Add Product</p>
          </NavLink>

          <NavLink
            to="/admin/productList"
            onClick={handleClose}
            className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
          >
            <FaList />
            <p>Product List</p>
          </NavLink>

          <NavLink
            to="/admin/comments"
            onClick={handleClose}
            className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
          >
            <FaComment />
            <p>Comments</p>
          </NavLink>
        </div>

        {/* ================= SUPPORT SECTION ================= */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
          <div className="bg-green-50 border border-green-200 rounded-[10px] p-3">
            <h1 className="text-[14px] font-semibold text-green-700">
              Need Help?
            </h1>

            <p className="text-[12px] text-gray-600 mt-1 leading-snug">
              Contact our support team if you face any issues or need
              assistance.
            </p>

            <button
              className="mt-3 w-full bg-green-600 text-white text-[13px] py-2 rounded-full hover:bg-green-700 transition"
              onClick={() => window.open("mailto:support@freshmet.com")}
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP SIDEBAR (UNCHANGED) ================= */}
      <div className="hidden md:flex w-[225px] px-2 flex-col items-start border-r border-gray-200 min-h-screen pt-6">
        <NavLink
          end
          to="/admin"
          className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
        >
          <FaHome />
          <p className="hidden md:inline-block">Dashboard</p>
        </NavLink>

        <NavLink
          to="/admin/addProduct"
          className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
        >
          <FaPlus />
          <p className="hidden md:inline-block">Add Product</p>
        </NavLink>

        <NavLink
          to="/admin/productList"
          className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
        >
          <FaList />
          <p className="hidden md:inline-block">Product List</p>
        </NavLink>

        <NavLink
          to="/admin/comments"
          className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
        >
          <FaComment />
          <p className="hidden md:inline-block">Comments</p>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
