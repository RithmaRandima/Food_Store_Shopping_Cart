import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductListItem from "../../Components/admin/ProductListItem";
import { btnCategories } from "../../assets/ItemsData";
import ShopContext from "../../context/Shop-context";

const ProductList = () => {
  const [selected, setSelected] = useState("Vegetables");
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

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
        console.error(error);
        toast.error("Something went wrong while fetching products");
      }
    };

    fetchList();
  }, []);

  // reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selected]);

  // filter by category
  const filteredList = list.filter((item) => item.category === selected);

  // pagination logic
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedList = filteredList.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="add w-full h-fit">
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 sm:p-5">
        <h1 className="text-[20px] sm:text-[25px] font-semibold">Shop Items</h1>

        <h1 className="text-[18px] sm:text-[25px] font-extrabold text-right">
          <span className="ml-1 font-normal capitalize">Items: </span>
          {defaultCart.length}
        </h1>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap gap-2 px-4 sm:px-10 my-5 justify-end">
        {btnCategories.map((category, index) => (
          <button
            key={index}
            className={
              selected === category.name ? "btn-primary active" : "btn-primary"
            }
            onClick={() => setSelected(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* GRID (RESPONSIVE) */}
      <div className="p-3 sm:p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
        {paginatedList.map((item) => (
          <ProductListItem key={item._id} item={item} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 mt-6 mb-10 flex-wrap">
        {/* Prev */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-full disabled:opacity-40"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        {/* Pages */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full ${
              currentPage === i + 1 ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-full disabled:opacity-40"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
