import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ShopContext from "../../context/Shop-context";
import { BiSolidLeaf } from "react-icons/bi";
import Sidebar from "../../Components/admin/Sidebar";

const Layout = () => {
  const { navigate, logout } = useContext(ShopContext);
  // const { setToken, axios, navigate } = useContext(ShopContext);
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   axios.defaults.headers.common["Authorization"] = null;
  //   setToken(null);
  //   navigate("/");
  // };
  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        {/* logo */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <h1 className="text-[20px] font-bold">FRESHMET</h1>
          <BiSolidLeaf className="absolute top-[0%] -right-6 text-[30px] rotate-20 text-green-600" />
        </div>
        <button
          onClick={logout}
          className="bg-black text-white font-semibold tracking-[1px] py-2 rounded-full px-4 text-[13px] hover:scale-105 duration-150 transition-all"
        >
          Logout
        </button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
