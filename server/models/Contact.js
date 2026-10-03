const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      default:
        "Chhotu Ram College of Education, Delhi Road, Rohtak, Haryana - 124001",
    },

    phone: {
      type: String,
      default: "91-90533-14403",
    },

    email: {
      type: String,
      default:
        "info@crcoertk.org",
    },

    alternateEmail: {
      type: String,
      default:
        "crcoe2008@yahoo.com",
    },

    workingDays: {
      type: String,
      default:
        "Monday - Saturday",
    },

    workingHours: {
      type: String,
      default:
        "9:00 AM - 5:00 PM",
    },

    admissionPhone: {
      type: String,
      default: "",
    },

    academicPhone: {
      type: String,
      default: "",
    },

    generalPhone: {
      type: String,
      default: "",
    },

    quickEmail: {
      type: String,
      default:
        "crcoe.rohtak@gmail.com",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Contact",
  contactSchema
);