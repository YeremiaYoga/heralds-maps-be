const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/productController");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.route("/")
  .post(upload.single("image"), createProduct)
  .get(getAllProducts);

module.exports = router;
