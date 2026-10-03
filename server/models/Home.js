const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    hero: {
      eyebrow: {
        type: String,
        default: "Shaping Future Educators",
      },
      titlePart1: {
        type: String,
        default: "CHHOTU RAM",
      },
      titlePart2: {
        type: String,
        default: "COLLEGE OF EDUCATION",
      },
      subtitle: {
        type: String,
        default: "ROHTAK",
      },
      description: {
        type: String,
        default:
          "Committed to excellence in teacher education and to developing confident, responsible and skilled educators.",
      },
      primaryBtnText: {
        type: String,
        default: "Explore Academics",
      },
      primaryBtnLink: {
        type: String,
        default: "/academics",
      },
      secondaryBtnText: {
        type: String,
        default: "Admission Details",
      },
      secondaryBtnLink: {
        type: String,
        default: "/admission",
      },
      image: {
        type: String,
        default: "/images/student-hero.jpg",
      },
      points: {
        type: [
          {
            title1: String,
            title2: String,
            icon: String,
          },
        ],
        default: [
          { title1: "Quality", title2: "Education", icon: "book" },
          { title1: "Experienced", title2: "Faculty", icon: "users" },
          { title1: "Holistic", title2: "Development", icon: "award" },
          { title1: "Bright", title2: "Future", icon: "heart" },
        ],
      },
    },

    newsEvents: {
      introImage: {
        type: String,
        default: "/images/campus-about.jpg",
      },
      introSubtitle: {
        type: String,
        default: "STAY UPDATED",
      },
      introTitle: {
        type: String,
        default: "Latest News\n& Events",
      },
      introDescription: {
        type: String,
        default:
          "Stay informed with the latest notices, academic updates, important announcements and college events.",
      },
      badge: {
        type: String,
        default: "COLLEGE UPDATES",
      },
      headingTitle: {
        type: String,
        default: "News",
      },
      headingAccent: {
        type: String,
        default: "& Events",
      },
      items: {
        type: [
          {
            title: String,
            date: String,
            type: { type: String, default: "Notice" },
            link: { type: String, default: "/news" },
          },
        ],
        default: [
          {
            title: "Reschedule of Election",
            date: "Latest Update",
            type: "Notice",
            link: "/news",
          },
          {
            title: "List of 105 Collegium Members",
            date: "Important Notice",
            type: "Notice",
            link: "/news",
          },
          {
            title: "Election of the Governing Body of the College",
            date: "College Update",
            type: "Event",
            link: "/news",
          },
          {
            title: "Admission Open for B.Ed. & M.Ed.",
            date: "Admissions",
            type: "Admission",
            link: "/admission",
          },
          {
            title: "Important Notice for All Students",
            date: "Student Notice",
            type: "Notice",
            link: "/news",
          },
          {
            title: "M.D. University Examination Updates",
            date: "Examination",
            type: "Academic",
            link: "/news",
          },
        ],
      },
    },

    programmes: {
      headingTitle: {
        type: String,
        default: "Our",
      },
      headingAccent: {
        type: String,
        default: "Programmes",
      },
      programs: {
        type: [
          {
            badge: String,
            title: String,
            description: String,
            image: String,
            link: String,
            btnText: String,
          },
        ],
        default: [
          {
            badge: "Bachelor of Education",
            title: "B.Ed.",
            description:
              "Professional teacher education programme focused on pedagogy, practice and learner development.",
            image: "/images/docs-books.jpg",
            link: "/academics",
            btnText: "Know More",
          },
          {
            badge: "Master of Education",
            title: "M.Ed.",
            description:
              "Advanced study for educational leadership, research, curriculum and professional growth.",
            image: "/images/docs-books.jpg",
            link: "/academics",
            btnText: "Know More",
          },
        ],
      },
    },

    about: {
      headingTitle: {
        type: String,
        default: "About",
      },
      headingAccent: {
        type: String,
        default: "CRCOE",
      },
      description: {
        type: String,
        default:
          "Chhotu Ram College of Education, Rohtak is dedicated to providing quality teacher education and nurturing future educators through knowledge, values, practical learning and a student-centric environment.",
      },
      buttonText: {
        type: String,
        default: "Read More",
      },
      buttonLink: {
        type: String,
        default: "/about",
      },
      image: {
        type: String,
        default: "/images/campus-about.jpg",
      },
      features: {
        type: [
          {
            title1: String,
            title2: String,
            icon: String,
          },
        ],
        default: [
          { title1: "Experienced", title2: "Faculty", icon: "users" },
          { title1: "Modern", title2: "Infrastructure", icon: "book" },
          { title1: "Student", title2: "Centric Environment", icon: "heart" },
          { title1: "Co-curricular", title2: "Activities", icon: "award" },
        ],
      },
    },

    principal: {
      headingTitle: {
        type: String,
        default: "Principal’s",
      },
      headingAccent: {
        type: String,
        default: "Message",
      },
      quote: {
        type: String,
        default:
          "Our aim is to develop enlightened, responsible and skilled teachers who can bring positive changes in society.",
      },
      description: {
        type: String,
        default:
          "We focus on holistic development, discipline and the pursuit of excellence in teacher education.",
      },
      buttonText: {
        type: String,
        default: "Read Full Message",
      },
      buttonLink: {
        type: String,
        default: "/about",
      },
      image: {
        type: String,
        default: "/images/principal.jpg",
      },
    },

    whyChoose: {
      headingTitle: {
        type: String,
        default: "Why Choose",
      },
      headingAccent: {
        type: String,
        default: "CRCOE?",
      },
      points: {
        type: [String],
        default: [
          "NAAC A Grade Accredited",
          "Experienced & Dedicated Faculty",
          "Modern Infrastructure & Facilities",
          "Practical and Value-Based Learning",
          "Cultural & Co-curricular Activities",
          "Supportive Learning Environment",
        ],
      },
    },

    gallery: {
      headingTitle: {
        type: String,
        default: "Life at",
      },
      headingAccent: {
        type: String,
        default: "CRCOE",
      },
      buttonText: {
        type: String,
        default: "View Gallery",
      },
      buttonLink: {
        type: String,
        default: "/gallery",
      },
      images: {
        type: [String],
        default: [
          "/images/gallery1.jpg",
          "/images/gallery2.jpg",
          "/images/gallery3.jpg",
          "/images/gallery4.jpg",
          "/images/gallery5.jpg",
        ],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Home", homeSchema);
