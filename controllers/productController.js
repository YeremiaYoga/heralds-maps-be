const Product = require("../models/Product");
const { success, error } = require("../utils/apiResponse");
const path = require("path");
const slugify = require("slugify");

exports.createProduct = async (req, res, next) => {
  try {
    const { title, description, categories, width, height, gridSize, type } =
      req.body;

    const slug = slugify(title, { lower: true, strict: true });
    const filename = req.file.filename;
    const imagePath = `maps/${slug}/${filename}`;

    const newProduct = new Product({
      title,
      description,
      categories: Array.isArray(categories) ? categories : [categories],
      image: imagePath,
      dimensions: {
        width: parseInt(width),
        height: parseInt(height),
      },
      gridSize: parseInt(gridSize),
      active: false,
      isFavorited: [],
      type,
    });

    const saved = await newProduct.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error("Create product error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(success("Product list", products));
  } catch (err) {
    next(err);
  }
};
