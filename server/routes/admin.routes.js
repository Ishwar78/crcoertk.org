const express = require("express");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();


/*
========================================
ADMIN LOGIN
========================================
*/

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }


    const admin = await Admin.findOne({
      email: email.toLowerCase().trim(),
    });


    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    if (!admin.isActive) {
      return res.status(403).json({
        success: false,
        message: "Admin account is disabled",
      });
    }


    // ========================================
    // PLAIN TEXT PASSWORD CHECK (NO HASHING)
    // ========================================

    const isMatch =
      password.trim() === admin.password.trim();

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    // ========================================
    // JWT TOKEN
    // ========================================

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );


    res.json({
      success: true,
      message: "Login successful",

      token,

      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });


  } catch (error) {

    console.error(
      "Admin Login Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });

  }
});


/*
========================================
CHECK LOGIN
========================================
*/

router.get(
  "/me",
  protectAdmin,
  async (req, res) => {

    try {

      const admin =
        await Admin.findById(
          req.admin.id
        ).select("-password");


      if (!admin) {

        return res.status(404).json({
          success: false,
          message: "Admin not found",
        });

      }


      res.json({
        success: true,
        admin,
      });


    } catch (error) {

      console.error(
        "Admin Me Error:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Server error",
      });

    }

  }
);


/*
========================================
LOGOUT
========================================
*/

router.post(
  "/logout",
  protectAdmin,
  (req, res) => {

    res.json({
      success: true,
      message: "Logged out successfully",
    });

  }
);


module.exports = router;