const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Gallery = require("../models/Gallery");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();


// ==========================================
// UPLOAD DIRECTORY
// ==========================================

const uploadDir = path.join(
  __dirname,
  "../uploads/gallery"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}


// ==========================================
// MULTER STORAGE
// ==========================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const extension =
      path.extname(file.originalname);

    const name =
      path
        .basename(
          file.originalname,
          extension
        )
        .replace(/[^a-zA-Z0-9]/g, "-")
        .toLowerCase();

    const uniqueName =
      `${name}-${Date.now()}${extension}`;

    cb(null, uniqueName);
  },
});


// ==========================================
// FILE FILTER
// ==========================================

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (
    allowedTypes.includes(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, JPEG, PNG, WEBP and GIF images are allowed"
      )
    );
  }
};


// ==========================================
// UPLOAD CONFIG
// ==========================================

const upload = multer({
  storage,
  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});


// ==========================================
// GET ALL GALLERY IMAGES
// PUBLIC API
// ==========================================

router.get("/", async (req, res) => {
  try {
    const gallery = await Gallery.find({
      isActive: true,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: gallery.length,
      data: gallery,
    });
  } catch (error) {
    console.error(
      "Get Gallery Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
});


// ==========================================
// ADMIN GET ALL
// ==========================================

router.get(
  "/admin",
  protectAdmin,
  async (req, res) => {
    try {
      const gallery = await Gallery.find()
        .sort({
          createdAt: -1,
        });

      res.json({
        success: true,
        count: gallery.length,
        data: gallery,
      });
    } catch (error) {
      console.error(
        "Admin Gallery Error:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Failed to fetch gallery",
      });
    }
  }
);


// ==========================================
// ADMIN ADD IMAGE
// ==========================================

router.post(
  "/",
  protectAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        title,
        category,
      } = req.body;

      if (!title || !category) {
        if (req.file) {
          fs.unlinkSync(
            req.file.path
          );
        }

        return res.status(400).json({
          success: false,
          message:
            "Title and category are required",
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "Please select an image",
        });
      }

      const gallery = await Gallery.create({
        title,
        category,
        image:
          `/uploads/gallery/${req.file.filename}`,
        originalName:
          req.file.originalname,
      });

      res.status(201).json({
        success: true,
        message:
          "Gallery image uploaded successfully",
        data: gallery,
      });
    } catch (error) {
      console.error(
        "Upload Gallery Error:",
        error
      );

      if (req.file) {
        try {
          fs.unlinkSync(
            req.file.path
          );
        } catch {}
      }

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Failed to upload image",
      });
    }
  }
);


// ==========================================
// ADMIN UPDATE IMAGE DETAILS
// ==========================================

router.put(
  "/:id",
  protectAdmin,
  async (req, res) => {
    try {
      const {
        title,
        category,
      } = req.body;

      const gallery =
        await Gallery.findById(
          req.params.id
        );

      if (!gallery) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery image not found",
        });
      }

      if (title) {
        gallery.title = title;
      }

      if (category) {
        gallery.category = category;
      }

      await gallery.save();

      res.json({
        success: true,
        message:
          "Gallery updated successfully",
        data: gallery,
      });
    } catch (error) {
      console.error(
        "Update Gallery Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update gallery",
      });
    }
  }
);


// ==========================================
// ADMIN DELETE IMAGE
// ==========================================

router.delete(
  "/:id",
  protectAdmin,
  async (req, res) => {
    try {
      const gallery =
        await Gallery.findById(
          req.params.id
        );

      if (!gallery) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery image not found",
        });
      }

      // Remove physical image
      if (gallery.image) {
        const imagePath =
          path.join(
            __dirname,
            "..",
            gallery.image
          );

        if (
          fs.existsSync(imagePath)
        ) {
          fs.unlinkSync(imagePath);
        }
      }

      await Gallery.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Gallery image deleted successfully",
      });
    } catch (error) {
      console.error(
        "Delete Gallery Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete gallery image",
      });
    }
  }
);


module.exports = router;