const mongoose = require("mongoose");

const popupSchema = new mongoose.Schema(
  {
    enabled: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "Important Notice / Admission Open",
      trim: true,
    },
    image: {
      type: String,
      default: "",
      trim: true,
    },
    link: {
      type: String,
      default: "/admission",
      trim: true,
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "Click Here for Details",
      trim: true,
    },
    showOncePerSession: {
      type: Boolean,
      default: true,
    },
    delaySeconds: {
      type: Number,
      default: 0.5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Popup", popupSchema);
