const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Academic Activities",
        "Cultural Events",
        "Sports",
        "Seminars & Workshops",
        "Campus Life",
        "Infrastructure",
        "Extension Activities",
      ],
    },

    image: {
      type: String,
      required: true,
    },

    originalName: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Gallery",
  gallerySchema
);