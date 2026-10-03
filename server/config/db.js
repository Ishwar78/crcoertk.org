const mongoose = require("mongoose");
const dns = require("dns");

const seedAdmin = require("./seedAdmin");

dns.setServers([
  "1.1.1.1",
  "8.8.8.8",
]);

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    if (!process.env.MONGODB_URI) {
      throw new Error(
        "MONGODB_URI is missing from .env"
      );
    }

    const conn = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        serverSelectionTimeoutMS: 15000,
        connectTimeoutMS: 15000,
      }
    );

    console.log(
      "MongoDB Connected Successfully!"
    );

    console.log(
      `MongoDB Host: ${conn.connection.host}`
    );

    console.log(
      `MongoDB Database: ${conn.connection.name}`
    );

    await seedAdmin();

  } catch (error) {
    console.error(
      "MongoDB Connection Error:",
      error.message
    );

    process.exit(1);
  }
};

module.exports = connectDB;