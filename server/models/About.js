const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    hero: {
      title: {
        type: String,
        default: "About",
      },

      titleAccent: {
        type: String,
        default: "Us",
      },

      subtitle: {
        type: String,
        default:
          "Nurturing Educators for a Better Tomorrow",
      },

      description: {
        type: String,
        default: "",
      },

      image: {
        type: String,
        default: "/images/campus-about.jpg",
      },

      captionSmall: {
        type: String,
        default: "Education",
      },

      captionStrong: {
        type: String,
        default: "Empowers Nation",
      },
    },

    history: {
      paragraphs: {
        type: [String],
        default: [],
      },

      highlights: {
        type: [
          {
            value: String,
            label: String,
          },
        ],
        default: [],
      },
    },

    inspiration: {
      image: {
        type: String,
        default: "/images/chhotu-ram.jpg",
      },

      badge: {
        type: String,
        default: "1881 – 1945",
      },

      name: {
        type: String,
        default: "Deenbandhu Sir Chhotu Ram",
      },

      designation: {
        type: String,
        default:
          "Educationist • Reformer • Visionary Leader",
      },

      paragraphs: {
        type: [String],
        default: [],
      },

      quote: {
        type: String,
        default: "",
      },

      quoteLabel: {
        type: String,
        default: "Our Guiding Inspiration",
      },
    },

    society: {
      paragraphs: {
        type: [String],
        default: [],
      },

      buttonText: {
        type: String,
        default: "Contact Us",
      },

      buttonLink: {
        type: String,
        default: "/contact",
      },

      cards: {
        type: [
          {
            title: String,
            subtitle: String,
          },
        ],
        default: [],
      },
    },

    institutions: {
      items: {
        type: [String],
        default: [],
      },
    },

    objectives: {
      intro: {
        type: String,
        default: "",
      },

      items: {
        type: [String],
        default: [],
      },
    },

    panchayat: {
      paragraphs: {
        type: [String],
        default: [],
      },

      points: {
        type: [String],
        default: [],
      },

      image: {
        type: String,
        default: "/images/panchayat.jpg",
      },

      overlayTitle: {
        type: String,
        default: "Student Leadership",
      },

      overlayText: {
        type: String,
        default:
          "Cooperation • Responsibility • Participation",
      },
    },

    visionMission: {
      vision: {
        type: String,
        default: "",
      },

      mission: {
        type: String,
        default: "",
      },

      missionPoints: {
        type: [String],
        default: [],
      },
    },

    principal: {
      image: {
        type: String,
        default: "/images/principal.jpg",
      },

      label: {
        type: String,
        default: "Principal",
      },

      quote: {
        type: String,
        default: "",
      },

      paragraph: {
        type: String,
        default: "",
      },

      signature: {
        type: String,
        default: "Principal, CRCOE",
      },
    },

    strength: {
      items: {
        type: [
          {
            value: String,
            label: String,
          },
        ],
        default: [],
      },
    },

    cta: {
      title: {
        type: String,
        default:
          "Education for a Better Tomorrow",
      },

      description: {
        type: String,
        default: "",
      },

      buttonText: {
        type: String,
        default: "Explore Academics",
      },

      buttonLink: {
        type: String,
        default: "/academics",
      },
    },
  },

  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.About ||
  mongoose.model("About", aboutSchema);