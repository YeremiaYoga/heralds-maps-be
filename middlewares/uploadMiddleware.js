const multer = require("multer");
const path = require("path");
const fs = require("fs");
const slugify = require("slugify");

// Fungsi untuk membuat folder upload berdasarkan nama map
const getStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let mapTitle = req.body.title || "untitled";
    const slug = slugify(mapTitle, { lower: true, strict: true });
    const dir = path.join("uploads", "maps", slug);

    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // atau Date.now() + '-' + file.originalname
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(new Error("Only image files are allowed"), false);
};

module.exports = multer({ storage: getStorage, fileFilter });
