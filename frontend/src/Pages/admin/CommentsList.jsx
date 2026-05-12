import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminCommentItem from "../../Components/admin/AdminCommentItem";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/comment/get-comments",
      );

      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("Error on Fetching Product Reviews", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // pagination logic
  const totalPages = Math.ceil(comments.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedComments = comments.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="w-full relative p-3 sm:p-5 pb-20 h-fit bg-gray-50">
      {/* ================= TITLE ================= */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[20px] sm:text-[25px] font-bold text-gray-800">
          Comments Management
        </h1>

        <p className="text-sm text-gray-500">
          Total:{" "}
          <span className="font-semibold text-black">{comments.length}</span>
        </p>
      </div>

      {/* ================= TABLE CONTAINER ================= */}
      <div className="relative max-w-[1000px] mx-auto overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-100">
        <table className="w-full text-sm text-gray-600">
          {/* HEADER */}
          <thead className="text-[12px] sm:text-[14px] text-gray-700 text-left uppercase bg-gray-100">
            <tr>
              {/* hide empty column on mobile */}
              <th className="py-3 px-2 sm:px-3  sm:table-cell"></th>

              <th className="py-3 px-2 sm:px-6 min-w-[160px] sm:min-w-[250px]">
                Blog & Comment
              </th>

              <th className="py-3 px-2 sm:px-6 text-center">
                <span className="hidden sm:inline">Category</span>
                <span className="sm:hidden">Cat</span>
              </th>

              <th className="py-3 px-2 hidden sm:table-cell sm:px-6 text-center">
                <span className="hidden sm:inline">Date</span>
                <span className=" sm:hidden">📅</span>
              </th>

              <th className="py-3 px-2 hidden sm:table-cell sm:px-6 text-center">
                <span className="hidden sm:inline">Status</span>
                <span className=" sm:hidden">⚡</span>
              </th>

              <th className="py-3 px-2 sm:px-6 text-center">
                <span className="hidden sm:inline">Action</span>
                <span className="sm:hidden">⚙️</span>
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-gray-100">
            {paginatedComments.map((comment, index) => (
              <AdminCommentItem
                comment={comment}
                key={index}
                index={index}
                fetchReviews={fetchReviews}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        {/* Prev */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-full disabled:opacity-40 hover:bg-gray-300 transition"
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
            className={`px-3 py-1 rounded-full transition ${
              currentPage === i + 1
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-full disabled:opacity-40 hover:bg-gray-300 transition"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CommentsList;
