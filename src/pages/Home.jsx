import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiHeart,
  FiCheckCircle,
  FiBell,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Home.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

/* =========================================================
   DEFAULT HOME DATA
========================================================= */

const defaultHomeData = {
  hero: {
    sliderImages: [
      "/images/student-hero.jpg",
      "/images/campus-about.jpg",
      "/images/campus-home.jpg",
      "/images/academic-campus.jpg",
    ],
    eyebrow: "Shaping Future Educators",
    titlePart1: "CHHOTU RAM",
    titlePart2: "COLLEGE OF EDUCATION",
    subtitle: "ROHTAK",
    description:
      "Committed to excellence in teacher education and to developing confident, responsible and skilled educators.",
    primaryBtnText: "Explore Academics",
    primaryBtnLink: "/academics",
    secondaryBtnText: "Admission Details",
    secondaryBtnLink: "/admission",
    image: "/images/student-hero.jpg",
    points: [
      {
        title1: "Quality",
        title2: "Education",
        icon: "book",
      },
      {
        title1: "Experienced",
        title2: "Faculty",
        icon: "users",
      },
      {
        title1: "Holistic",
        title2: "Development",
        icon: "award",
      },
      {
        title1: "Bright",
        title2: "Future",
        icon: "heart",
      },
    ],
  },

  newsEvents: {
    introImage: "/images/campus-about.jpg",
    introSubtitle: "STAY UPDATED",
    introTitle: "Latest News\n& Events",
    introDescription:
      "Stay informed with the latest notices, academic updates, important announcements and college events.",
    badge: "COLLEGE UPDATES",
    headingTitle: "News",
    headingAccent: "& Events",

    items: [
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

  programmes: {
    headingTitle: "Our",
    headingAccent: "Programmes",

    programs: [
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

  about: {
    headingTitle: "About",
    headingAccent: "CRCOE",
    description:
      "Chhotu Ram College of Education, Rohtak is dedicated to providing quality teacher education and nurturing future educators through knowledge, values, practical learning and a student-centric environment.",
    buttonText: "Read More",
    buttonLink: "/about",
    image: "/images/campus-about.jpg",

    features: [
      {
        title1: "Experienced",
        title2: "Faculty",
        icon: "users",
      },
      {
        title1: "Modern",
        title2: "Infrastructure",
        icon: "book",
      },
      {
        title1: "Student",
        title2: "Centric Environment",
        icon: "heart",
      },
      {
        title1: "Co-curricular",
        title2: "Activities",
        icon: "award",
      },
    ],
  },

  /* =========================================================
     PRINCIPAL
  ========================================================= */

  principal: {
    headingTitle: "Principal’s",
    headingAccent: "Message",

    quote:
      "Our aim is to develop enlightened, responsible and skilled teachers who can bring positive changes in society.",

    description:
      "We focus on holistic development, discipline and the pursuit of excellence in teacher education.",

    buttonText: "Read Full Message",
    buttonLink: "/about",

    image: "/images/principal.jpg",
  },

  /* =========================================================
     WHY CRCOE
  ========================================================= */

  whyChoose: {
    headingTitle: "Why Choose",
    headingAccent: "CRCOE?",

    points: [
      "NAAC A Grade Accredited",
      "Experienced & Dedicated Faculty",
      "Modern Infrastructure & Facilities",
      "Practical and Value-Based Learning",
      "Cultural & Co-curricular Activities",
      "Supportive Learning Environment",
    ],
  },

  /* =========================================================
     LIFE AT CRCOE
  ========================================================= */

  gallery: {
    headingTitle: "Life at",
    headingAccent: "CRCOE",

    buttonText: "View Gallery",
    buttonLink: "/gallery",

    images: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
      "/images/gallery5.jpg",
    ],
  },

  /* =========================================================
     FAQ
  ========================================================= */

  faq: {
    headingTitle: "Frequently Asked",
    headingAccent: "Questions",

    items: [
      {
        question: "What courses are offered at CRCOE?",
        answer:
          "Chhotu Ram College of Education, Rohtak offers B.Ed. and M.Ed. teacher education programmes.",
      },
      {
        question: "Where is Chhotu Ram College of Education located?",
        answer:
          "Chhotu Ram College of Education is located in Rohtak, Haryana.",
      },
      {
        question: "How can I get admission information?",
        answer:
          "You can visit the Admission section of the website for programme details, eligibility, important information and admission updates.",
      },
      {
        question: "Where can I find college notices and latest updates?",
        answer:
          "The latest notices, academic updates and important announcements are displayed in the News & Events section of the website.",
      },
      {
        question: "Can I view the college campus and activities online?",
        answer:
          "Yes. The Life at CRCOE section provides a quick view of campus activities and college moments through the gallery.",
      },
      {
        question: "How can I contact the college?",
        answer:
          "You can visit the Contact section of the website for the college contact details and enquiry information.",
      },
    ],
  },
};

/* =========================================================
   IMAGE URL HELPER
========================================================= */

const getImageUrl = (src) => {
  if (!src) return "";

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  if (src.startsWith("/uploads")) {
    return `${API_URL}${src}`;
  }

  if (src.startsWith("uploads/")) {
    return `${API_URL}/${src}`;
  }

  if (src.startsWith("/images/")) {
    return src;
  }

  if (
    src.startsWith("gallery") ||
    src.endsWith(".jpg") ||
    src.endsWith(".png") ||
    src.endsWith(".jpeg") ||
    src.endsWith(".webp")
  ) {
    if (!src.startsWith("/")) {
      return `/images/${src}`;
    }
  }

  return src;
};

/* =========================================================
   ICON HELPER
========================================================= */

const renderIcon = (name) => {
  switch (name?.toLowerCase()) {
    case "users":
    case "faculty":
      return <FiUsers />;

    case "award":
      return <FiAward />;

    case "heart":
      return <FiHeart />;

    case "bell":
      return <FiBell />;

    case "calendar":
      return <FiCalendar />;

    case "check":
      return <FiCheckCircle />;

    case "book":
    default:
      return <FiBookOpen />;
  }
};

/* =========================================================
   NEWS ACTION
========================================================= */

const resolveNewsAction = (item) => {
  if (!item) {
    return {
      url: "/news",
      isExternal: false,
      label: "View Details",
    };
  }

  /* PDF */
  if (item.linkType === "pdf" && item.fileUrl) {
    return {
      url: getImageUrl(item.fileUrl),
      isExternal: true,
      label: "View PDF",
    };
  }

  /* IMAGE */
  if (item.linkType === "image" && item.fileUrl) {
    return {
      url: getImageUrl(item.fileUrl),
      isExternal: true,
      label: "View Notice",
    };
  }

  /* AUTO FILE */
  if (item.fileUrl) {
    const isPdf = item.fileUrl.toLowerCase().endsWith(".pdf");

    return {
      url: getImageUrl(item.fileUrl),
      isExternal: true,
      label: isPdf ? "View PDF" : "View Notice",
    };
  }

  /* EXTERNAL URL */
  const link = (item.link || "").trim();

  if (
    item.linkType === "external" ||
    link.startsWith("http://") ||
    link.startsWith("https://")
  ) {
    return {
      url: link || "#",
      isExternal: true,
      label: "Open Link",
    };
  }

  /* INTERNAL ROUTE */
  return {
    url: link || "/news",
    isExternal: false,
    label: "View Details",
  };
};

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [data, setData] = useState(defaultHomeData);

  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     FETCH HOME DATA
  ======================================================= */

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/home`);
        const result = await response.json();

        if (response.ok && result.success && result.data) {
          setData((prev) => ({
            ...prev,
            ...result.data,

            hero: {
              ...prev.hero,
              ...(result.data.hero || {}),
            },

            newsEvents: {
              ...prev.newsEvents,
              ...(result.data.newsEvents || {}),
            },

            programmes: {
              ...prev.programmes,
              ...(result.data.programmes || {}),
            },

            about: {
              ...prev.about,
              ...(result.data.about || {}),
            },

            principal: {
              ...prev.principal,
              ...(result.data.principal || {}),
            },

            whyChoose: {
              ...prev.whyChoose,
              ...(result.data.whyChoose || {}),
            },

            gallery: {
              ...prev.gallery,
              ...(result.data.gallery || {}),
            },

            faq: {
              ...prev.faq,
              ...(result.data.faq || {}),
            },
          }));
        }
      } catch (error) {
        console.error(
          "Home API fetch error, using default data:",
          error
        );
      }
    };

    fetchHomeData();
  }, []);

  /* =======================================================
     DATA
  ======================================================= */

  const {
    hero,
    newsEvents,
    programmes,
    about,
    principal,
    whyChoose,
    gallery,
    faq,
  } = data;

  const heroSlides =
    hero?.sliderImages && hero.sliderImages.length > 0
      ? hero.sliderImages
      : defaultHomeData.hero.sliderImages;

  /* AUTO-PLAY SLIDER (4.5s Interval, Pauses on Hover) */
  useEffect(() => {
    if (heroSlides.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroSlides.length, isPaused]);

  const [touchStartX, setTouchStartX] = useState(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    if (e.changedTouches && e.changedTouches[0]) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (diff > 40) {
        nextSlide();
      } else if (diff < -40) {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const newsList =
    newsEvents?.items && newsEvents.items.length > 0
      ? newsEvents.items
      : defaultHomeData.newsEvents.items;

  const tickerItems = [...newsList, ...newsList];

  /* =======================================================
     FAQ TOGGLE
  ======================================================= */

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />

      <main className="home-page">

        {/* =================================================
            HERO BANNER SLIDER (FULL WIDTH CAROUSEL)
        ================================================= */}

        <section
          className="home-hero-slider-section"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label="Campus Banner Slider"
        >
          <div className="hero-slider-container">
            {heroSlides.map((slideImg, sIdx) => (
              <div
                key={sIdx}
                className={`hero-slide-item ${sIdx === currentSlide ? "active" : ""}`}
                aria-hidden={sIdx !== currentSlide}
              >
                <img
                  src={getImageUrl(slideImg)}
                  alt={`Chhotu Ram College of Education Banner ${sIdx + 1}`}
                  className="hero-slide-img"
                  loading={sIdx === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            {heroSlides.length > 1 && (
              <>
                <button
                  type="button"
                  className="hero-slider-arrow prev"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                >
                  <FiChevronLeft />
                </button>

                <button
                  type="button"
                  className="hero-slider-arrow next"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                >
                  <FiChevronRight />
                </button>

                <div className="hero-slider-dots">
                  {heroSlides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      className={`hero-dot ${dotIdx === currentSlide ? "active" : ""}`}
                      onClick={() => setCurrentSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* =================================================
            NEWS & EVENTS
        ================================================= */}

        <section className="home-section news-events-section">

          <div className="news-events-wrapper">

            <div className="news-intro-card">

              <img
                src={getImageUrl(newsEvents.introImage)}
                alt="CRCOE Campus"
              />

              <div className="news-intro-overlay">

                <div className="news-intro-icon">
                  <FiBell />
                </div>

              </div>

            </div>

            <div className="news-panel">

              <div className="news-panel-heading">

                <div>
                  <span className="news-small-title">
                    {newsEvents.badge}
                  </span>

                  <h2>
                    {newsEvents.headingTitle}{" "}
                    <strong>
                      {newsEvents.headingAccent}
                    </strong>
                  </h2>
                </div>

                <div className="news-heading-icon">
                  <FiBell />
                </div>

              </div>

              <div className="news-line"></div>

              <div className="news-ticker">

                <div className="news-ticker-track">

                  {tickerItems.map((item, index) => {

                    const action =
                      resolveNewsAction(item);

                    return (
                      <article
                        className="news-item"
                        key={`${item.title}-${index}`}
                      >

                        <div className="news-date-box">
                          <FiCalendar />
                        </div>

                        <div className="news-item-content">

                          <div className="news-item-meta">
                            <span>{item.date}</span>

                            <small>
                              <FiBell />
                              {item.type || "Notice"}
                            </small>
                          </div>

                          {action.isExternal ? (
                            <a
                              href={action.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="news-title-link"
                            >
                              <h3>{item.title}</h3>
                            </a>
                          ) : (
                            <Link
                              to={action.url}
                              className="news-title-link"
                            >
                              <h3>{item.title}</h3>
                            </Link>
                          )}

                          {action.isExternal ? (
                            <a
                              href={action.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="news-action-link"
                            >
                              {action.label}
                              <FiChevronRight />
                            </a>
                          ) : (
                            <Link
                              to={action.url}
                              className="news-action-link"
                            >
                              {action.label}
                              <FiChevronRight />
                            </Link>
                          )}

                        </div>

                        <span className="new-badge">
                          NEW
                        </span>

                      </article>
                    );
                  })}

                </div>
              </div>

              <div className="all-news-link">
                <Link to="/news">
                  View All News
                  <FiArrowRight />
                </Link>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            PROGRAMMES
        ================================================= */}

        <section className="home-section programs">

          <div className="section-heading">

            <h2>
              {programmes.headingTitle}{" "}
              <strong>
                {programmes.headingAccent}
              </strong>
            </h2>

            <span></span>

          </div>

          <div className="program-grid">

            {(programmes.programs || []).map(
              (prog, idx) => (
                <article
                  className="program-card"
                  key={idx}
                >

                  <img
                    src={getImageUrl(prog.image)}
                    alt={prog.title}
                  />

                  <div>

                    <small>{prog.badge}</small>

                    <h3>{prog.title}</h3>

                    <p>{prog.description}</p>

                    <Link
                      to={
                        prog.link ||
                        "/academics"
                      }
                    >
                      {prog.btnText ||
                        "Know More"}

                      <FiArrowRight />
                    </Link>

                  </div>

                </article>
              )
            )}

          </div>

        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section className="home-section about-home">

          <div className="about-text">

            <div className="section-heading left">

              <h2>
                {about.headingTitle}{" "}
                <strong>
                  {about.headingAccent}
                </strong>
              </h2>

              <span></span>

            </div>

            <p>{about.description}</p>

            <Link
              className="pink-btn"
              to={about.buttonLink || "/about"}
            >
              {about.buttonText || "Read More"}
              <FiArrowRight />
            </Link>

          </div>

          <div className="feature-mini">

            {(about.features || []).map(
              (feat, idx) => (
                <div key={idx}>
                  {renderIcon(feat.icon)}

                  <span>
                    {feat.title1}
                    <br />
                    {feat.title2}
                  </span>
                </div>
              )
            )}

          </div>

          <img
            className="about-photo"
            src={getImageUrl(about.image)}
            alt="CRCOE campus"
          />

        </section>

        {/* =================================================
            PRINCIPAL MESSAGE
            FULL WIDTH / PROMINENT
        ================================================= */}

        <section className="home-section principal-section">

          <div className="principal-card">

            <div className="section-heading left">

              <h2>
                {principal.headingTitle}{" "}
                <strong>
                  {principal.headingAccent}
                </strong>
              </h2>

              <span></span>

            </div>

            <div className="principal-inner">

              <div className="principal-image-wrap">

                <img
                  src={getImageUrl(principal.image)}
                  alt="Principal of Chhotu Ram College of Education"
                />

              </div>

              <div className="principal-content">

                <div className="principal-label">
                  PRINCIPAL'S MESSAGE
                </div>

                <blockquote>
                  {principal.quote}
                </blockquote>

                <p>
                  {principal.description}
                </p>

                <Link
                  className="pink-btn"
                  to={
                    principal.buttonLink ||
                    "/about"
                  }
                >
                  {principal.buttonText ||
                    "Read Full Message"}

                  <FiArrowRight />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHY CHOOSE CRCOE
            BELOW PRINCIPAL
        ================================================= */}

        <section className="home-section why-section">

          <div className="why-card">

            <div className="section-heading left">

              <h2>
                {whyChoose.headingTitle}{" "}
                <strong>
                  {whyChoose.headingAccent}
                </strong>
              </h2>

              <span></span>

            </div>

            <div className="why-grid">

              {(whyChoose.points || []).map(
                (point, idx) => (
                  <div
                    className="why-point"
                    key={idx}
                  >
                    <span className="why-point-icon">
                      <FiCheckCircle />
                    </span>

                    <p>{point}</p>
                  </div>
                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            LIFE AT CRCOE
        ================================================= */}

        <section className="home-section gallery-home">

          <div className="section-heading left">

            <h2>
              {gallery.headingTitle}{" "}
              <strong>
                {gallery.headingAccent}
              </strong>
            </h2>

            <span></span>

            <Link
              to={
                gallery.buttonLink ||
                "/gallery"
              }
            >
              {gallery.buttonText ||
                "View Gallery"}

              <FiArrowRight />
            </Link>

          </div>

          <div className="home-gallery-grid">

            {(gallery.images || []).map(
              (image, index) => (
                <img
                  key={index}
                  src={getImageUrl(image)}
                  alt={`Campus activity ${
                    index + 1
                  }`}
                />
              )
            )}

          </div>

        </section>

        {/* =================================================
            FAQ
        ================================================= */}

        <section className="home-section faq-section">

          <div className="faq-wrapper">

            <div className="section-heading faq-heading">

              <h2>
                {faq.headingTitle}{" "}
                <strong>
                  {faq.headingAccent}
                </strong>
              </h2>

              <span></span>

            </div>

            <p className="faq-intro">
              Find quick answers to commonly asked
              questions about CRCOE, programmes,
              admissions and college information.
            </p>

            <div className="faq-list">

              {(faq.items || []).map(
                (item, index) => {

                  const isOpen =
                    openFaq === index;

                  return (
                    <div
                      className={`faq-item ${
                        isOpen
                          ? "faq-item-open"
                          : ""
                      }`}
                      key={index}
                    >

                      <button
                        type="button"
                        className="faq-question"
                        onClick={() =>
                          toggleFaq(index)
                        }
                        aria-expanded={isOpen}
                      >

                        <span>
                          {item.question}
                        </span>

                        <span className="faq-icon">
                          <FiChevronDown />
                        </span>

                      </button>

                      <div
                        className={`faq-answer ${
                          isOpen
                            ? "faq-answer-open"
                            : ""
                        }`}
                      >
                        <div>
                          <p>
                            {item.answer}
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                }
              )}

            </div>

            <div className="faq-bottom">

              <Link
                className="pink-btn"
                to="/contact"
              >
                Have More Questions?
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}