import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import AdminCommentItem from "../../Components/admin/AdminCommentItem";

const CommentsList = () => {
  const [comments, setComments] = useState([]);

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

  console.log(comments);

  return (
    <div className="w-full relative p-5 pb-20 h-fit">
      <div className="scroll-hide relative h-[700px] max-w-[1000px] overflow-x-auto mt-7 bg-white shadow rounded-lg scrollbar-hide ">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-[14px] text-gray-700 text-left uppercase">
            <tr>
              <th></th>
              <th scope="col" className="w-[420px] py-3 px-13">
                Blog Title & Comment
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Category
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Date
              </th>{" "}
              <th scope="col" className="py-3 px-6 text-center">
                Status
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Action
              </th>
            </tr>
          </thead>

          {/* content */}
          <tbody>
            {comments.map((comment, index) => (
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
    </div>
  );
};

export default CommentsList;
