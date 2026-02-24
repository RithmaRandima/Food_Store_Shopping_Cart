import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Shopping from "./Pages/Shopping";
import Cart from "./Pages/Cart";
import "./App.css";
import Home from "./Pages/Home";
import { ShopContextProvider } from "./context/Shop-context";
import Splash from "./Pages/Splash";
import Register from "./Pages/Register";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/register");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ShopContextProvider>
        <Routes>
          {/* <Route path="/" element={<Splash />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
