import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import "./App.css";
import Home from "./Pages/Home";
import ShopContext from "./context/Shop-context";
import Splash from "./Pages/Splash";
import Register from "./Pages/Register";
import Layout from "./Pages/admin/Layout";
import Dashboard from "./Pages/admin/Dashboard";
import Products from "./Pages/Products";
import About from "./Pages/About";
import AddProduct from "./Pages/admin/AddProduct";
import ProductList from "./Pages/admin/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import CommentsList from "./Pages/admin/CommentsList";

const App = () => {
  const { appLoading } = useContext(ShopContext);
  const [minSplashDone, setMinSplashDone] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinSplashDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (appLoading || !minSplashDone) return <Splash />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="comments" element={<CommentsList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
