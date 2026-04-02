import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  console.log(id);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/product/${id}`,
        );
        if (data.success) {
          setProductDetails(data.product);
        } else {
          toast.error("Somethings went wrong");
        }
      } catch (error) {
        console.error(
          "Error on fetchProductData function on ProductDetails Page",
          error,
        );
        toast.error("Something went wrong while fetching product Data");
      }
    };
    fetchProductData();
  }, [id]);

  console.log(productDetails);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
