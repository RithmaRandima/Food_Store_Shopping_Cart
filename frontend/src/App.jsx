import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cart from "./Pages/Cart";
import "./App.css";
import Home from "./Pages/Home";
import { ShopContextProvider } from "./context/Shop-context";
import Splash from "./Pages/Splash";
import Register from "./Pages/Register";
import Layout from "./Pages/admin/Layout";
import Dashboard from "./Pages/admin/Dashboard";
import Products from "./Pages/Products";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/register");
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="addBlog" element={<AddBlog />} /> */}
            {/* <Route path="listBlog" element={<ListBlog />} /> */}
            {/* <Route path="comments" element={<Comments />} /> */}
          </Route>
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
