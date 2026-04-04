import express from "express";
import {
  approveCommentById,
  createComment,
  deleteComment,
  getAllComments,
  getCommentByProductId,
} from "../controllers/commentController.js";

const commentRouter = express.Router();

commentRouter.post("/add-comment", createComment);
commentRouter.post("/get-product-comments", getCommentByProductId);
commentRouter.get("/get-comments", getAllComments);
commentRouter.post("/delete-comment", deleteComment);
commentRouter.post("/approve-comment", approveCommentById);

export default commentRouter;
