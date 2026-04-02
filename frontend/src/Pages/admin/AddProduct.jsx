import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import { RiStickyNoteAddFill } from "react-icons/ri";

const AddProduct = () => {
  const sizes = ["500g", "1kg", "1 Pack", "1 Item", "1 Bottle"];
  const [selectedSize, setSelectedSize] = useState("500g");

  const [mainimage, setMainImage] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    option: selectedSize || "500g",
    category: "",
    status: "In Stock",
    price: "",
    discount: 0,
    stock: "",
  });

  // const onSubmitHandeler = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("name", data.name);
  //   formData.append("shortDescription", data.shortDescription);
  //   formData.append("fullDescription", data.fullDescription);
  //   formData.append("category", data.category);
  //   formData.append("status", data.status);
  //   formData.append("oldPrice", Number(data.oldPrice));
  //   formData.append("newPrice", Number(data.newPrice));
  //   formData.append("discount", Number(data.discount));
  //   formData.append("stock", Number(data.stock));

  //   if (mainimage) formData.append("mainImage", mainimage);
  //   if (image1) formData.append("image1", image1);
  //   if (image2) formData.append("image2", image2);
  //   if (image3) formData.append("image3", image3);
  //   if (image4) formData.append("image4", image4);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4000/api/products/add",
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       },
  //     );

  //     if (response.data.success) {
  //       setData({
  //         name: "",
  //         shortDescription: "",
  //         fullDescription: "",
  //         category: "",
  //         status: "",
  //         oldPrice: "",
  //         newPrice: "",
  //         discount: "",
  //         stock: "",
  //       });
  //       setMainImage(null);
  //       setImage1(null);
  //       setImage2(null);
  //       setImage3(null);
  //       setImage4(null);
  //       alert(response.data.message);
  //     } else {
  //       alert("Error adding product");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Something went wrong while adding product");
  //   }
  // };

  const handelThat = (e) => {
    e.preventDefault();
    console.log("data : ", data);
    console.log("mainImage : ", mainimage);
  };
  return (
    <div className="add w-[100%] relative p-5 pb-20 h-fit ">
      {/* header */}
      <div className="flex items-center gap-2 mb-7">
        <h1 className="text-[30px] font-bold mt-2">
          Add New Item
          <span className="block bg-[#ff007b] h-[5px] w-[40%] rounded-full  "></span>
        </h1>
      </div>

      {/* content */}
      <form onSubmit={handelThat} className="w-full h-screen flex gap-6 mb-30">
        {/* left side */}
        <div className="flex-2">
          {/*general info section  */}
          <div className="bg-gray-100/70 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] rounded-2xl p-5">
            <p className="text-[16px]  mb-3 font-semibold tracking-[1px]">
              General Information
            </p>
            {/* product  name */}
            <div className="add-product-name space-between my-5">
              <p className="mb-3">Product Name</p>
              <input
                className="w-full rounded-[7px] p-5 py-2 outline-none bg-gray-200/60"
                type="text"
                name="name"
                value={data.name}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter Product Name"
              />
            </div>

            {/* product description */}
            <div className="add-product-description space-between mb-5">
              <p className="mb-3">Description</p>
              <textarea
                className="w-full rounded-[7px] p-5 py-2 outline-none bg-gray-200/60"
                type="text"
                name="description"
                value={data.description}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={6}
                placeholder="Write Content Here"
              ></textarea>
            </div>

            {/* Quantity section */}
            <div className="w-full mb-10">
              <p className="mb-3 font-medium text-gray-700">Option</p>

              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg cursor-pointer border transition-all duration-200 text-sm font-medium
        ${
          selectedSize === size
            ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
            : "bg-white text-gray-700 border-gray-300 hover:border-green-400 hover:shadow-sm"
        }`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/*product Category Section */}
            <div className="bg-gray-100/70 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] rounded-2xl p-3 mt-5 w-full">
              <p className="font-semibold">Product Category</p>
              <p className="text-[11px] font-extralingt mb-3">
                Pick Available Category
              </p>
              <select
                name="category"
                className="w-full rounded-[7px] p-5 py-2 outline-none bg-gray-200/60"
                value={data.category} // controlled select
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

            {/*product status section */}
            <div className="bg-gray-100/70 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] rounded-2xl p-3 mt-5 w-full">
              <p className="text-[16px] font-semibold tracking-[1px]">
                Product Status
              </p>
              <p className="text-[11px] font-extralingt mb-3">
                Pick Current Status
              </p>
              <select
                name="status"
                className="w-full rounded-[7px] p-5 py-2 outline-none bg-gray-200/60"
                value={data.status} // controlled select
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

        {/* right side */}
        <div className="w-80">
          {/* image section */}
          <div className="bg-gray-100/70 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] rounded-2xl p-5">
            <p className="text-[16px]  mb-3 font-semibold tracking-[1px]">
              Upload Images
            </p>

            {/* top big image */}
            <div className="w-[100%] mx-auto h-[260px] mb-2">
              <label
                htmlFor="mainimage"
                className="cursor-pointer text-black w-full h-full flex flex-col  items-center justify-center border border-dashed border-gray-500/30 rounded-xl"
              >
                {mainimage ? (
                  <img
                    src={URL.createObjectURL(mainimage)}
                    alt=""
                    className="w-full h-full object-cover rounded-xl object-top"
                  />
                ) : (
                  <IoIosAddCircle className="text-[56px] text-[#ff007b]/50 hover:text-[#ff007b]" />
                )}
              </label>
              <input
                type="file"
                hidden
                id="mainimage"
                onChange={(e) => {
                  setMainImage(e.target.files[0]);
                }}
              />
            </div>
          </div>

          {/*Pricing section */}
          <div className="bg-gray-100/70 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] rounded-2xl p-5 mt-10">
            <p className="text-[16px]  mb-3 font-semibold tracking-[1px]">
              Pricing and Stock
            </p>
            {/* price */}
            <div className="add-product-description space-between mb-5">
              <p className="text-[13px] mb-1">Price</p>
              <input
                type="text"
                name="price"
                value={data.price}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, price: e.target.value }))
                }
                placeholder="Enter Price"
                className="w-full rounded-[7px] p-5 py-1 text-[14px] outline-none bg-gray-200/60"
              />
            </div>

            {/* discount */}
            <div className="add-product-description space-between mb-5">
              <p className="text-[13px] mb-1">Discount</p>
              <input
                type="text"
                name="discount"
                value={data.discount}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, discount: e.target.value }))
                }
                placeholder="Enter Discount"
                className="w-full rounded-[7px] p-5 py-1 text-[14px] outline-none bg-gray-200/60"
              />
            </div>

            {/* Stock */}
            <div className="add-product-description space-between mb-5">
              <p className="text-[13px] mb-1">Stock</p>
              <input
                type="text"
                name="stock"
                value={data.stock}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, stock: e.target.value }))
                }
                placeholder="Enter Stock"
                className="w-full rounded-[7px] p-5 py-1 text-[14px] outline-none bg-gray-200/60"
              />
            </div>
          </div>

          {/* Add Button */}
          <div className="mx-auto flex items-center justify-center mt-8 ">
            <button
              className="rounded-full w-[80%] border-2 border-black text-black b p-3 tracking-[2px] text-[16px] font-bold hover:bg-black hover:text-white cursor-pointer duration-200 hover:-translate-y-1"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
