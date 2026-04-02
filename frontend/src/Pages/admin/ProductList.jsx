import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsShop } from "react-icons/bs";
import ProductListItem from "../../Components/admin/ProductListItem";
import { btnCategories } from "../../assets/ItemsData";

const ProductList = () => {
  const [selected, setSelected] = useState("Vegetables");

  const [list, setList] = useState([]);

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
      <div>
        <div className="flex items-center gap-2 ">
          <BsShop className="size-[30px] " />
          <h1 className="text-[30px] font-bold mt-2">
            Shop Items
            <span className="block bg-[#ff007b] h-[5px] w-[40%] rounded-full  "></span>
          </h1>
        </div>
        <h1 className="mt-3 text-[20px] font-extrabold  text-right mr-5">
          {/* {list.length} */}
          <span className="ml-1 font-normal capitalize">Items</span>
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
