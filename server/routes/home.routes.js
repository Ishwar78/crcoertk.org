const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Home = require("../models/Home");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// =====================================================
// UPLOAD DIRECTORY
// =====================================================
const uploadDir = path.join(__dirname, "../uploads/home");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// =====================================================
// MULTER STORAGE
// =====================================================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `home-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/svg+xml",
    "application/pdf",
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, PNG, WEBP, SVG and PDF files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

// =====================================================
// PUBLIC GET /api/home
// Returns Home content. If none exists, creates default.
// =====================================================
router.get("/", async (req, res) => {
  try {
    let home = await Home.findOne().lean();

    if (!home) {
      const created = await Home.create({});
      home = created.toObject();
    }

    if (!home.hero) home.hero = {};
    if (!home.hero.sliderImages || home.hero.sliderImages.length === 0) {
      home.hero.sliderImages = [
        "/images/student-hero.jpg",
        "/images/campus-about.jpg",
        "/images/campus-home.jpg",
        "/images/academic-campus.jpg",
      ];
    }

    res.json({
      success: true,
      data: home,
    });
  } catch (error) {
    console.error("Public Home API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load Home data",
    });
  }
});

// =====================================================
// ADMIN GET /api/home/admin
// =====================================================
router.get("/admin", protectAdmin, async (req, res) => {
  try {
    let home = await Home.findOne();

    if (!home) {
      home = await Home.create({});
    }

    if (!home.hero) home.hero = {};
    if (!home.hero.sliderImages || home.hero.sliderImages.length === 0) {
      home.hero.sliderImages = [
        "/images/student-hero.jpg",
        "/images/campus-about.jpg",
        "/images/campus-home.jpg",
        "/images/academic-campus.jpg",
      ];
    }

    res.json({
      success: true,
      data: home,
    });
  } catch (error) {
    console.error("Admin Home API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load Home data",
    });
  }
});

// =====================================================
// ADMIN PUT /api/home
// Update Home page content with image uploads
// =====================================================
router.put("/", protectAdmin, upload.any(), async (req, res) => {
  try {
    let home = await Home.findOne();
    if (!home) {
      home = new Home({});
    }

    // Parse JSON payload from multipart or raw body
    let payload = {};
    if (req.body.data) {
      try {
        payload = JSON.parse(req.body.data);
      } catch (err) {
        return res.status(400).json({
          success: false,
          message: "Invalid JSON in form data",
        });
      }
    } else {
      payload = req.body;
    }

    // Merge payload fields
    if (payload.hero) {
      const mergedHero = { ...home.hero.toObject(), ...payload.hero };
      if (Array.isArray(payload.hero.sliderImages)) {
        mergedHero.sliderImages = payload.hero.sliderImages;
      }
      home.hero = mergedHero;
    }
    if (payload.newsEvents) {
      const mergedNews = { ...home.newsEvents.toObject(), ...payload.newsEvents };
      if (Array.isArray(payload.newsEvents.items)) {
        mergedNews.items = payload.newsEvents.items;
      }
      home.newsEvents = mergedNews;
    }
    if (payload.programmes) {
      home.programmes = { ...home.programmes.toObject(), ...payload.programmes };
    }
    if (payload.about) {
      home.about = { ...home.about.toObject(), ...payload.about };
    }
    if (payload.principal) {
      home.principal = { ...home.principal.toObject(), ...payload.principal };
    }
    if (payload.whyChoose) {
      home.whyChoose = { ...home.whyChoose.toObject(), ...payload.whyChoose };
    }
    if (payload.gallery) {
      home.gallery = { ...home.gallery.toObject(), ...payload.gallery };
    }

    // Process uploaded files if any
    if (req.files && Array.isArray(req.files)) {
      req.files.forEach((file) => {
        const filePath = `/uploads/home/${file.filename}`;

        if (file.fieldname === "heroImage") {
          home.hero.image = filePath;
        } else if (
          file.fieldname === "newHeroSliderImage" ||
          file.fieldname.startsWith("heroSlider_") ||
          file.fieldname.startsWith("heroSliderImage")
        ) {
          if (!home.hero.sliderImages) home.hero.sliderImages = [];
          home.hero.sliderImages.push(filePath);
        } else if (file.fieldname === "newsIntroImage") {
          home.newsEvents.introImage = filePath;
        } else if (file.fieldname === "aboutImage") {
          home.about.image = filePath;
        } else if (file.fieldname === "principalImage") {
          home.principal.image = filePath;
        } else if (file.fieldname.startsWith("programImage_")) {
          const index = parseInt(file.fieldname.replace("programImage_", ""), 10);
          if (
            home.programmes &&
            home.programmes.programs &&
            home.programmes.programs[index]
          ) {
            home.programmes.programs[index].image = filePath;
          }
        } else if (file.fieldname === "newGalleryImage") {
          if (!home.gallery.images) home.gallery.images = [];
          home.gallery.images.push(filePath);
        } else if (file.fieldname.startsWith("newsItemFile_")) {
          const index = parseInt(file.fieldname.replace("newsItemFile_", ""), 10);
          if (
            home.newsEvents &&
            home.newsEvents.items &&
            home.newsEvents.items[index]
          ) {
            home.newsEvents.items[index].fileUrl = filePath;
            if (
              !home.newsEvents.items[index].linkType ||
              home.newsEvents.items[index].linkType === "link"
            ) {
              home.newsEvents.items[index].linkType =
                file.mimetype === "application/pdf" ? "pdf" : "image";
            }
          }
        }
      });
    }

    home.markModified("hero");
    home.markModified("newsEvents");
    home.markModified("programmes");
    home.markModified("about");
    home.markModified("principal");
    home.markModified("whyChoose");
    home.markModified("gallery");

    await home.save();

    res.json({
      success: true,
      message: "Home page content updated successfully!",
      data: home,
    });
  } catch (error) {
    console.error("Home Update Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update Home page",
    });
  }
});

// =====================================================
// ADMIN POST /api/home/reset
// Reset Home page to default initial values
// =====================================================
router.post("/reset", protectAdmin, async (req, res) => {
  try {
    await Home.deleteMany({});
    const defaultHome = await Home.create({});

    res.json({
      success: true,
      message: "Home page reset to default content successfully",
      data: defaultHome,
    });
  } catch (error) {
    console.error("Home Reset Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to reset Home page",
    });
  }
});

module.exports = router;
