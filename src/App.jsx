import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shopping from "./Pages/Shopping";
import Cart from "./Pages/Cart";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { ShopContextProvider } from "./context/Shop-context";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
