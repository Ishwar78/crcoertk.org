const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Popup = require("../models/Popup");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// =====================================================
// UPLOAD DIRECTORY
// =====================================================
const uploadDir = path.join(__dirname, "../uploads/popup");
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
    const fileName = `popup-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/svg+xml",
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, PNG, WEBP, and GIF images are allowed for pop-up"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

// Helper to get or create popup doc
async function getOrCreatePopup() {
  let popup = await Popup.findOne();
  if (!popup) {
    popup = await Popup.create({
      enabled: true,
      title: "Admission Open 2026-27",
      image: "",
      link: "/admission",
      isExternal: false,
      buttonText: "Apply / View Details",
      showOncePerSession: true,
      delaySeconds: 0.5,
    });
  }
  return popup;
}

// =====================================================
// PUBLIC GET /api/popup
// =====================================================
router.get("/", async (req, res) => {
  try {
    const popup = await getOrCreatePopup();

    res.json({
      success: true,
      data: popup,
    });
  } catch (error) {
    console.error("Public Popup API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load popup data",
    });
  }
});

// =====================================================
// ADMIN GET /api/popup/admin
// =====================================================
router.get("/admin", protectAdmin, async (req, res) => {
  try {
    const popup = await getOrCreatePopup();

    res.json({
      success: true,
      data: popup,
    });
  } catch (error) {
    console.error("Admin Popup GET API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load popup data for admin",
    });
  }
});

// =====================================================
// ADMIN PUT /api/popup
// Update Popup settings and image
// =====================================================
router.put("/", protectAdmin, upload.single("popupImage"), async (req, res) => {
  try {
    let popup = await getOrCreatePopup();

    let payload = {};
    if (req.body.data) {
      try {
        payload = JSON.parse(req.body.data);
      } catch (err) {
        return res.status(400).json({
          success: false,
          message: "Invalid JSON data in form-data",
        });
      }
    } else {
      payload = req.body;
    }

    if (payload.enabled !== undefined) {
      popup.enabled = payload.enabled === true || payload.enabled === "true";
    }
    if (payload.title !== undefined) {
      popup.title = payload.title;
    }
    if (payload.link !== undefined) {
      popup.link = payload.link;
    }
    if (payload.isExternal !== undefined) {
      popup.isExternal =
        payload.isExternal === true || payload.isExternal === "true";
    }
    if (payload.buttonText !== undefined) {
      popup.buttonText = payload.buttonText;
    }
    if (payload.showOncePerSession !== undefined) {
      popup.showOncePerSession =
        payload.showOncePerSession === true ||
        payload.showOncePerSession === "true";
    }
    if (payload.delaySeconds !== undefined) {
      popup.delaySeconds = Number(payload.delaySeconds) || 0.5;
    }

    // If new image file uploaded
    if (req.file) {
      popup.image = `/uploads/popup/${req.file.filename}`;
    } else if (payload.removeImage === true || payload.removeImage === "true") {
      popup.image = "";
    } else if (payload.image !== undefined) {
      popup.image = payload.image;
    }

    await popup.save();

    res.json({
      success: true,
      message: "Popup settings updated successfully",
      data: popup,
    });
  } catch (error) {
    console.error("Admin Popup PUT API Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update popup settings",
    });
  }
});

module.exports = router;
