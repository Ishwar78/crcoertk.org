const mongoose = require("mongoose");

const contactInquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    queryType: {
      type: String,
      required: true,
      enum: [
        "Admission",
        "Academics",
        "General Information",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["unread", "read"],
      default: "unread",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ContactInquiry",
  contactInquirySchema
);