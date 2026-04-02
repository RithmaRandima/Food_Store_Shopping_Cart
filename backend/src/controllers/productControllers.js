import productModel from "../models/productModel.js";

// allProduct Function
export const allProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json({
      success: true,
      message: "Product Successfully Fetched",
      products,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on allProduct function", error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);

    if (!product) {
      res.json({
        success: false,
        message: "This Product don't Exists",
      });
    }

    res.json({
      success: true,
      message: "Product Founded",
      product,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on getProductById function", error);
  }
};

// addProduct Function
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      option,
      category,
      status,
      price,
      discount,
      stock,
    } = req.body;
    const imageFile = req.file.filename;

    if (
      !name ||
      !description ||
      !category ||
      !imageFile ||
      !option ||
      !status ||
      !price ||
      !stock
    ) {
      return res.json({ success: false, message: "Missing Required Fields" });
    }

    const product = new productModel({
      name,
      description,
      category,
      image: imageFile,
      option,
      status,
      price,
      discount,
      stock,
    });

    const savedProduct = await product.save();

    res.json({
      success: true,
      message: "Product added Successfully",
      savedProduct,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error on addProduct function", error);
  }
};
