import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import { RiStickyNoteAddFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { useContext } from "react";
import ShopContext from "../../context/Shop-context";

const AddProduct = () => {
  const { navigate } = useContext(ShopContext);
  const sizes = ["500g", "1kg", "1 Pack", "1 Item", "1 Bottle"];
  const [selectedSize, setSelectedSize] = useState("");

  const [image, setimage] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    option: selectedSize,
    category: "",
    status: "",
    price: "",
    discount: "",
    stock: "",
  });

  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("option", data.option);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("status", data.status);
    formData.append("discount", data.discount);
    formData.append("stock", data.stock);
    formData.append("image", image);

    if (!data.name.trim()) return toast.error("Product name is required");

    if (!data.description.trim()) return toast.error("Description is required");

    if (!data.category) return toast.error("Category is required");

    if (!image) return toast.error("Product image is required");

    if (!data.price || Number(data.price) <= 0)
      return toast.error("Enter valid price");

    if (Number(data.discount) < 0)
      return toast.error("Discount cannot be negative");

    if (!data.stock || Number(data.stock) < 0)
      return toast.error("Enter valid stock");

    try {
      const { data } = await axios.post(
        "http://localhost:5001/api/product/add-product",
        formData,
      );

      toast.success(data.message);

      if (data.success) {
        setData({
          name: "",
          description: "",
          option: selectedSize,
          category: "",
          status: "",
          price: "",
          discount: "",
          stock: "",
        });

        setimage(null);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(
        "Error on onSubmitHandeler function on AddProducts Page",
        error,
      );
      toast.error("Something went wrong while adding product");
    }
  };
  return (
    <div className="add w-full relative p-3 sm:p-5 md:pb-20 h-fit">
      {/* header */}
      <div className="flex items-center gap-2 mb-5 sm:mb-7">
        <h1 className="text-[20px] sm:text-[25px] font-semibold mt-2">
          Add New Item
        </h1>
      </div>

      {/* form */}
      <form
        onSubmit={onSubmitHandeler}
        className="w-full flex flex-col lg:flex-row gap-5 lg:gap-6 mb-20 lg:mb-30"
      >
        {/* ================= LEFT SIDE ================= */}
        <div className="w-full lg:flex-1">
          {/* general info */}
          <div className="bg-gray-100/70 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] rounded-2xl p-4 sm:p-5">
            <p className="text-[15px] sm:text-[16px] mb-3 font-semibold tracking-[1px]">
              General Information
            </p>

            {/* name */}
            <div className="my-4 sm:my-5">
              <p className="mb-2">Product Name</p>
              <input
                className="w-full rounded-[7px] p-3 sm:p-5 py-2 outline-none bg-gray-200/60"
                type="text"
                value={data.name}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter Product Name"
              />
            </div>

            {/* description */}
            <div className="mb-5">
              <p className="mb-2">Description</p>
              <textarea
                className="w-full rounded-[7px] p-3 sm:p-5 py-2 outline-none bg-gray-200/60"
                rows={5}
                value={data.description}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Write Content Here"
              />
            </div>

            {/* options */}
            <div className="w-full mb-6">
              <p className="mb-3 font-medium text-gray-700">Option</p>

              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {sizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setData((prev) => ({ ...prev, option: size }));
                    }}
                    className={`px-4 sm:px-6 py-1.5 rounded-full cursor-pointer border text-xs sm:text-sm font-medium ${
                      selectedSize === size
                        ? "bg-[#6a9c06] text-white border-[#6a9c06]"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* category */}
            <div className="mt-5">
              <p className="font-semibold">Product Category</p>
              <p className="text-[11px] mb-2">Pick Available Category</p>

              <select
                className="w-full rounded-[7px] p-3 sm:p-5 py-2 outline-none bg-gray-200/60"
                value={data.category}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, category: e.target.value }))
                }
              >
                <option>Select Category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
              </select>
            </div>

            {/* status */}
            <div className="mt-5">
              <p className="font-semibold">Product Status</p>
              <p className="text-[11px] mb-2">Pick Current Status</p>

              <select
                className="w-full rounded-[7px] p-3 sm:p-5 py-2 outline-none bg-gray-200/60"
                value={data.status}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, status: e.target.value }))
                }
              >
                <option>Select Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full lg:w-80 flex flex-col gap-5">
          {/* image */}
          <div className="bg-gray-100/70 shadow rounded-2xl p-4 sm:p-5">
            <p className="text-[15px] sm:text-[16px] mb-3 font-semibold">
              Upload Images
            </p>

            <label
              htmlFor="image"
              className="cursor-pointer w-full h-[200px] sm:h-[260px] flex items-center justify-center border border-dashed border-gray-500/30 rounded-xl"
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <IoIosAddCircle className="text-[45px] sm:text-[56px] text-[#6a9c06]/50" />
              )}
            </label>

            <input
              type="file"
              hidden
              id="image"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </div>

          {/* pricing */}
          <div className="bg-gray-100/70 shadow rounded-2xl p-4 sm:p-5">
            <p className="text-[15px] sm:text-[16px] mb-3 font-semibold">
              Pricing and Stock
            </p>

            <input
              className="w-full mb-3 rounded bg-gray-200/60 p-2"
              placeholder="Price"
              value={data.price}
              onChange={(e) =>
                setData((prev) => ({ ...prev, price: e.target.value }))
              }
            />

            <input
              className="w-full mb-3 rounded bg-gray-200/60 p-2"
              placeholder="Discount"
              value={data.discount}
              onChange={(e) =>
                setData((prev) => ({ ...prev, discount: e.target.value }))
              }
            />

            <input
              className="w-full rounded bg-gray-200/60 p-2"
              placeholder="Stock"
              value={data.stock}
              onChange={(e) =>
                setData((prev) => ({ ...prev, stock: e.target.value }))
              }
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full bg-[#6a9c06] text-white py-3 rounded-full font-bold hover:bg-black transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
