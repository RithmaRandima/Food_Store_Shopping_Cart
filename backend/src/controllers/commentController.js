import CommentModel from "../models/CommentModel.js";

export const createComment = async (req, res) => {
  try {
    const { product, name, content } = req.body;
    const comment = new CommentModel({
      product,
      name,
      content,
    });

    await comment.save();
    res.json({ success: true, message: "Review added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on addComment function:", error);
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await CommentModel.find({})
      .populate("product")
      .sort({ createdAt: -1 });

    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on getAllComments function", error);
  }
};

export const getCommentByProductId = async (req, res) => {
  try {
    const { productId } = req.body;
    const comments = await CommentModel.find({
      product: productId,
      isApproved: true,
    }).sort({ createdAt: -1 });

    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on getComment function:", error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.body;
    await CommentModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Comment deleted Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on deleteComment function", error);
  }
};

export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await CommentModel.findByIdAndUpdate(id, {
      isApproved: true,
    });
    res.json({ success: true, message: "Review approved Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on approveCommentById function", error);
  }
};
