import React from "react";
import { FaAd, FaComment, FaHome, FaList, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[225px] px-2 flex flex-col items--start border-r border-gray-200 min-h-ful pt-6">
      {/* Go to Dashboard */}
      <NavLink
        end
        to="/admin"
        className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
      >
        <FaHome />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>

      {/* Add Product */}
      <NavLink
        to="/admin/addProduct"
        className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
      >
        <FaPlus />
        <p className="hidden md:inline-block">Add Product</p>
      </NavLink>

      {/* List Product */}
      <NavLink
        to="/admin/productList"
        className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
      >
        <FaList />
        <p className="hidden md:inline-block">Product List</p>
      </NavLink>

      {/* List Blog */}
      <NavLink
        to="/admin/comments"
        className={({ isActive }) => `btn-sidebar ${isActive && "active"}`}
      >
        <FaComment />
        <p className="hidden md:inline-block">Comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
