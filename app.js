const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();


app.use(cors({
  origin: "http://localhost:3000",
  credentials: true, 
}));
app.use(express.json());
app.use(cookieParser());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);


app.use(errorHandler);

module.exports = app;
