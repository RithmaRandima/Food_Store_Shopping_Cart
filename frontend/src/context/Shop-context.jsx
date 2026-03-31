import React, { createContext, useState, useEffect } from "react";
import { itemList } from "../assets/ItemsData";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < itemList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [userDetails, setUserDetails] = useState(null); // ✅ fixed typo
  const [token, setToken] = useState(null);

  // ✅ Load data from localStorage when app starts
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Sync token to localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  // ✅ Sync user to localStorage
  useEffect(() => {
    if (userDetails) {
      localStorage.setItem("user", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  // ✅ Cart functions
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: newAmount,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = itemList.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.newPrice;
      }
    }

    return totalAmount;
  };

  // ✅ Logout function (VERY useful)
  const logout = () => {
    setToken(null);
    setUserDetails(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/register");
  };

  const contextValue = {
    navigate,
    userDetails,
    setUserDetails, // ✅ fixed
    token,
    setToken,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    logout, // ✅ added
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
