import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiUsers,
  FiBarChart2,
  FiCheckCircle,
  FiAward,
  FiMonitor,
  FiHome,
  FiDollarSign,
  FiClipboard,
  FiUserCheck,
  FiBook,
  FiLayers,
  FiTarget,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Academics.css";

export default function Academics() {
  const academicHighlights = [
    {
      icon: <FiBookOpen />,
      title: "Quality Curriculum",
      text: "Value-based and professionally oriented teacher education.",
    },
    {
      icon: <FiUsers />,
      title: "Experienced Faculty",
      text: "Guidance and academic support for professional development.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Practical Learning",
      text: "Theory integrated with practical and classroom experiences.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Holistic Development",
      text: "Focus on knowledge, skills, values and personality development.",
    },
  ];

  const academicFeatures = [
    {
      icon: <FiHome />,
      title: "Spacious Classrooms",
      text: "The college provides spacious classrooms designed to support an effective learning environment.",
    },
    {
      icon: <FiMonitor />,
      title: "Modern Computer Laboratories",
      text: "Well-equipped modern computer laboratories are available as per required university norms.",
    },
    {
      icon: <FiBook />,
      title: "Academic Resources",
      text: "Students are provided access to academic resources supporting teaching, learning and professional preparation.",
    },
    {
      icon: <FiAward />,
      title: "Professional Development",
      text: "Students are encouraged to develop professional competence, personality and essential skills.",
    },
  ];

  const assessmentModes = [
    "Seminars",
    "Assignments",
    "Presentations",
    "Home Assignments",
    "Situational Tests",
    "Remedial Teaching",
  ];

  return (
    <>
      <Navbar />

      <main className="academics-page">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="academic-hero">

          <div className="academic-hero-content">

            <div className="academic-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Academics</span>
            </div>

            <h1>
              <strong>Academics</strong>
            </h1>

            <h3>
              Quality Education for a{" "}
              <strong>Better Tomorrow</strong>
            </h3>

            <div className="hero-line"></div>

            <p>
              Comprehensive and value-based teacher education that
              empowers students with knowledge, skills, professional
              competence and a sense of social responsibility.
            </p>

          </div>

          <div className="academic-hero-image">

            <img
              src="/images/student-hero.jpg"
              alt="Students at Chhotu Ram College of Education"
            />

            <div className="hero-image-tag">
              <FiBookOpen />
              <span>Learning • Teaching • Excellence</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION / QUOTE
        ====================================================== */}
        <section className="academic-section education-intro">

          <div className="education-quote">

            <div className="quote-symbol">
              “
            </div>

            <div>
              <h2>
                Education is the sovereign remedy for{" "}
                <strong>all economic ills</strong>
              </h2>

              <div className="quote-line"></div>

              <p>
                Education today is global in perspective and practice.
                Teachers and students have to keep themselves abreast
                of international developments in their own area of
                specialization, as well as in related fields.
              </p>

              <p>
                Therefore, it is imperative that educational institution
                should have access to global contacts. The institute of
                learning must run according to the tenets of modern
                scientific management as the business corporations are
                managed.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            ACADEMIC APPROACH
        ====================================================== */}
        <section className="academic-section institution-overview">

          <div className="section-title">

            <div className="title-icon">
              <FiBookOpen />
            </div>

            <div>
              <h2>
                Academic <strong>Overview</strong>
              </h2>
              <span></span>
            </div>

          </div>


          <div className="overview-grid">

            <div className="overview-image">

              <img
                src="/images/academic-campus.jpg"
                alt="Academic Campus"
              />

              <div className="image-label">
                <FiAward />
                <span>Excellence in Teacher Education</span>
              </div>

            </div>


            <div className="overview-content">

              <p>
                Chhotu Ram College of Education welcomes students with
                good track record throughout their academic career.
                In course of their stay, we shall endeavour to mould
                their character, transform their personality and
                adequately equip them with hard and soft skills so
                that they can meet the challenges and varying needs
                in the educational field.
              </p>

              <p>
                Chhotu Ram College of Education is one of the premier
                educational organizations dedicated to impart quality
                education and promoting excellence in academic pursuits
                in the field of Teaching.
              </p>

              <p>
                The College is possessed with the objective of turning
                out high caliber professionals to meet rapidly growing
                needs in the educational field.
              </p>

              <Link
                className="pink-btn"
                to="/facilities"
              >
                Explore Facilities
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            ACADEMIC HIGHLIGHTS
        ====================================================== */}
        <section className="academic-section highlights-section">

          <div className="section-title">

            <div className="title-icon">
              <FiStarIcon />
            </div>

            <div>
              <h2>
                Academic <strong>Highlights</strong>
              </h2>
              <span></span>
            </div>

          </div>


          <div className="academic-highlights">

            {academicHighlights.map((item) => (
              <article
                className="highlight-card"
                key={item.title}
              >

                <div className="highlight-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            ))}

          </div>

        </section>


        {/* =====================================================
            INFRASTRUCTURE
        ====================================================== */}
        <section className="academic-section infrastructure-section">

          <div className="section-title">

            <div className="title-icon">
              <FiHome />
            </div>

            <div>
              <h2>
                Learning & <strong>Infrastructure</strong>
              </h2>
              <span></span>
            </div>

          </div>


          <div className="infrastructure-layout">

            <div className="infrastructure-content">

              <p>
                This college provides excellent infrastructure with
                spacious classrooms, well equipped modern computer
                laboratories as per required university norms.
              </p>

              <p>
                The institution is committed to providing an academic
                environment where students can develop their knowledge,
                teaching competencies, technological skills and
                professional personality.
              </p>

              <div className="infrastructure-list">

                {academicFeatures.map((feature) => (
                  <article key={feature.title}>

                    <div className="feature-icon">
                      {feature.icon}
                    </div>

                    <div>
                      <h3>
                        {feature.title}
                      </h3>

                      <p>
                        {feature.text}
                      </p>
                    </div>

                  </article>
                ))}

              </div>

            </div>


            <div className="infrastructure-image">

              <img
                src="/images/academic-campus.jpg"
                alt="College infrastructure"
              />

              <div className="infra-overlay">
                <strong>
                  Modern Learning Environment
                </strong>

                <span>
                  Infrastructure designed to support quality teacher
                  education.
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            COURSES
        ====================================================== */}
        <section className="academic-section courses-section">

          <div className="section-title">

            <div className="title-icon">
              <FiLayers />
            </div>

            <div>
              <h2>
                Courses <strong>Offered</strong>
              </h2>
              <span></span>
            </div>

          </div>


          <div className="course-grid">

            {/* B.Ed */}
            <article className="course-card">

              <div className="course-image">

                <img
                  src="/images/docs-books.jpg"
                  alt="B.Ed."
                />

                <span>
                  Undergraduate
                </span>

              </div>


              <div className="course-content">

                <small>
                  Bachelor of Education
                </small>

                <h3>
                  B.Ed.
                </h3>

                <p>
                  The B.Ed. programme is designed to prepare
                  professionally competent teachers with effective
                  classroom practices, pedagogical knowledge and
                  professional skills.
                </p>

                <div className="course-info">

                  <span>
                    <FiUsers />
                    <b>100</b> Seats
                  </span>

                  <span>
                    <FiCheckCircle />
                    Merit Based
                  </span>

                  <span>
                    <FiCalendar />
                    M.D. University
                  </span>

                </div>

                <Link
                  className="pink-btn"
                  to="/admission"
                >
                  View Admission Details
                  <FiArrowRight />
                </Link>

              </div>

            </article>


            {/* M.Ed */}
            <article className="course-card">

              <div className="course-image">

                <img
                  src="/images/docs-books.jpg"
                  alt="M.Ed."
                />

                <span>
                  Postgraduate
                </span>

              </div>


              <div className="course-content">

                <small>
                  Master of Education
                </small>

                <h3>
                  M.Ed.
                </h3>

                <p>
                  The M.Ed. programme provides advanced academic
                  preparation in educational research, curriculum,
                  leadership and professional development.
                </p>

                <div className="course-info">

                  <span>
                    <FiUsers />
                    <b>50</b> Seats
                  </span>

                  <span>
                    <FiCheckCircle />
                    B.Ed. Merit
                  </span>

                  <span>
                    <FiCalendar />
                    Semester System
                  </span>

                </div>

                <Link
                  className="pink-btn"
                  to="/admission"
                >
                  View Admission Details
                  <FiArrowRight />
                </Link>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            ADMISSION & FEES
        ====================================================== */}
        <section className="academic-section admission-section">

          <div className="section-title">

            <div className="title-icon">
              <FiDollarSign />
            </div>

            <div>
              <h2>
                Admission & <strong>Fee Structure</strong>
              </h2>
              <span></span>
            </div>

          </div>


          <div className="admission-grid">

            <article className="admission-card">

              <div className="admission-top">

                <div className="admission-icon">
                  <FiBookOpen />
                </div>

                <div>
                  <small>
                    Bachelor of Education
                  </small>

                  <h3>
                    B.Ed.
                  </h3>
                </div>

              </div>

              <div className="admission-row">
                <span>Seats</span>
                <strong>100</strong>
              </div>

              <div className="admission-row">
                <span>Admission</span>
                <strong>Centralized</strong>
              </div>

              <div className="admission-row">
                <span>Selection</span>
                <strong>Merit Based</strong>
              </div>

              <div className="admission-row">
                <span>Fee / Year</span>
                <strong>₹19,200/-</strong>
              </div>

              <div className="admission-note">
                Counseling conducted by M.D. University.
              </div>

            </article>


            <article className="admission-card">

              <div className="admission-top">

                <div className="admission-icon">
                  <FiAward />
                </div>

                <div>
                  <small>
                    Master of Education
                  </small>

                  <h3>
                    M.Ed.
                  </h3>
                </div>

              </div>

              <div className="admission-row">
                <span>Seats</span>
                <strong>50</strong>
              </div>

              <div className="admission-row">
                <span>Admission</span>
                <strong>Centralized</strong>
              </div>

              <div className="admission-row">
                <span>Selection</span>
                <strong>B.Ed. Merit</strong>
              </div>

              <div className="admission-row">
                <span>Fee / Year</span>
                <strong>₹43,500/-</strong>
              </div>

              <div className="admission-note">
                Admission is based on B.Ed. merit.
              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            ACADEMIC / EXAMINATION SYSTEM
        ====================================================== */}
        <section className="academic-section examination-section">

          <div className="section-title">

            <div className="title-icon">
              <FiClipboard />
            </div>

            <div>
              <h2>
                Academic & <strong>Examination System</strong>
              </h2>
              <span></span>
            </div>

          </div>


          <div className="examination-intro">

            <p>
              The institution is well-equipped with infrastructural
              facilities and various competitive examinations have
              also been conducted in the college campus.
            </p>

            <p>
              The examinations, both theory and practical, are
              conducted as per the guidelines issued by M.D. University,
              Rohtak.
            </p>

            <p>
              House examinations for both M.Ed. and B.Ed. courses are
              also conducted by the college after completion of the
              syllabus and remedial teaching sessions.
            </p>

          </div>


          <div className="exam-process">

            <div className="exam-process-card">

              <div className="process-number">
                01
              </div>

              <FiBookOpen />

              <h3>
                Theory Examination
              </h3>

              <p>
                Theory examinations are conducted according to the
                guidelines and schedule issued by the affiliating
                university.
              </p>

            </div>


            <div className="exam-process-card">

              <div className="process-number">
                02
              </div>

              <FiActivityIcon />

              <h3>
                Practical Examination
              </h3>

              <p>
                Practical examinations are conducted according to
                the schedule prescribed by M.D. University, Rohtak.
              </p>

            </div>


            <div className="exam-process-card">

              <div className="process-number">
                03
              </div>

              <FiClipboard />

              <h3>
                House Examination
              </h3>

              <p>
                College-level house examinations are conducted after
                completion of the syllabus.
              </p>

            </div>


            <div className="exam-process-card">

              <div className="process-number">
                04
              </div>

              <FiUserCheck />

              <h3>
                Remedial Teaching
              </h3>

              <p>
                Remedial teaching sessions support students in
                strengthening their academic preparation.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTERNAL ASSESSMENT
        ====================================================== */}
        <section className="academic-section assessment-section">

          <div className="assessment-layout">

            <div>

              <div className="section-title">

                <div className="title-icon">
                  <FiCheckCircle />
                </div>

                <div>
                  <h2>
                    Internal <strong>Assessment</strong>
                  </h2>
                  <span></span>
                </div>

              </div>

              <p>
                The internal assessment of the students is done through
                various modes to evaluate their academic understanding,
                practical abilities, participation and overall
                development.
              </p>

              <p>
                Students are encouraged to participate actively in
                academic activities and demonstrate their learning
                through different assessment methods.
              </p>

            </div>


            <div className="assessment-grid">

              {assessmentModes.map((mode, index) => (
                <div
                  key={mode}
                  className="assessment-item"
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiCheckCircle />

                  <strong>
                    {mode}
                  </strong>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            M.ED DETAILS
        ====================================================== */}
        <section className="academic-section exam-details">

          <article className="exam-detail-card">

            <div className="exam-detail-icon">
              <FiAward />
            </div>

            <div>

              <div className="section-title left">

                <div>
                  <h2>
                    M.Ed. <strong>Examination</strong>
                  </h2>
                  <span></span>
                </div>

              </div>

              <p>
                The M.Ed course has a Semester System and the final
                theory examinations are conducted during the months
                April/May and Dec/Jan tentatively.
              </p>

              <p>
                The Practical examinations are conducted as per the
                schedule given by M.D. University, Rohtak.
              </p>

              <div className="exam-tags">

                <span>
                  <FiCalendar />
                  Semester System
                </span>

                <span>
                  <FiFileText />
                  Theory Examination
                </span>

                <span>
                  <FiCheckCircle />
                  Practical Examination
                </span>

              </div>

            </div>

          </article>


          <article className="exam-detail-card">

            <div className="exam-detail-icon">
              <FiBookOpen />
            </div>

            <div>

              <div className="section-title left">

                <div>
                  <h2>
                    B.Ed. <strong>Examination</strong>
                  </h2>
                  <span></span>
                </div>

              </div>

              <p>
                The final theory examinations are conducted annually
                in the month of May/June.
              </p>

              <p>
                The Practical Examinations are conducted as per the
                schedule given by the affiliating University.
              </p>

              <div className="exam-tags">

                <span>
                  <FiCalendar />
                  Annual Examination
                </span>

                <span>
                  <FiFileText />
                  May / June
                </span>

                <span>
                  <FiCheckCircle />
                  Practical Examination
                </span>

              </div>

            </div>

          </article>

        </section>


        {/* =====================================================
            UTILITY CARDS
        ====================================================== */}
        <section className="academic-section utility-grid">

          <InfoCard
            icon={<FiCalendar />}
            title={
              <>
                Time <strong>Table</strong>
              </>
            }
            text="View the class time table for B.Ed. and M.Ed. including theory and practical sessions."
            action="View Time Table"
          />

          <InfoCard
            icon={<FiCalendar />}
            title={
              <>
                Academic <strong>Calendar</strong>
              </>
            }
            text="Stay updated with important academic events, holidays, examinations and institutional activities."
            action="View Calendar"
          />

          <InfoCard
            icon={<FiFileText />}
            title={
              <>
                Examination <strong>Facility</strong>
              </>
            }
            text="Student-friendly examination support with transparent processes and academic guidance."
            action="Know More"
          />

          <InfoCard
            icon={<FiUsers />}
            title={
              <>
                Student <strong>Support</strong>
              </>
            }
            text="Academic guidance and support to help students progress confidently throughout their programme."
            action="Know More"
          />

        </section>


        {/* =====================================================
            RESULT
        ====================================================== */}
        <section className="academic-section result-section">

          <article className="result-card">

            <div className="result-icon">
              <FiBarChart2 />
            </div>

            <div className="result-content">

              <h2>
                Academic <strong>Results</strong>
              </h2>

              <div className="mini-line"></div>

              <p>
                Check the latest examination results and important
                result-related notices for B.Ed. and M.Ed. programmes.
              </p>

              <Link
                className="pink-btn"
                to="/downloads"
              >
                View Result
                <FiArrowRight />
              </Link>

            </div>

            <img
              src="/images/exam.jpg"
              alt="Academic examination"
            />

          </article>


          <aside className="academic-quote">

            <b>
              “
            </b>

            <p>
              Education is the key to unlock the golden door of freedom.
            </p>

            <strong>
              — Ch. Chhotu Ram
            </strong>

          </aside>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="academic-cta">

          <div className="academic-cta-icon">
            <FiTarget />
          </div>

          <div>

            <h2>
              Building <strong>Future Educators</strong>
            </h2>

            <p>
              Knowledge, skills, values and professional competence
              for meaningful contribution to education and society.
            </p>

          </div>

          <Link
            to="/admission"
            className="cta-btn"
          >
            Admission Details
            <FiArrowRight />
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   SMALL ICON HELPERS
========================================================= */

function FiStarIcon() {
  return <FiAward />;
}

function FiActivityIcon() {
  return <FiBarChart2 />;
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  text,
  action,
}) {
  return (
    <article className="info-card">

      <div className="info-icon">
        {icon}
      </div>

      <div>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

        <button type="button">
          {action}
          <FiArrowRight />
        </button>

      </div>

    </article>
  );
}