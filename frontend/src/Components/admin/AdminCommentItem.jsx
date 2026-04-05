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
    <tr className="order-y border-gray-300">
      <td className="flex">
        <p className=" pl-3 text-[11px] font-bold">{index + 1}</p>
      </td>
      <td className="px-6 py-4">
        <p className="mb-3">
          <b className="font-medium text-gray-600 ">Product</b> :{" "}
          {product?.name}
        </p>
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
        <br />
        <p className="mt-3 text-[12px] text-right">{BlogDate}</p>
      </td>

      <td className="px-6 py-4 max-sm:hidden text-center  ">
        <p
          className={`px-[6px] text-[12px] text-black font-semibold py-[2px] ${categoryColors[product.category] || "bg-gray-200"}`}
        >
          {product.category}
        </p>
      </td>
      <td className="px-6 py-4 max-sm:hidden w-[150px] text-center">
        {moment(BlogDate).fromNow()}
      </td>
      <td className="px-6 py-4 text-center">
        <div className="inline-flex items-center gap-4 ">
          {comment.isApproved ? (
            <IoCheckmark
              // onClick={approveComment}
              className="hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <p
              className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1 cursor-pointer"
              onClick={() => approveComment(_id)}
            >
              Approve
            </p>
          )}
        </div>
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        <FaTrash
          onClick={deleteComment}
          className="hover:text-red-400 hover:scale-110 transition-all cursor-pointer mx-auto"
        />
      </td>
    </tr>
  );
};

export default AdminCommentItem;
