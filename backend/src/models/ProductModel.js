import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    option: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true },
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default productModel;
