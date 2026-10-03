const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const About = require("../models/About");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();


// =====================================================
// UPLOAD DIRECTORY
// =====================================================

const uploadDir = path.join(
  __dirname,
  "../uploads/about"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}


// =====================================================
// MULTER STORAGE
// =====================================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(
      file.originalname
    );

    const fileName =
      `about-${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${ext}`;

    cb(null, fileName);
  },
});


// =====================================================
// FILE FILTER
// =====================================================

const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, PNG and WEBP images are allowed"
      )
    );
  }
};


const upload = multer({
  storage,
  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});


// =====================================================
// PUBLIC ABOUT
// GET /api/about
// =====================================================

router.get("/", async (req, res) => {
  try {
    const about =
      await About.findOne().lean();

    res.json({
      success: true,
      data: about || null,
    });

  } catch (error) {
    console.error(
      "Public About Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to load About data",
    });
  }
});


// =====================================================
// ADMIN ABOUT
// GET /api/about/admin
// =====================================================

router.get(
  "/admin",
  protectAdmin,
  async (req, res) => {
    try {
      const about =
        await About.findOne();

      res.json({
        success: true,
        data: about || null,
      });

    } catch (error) {
      console.error(
        "Admin About Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to load About data",
      });
    }
  }
);


// =====================================================
// SEED ABOUT
// POST /api/about/seed
//
// Frontend se current website content
// ek baar database mein save karne ke liye.
// =====================================================

router.post(
  "/seed",
  protectAdmin,
  async (req, res) => {
    try {
      const existing =
        await About.findOne();

      if (existing) {
        return res.json({
          success: true,
          alreadySeeded: true,
          message:
            "About data already exists in database.",
          data: existing,
        });
      }

      const data =
        req.body || {};

      const about =
        await About.create(data);

      res.status(201).json({
        success: true,
        alreadySeeded: false,
        message:
          "About content saved to database successfully.",
        data: about,
      });

    } catch (error) {
      console.error(
        "About Seed Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Failed to seed About data",
      });
    }
  }
);


// =====================================================
// UPDATE ABOUT
// PUT /api/about
// =====================================================

router.put(
  "/",
  protectAdmin,

  upload.fields([
    {
      name: "heroImage",
      maxCount: 1,
    },

    {
      name: "inspirationImage",
      maxCount: 1,
    },

    {
      name: "panchayatImage",
      maxCount: 1,
    },

    {
      name: "principalImage",
      maxCount: 1,
    },
  ]),

  async (req, res) => {
    try {
      let about =
        await About.findOne();

      if (!about) {
        about = new About();
      }


      // =================================================
      // JSON DATA
      // =================================================

      let data = {};

      try {
        data = JSON.parse(
          req.body.data || "{}"
        );
      } catch (parseError) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid About JSON data.",
        });
      }


      // =================================================
      // ALLOWED SECTIONS
      // =================================================

      const allowedSections = [
        "hero",
        "history",
        "inspiration",
        "society",
        "institutions",
        "objectives",
        "panchayat",
        "visionMission",
        "principal",
        "strength",
        "cta",
      ];


      allowedSections.forEach(
        (section) => {
          if (
            Object.prototype.hasOwnProperty.call(
              data,
              section
            )
          ) {
            about[section] =
              data[section];
          }
        }
      );


      // =================================================
      // IMAGES
      // =================================================

      const files =
        req.files || {};


      if (files.heroImage?.[0]) {
        about.hero.image =
          `/uploads/about/${files.heroImage[0].filename}`;
      }


      if (
        files.inspirationImage?.[0]
      ) {
        about.inspiration.image =
          `/uploads/about/${files.inspirationImage[0].filename}`;
      }


      if (
        files.panchayatImage?.[0]
      ) {
        about.panchayat.image =
          `/uploads/about/${files.panchayatImage[0].filename}`;
      }


      if (
        files.principalImage?.[0]
      ) {
        about.principal.image =
          `/uploads/about/${files.principalImage[0].filename}`;
      }


      await about.save();


      res.json({
        success: true,

        message:
          "About page updated successfully",

        data: about,
      });

    } catch (error) {
      console.error(
        "About Update Error:",
        error
      );

      res.status(500).json({
        success: false,

        message:
          error.message ||
          "Failed to update About page",
      });
    }
  }
);


module.exports = router;