const mongoose = require("mongoose");

const tickerItemSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      default: "",
      trim: true,
    },
    badge: {
      type: String,
      default: "",
      trim: true,
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: true }
);

const tickerSchema = new mongoose.Schema(
  {
    enabled: {
      type: Boolean,
      default: true,
    },
    badgeText: {
      type: String,
      default: "ANNOUNCEMENTS",
      trim: true,
    },
    speed: {
      type: Number,
      default: 35, // duration in seconds
    },
    items: {
      type: [tickerItemSchema],
      default: [
        {
          text: "Admissions Open for B.Ed. & M.Ed. (Session 2026-27) — Apply Online Today!",
          link: "/admission",
          badge: "ADMISSION",
          isExternal: false,
          isActive: true,
        },
        {
          text: "Accredited 'A' Grade by NAAC (UGC) | Affiliated to M.D. University, Rohtak & NCTE Approved",
          link: "/about",
          badge: "NAAC 'A'",
          isExternal: false,
          isActive: true,
        },
        {
          text: "Notice: Check the latest academic calendar, examination schedules, and college updates.",
          link: "/news",
          badge: "NOTICE",
          isExternal: false,
          isActive: true,
        },
        {
          text: "For admission guidance or student queries, contact college helpdesk: 01262-274295",
          link: "/contact",
          badge: "HELPDESK",
          isExternal: false,
          isActive: true,
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticker", tickerSchema);
