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
import About from "./Pages/About";
import AddProduct from "./Pages/admin/AddProduct";
import ProductList from "./Pages/admin/ProductList";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
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
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="productList" element={<ProductList />} />
            {/* <Route path="comments" element={<Comments />} /> */}
          </Route>
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
