import React, { createContext, useState, useEffect } from "react";
import { itemList } from "../assets/ItemsData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null); // ✅ fixed typo
  const [token, setToken] = useState(null);
  const [defaultCart, setDefaultCart] = useState([]);

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

  useEffect(() => {
    const fetchDefaultCart = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/product/all-products",
        );
        if (data.success) {
          setDefaultCart(data.products);
        } else {
          toast.error("Failed to Load Data For Default Cart");
        }
      } catch (error) {
        console.error(
          "Error on fetchDefaultCart function on Shop-Context",
          error,
        );
        toast.error("Something went wrong while fetching products");
      }
    };
    fetchDefaultCart();
  }, []);

  // get default cart
  const getDefaultCart = () => {
    let cart = {};
    defaultCart.forEach((product) => {
      cart[product._id] = 0; // use the actual product ID
    });
    return cart;
  };

  // add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,

      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentCount = prev[itemId] || 0;

      if (currentCount <= 0) {
        toast.error("There are no items to remove");
        return prev; // 🚫 don't update state
      }

      return {
        ...prev,
        [itemId]: currentCount - 1,
      };
    });
  };
  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: newAmount,
    }));
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
    setCartItemCount(count);
  }, [cartItems]);

  // items count
  // Object.values(cartItems).reduce((sum, qty) => sum + qty, 0)

  console.log(cartItems.length);
  console.log(cartItems);

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = defaultCart.find((product) => product._id === item);
        totalAmount += cartItems[item] * itemInfo.price;
        console.log(itemInfo);
      }
    }

    return totalAmount;
  };

  console.log(getTotalCartAmount());

  // ✅ Logout function (VERY useful)
  const logout = () => {
    setToken(null);
    setUserDetails(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/home");
  };

  const contextValue = {
    cartItemCount,
    defaultCart,
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
