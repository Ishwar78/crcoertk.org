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
  FiChevronRight,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

const defaultHomeData = {
  hero: {
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
      { title1: "Quality", title2: "Education", icon: "book" },
      { title1: "Experienced", title2: "Faculty", icon: "users" },
      { title1: "Holistic", title2: "Development", icon: "award" },
      { title1: "Bright", title2: "Future", icon: "heart" },
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
      { title1: "Experienced", title2: "Faculty", icon: "users" },
      { title1: "Modern", title2: "Infrastructure", icon: "book" },
      { title1: "Student", title2: "Centric Environment", icon: "heart" },
      { title1: "Co-curricular", title2: "Activities", icon: "award" },
    ],
  },

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
};

const getImageUrl = (src) => {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/uploads")) return `${API_URL}${src}`;
  if (src.startsWith("uploads/")) return `${API_URL}/${src}`;
  if (src.startsWith("/images/")) return src;
  if (src.startsWith("gallery") || src.endsWith(".jpg") || src.endsWith(".png")) {
    if (!src.startsWith("/")) return `/images/${src}`;
  }
  return src;
};

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

export default function Home() {
  const [data, setData] = useState(defaultHomeData);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/home`);
        const result = await response.json();
        if (response.ok && result.success && result.data) {
          setData((prev) => ({
            ...prev,
            ...result.data,
            hero: { ...prev.hero, ...(result.data.hero || {}) },
            newsEvents: { ...prev.newsEvents, ...(result.data.newsEvents || {}) },
            programmes: { ...prev.programmes, ...(result.data.programmes || {}) },
            about: { ...prev.about, ...(result.data.about || {}) },
            principal: { ...prev.principal, ...(result.data.principal || {}) },
            whyChoose: { ...prev.whyChoose, ...(result.data.whyChoose || {}) },
            gallery: { ...prev.gallery, ...(result.data.gallery || {}) },
          }));
        }
      } catch (error) {
        console.error("Home API fetch error, using default data:", error);
      }
    };

    fetchHomeData();
  }, []);

  const { hero, newsEvents, programmes, about, principal, whyChoose, gallery } = data;

  const newsList = newsEvents?.items && newsEvents.items.length > 0
    ? newsEvents.items
    : defaultHomeData.newsEvents.items;

  // Duplicate for smooth infinite ticker
  const tickerItems = [...newsList, ...newsList];

  return (
    <>
      <Navbar />

      <main className="home-page">
        {/* ================= HERO ================= */}
        <section className="home-hero">
          <div className="hero-copy">
            <span className="eyebrow">{hero.eyebrow}</span>

            <h2>
              {hero.titlePart1}
              <br />
              <strong>{hero.titlePart2}</strong>
            </h2>

            <h3>{hero.subtitle}</h3>

            <p>{hero.description}</p>

            <div className="hero-actions">
              <Link to={hero.primaryBtnLink || "/academics"}>
                {hero.primaryBtnText}
                <FiArrowRight />
              </Link>

              <Link className="outline" to={hero.secondaryBtnLink || "/admission"}>
                {hero.secondaryBtnText}
                <FiArrowRight />
              </Link>
            </div>

            <div className="hero-points">
              {(hero.points || []).map((point, idx) => (
                <span key={idx}>
                  {renderIcon(point.icon)}
                  <b>
                    {point.title1}
                    <br />
                    {point.title2}
                  </b>
                </span>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <img
              src={getImageUrl(hero.image)}
              alt="Student at college campus"
            />
          </div>
        </section>

        {/* ================= NEWS & EVENTS ================= */}
        <section className="home-section news-events-section">
          <div className="news-events-wrapper">
            {/* LEFT IMAGE */}
            <div className="news-intro-card">
              <img
                src={getImageUrl(newsEvents.introImage)}
                alt="CRCOE Campus"
              />

              <div className="news-intro-overlay">
                <div className="news-intro-icon">
                  <FiBell />
                </div>

                <div>
                  <span>{newsEvents.introSubtitle}</span>

                  <h3 style={{ whiteSpace: "pre-line" }}>
                    {newsEvents.introTitle}
                  </h3>

                  <p>{newsEvents.introDescription}</p>
                </div>
              </div>
            </div>

            {/* RIGHT NEWS */}
            <div className="news-panel">
              <div className="news-panel-heading">
                <div>
                  <span className="news-small-title">
                    {newsEvents.badge}
                  </span>

                  <h2>
                    {newsEvents.headingTitle} <strong>{newsEvents.headingAccent}</strong>
                  </h2>
                </div>

                <div className="news-heading-icon">
                  <FiBell />
                </div>
              </div>

              <div className="news-line"></div>

              {/* NEWS TICKER */}
              <div className="news-ticker">
                <div className="news-ticker-track">
                  {tickerItems.map((item, index) => (
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

                        <h3>{item.title}</h3>

                        <Link to={item.link || "/news"}>
                          View Details
                          <FiChevronRight />
                        </Link>
                      </div>

                      <span className="new-badge">NEW</span>
                    </article>
                  ))}
                </div>
              </div>

              <div className="all-news-link"></div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAMMES ================= */}
        <section className="home-section programs">
          <div className="section-heading">
            <h2>
              {programmes.headingTitle} <strong>{programmes.headingAccent}</strong>
            </h2>
            <span></span>
          </div>

          <div className="program-grid">
            {(programmes.programs || []).map((prog, idx) => (
              <article className="program-card" key={idx}>
                <img
                  src={getImageUrl(prog.image)}
                  alt={prog.title}
                />

                <div>
                  <small>{prog.badge}</small>
                  <h3>{prog.title}</h3>
                  <p>{prog.description}</p>
                  <Link to={prog.link || "/academics"}>
                    {prog.btnText || "Know More"}
                    <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="home-section about-home">
          <div className="about-text">
            <div className="section-heading left">
              <h2>
                {about.headingTitle} <strong>{about.headingAccent}</strong>
              </h2>
              <span></span>
            </div>

            <p>{about.description}</p>

            <Link className="pink-btn" to={about.buttonLink || "/about"}>
              {about.buttonText || "Read More"}
              <FiArrowRight />
            </Link>
          </div>

          <div className="feature-mini">
            {(about.features || []).map((feat, idx) => (
              <div key={idx}>
                {renderIcon(feat.icon)}
                <span>
                  {feat.title1}
                  <br />
                  {feat.title2}
                </span>
              </div>
            ))}
          </div>

          <img
            className="about-photo"
            src={getImageUrl(about.image)}
            alt="CRCOE campus"
          />
        </section>

        {/* ================= PRINCIPAL + WHY ================= */}
        <section className="home-section lower-grid">
          <div className="principal-card">
            <div className="section-heading left">
              <h2>
                {principal.headingTitle} <strong>{principal.headingAccent}</strong>
              </h2>
              <span></span>
            </div>

            <div className="principal-inner">
              <img
                src={getImageUrl(principal.image)}
                alt="Principal"
              />

              <div>
                <blockquote>{principal.quote}</blockquote>
                <p>{principal.description}</p>

                <Link className="pink-btn" to={principal.buttonLink || "/about"}>
                  {principal.buttonText || "Read Full Message"}
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="why-card">
            <div className="section-heading left">
              <h2>
                {whyChoose.headingTitle} <strong>{whyChoose.headingAccent}</strong>
              </h2>
              <span></span>
            </div>

            {(whyChoose.points || []).map((t, idx) => (
              <p key={idx}>
                <FiCheckCircle />
                {t}
              </p>
            ))}
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="home-section gallery-home">
          <div className="section-heading left">
            <h2>
              {gallery.headingTitle} <strong>{gallery.headingAccent}</strong>
            </h2>
            <span></span>

            <Link to={gallery.buttonLink || "/gallery"}>
              {gallery.buttonText || "View Gallery"}
              <FiArrowRight />
            </Link>
          </div>

          <div className="home-gallery-grid">
            {(gallery.images || []).map((x, i) => (
              <img
                key={i}
                src={getImageUrl(x)}
                alt={`Campus activity ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}