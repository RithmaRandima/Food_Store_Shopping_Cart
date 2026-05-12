import React from "react";
import { FaTrash } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
// import { useAppContext } from "../../../context/AppContext";
import { toast } from "react-hot-toast";
import moment from "moment";
import axios from "axios";

const AdminCommentItem = ({ comment, fetchReviews, index }) => {
  const categoryColors = {
    Vegetables: "bg-green-400",
    Fruits: "bg-yellow-400",
    Meat: "bg-red-400",
    Dairy: "bg-white border border-gray-300",
    Bakery: "bg-orange-400",
  };

  // const { axios } = useAppContext();
  const { createdAt, product, _id } = comment;
  const BlogDate = new Date(createdAt).toDateString();

  const approveComment = async (id) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5001/api/comment/approve-comment",

        {
          id: id,
        },
      );
      if (data.success) {
        toast.success(data.message);
        fetchReviews();
      }
    } catch (error) {
      toast.error(error.message);
      console.log(
        "error on approveComment function on AdminCommentItem page",
        error,
      );
    }
  };

  const deleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this comment?",
      );

      if (!confirm) return;
      const { data } = await axios.post(
        "http://localhost:5001/api/comment/delete-comment",

        { id: _id },
      );
      if (data.success) {
        toast.success(data.message);
        fetchReviews();
      }
    } catch (error) {
      toast.error(error.message);
      console.log(
        "error on deleteComment function on CommentTsbleItem page",
        error,
      );
    }
  };

  console.log(comment);
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
      {/* INDEX */}
      <td className="align-top px-2 sm:px-3 py-4 text-[11px] font-bold text-gray-500">
        {index + 1}
      </td>

      {/* PRODUCT INFO */}
      <td className="px-2 sm:px-6 py-4">
        <p className="mb-2 text-[13px] sm:text-[15px]">
          <span className="font-semibold text-gray-600">Product:</span>{" "}
          {product?.name}
        </p>

        <p className="text-[13px] sm:text-[14px]">
          <span className="font-semibold text-gray-600">Name:</span>{" "}
          {comment.name}
        </p>

        <p className="text-[13px] sm:text-[14px] mt-1">
          <span className="font-semibold text-gray-600">Comment:</span>{" "}
          {comment.content}
        </p>

        <p className="mt-3 text-[11px] text-gray-400 text-right">{BlogDate}</p>
      </td>

      {/* CATEGORY */}
      <td className=" sm:table-cell px-6 py-4 text-center">
        <span
          className={`px-2 py-1 rounded-full text-[11px] font-semibold ${
            categoryColors[product.category] || "bg-gray-200 text-gray-700"
          }`}
        >
          {product.category}
        </span>
      </td>

      {/* DATE */}

      <td className="hidden sm:table-cell px-6 py-4 text-center text-gray-500 text-sm">
        {moment(createdAt).fromNow()}
      </td>

      {/* STATUS / APPROVE */}
      <td className="hidden sm:table-cell px-2 sm:px-6 py-4 text-center">
        <div className="flex justify-center items-center">
          {comment.isApproved ? (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
              <IoCheckmark size={18} />
            </div>
          ) : (
            <button
              onClick={() => approveComment(_id)}
              className="text-[11px] sm:text-xs bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition"
            >
              Approve
            </button>
          )}
        </div>
      </td>

      {/* DELETE */}
      <td className=" sm:table-cell px-6 py-4 text-center">
        <FaTrash
          onClick={deleteComment}
          className="text-gray-500 hover:text-red-500 hover:scale-110 transition cursor-pointer mx-auto"
        />
      </td>
    </tr>
  );
};

export default AdminCommentItem;
