const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Facilities, defaultFacilitiesData } = require("../models/facilities.model");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// =====================================================
// UPLOAD DIRECTORY
// =====================================================
const uploadDir = path.join(__dirname, "../uploads/facilities");
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
    const fileName = `facility-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
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
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, PNG, WEBP and SVG images are allowed"));
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
// PUBLIC GET /api/facilities
// Returns Facilities content. If none exists, creates default.
// =====================================================
router.get("/", async (req, res) => {
  try {
    let data = await Facilities.findOne().lean();

    if (!data) {
      const created = await Facilities.create(defaultFacilitiesData);
      data = created.toObject();
    }

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Public Facilities API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load Facilities data",
    });
  }
});

// =====================================================
// ADMIN GET /api/facilities/admin
// =====================================================
router.get("/admin", protectAdmin, async (req, res) => {
  try {
    let data = await Facilities.findOne();

    if (!data) {
      data = await Facilities.create(defaultFacilitiesData);
    }

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Admin Facilities API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load Facilities data",
    });
  }
});

// =====================================================
// ADMIN PUT /api/facilities
// Update Facilities data with image uploads
// =====================================================
router.put("/", protectAdmin, upload.any(), async (req, res) => {
  try {
    let data = await Facilities.findOne();
    if (!data) {
      data = new Facilities(defaultFacilitiesData);
    }

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

    // Merge hero
    if (payload.hero) {
      data.hero = { ...(data.hero ? data.hero.toObject() : {}), ...payload.hero };
    }

    // Merge facilities array
    if (payload.facilities && Array.isArray(payload.facilities)) {
      data.facilities = payload.facilities;
    }

    // Process uploaded files if any
    if (req.files && Array.isArray(req.files)) {
      req.files.forEach((file) => {
        const filePath = `/uploads/facilities/${file.filename}`;

        if (file.fieldname === "heroImage") {
          data.hero.image = filePath;
        } else if (file.fieldname.startsWith("facilityImage_")) {
          // e.g. facilityImage_Classroom or facilityImage_ICT_Center or index
          const identifier = file.fieldname.replace("facilityImage_", "");
          const index = parseInt(identifier, 10);

          if (!isNaN(index) && data.facilities[index]) {
            data.facilities[index].image = filePath;
          } else {
            const fac = data.facilities.find(
              (f) =>
                f.key === identifier ||
                f.key.replace(/\s+/g, "_") === identifier ||
                f.name === identifier
            );
            if (fac) {
              fac.image = filePath;
            }
          }
        } else if (file.fieldname.startsWith("subLabImage_")) {
          // format: subLabImage_<facilityKey>_<labNameOrIndex>
          const parts = file.fieldname.replace("subLabImage_", "").split("_");
          const facKey = parts[0];
          const labName = parts.slice(1).join(" ");

          const fac = data.facilities.find(
            (f) =>
              f.key === facKey ||
              f.key === "Laboratory" ||
              f.name === "Laboratory"
          );
          if (fac && fac.labs) {
            const labIndex = parseInt(parts[1], 10);
            if (!isNaN(labIndex) && fac.labs[labIndex]) {
              fac.labs[labIndex].image = filePath;
            } else {
              const lab = fac.labs.find(
                (l) =>
                  l.name.toLowerCase() === labName.toLowerCase() ||
                  l.name.replace(/\s+/g, "_").toLowerCase() ===
                    parts.slice(1).join("_").toLowerCase()
              );
              if (lab) {
                lab.image = filePath;
              }
            }
          }
        }
      });
    }

    data.markModified("hero");
    data.markModified("facilities");

    await data.save();

    res.json({
      success: true,
      message: "Facilities updated successfully!",
      data,
    });
  } catch (error) {
    console.error("Update Facilities Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update Facilities",
    });
  }
});

// =====================================================
// ADMIN POST /api/facilities/reset
// Resets Facilities data to college defaults
// =====================================================
router.post("/reset", protectAdmin, async (req, res) => {
  try {
    let data = await Facilities.findOne();
    if (!data) {
      data = new Facilities(defaultFacilitiesData);
    } else {
      data.hero = defaultFacilitiesData.hero;
      data.facilities = defaultFacilitiesData.facilities;
    }

    data.markModified("hero");
    data.markModified("facilities");

    await data.save();

    res.json({
      success: true,
      message: "Facilities reset to standard defaults successfully!",
      data,
    });
  } catch (error) {
    console.error("Reset Facilities Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to reset Facilities data",
    });
  }
});

module.exports = router;
