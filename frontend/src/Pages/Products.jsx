import React from "react";
import Shopping from "../Components/Shopping";
import ProductPageItems from "../Components/ProductPageItems";
import Navbar from "../Components/Navbar";

const Products = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <ProductPageItems />
    </div>
  );
};

export default Products;
