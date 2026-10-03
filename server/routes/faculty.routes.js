const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Faculty = require("../models/Faculty");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();


/*
================================================
UPLOAD DIRECTORY
================================================
*/

const uploadDir = path.join(
  __dirname,
  "../uploads/faculty"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}


/*
================================================
MULTER STORAGE
================================================
*/

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(
      file.originalname
    );

    const uniqueName =
      `faculty-${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${ext}`;

    cb(null, uniqueName);
  },
});


const fileFilter = (
  req,
  file,
  cb
) => {

  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  if (
    allowedTypes.includes(
      file.mimetype
    )
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, JPEG, PNG and WEBP images are allowed"
      ),
      false
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


/*
================================================
PUBLIC - GET ALL ACTIVE FACULTY
================================================
*/

router.get("/", async (req, res) => {
  try {

    const faculty =
      await Faculty.find({
        isActive: true,
      }).sort({
        category: 1,
        sortOrder: 1,
        createdAt: -1,
      });


    res.json({
      success: true,
      count: faculty.length,
      data: faculty,
    });

  } catch (error) {

    console.error(
      "Get Faculty Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch faculty",
    });
  }
});


/*
================================================
ADMIN - GET ALL FACULTY
================================================
*/

router.get(
  "/admin/all",
  protectAdmin,
  async (req, res) => {
    try {

      const faculty =
        await Faculty.find()
          .sort({
            category: 1,
            sortOrder: 1,
            createdAt: -1,
          });


      res.json({
        success: true,
        count: faculty.length,
        data: faculty,
      });

    } catch (error) {

      console.error(
        "Get Admin Faculty Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch faculty",
      });
    }
  }
);


/*
================================================
ADMIN - ADD FACULTY
================================================
*/

router.post(
  "/",
  protectAdmin,
  upload.single("image"),
  async (req, res) => {

    try {

      const {
        name,
        designation,
        qualification,
        department,
        category,
        email,
        phone,
        bio,
        sortOrder,
      } = req.body;


      if (
        !name ||
        !designation ||
        !qualification ||
        !department ||
        !category
      ) {

        if (req.file) {
          fs.unlinkSync(
            req.file.path
          );
        }

        return res.status(400).json({
          success: false,
          message:
            "Name, designation, qualification, department and category are required",
        });
      }


      if (
        !["Teaching", "Non-Teaching"].includes(
          category
        )
      ) {

        if (req.file) {
          fs.unlinkSync(
            req.file.path
          );
        }

        return res.status(400).json({
          success: false,
          message:
            "Invalid faculty category",
        });
      }


      const image = req.file
        ? `/uploads/faculty/${req.file.filename}`
        : "";


      const faculty =
        await Faculty.create({
          name: name.trim(),

          designation:
            designation.trim(),

          qualification:
            qualification.trim(),

          department:
            department.trim(),

          category,

          image,

          email:
            email
              ? email.trim().toLowerCase()
              : "",

          phone:
            phone
              ? phone.trim()
              : "",

          bio:
            bio
              ? bio.trim()
              : "",

          sortOrder:
            Number(sortOrder) || 0,

          isActive: true,
        });


      res.status(201).json({
        success: true,
        message:
          "Faculty added successfully",
        data: faculty,
      });

    } catch (error) {

      if (req.file) {
        try {
          fs.unlinkSync(
            req.file.path
          );
        } catch {}
      }


      console.error(
        "Add Faculty Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Failed to add faculty",
      });
    }
  }
);


/*
================================================
ADMIN - UPDATE FACULTY
================================================
*/

router.put(
  "/:id",
  protectAdmin,
  upload.single("image"),
  async (req, res) => {

    try {

      const faculty =
        await Faculty.findById(
          req.params.id
        );


      if (!faculty) {

        if (req.file) {
          fs.unlinkSync(
            req.file.path
          );
        }

        return res.status(404).json({
          success: false,
          message:
            "Faculty member not found",
        });
      }


      const oldImage =
        faculty.image;


      const {
        name,
        designation,
        qualification,
        department,
        category,
        email,
        phone,
        bio,
        sortOrder,
        isActive,
      } = req.body;


      if (name !== undefined)
        faculty.name =
          name.trim();

      if (designation !== undefined)
        faculty.designation =
          designation.trim();

      if (qualification !== undefined)
        faculty.qualification =
          qualification.trim();

      if (department !== undefined)
        faculty.department =
          department.trim();

      if (category !== undefined)
        faculty.category =
          category;

      if (email !== undefined)
        faculty.email =
          email.trim().toLowerCase();

      if (phone !== undefined)
        faculty.phone =
          phone.trim();

      if (bio !== undefined)
        faculty.bio =
          bio.trim();

      if (sortOrder !== undefined)
        faculty.sortOrder =
          Number(sortOrder) || 0;

      if (isActive !== undefined)
        faculty.isActive =
          isActive === "true" ||
          isActive === true;


      /*
      ----------------------------------------
      NEW IMAGE
      ----------------------------------------
      */

      if (req.file) {

        faculty.image =
          `/uploads/faculty/${req.file.filename}`;

        await faculty.save();


        // Delete old image
        if (
          oldImage &&
          oldImage.startsWith(
            "/uploads/faculty/"
          )
        ) {

          const oldPath =
            path.join(
              __dirname,
              "..",
              oldImage
                .replace(
                  "/uploads/",
                  "uploads/"
                )
            );


          if (
            fs.existsSync(oldPath)
          ) {

            fs.unlinkSync(
              oldPath
            );

          }
        }

      } else {

        await faculty.save();

      }


      res.json({
        success: true,
        message:
          "Faculty updated successfully",
        data: faculty,
      });

    } catch (error) {

      if (req.file) {
        try {
          fs.unlinkSync(
            req.file.path
          );
        } catch {}
      }


      console.error(
        "Update Faculty Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          error.message ||
          "Failed to update faculty",
      });
    }
  }
);


/*
================================================
ADMIN - DELETE FACULTY
================================================
*/

router.delete(
  "/:id",
  protectAdmin,
  async (req, res) => {

    try {

      const faculty =
        await Faculty.findById(
          req.params.id
        );


      if (!faculty) {

        return res.status(404).json({
          success: false,
          message:
            "Faculty member not found",
        });

      }


      /*
      Delete image from folder
      */

      if (
        faculty.image &&
        faculty.image.startsWith(
          "/uploads/faculty/"
        )
      ) {

        const imagePath =
          path.join(
            __dirname,
            "..",
            faculty.image.replace(
              "/uploads/",
              "uploads/"
            )
          );


        if (
          fs.existsSync(imagePath)
        ) {

          fs.unlinkSync(
            imagePath
          );

        }
      }


      await Faculty.findByIdAndDelete(
        req.params.id
      );


      res.json({
        success: true,
        message:
          "Faculty deleted successfully",
      });

    } catch (error) {

      console.error(
        "Delete Faculty Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete faculty",
      });
    }
  }
);


/*
================================================
ADMIN - TOGGLE ACTIVE STATUS
================================================
*/

router.put(
  "/:id/status",
  protectAdmin,
  async (req, res) => {

    try {

      const faculty =
        await Faculty.findById(
          req.params.id
        );


      if (!faculty) {

        return res.status(404).json({
          success: false,
          message:
            "Faculty member not found",
        });

      }


      faculty.isActive =
        !faculty.isActive;


      await faculty.save();


      res.json({
        success: true,
        message:
          faculty.isActive
            ? "Faculty activated"
            : "Faculty hidden",
        data: faculty,
      });

    } catch (error) {

      console.error(
        "Faculty Status Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update status",
      });
    }
  }
);


module.exports = router;