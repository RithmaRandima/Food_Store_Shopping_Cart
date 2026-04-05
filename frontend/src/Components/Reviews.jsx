import React from "react";
import contentImage from "../assets/placeholder-image-2.png";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import CommentCard from "./CommentCard";
import { FaStar } from "react-icons/fa";

const Reviews = ({ productId }) => {
  console.log("review:", productId);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); // for hover effect

  const fetchReviews = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5001/api/comment/get-product-comments",
        { productId: productId },
      );
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
      console.log("d");
    } catch (error) {
      toast.error(error.message);
      console.log("Error on Fetching Product Reviews", error);
    }
  };

  const addReview = async (e) => {
    e.preventDefault();
    try {
      if (!name) return toast.error("Please Enter Name");
      if (!content) return toast.error("Please Enter Your Review");

      const { data } = await axios.post(
        "http://localhost:5001/api/comment/add-comment",
        {
          product: productId,
          name,
          content,
          rating,
        },
      );

      if (data.success) {
        toast.success("Review Successfully Added");
        setName("");
        setContent("");
        setHover(0);
        setRating(0);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("error on Add Review function", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  console.log();
  return (
    <div className=" flex mt-9 gap-5">
      {/* left side */}
      <div className="w-full">
        <h1 className="font-bold text-[22px] ">Reviews</h1>
        {/* review Container */}
        <div className="scroll-hide w-full h-125 mt-5 border rounded-[10px] border-slate-300 overflow-y-scroll p-3 ">
          {comments.map((comment) => (
            <CommentCard key={comment._id} comment={comment} />
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="mt-15 w-[840px] p-5 bg-slate-200/40 rounded-[10px] relative shadow-[1px_1px_3px_rgba(0,0,0,0.2)]">
        <div>
          <h1 className="font-semibold text-[20px] ">
            Share your thoughts about this product!
          </h1>
          <p className="font-extralight text-slate-500">
            We love hearing from our shoppers
          </p>
        </div>

        {/* form */}
        <form
          className="flex flex-col gap-5 mt-10"
          onSubmit={(e) => addReview(e, { name, content, rating })}
        >
          {/* Name input */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full border border-black rounded-[7px] px-4 py-2 focus:outline-1"
          />

          {/* Comment input */}
          <textarea
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your comment..."
            className="border border-black rounded-[7px] my-2 px-4 py-2 focus:outline-1 resize-none"
          ></textarea>

          {/* Star rating */}
          <p className="font-bold -mb-3">Rate this Product</p>
          <div className="flex gap-0.5 ml-10 mb-7">
            {Array.from({ length: 5 }, (_, i) => {
              const value = i + 1;
              return (
                <FaStar
                  key={i}
                  size={20}
                  className="cursor-pointer mr-1  transition-transform duration-150 "
                  color={value <= (hover || rating) ? "gold" : "gray"}
                  onMouseEnter={() => setHover(value)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(value)}
                />
              );
            })}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-black font-bold text-[16px] tracking-[1px] text-white py-3 rounded-full hover:scale-105 transition-transform duration-200 w-[60%] mx-auto"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
