import React from "react";
import moment from "moment";
import { FaStar } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const CommentCard = ({ comment }) => {
  const firstLetter = comment.name?.[1]?.toLowerCase();

  // Ternary operation for Tailwind color
  const nameColorClass =
    firstLetter === "a" || firstLetter === "r"
      ? "text-red-500"
      : firstLetter === "e"
        ? "text-yellow-500"
        : firstLetter === "i"
          ? "text-blue-500"
          : "text-black"; // default

  return (
    <div className="h-[140px] bg-red-40 border-b border-slate-200/70 w-full gap-4 mb-1 flex p-3">
      {/* image Container */}
      <div className=" w-[70px] h-[70px] rounded-full flex items-center justify-center">
        <FaCircleUser size={40} className={`font-bold ${nameColorClass}`} />
      </div>
      {/* info section */}
      <div className=" h-full w-[87%]">
        {/*info top  */}
        <div className="flex items-center justify-between">
          {/* name and rating */}
          <div>
            <p className="font-bold text-[17px] mb-1">{comment.name}</p>
            <div className="flex">
              {Array.from({ length: comment.rating }, (_, i) => (
                <FaStar key={i} className="text-amber-500 text-[13px] mr-0.5" />
              ))}
            </div>
          </div>
          {/* time */}
          <p
            className="text-slate-400 text-[13px]"
            title={moment(comment.createdAt).format("LLLL")}
          >
            {moment(comment.createdAt).fromNow()}
          </p>
        </div>

        {/* info bottom */}
        <p className="text-slate-400 text-[14px] leading-4.5 mt-2">
          {comment.content}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;

// time

{
  /* <p title={moment(comment.createdAt).format("LLLL")}>
        {moment(comment.createdAt).fromNow()}
      </p> */
}

// rating

// const CommentCard = ({ comment }) => {
//   return (
//     <div className="h-[150px] bg-red-500 w-full mb-3 p-2">
//       <p>{comment.content}</p>

//       <div className="flex">
//         {Array.from({ length: comment.rating }, (_, i) => (
//           <FaStar key={i} color="yellow" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentCard;
