import React from "react";
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

export default function Home() {
  const newsItems = [
    {
      title: "Reschedule of Election",
      date: "Latest Update",
      type: "Notice",
    },
    {
      title: "List of 105 Collegium Members",
      date: "Important Notice",
      type: "Notice",
    },
    {
      title: "Election of the Governing Body of the College",
      date: "College Update",
      type: "Event",
    },
    {
      title: "Admission Open for B.Ed. & M.Ed.",
      date: "Admissions",
      type: "Admission",
    },
    {
      title: "Important Notice for All Students",
      date: "Student Notice",
      type: "Notice",
    },
    {
      title: "M.D. University Examination Updates",
      date: "Examination",
      type: "Academic",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="home-page">

        {/* ================= HERO ================= */}
        <section className="home-hero">

          <div className="hero-copy">
            <span className="eyebrow">
              Shaping Future Educators
            </span>

            <h2>
              CHHOTU RAM
              <br />
              <strong>COLLEGE OF EDUCATION</strong>
            </h2>

            <h3>ROHTAK</h3>

            <p>
              Committed to excellence in teacher education and to developing
              confident, responsible and skilled educators.
            </p>

            <div className="hero-actions">

              <Link to="/academics">
                Explore Academics
                <FiArrowRight />
              </Link>

              <Link
                className="outline"
                to="/admission"
              >
                Admission Details
                <FiArrowRight />
              </Link>

            </div>

            <div className="hero-points">

              <span>
                <FiBookOpen />
                <b>
                  Quality
                  <br />
                  Education
                </b>
              </span>

              <span>
                <FiUsers />
                <b>
                  Experienced
                  <br />
                  Faculty
                </b>
              </span>

              <span>
                <FiAward />
                <b>
                  Holistic
                  <br />
                  Development
                </b>
              </span>

              <span>
                <FiHeart />
                <b>
                  Bright
                  <br />
                  Future
                </b>
              </span>

            </div>
          </div>

          <div className="hero-image">
            <img
              src="/images/student-hero.jpg"
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
                src="/images/campus-about.jpg"
                alt="CRCOE Campus"
              />

              <div className="news-intro-overlay">

                <div className="news-intro-icon">
                  <FiBell />
                </div>

                <div>
                  <span>STAY UPDATED</span>

                  <h3>
                    Latest News
                    <br />
                    &amp; Events
                  </h3>

                  <p>
                    Stay informed with the latest notices, academic updates,
                    important announcements and college events.
                  </p>
                </div>

              </div>

            </div>


            {/* RIGHT NEWS */}
            <div className="news-panel">

              <div className="news-panel-heading">

                <div>
                  <span className="news-small-title">
                    COLLEGE UPDATES
                  </span>

                  <h2>
                    News <strong>&amp; Events</strong>
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

                  {[...newsItems, ...newsItems].map(
                    (item, index) => (
                      <article
                        className="news-item"
                        key={`${item.title}-${index}`}
                      >

                        <div className="news-date-box">
                          <FiCalendar />
                        </div>

                        <div className="news-item-content">

                          <div className="news-item-meta">

                            <span>
                              {item.date}
                            </span>

                            <small>
                              <FiBell />
                              {item.type}
                            </small>

                          </div>

                          <h3>
                            {item.title}
                          </h3>

                          <Link to="/news">
                            View Details
                            <FiChevronRight />
                          </Link>

                        </div>

                        <span className="new-badge">
                          NEW
                        </span>

                      </article>
                    )
                  )}

                </div>

              </div>


              <div className="all-news-link">

                {/* <Link to="/news">
                  View All News &amp; Events
                  <FiArrowRight />
                </Link> */}

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROGRAMMES ================= */}
        <section className="home-section programs">

          <div className="section-heading">

            <h2>
              Our <strong>Programmes</strong>
            </h2>

            <span></span>

          </div>

          <div className="program-grid">

            <article className="program-card">

              <img
                src="/images/docs-books.jpg"
                alt="B.Ed."
              />

              <div>

                <small>
                  Bachelor of Education
                </small>

                <h3>B.Ed.</h3>

                <p>
                  Professional teacher education programme focused on
                  pedagogy, practice and learner development.
                </p>

                <Link to="/academics">
                  Know More
                  <FiArrowRight />
                </Link>

              </div>

            </article>


            <article className="program-card">

              <img
                src="/images/docs-books.jpg"
                alt="M.Ed."
              />

              <div>

                <small>
                  Master of Education
                </small>

                <h3>M.Ed.</h3>

                <p>
                  Advanced study for educational leadership, research,
                  curriculum and professional growth.
                </p>

                <Link to="/academics">
                  Know More
                  <FiArrowRight />
                </Link>

              </div>

            </article>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section className="home-section about-home">

          <div className="about-text">

            <div className="section-heading left">

              <h2>
                About <strong>CRCOE</strong>
              </h2>

              <span></span>

            </div>

            <p>
              Chhotu Ram College of Education, Rohtak is dedicated to
              providing quality teacher education and nurturing future
              educators through knowledge, values, practical learning and a
              student-centric environment.
            </p>

            <Link
              className="pink-btn"
              to="/about"
            >
              Read More
              <FiArrowRight />
            </Link>

          </div>


          <div className="feature-mini">

            <div>
              <FiUsers />
              <span>
                Experienced
                <br />
                Faculty
              </span>
            </div>

            <div>
              <FiBookOpen />
              <span>
                Modern
                <br />
                Infrastructure
              </span>
            </div>

            <div>
              <FiHeart />
              <span>
                Student
                <br />
                Centric Environment
              </span>
            </div>

            <div>
              <FiAward />
              <span>
                Co-curricular
                <br />
                Activities
              </span>
            </div>

          </div>


          <img
            className="about-photo"
            src="/images/campus-about.jpg"
            alt="CRCOE campus"
          />

        </section>


        {/* ================= PRINCIPAL + WHY ================= */}
        <section className="home-section lower-grid">

          <div className="principal-card">

            <div className="section-heading left">

              <h2>
                Principal’s <strong>Message</strong>
              </h2>

              <span></span>

            </div>


            <div className="principal-inner">

              <img
                src="/images/principal.jpg"
                alt="Principal"
              />

              <div>

                <blockquote>
                  Our aim is to develop enlightened, responsible and skilled
                  teachers who can bring positive changes in society.
                </blockquote>

                <p>
                  We focus on holistic development, discipline and the pursuit
                  of excellence in teacher education.
                </p>

                <Link
                  className="pink-btn"
                  to="/about"
                >
                  Read Full Message
                  <FiArrowRight />
                </Link>

              </div>

            </div>

          </div>


          <div className="why-card">

            <div className="section-heading left">

              <h2>
                Why Choose <strong>CRCOE?</strong>
              </h2>

              <span></span>

            </div>

            {[
              "NAAC A Grade Accredited",
              "Experienced & Dedicated Faculty",
              "Modern Infrastructure & Facilities",
              "Practical and Value-Based Learning",
              "Cultural & Co-curricular Activities",
              "Supportive Learning Environment",
            ].map((t) => (
              <p key={t}>
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
              Life at <strong>CRCOE</strong>
            </h2>

            <span></span>

            <Link to="/gallery">
              View Gallery
              <FiArrowRight />
            </Link>

          </div>


          <div className="home-gallery-grid">

            {[
              "gallery1.jpg",
              "gallery2.jpg",
              "gallery3.jpg",
              "gallery4.jpg",
              "gallery5.jpg",
            ].map((x, i) => (

              <img
                key={x}
                src={`/images/${x}`}
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