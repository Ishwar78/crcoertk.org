const express = require("express");
const Ticker = require("../models/Ticker");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Helper to get or create default ticker
async function getOrCreateTicker() {
  let ticker = await Ticker.findOne();
  if (!ticker) {
    ticker = await Ticker.create({});
  }
  return ticker;
}

// =====================================================
// PUBLIC GET /api/ticker
// =====================================================
router.get("/", async (req, res) => {
  try {
    const ticker = await getOrCreateTicker();

    res.json({
      success: true,
      data: ticker,
    });
  } catch (error) {
    console.error("Public Ticker API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load ticker data",
    });
  }
});

// =====================================================
// ADMIN GET /api/ticker/admin
// =====================================================
router.get("/admin", protectAdmin, async (req, res) => {
  try {
    const ticker = await getOrCreateTicker();

    res.json({
      success: true,
      data: ticker,
    });
  } catch (error) {
    console.error("Admin Ticker GET API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load ticker data for admin",
    });
  }
});

// =====================================================
// ADMIN PUT /api/ticker
// Update Ticker Settings and Items
// =====================================================
router.put("/", protectAdmin, async (req, res) => {
  try {
    let ticker = await Ticker.findOne();
    if (!ticker) {
      ticker = new Ticker({});
    }

    const { enabled, badgeText, speed, items } = req.body;

    if (typeof enabled === "boolean") {
      ticker.enabled = enabled;
    }

    if (typeof badgeText === "string") {
      ticker.badgeText = badgeText.trim() || "ANNOUNCEMENTS";
    }

    if (speed !== undefined) {
      const parsedSpeed = Number(speed);
      if (!isNaN(parsedSpeed) && parsedSpeed >= 5 && parsedSpeed <= 120) {
        ticker.speed = parsedSpeed;
      }
    }

    if (Array.isArray(items)) {
      ticker.items = items.map((it) => ({
        text: (it.text || "").trim(),
        link: (it.link || "").trim(),
        badge: (it.badge || "").trim(),
        isExternal: Boolean(it.isExternal),
        isActive: it.isActive !== undefined ? Boolean(it.isActive) : true,
      }));
    }

    ticker.markModified("items");
    await ticker.save();

    res.json({
      success: true,
      message: "Navbar ticker updated successfully!",
      data: ticker,
    });
  } catch (error) {
    console.error("Admin Ticker PUT API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update ticker data",
    });
  }
});

module.exports = router;
