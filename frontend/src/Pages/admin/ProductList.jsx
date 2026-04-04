import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsShop } from "react-icons/bs";
import ProductListItem from "../../Components/admin/ProductListItem";
import { btnCategories } from "../../assets/ItemsData";
import ShopContext from "../../context/Shop-context";

const ProductList = () => {
  const [selected, setSelected] = useState("Vegetables");
  const [list, setList] = useState([]);
  const { defaultCart } = useContext(ShopContext);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/product/all-products",
        );
        if (data.success) {
          setList(data.products);
        } else {
          toast.error("Failed to Load Data");
        }
      } catch (error) {
        console.error("Error on fetchList function on ProductList Page", error);
        toast.error("Something went wrong while fetching products");
      }
    };

    fetchList();
  }, []);

  console.log(list);

  return (
    <div className="add w-[100%] h-fit">
      {/* header */}
      <div className="flex items-center justify-between p-5">
        <h1 className="text-[25px] font-semibold ">Shop Items</h1>
        <h1 className="text-[25px] font-extrabold  text-right mr-5">
          <span className="ml-1 font-normal capitalize">Items: </span>
          {defaultCart.length}
        </h1>
      </div>

      {/* button section */}
      <div className="mr-10 pl-10 my-10 text-right">
        {btnCategories.map((category, index) => {
          return (
            <button
              key={index}
              className={
                selected === category.name
                  ? "btn-primary active"
                  : "btn-primary"
              }
              onClick={() => setSelected(category.name)}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div className=" p-5 rounded-2xl items-center justify-center grid grid-cols-2 gap-5">
        {list
          .filter((item) => item.category === selected)
          .map((item) => (
            <ProductListItem key={item._id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
