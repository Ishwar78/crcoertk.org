import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiEye,
  FiTarget,
  FiUsers,
  FiHeart,
  FiAward,
  FiCheckCircle,
  FiBookOpen,
  FiClock,
  FiHome,
  FiStar,
  FiFlag,
  FiShield,
  FiGlobe,
  FiMonitor,
  FiUserCheck,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./About.css";

export default function About() {
  const objectives = [
    "To ensure that the youth gets adequate opportunities to identify and develop their skills and potentials.",

    "To produce intellectual capital in term of research output, transfer of knowledge and technology oriented attitude to land in the field of education.",

    "To enable prospective teachers to understand the inter-disciplinary nature of educational theory and practice and its incorporation in teacher education.",

    "To prepare individual for independent learning to develop reference skills, critical thinking, conceptualization and self evaluation of their own progress.",

    "To enable prospective teacher to realize diverse need of students and give respect to equity.",

    "To prepare the prospective teachers for self development and advancement in their field.",

    "To mould individuals into integrated personalities who are competent, spiritually mature, physically strong and socially sensitive.",

    "To help them build happy and healthy school and community relationship and promote interest in life long learning.",

    "To develop feeling of love for Indian culture and strengthen a sense of national pride and identity among the prospective teachers.",

    "To create among them the awareness of environmental protection and need to maintain ecological balance.",

    "To prepare them for inculcation of values and develop sense of citizenship.",

    "To enable the prospective teachers to inculcate dignity and morality in work and produce work culture among their students.",

    "To empower them to prepare fully professionally competent, committed and reflective teachers for secondary and senior secondary school education.",

    "To enable them to develop the teaching competencies and performance skill for the subjects they have to teach, using appropriate aids including ICT.",

    "To provide among them the capacity to think, problem solving attitude, capacity to undertake action research and research.",
  ];

  const societyInstitutions = [
    "Chhotu Ram College of Education, Rohtak",
    "Jat HAMS High School, Rohtak",
    "Jat Senior Secondary Schools, Rohtak",
    "Chhotu Ram Memorial Public School, Rohtak",
    "All India Jat Heroes Memorial Degree College, Rohtak",
    "M.K.J.K. Degree College, Rohtak",
    "Chhotu Ram Polytechnic College, Rohtak",
    "Matu Ram Institute of Engineering and Management, Rohtak",
    "C.R. Institute of Law, Rohtak",
  ];

  const panchayatPoints = [
    "Student Representation",
    "Leadership Development",
    "Cooperation & Teamwork",
    "Creative Thinking",
    "Decision Making",
    "Self Confidence",
    "Social Values",
    "Sharing & Self Disclosure",
    "Dignity of Manual Work",
    "Participation in College Activities",
  ];

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="inner-hero">

          <div className="inner-hero-content">

            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>About Us</span>
            </div>

            <h1>
              About <strong>Us</strong>
            </h1>

            <h3>
              Nurturing Educators for a Better Tomorrow
            </h3>

            <div className="hero-line"></div>

            <p>
              Chhotu Ram College of Education, Rohtak is dedicated to
              excellence in teacher education and committed to shaping
              responsible, skilled and value-based educators for a
              progressive and inclusive society.
            </p>

          </div>

          <div className="inner-hero-image">

            <img
              src="/images/campus-about.jpg"
              alt="Chhotu Ram College of Education Rohtak"
            />

            <div className="hero-image-caption">
              <span>Education</span>
              <strong>Empowers Nation</strong>
            </div>

          </div>

        </section>


        {/* =====================================================
            BRIEF HISTORY
        ====================================================== */}
        <section className="about-section history-section">

          <div className="section-title">
            <div className="title-icon">
              <FiClock />
            </div>

            <div>
              <h2>
                Brief <strong>History</strong>
              </h2>

              <span></span>
            </div>
          </div>

          <div className="history-layout">

            <div className="history-content">

              <p>
                Chhotu Ram College of Education is one of the premier
                institutions of Haryana. Catering to the growing concern
                of our leaders to impart quality education to the students,
                it was felt that the objective can only be achieved if we
                have a sizable class of well trained teachers.
              </p>

              <p>
                Hence B.T. class was started in 1951 and B.Ed. in 1955
                under the patronage of Ch. Uday Mann, worthy president of
                Jat Society and Sh. S.S. Gill, Principal. The institution
                scaled another height when M.Ed. was introduced in the
                college.
              </p>

              <p>
                The institution has contributed a lot in spreading higher
                education in North India. The institution has the pride
                privilege of having Dr. Rajender Prasad, Hon’ble President
                of India as the Guest of honor to award degrees to the
                students in 1958.
              </p>

              <p>
                The college has an attractive building with latest
                infrastructure and well stocked library.
              </p>

              <p>
                The college has also been successfully managing IGNOU
                study Centre since 1987. We know that the goals of higher
                education are always expanding. The college is committed
                to the noble task of trying to follow the ever expanding
                horizon of education.
              </p>

            </div>

            <aside className="history-highlights">

              <div className="history-highlight">
                <FiBookOpen />
                <div>
                  <strong>1951</strong>
                  <span>B.T. Class Started</span>
                </div>
              </div>

              <div className="history-highlight">
                <FiAward />
                <div>
                  <strong>1955</strong>
                  <span>B.Ed. Introduced</span>
                </div>
              </div>

              <div className="history-highlight">
                <FiStar />
                <div>
                  <strong>M.Ed.</strong>
                  <span>Higher Education Expanded</span>
                </div>
              </div>

              <div className="history-highlight">
                <FiHome />
                <div>
                  <strong>1987</strong>
                  <span>IGNOU Study Centre</span>
                </div>
              </div>

            </aside>

          </div>

        </section>


        {/* =====================================================
            INSPIRATION
        ====================================================== */}
        <section className="about-section inspiration">

          <div className="section-title">

            <div className="title-icon">
              <FiStar />
            </div>

            <div>
              <h2>
                Our <strong>Inspiration</strong>
              </h2>

              <span></span>
            </div>

          </div>

          <div className="inspiration-grid">

            <div className="inspiration-image">

              <img
                src="/images/chhotu-ram.jpg"
                alt="Deenbandhu Sir Chhotu Ram"
              />

              <div className="inspiration-badge">
                1881 – 1945
              </div>

            </div>

            <div className="inspiration-content">

              <h3>
                Deenbandhu Sir Chhotu Ram
              </h3>

              <small>
                Educationist • Reformer • Visionary Leader
              </small>

              <p>
                Deenbandhu Sir Chhotu Ram was born on 24th Nov. 1881 in
                Garhi Sampla, a village in the old Rohtak District, in
                the family of Ch. Sukh Ram and Mrs. Sirya Devi.
              </p>

              <p>
                He was a renowned educationist and was named as the father
                of reform for farmers. He established Jat Anglo Sansthan
                on 26th March, 1913 after completion of his Graduation in
                Law.
              </p>

              <p>
                In 1916, he became president of Congress Party and
                continued till 1919. He formed Unionist Party in 1923
                and became Agriculture Minister in 1924, continuing
                till 1926.
              </p>

              <p>
                He remained as Development Minister from 1937-45 after
                his party came into power. He was awarded various honours
                including Rai Bahadur, Deenbandhu and Rehbar-e-Azam.
              </p>

              <p>
                Besides being a luminary figure in agricultural and
                educational reforms, he was involved in various
                developmental policies for joint Punjab including
                Bhakra's Project.
              </p>

            </div>

            <blockquote className="inspiration-quote">

              <FiHeart />

              <p>
                His vision of an educated, self-reliant and socially
                responsible society continues to inspire generations
                and strengthens our commitment to meaningful education.
              </p>

              <span>
                Our Guiding Inspiration
              </span>

            </blockquote>

          </div>

        </section>


        {/* =====================================================
            SOCIETY
        ====================================================== */}
        <section className="about-section society">

          <div className="society-copy">

            <div className="section-title left">

              <div className="title-icon">
                <FiUsers />
              </div>

              <div>
                <h2>
                  About the <strong>Society</strong>
                </h2>

                <span></span>
              </div>

            </div>

            <p>
              Jat Education Society, Rohtak is an educational society
              registered under Societies Regulation Act XXI of 1860.
              The society was formed in 1914 under the name of Jat Anglo
              Sanskrit High School, Rohtak with the prime object to serve
              the cause of education.
            </p>

            <p>
              In the year 1927 it changed its name as Jat Heroes Memorial
              Anglo Sanskrit High School, Rohtak. The name of the society
              was changed to Jat Education Society, Rohtak in 1977.
            </p>

            <p>
              The society is presently running nine prestigious
              institutions dedicated to education and development.
            </p>

            <Link
              to="/contact"
              className="pink-btn"
            >
              Contact Us
              <FiArrowRight />
            </Link>

          </div>


          <div className="society-cards">

            <div>
              <FiAward />
              <strong>Quality</strong>
              <span>Education</span>
            </div>

            <div>
              <FiHeart />
              <strong>Social</strong>
              <span>Development</span>
            </div>

            <div>
              <FiUsers />
              <strong>Community</strong>
              <span>Empowerment</span>
            </div>

            <div>
              <FiCheckCircle />
              <strong>Inclusive</strong>
              <span>Growth</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            SOCIETY INSTITUTIONS
        ====================================================== */}
        <section className="about-section institutions-section">

          <div className="section-title">

            <div className="title-icon">
              <FiLayers />
            </div>

            <div>
              <h2>
                Institutions under <strong>Jat Education Society</strong>
              </h2>

              <span></span>
            </div>

          </div>

          <div className="institution-grid">

            {societyInstitutions.map((institution, index) => (
              <div
                className="institution-card"
                key={institution}
              >

                <span className="institution-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FiBookOpen />

                <p>
                  {institution}
                </p>

                <FiArrowRight className="institution-arrow" />

              </div>
            ))}

          </div>

        </section>


        {/* =====================================================
            OBJECTIVES
        ====================================================== */}
        <section className="about-section objectives-section">

          <div className="section-title">

            <div className="title-icon">
              <FiTarget />
            </div>

            <div>
              <h2>
                Objectives of <strong>C.R. College of Education</strong>
              </h2>

              <span></span>
            </div>

          </div>

          <div className="objectives-intro">

            <p>
              The institution is committed to preparing professionally
              competent, reflective, socially sensitive and value-based
              teachers who can contribute meaningfully to education,
              society and nation building.
            </p>

          </div>

          <div className="objectives-grid">

            {objectives.map((objective, index) => (
              <div
                className="objective-card"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FiCheckCircle />

                <p>
                  {objective}
                </p>

              </div>
            ))}

          </div>

        </section>


        {/* =====================================================
            PANCHAYAT SYSTEM
        ====================================================== */}
        <section className="about-section panchayat">

          <div className="panchayat-content">

            <div className="section-title left">

              <div className="title-icon">
                <FiUsers />
              </div>

              <div>
                <h2>
                  Chhatra <strong>Panchayat System</strong>
                </h2>

                <span></span>
              </div>

            </div>

            <p>
              The three days orientation programme for the newly inducted
              B.Ed. and M.Ed. students are organised. This orientation
              enables them to become familiar with the activities and
              programmes of the college.
            </p>

            <p>
              In the beginning of the session Chhatra Panchayat and Clubs
              are formed. Chhatra Panchayat and clubs are actively involved
              in planning, organizing and executing various activities of
              the institution along with the faculty.
            </p>

            <p>
              In Chhatra Panchayat and method clubs students develop
              various characteristics including cooperation, leadership,
              creativity, advancement of knowledge, decision making,
              self disclosure, sharing, self-confidence, social values
              and dignity towards manual works.
            </p>

            <div className="panchayat-points">

              {panchayatPoints.map((point) => (
                <div key={point}>
                  <FiCheckCircle />
                  <span>{point}</span>
                </div>
              ))}

            </div>

          </div>


          <div className="panchayat-image">

            <img
              src="/images/panchayat.jpg"
              alt="Chhatra Panchayat and student activities"
            />

            <div className="panchayat-image-overlay">
              <FiUsers />

              <strong>
                Student Leadership
              </strong>

              <span>
                Cooperation • Responsibility • Participation
              </span>
            </div>

          </div>

        </section>


        {/* =====================================================
            VISION MISSION
        ====================================================== */}
        <section className="about-section vision-mission">

          <article className="vision-card">

            <div className="vision-icon">
              <FiEye />
            </div>

            <div>

              <h3>
                Our <strong>Vision</strong>
              </h3>

              <div className="mini-line"></div>

              <p>
                To provide intellectual and moral leadership by igniting
                the mind of student teachers to realize their potential
                and make positive contribution leading to prosperity of
                education, society and nation at large.
              </p>

            </div>

          </article>


          <article className="mission-card">

            <div className="vision-icon">
              <FiTarget />
            </div>

            <div>

              <h3>
                Our <strong>Mission</strong>
              </h3>

              <div className="mini-line"></div>

              <p>
                To provide educational opportunities to release the
                inherent capabilities of all student teachers to make
                them professionally competent, morally mature, socially
                sensitive, cooperative, ICT enabled, research oriented
                and globally awakened in a dynamic environment.
              </p>

              <ul>

                <li>
                  <FiCheckCircle />
                  Professional Competence
                </li>

                <li>
                  <FiCheckCircle />
                  Moral & Social Responsibility
                </li>

                <li>
                  <FiCheckCircle />
                  ICT Enabled Learning
                </li>

                <li>
                  <FiCheckCircle />
                  Research Orientation
                </li>

              </ul>

            </div>

          </article>

        </section>


        {/* =====================================================
            PRINCIPAL + STRENGTH
        ====================================================== */}
        <section className="about-section principal-about">

          <div className="principal-box">

            <div className="section-title left">

              <div className="title-icon">
                <FiAward />
              </div>

              <div>
                <h2>
                  Principal’s <strong>Message</strong>
                </h2>

                <span></span>
              </div>

            </div>


            <div className="principal-message">

              <div className="principal-image">

                <img
                  src="/images/principal.jpg"
                  alt="Principal of CRCOE"
                />

                <strong>
                  Principal
                </strong>

              </div>


              <div className="principal-copy">

                <div className="quote-mark">
                  “
                </div>

                <blockquote>
                  Our aim is to develop enlightened, responsible and
                  skilled teachers who can bring positive changes in
                  society.
                </blockquote>

                <p>
                  We focus on holistic development, discipline and the
                  pursuit of excellence in teacher education.
                </p>

                <b>
                  Principal, CRCOE
                </b>

              </div>

            </div>

          </div>


          <aside className="strength-box">

            <div className="section-title left">

              <div className="title-icon">
                <FiStar />
              </div>

              <div>
                <h2>
                  Our <strong>Strength</strong>
                </h2>

                <span></span>
              </div>

            </div>


            <div className="strength-grid">

              <div>
                <FiUsers />
                <b>500+</b>
                <span>Students</span>
              </div>

              <div>
                <FiUserCheck />
                <b>50+</b>
                <span>Faculty</span>
              </div>

              <div>
                <FiBookOpen />
                <b>2+</b>
                <span>Programmes</span>
              </div>

              <div>
                <FiHeart />
                <b>100%</b>
                <span>Commitment</span>
              </div>

            </div>

          </aside>

        </section>


        {/* =====================================================
            CLOSING CTA
        ====================================================== */}
        <section className="about-cta">

          <div className="cta-icon">
            <FiGlobe />
          </div>

          <div>
            <h2>
              Education for a <strong>Better Tomorrow</strong>
            </h2>

            <p>
              Empowering future educators with knowledge, values,
              skills and responsibility.
            </p>
          </div>

          <Link
            to="/academics"
            className="cta-btn"
          >
            Explore Academics
            <FiArrowRight />
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}