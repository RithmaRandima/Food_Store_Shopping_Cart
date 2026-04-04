import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const CommentModel =
  mongoose.models.Comments || mongoose.model("Comments", commentSchema);

export default CommentModel;
