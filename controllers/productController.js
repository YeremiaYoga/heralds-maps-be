const Product = require("../models/Product");
const { success, error } = require("../utils/apiResponse");
const path = require("path");
const slugify = require("slugify");

exports.createProduct = async (req, res, next) => {
  try {
    const {
      title,
      description,
      categories,
      width,
      height,
      gridSize,
      active,
      isFavorited,
      type,
      created_at,
      updated_at
    } = req.body;

    if (!title || !gridSize || !type) {
      return res.status(400).json(error("Missing required fields"));
    }

    const slug = slugify(title, { lower: true, strict: true });

    const imagePath = req.file?.path.replace(/\\/g, "/").replace(/^uploads\//, ""); 

    const product = await Product.create({
      title,
      description,
      categories: categories ? categories.split(",").map(c => c.trim()) : [],
      dimensions: {
        width: parseInt(width) || 0,
        height: parseInt(height) || 0
      },
      gridSize: parseInt(gridSize),
      active: active === "true" || active === true,
      isFavorited: isFavorited ? isFavorited.split(",").map(Number) : [],
      type,
      image: imagePath,
      created_at: created_at ? new Date(created_at) : new Date(),
      updated_at: updated_at ? new Date(updated_at) : new Date()
    });

    res.status(201).json(success("Product created", product));
  } catch (err) {
    next(err);
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
