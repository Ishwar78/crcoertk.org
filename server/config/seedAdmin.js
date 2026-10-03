const Admin = require("../models/Admin");

const seedAdmin = async () => {
  try {
    const email = process.env.ADMIN_EMAIL ? process.env.ADMIN_EMAIL.trim() : null;
    const password = process.env.ADMIN_PASSWORD ? process.env.ADMIN_PASSWORD.trim() : null;

    if (!email || !password) {
      console.log("Admin credentials are missing from .env");
      return;
    }

    const existingAdmin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (existingAdmin) {
      existingAdmin.password = password; // Plain text as requested
      existingAdmin.isActive = true;
      await existingAdmin.save();
      console.log("Admin account synced with .env credentials (plain text)");
      return;
    }

    await Admin.create({
      name: "CRCOE Administrator",
      email: email.toLowerCase(),
      password: password,
      role: "admin",
      isActive: true,
    });

    console.log("Admin account created successfully (plain text)");
  } catch (error) {
    console.error("Admin Seed Error:", error.message);
  }
};

module.exports = seedAdmin;