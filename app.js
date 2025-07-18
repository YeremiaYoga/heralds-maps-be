const express = require("express");

const cors = require("cors");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorHandler);

module.exports = app;
