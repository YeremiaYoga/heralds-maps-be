const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  categories: [{ type: String }],
  description: { type: String },
  dimensions: {
    width: Number,
    height: Number
  },
  gridSize: { type: Number },
  active: { type: Boolean },
  isFavorited: [{ type: Number }],
  type: { type: String, enum: ["free", "subscribe"] },
  created_at: { type: Date },
  updated_at: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
