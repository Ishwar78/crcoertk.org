const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(__dirname, ".env"),
});

const connectDB = require("./config/db");

const app = express();

connectDB();


/*
========================================
MIDDLEWARE
========================================
*/

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


/*
========================================
UPLOADS
========================================
*/

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);


/*
========================================
TEST API
========================================
*/

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "CRCOE API is working",
  });
});


/*
========================================
ADMIN ROUTES
========================================
*/

const adminRoutes = require("./routes/admin.routes");
const galleryRoutes = require("./routes/gallery.routes");
const contactRoutes = require("./routes/contact.routes");
const facultyRoutes = require("./routes/faculty.routes");
const aboutRoutes = require("./routes/about.routes");
const homeRoutes = require("./routes/home.routes");
const facilitiesRoutes = require("./routes/facilities.routes");


app.use(
  "/api/admin",
  adminRoutes
);
app.use(
  "/api/gallery",
  galleryRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api/faculty",
  facultyRoutes
);

app.use(
  "/api/about",
  aboutRoutes
);

app.use(
  "/api/home",
  homeRoutes
);

app.use(
  "/api/facilities",
  facilitiesRoutes
);


/*
========================================
SERVER
========================================
*/

const PORT = process.env.PORT || 5025;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );

  console.log(
    `http://localhost:${PORT}`
  );
});