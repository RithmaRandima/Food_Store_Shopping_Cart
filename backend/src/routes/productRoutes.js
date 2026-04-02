import express from "express";
import {
  addProduct,
  allProduct,
  getProductById,
} from "../controllers/productControllers.js";
import upload from "../middleware/multerConfig.js";

const productRouter = express.Router();

productRouter.get("/all-products", allProduct);
productRouter.get("/:id", getProductById);
productRouter.post("/add-product", upload.single("image"), addProduct);

export default productRouter;
