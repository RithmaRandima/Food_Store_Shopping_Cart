import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ShopContext from "../../context/Shop-context";
import Sidebar from "c:/Users/randy/Desktop/blog-app/frontend/src/components/admin/Sidebar";

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
        <div onClick={() => navigate("/home")}>
          <h1>Logo here</h1>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-black px-8 py-2"
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
