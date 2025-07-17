const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const Product = require("./models/Product");
const { maps } = require("./data/maps");

dotenv.config();

const SOURCE_IMAGE_DIR = path.join(__dirname, "assets/dummy");
const TARGET_BASE_DIR = path.join(__dirname, "uploads/maps");

async function seedDatabase() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/heralds_maps"
    );
    await Product.deleteMany();
    console.log("🧹 Old products removed");

    for (const map of maps) {
      const slug = slugify(map.title, { lower: true, strict: true });
      const targetDir = path.join(TARGET_BASE_DIR, slug);
      const imageFileName = path.basename(map.image);
      const sourcePath = path.join(SOURCE_IMAGE_DIR, imageFileName);
      const targetPath = path.join(targetDir, imageFileName);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        console.log(`📁 Folder dibuat: ${targetDir}`);
      }

      if (!fs.existsSync(targetPath)) {
        if (fs.existsSync(sourcePath)) {
          fs.copyFileSync(sourcePath, targetPath);
          console.log(`✅ Gambar disalin ke: ${targetPath}`);
        } else {
          console.warn(`⚠️ Gambar tidak ditemukan: ${sourcePath}`);
        }
      } else {
        console.log(`ℹ️ Gambar sudah ada: ${targetPath}`);
      }

      map.image = `maps/${slug}/${imageFileName}`;
    }

    const preparedMaps = maps.map(({ id, ...rest }) => rest); 
    await Product.insertMany(preparedMaps);

    console.log("✅ Maps inserted to MongoDB dengan gambar tersalin");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
}

seedDatabase();
