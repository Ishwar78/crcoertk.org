import React, {
  useEffect,
  useState,
} from "react";

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
  FiGlobe,
  FiUserCheck,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./About.css";


const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


const defaultData = {
  hero: {
    title: "About",
    titleAccent: "Us",
    subtitle:
      "Nurturing Educators for a Better Tomorrow",

    description:
      "Chhotu Ram College of Education, Rohtak is dedicated to excellence in teacher education and committed to shaping responsible, skilled and value-based educators for a progressive and inclusive society.",

    image:
      "/images/campus-about.jpg",

    captionSmall:
      "Education",

    captionStrong:
      "Empowers Nation",
  },


  history: {
    paragraphs: [
      "Chhotu Ram College of Education is one of the premier institutions of Haryana. Catering to the growing concern of our leaders to impart quality education to the students, it was felt that the objective can only be achieved if we have a sizable class of well trained teachers.",

      "Hence B.T. class was started in 1951 and B.Ed. in 1955 under the patronage of Ch. Uday Mann, worthy president of Jat Society and Sh. S.S. Gill, Principal. The institution scaled another height when M.Ed. was introduced in the college.",

      "The institution has contributed a lot in spreading higher education in North India. The institution has the pride privilege of having Dr. Rajender Prasad, Hon’ble President of India as the Guest of honor to award degrees to the students in 1958.",

      "The college has an attractive building with latest infrastructure and well stocked library.",

      "The college has also been successfully managing IGNOU study Centre since 1987. We know that the goals of higher education are always expanding. The college is committed to the noble task of trying to follow the ever expanding horizon of education.",
    ],

    highlights: [
      {
        value: "1951",
        label: "B.T. Class Started",
      },

      {
        value: "1955",
        label: "B.Ed. Introduced",
      },

      {
        value: "M.Ed.",
        label: "Higher Education Expanded",
      },

      {
        value: "1987",
        label: "IGNOU Study Centre",
      },
    ],
  },


  inspiration: {
    image:
      "/images/chhotu-ram.jpg",

    badge:
      "1881 – 1945",

    name:
      "Deenbandhu Sir Chhotu Ram",

    designation:
      "Educationist • Reformer • Visionary Leader",

    paragraphs: [
      "Deenbandhu Sir Chhotu Ram was born on 24th Nov. 1881 in Garhi Sampla, a village in the old Rohtak District, in the family of Ch. Sukh Ram and Mrs. Sirya Devi.",

      "He was a renowned educationist and was named as the father of reform for farmers. He established Jat Anglo Sansthan on 26th March, 1913 after completion of his Graduation in Law.",

      "In 1916, he became president of Congress Party and continued till 1919. He formed Unionist Party in 1923 and became Agriculture Minister in 1924, continuing till 1926.",

      "He remained as Development Minister from 1937-45 after his party came into power. He was awarded various honours including Rai Bahadur, Deenbandhu and Rehbar-e-Azam.",

      "Besides being a luminary figure in agricultural and educational reforms, he was involved in various developmental policies for joint Punjab including Bhakra's Project.",
    ],

    quote:
      "His vision of an educated, self-reliant and socially responsible society continues to inspire generations and strengthens our commitment to meaningful education.",

    quoteLabel:
      "Our Guiding Inspiration",
  },


  society: {
    paragraphs: [
      "Jat Education Society, Rohtak is an educational society registered under Societies Regulation Act XXI of 1860. The society was formed in 1914 under the name of Jat Anglo Sanskrit High School, Rohtak with the prime object to serve the cause of education.",

      "In the year 1927 it changed its name as Jat Heroes Memorial Anglo Sanskrit High School, Rohtak. The name of the society was changed to Jat Education Society, Rohtak in 1977.",

      "The society is presently running nine prestigious institutions dedicated to education and development.",
    ],

    buttonText:
      "Contact Us",

    buttonLink:
      "/contact",

    cards: [
      {
        title: "Quality",
        subtitle: "Education",
      },

      {
        title: "Social",
        subtitle: "Development",
      },

      {
        title: "Community",
        subtitle: "Empowerment",
      },

      {
        title: "Inclusive",
        subtitle: "Growth",
      },
    ],
  },


  institutions: {
    items: [
      "Chhotu Ram College of Education, Rohtak",
      "Jat HAMS High School, Rohtak",
      "Jat Senior Secondary Schools, Rohtak",
      "Chhotu Ram Memorial Public School, Rohtak",
      "All India Jat Heroes Memorial Degree College, Rohtak",
      "M.K.J.K. Degree College, Rohtak",
      "Chhotu Ram Polytechnic College, Rohtak",
      "Matu Ram Institute of Engineering and Management, Rohtak",
      "C.R. Institute of Law, Rohtak",
    ],
  },


  objectives: {
    intro:
      "The institution is committed to preparing professionally competent, reflective, socially sensitive and value-based teachers who can contribute meaningfully to education, society and nation building.",

    items: [
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
    ],
  },


  panchayat: {
    paragraphs: [
      "The three days orientation programme for the newly inducted B.Ed. and M.Ed. students are organised. This orientation enables them to become familiar with the activities and programmes of the college.",

      "In the beginning of the session Chhatra Panchayat and Clubs are formed. Chhatra Panchayat and clubs are actively involved in planning, organizing and executing various activities of the institution along with the faculty.",

      "In Chhatra Panchayat and method clubs students develop various characteristics including cooperation, leadership, creativity, advancement of knowledge, decision making, self disclosure, sharing, self-confidence, social values and dignity towards manual works.",
    ],

    points: [
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
    ],

    image:
      "/images/panchayat.jpg",

    overlayTitle:
      "Student Leadership",

    overlayText:
      "Cooperation • Responsibility • Participation",
  },


  visionMission: {
    vision:
      "To provide intellectual and moral leadership by igniting the mind of student teachers to realize their potential and make positive contribution leading to prosperity of education, society and nation at large.",

    mission:
      "To provide educational opportunities to release the inherent capabilities of all student teachers to make them professionally competent, morally mature, socially sensitive, cooperative, ICT enabled, research oriented and globally awakened in a dynamic environment.",

    missionPoints: [
      "Professional Competence",
      "Moral & Social Responsibility",
      "ICT Enabled Learning",
      "Research Orientation",
    ],
  },


  principal: {
    image:
      "/images/principal.jpg",

    label:
      "Principal",

    quote:
      "Our aim is to develop enlightened, responsible and skilled teachers who can bring positive changes in society.",

    paragraph:
      "We focus on holistic development, discipline and the pursuit of excellence in teacher education.",

    signature:
      "Principal, CRCOE",
  },


  strength: {
    items: [
      {
        value: "500+",
        label: "Students",
      },

      {
        value: "50+",
        label: "Faculty",
      },

      {
        value: "2+",
        label: "Programmes",
      },

      {
        value: "100%",
        label: "Commitment",
      },
    ],
  },


  cta: {
    title:
      "Education for a Better Tomorrow",

    description:
      "Empowering future educators with knowledge, values, skills and responsibility.",

    buttonText:
      "Explore Academics",

    buttonLink:
      "/academics",
  },
};


const imageUrl = (image) => {
  if (!image) {
    return "";
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  if (image.startsWith("/uploads")) {
    return `${API_URL}${image}`;
  }

  return image;
};


const mergeData = (saved = {}) => {
  return {
    ...defaultData,
    ...saved,

    hero: {
      ...defaultData.hero,
      ...(saved.hero || {}),
    },

    history: {
      ...defaultData.history,
      ...(saved.history || {}),
    },

    inspiration: {
      ...defaultData.inspiration,
      ...(saved.inspiration || {}),
    },

    society: {
      ...defaultData.society,
      ...(saved.society || {}),
    },

    institutions: {
      ...defaultData.institutions,
      ...(saved.institutions || {}),
    },

    objectives: {
      ...defaultData.objectives,
      ...(saved.objectives || {}),
    },

    panchayat: {
      ...defaultData.panchayat,
      ...(saved.panchayat || {}),
    },

    visionMission: {
      ...defaultData.visionMission,
      ...(saved.visionMission || {}),
    },

    principal: {
      ...defaultData.principal,
      ...(saved.principal || {}),
    },

    strength: {
      ...defaultData.strength,
      ...(saved.strength || {}),
    },

    cta: {
      ...defaultData.cta,
      ...(saved.cta || {}),
    },
  };
};


export default function About() {

  const [data, setData] =
    useState(defaultData);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    const loadAbout = async () => {

      try {

        const response =
          await fetch(
            `${API_URL}/api/about`
          );

        const result =
          await response.json();

        if (
          response.ok &&
          result.success &&
          result.data
        ) {
          setData(
            mergeData(
              result.data
            )
          );
        }

      } catch (error) {

        console.error(
          "About API Error:",
          error
        );

      } finally {

        setLoading(false);

      }
    };


    loadAbout();

  }, []);


  if (loading) {

    return (
      <>
        <Navbar />

        <div className="about-loading">

          <div className="about-loading-spinner"></div>

          <p>
            Loading About...
          </p>

        </div>

        <Footer />
      </>
    );
  }


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

              <Link to="/">
                Home
              </Link>

              <span>›</span>

              <span>
                About Us
              </span>

            </div>


            <h1>
              {data.hero.title}{" "}

              <strong>
                {data.hero.titleAccent}
              </strong>
            </h1>


            <h3>
              {data.hero.subtitle}
            </h3>


            <div className="hero-line"></div>


            <p>
              {data.hero.description}
            </p>

          </div>


          <div className="inner-hero-image">

            <img
              src={imageUrl(
                data.hero.image
              )}
              alt="Chhotu Ram College of Education Rohtak"
            />


            <div className="hero-image-caption">

              <span>
                {data.hero.captionSmall}
              </span>

              <strong>
                {data.hero.captionStrong}
              </strong>

            </div>

          </div>

        </section>


        {/* =====================================================
            HISTORY
        ====================================================== */}

        <section className="about-section history-section">

          <div className="section-title">

            <div className="title-icon">
              <FiClock />
            </div>

            <div>

              <h2>
                Brief{" "}
                <strong>
                  History
                </strong>
              </h2>

              <span></span>

            </div>

          </div>


          <div className="history-layout">

            <div className="history-content">

              {data.history.paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </div>


            <aside className="history-highlights">

              {data.history.highlights.map(
                (item, index) => {

                  const icons = [
                    FiBookOpen,
                    FiAward,
                    FiStar,
                    FiHome,
                  ];

                  const Icon =
                    icons[index] ||
                    FiStar;

                  return (
                    <div
                      className="history-highlight"
                      key={index}
                    >

                      <Icon />

                      <div>

                        <strong>
                          {item.value}
                        </strong>

                        <span>
                          {item.label}
                        </span>

                      </div>

                    </div>
                  );
                }
              )}

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
                Our{" "}
                <strong>
                  Inspiration
                </strong>
              </h2>

              <span></span>

            </div>

          </div>


          <div className="inspiration-grid">

            <div className="inspiration-image">

              <img
                src={imageUrl(
                  data.inspiration.image
                )}
                alt={
                  data.inspiration.name
                }
              />

              <div className="inspiration-badge">
                {data.inspiration.badge}
              </div>

            </div>


            <div className="inspiration-content">

              <h3>
                {data.inspiration.name}
              </h3>

              <small>
                {data.inspiration.designation}
              </small>


              {data.inspiration.paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </div>


            <blockquote className="inspiration-quote">

              <FiHeart />

              <p>
                {data.inspiration.quote}
              </p>

              <span>
                {data.inspiration.quoteLabel}
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
                  About the{" "}
                  <strong>
                    Society
                  </strong>
                </h2>

                <span></span>

              </div>

            </div>


            {data.society.paragraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}


            <Link
              to={
                data.society.buttonLink ||
                "/contact"
              }
              className="pink-btn"
            >

              {data.society.buttonText}

              <FiArrowRight />

            </Link>

          </div>


          <div className="society-cards">

            {data.society.cards.map(
              (card, index) => {

                const icons = [
                  FiAward,
                  FiHeart,
                  FiUsers,
                  FiCheckCircle,
                ];

                const Icon =
                  icons[index] ||
                  FiCheckCircle;

                return (
                  <div key={index}>

                    <Icon />

                    <strong>
                      {card.title}
                    </strong>

                    <span>
                      {card.subtitle}
                    </span>

                  </div>
                );
              }
            )}

          </div>

        </section>


        {/* =====================================================
            INSTITUTIONS
        ====================================================== */}

        <section className="about-section institutions-section">

          <div className="section-title">

            <div className="title-icon">
              <FiLayers />
            </div>

            <div>

              <h2>
                Institutions under{" "}
                <strong>
                  Jat Education Society
                </strong>
              </h2>

              <span></span>

            </div>

          </div>


          <div className="institution-grid">

            {data.institutions.items.map(
              (institution, index) => (

                <div
                  className="institution-card"
                  key={index}
                >

                  <span className="institution-number">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <FiBookOpen />

                  <p>
                    {institution}
                  </p>

                  <FiArrowRight className="institution-arrow" />

                </div>

              )
            )}

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
                Objectives of{" "}
                <strong>
                  C.R. College of Education
                </strong>
              </h2>

              <span></span>

            </div>

          </div>


          <div className="objectives-intro">

            <p>
              {data.objectives.intro}
            </p>

          </div>


          <div className="objectives-grid">

            {data.objectives.items.map(
              (objective, index) => (

                <div
                  className="objective-card"
                  key={index}
                >

                  <span>
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <FiCheckCircle />

                  <p>
                    {objective}
                  </p>

                </div>

              )
            )}

          </div>

        </section>


        {/* =====================================================
            PANCHAYAT
        ====================================================== */}

        <section className="about-section panchayat">

          <div className="panchayat-content">

            <div className="section-title left">

              <div className="title-icon">
                <FiUsers />
              </div>

              <div>

                <h2>
                  Chhatra{" "}
                  <strong>
                    Panchayat System
                  </strong>
                </h2>

                <span></span>

              </div>

            </div>


            {data.panchayat.paragraphs.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}


            <div className="panchayat-points">

              {data.panchayat.points.map(
                (point, index) => (

                  <div key={index}>

                    <FiCheckCircle />

                    <span>
                      {point}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>


          <div className="panchayat-image">

            <img
              src={imageUrl(
                data.panchayat.image
              )}
              alt="Chhatra Panchayat and student activities"
            />


            <div className="panchayat-image-overlay">

              <FiUsers />

              <strong>
                {data.panchayat.overlayTitle}
              </strong>

              <span>
                {data.panchayat.overlayText}
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
                Our{" "}
                <strong>
                  Vision
                </strong>
              </h3>

              <div className="mini-line"></div>

              <p>
                {data.visionMission.vision}
              </p>

            </div>

          </article>


          <article className="mission-card">

            <div className="vision-icon">
              <FiTarget />
            </div>


            <div>

              <h3>
                Our{" "}
                <strong>
                  Mission
                </strong>
              </h3>

              <div className="mini-line"></div>


              <p>
                {data.visionMission.mission}
              </p>


              <ul>

                {data.visionMission.missionPoints.map(
                  (point, index) => (

                    <li key={index}>

                      <FiCheckCircle />

                      {point}

                    </li>

                  )
                )}

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
                  Principal’s{" "}
                  <strong>
                    Message
                  </strong>
                </h2>

                <span></span>

              </div>

            </div>


            <div className="principal-message">


              <div className="principal-image">

                <img
                  src={imageUrl(
                    data.principal.image
                  )}
                  alt="Principal of CRCOE"
                />

                <strong>
                  {data.principal.label}
                </strong>

              </div>


              <div className="principal-copy">

                <div className="quote-mark">
                  “
                </div>


                <blockquote>
                  {data.principal.quote}
                </blockquote>


                <p>
                  {data.principal.paragraph}
                </p>


                <b>
                  {data.principal.signature}
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
                  Our{" "}
                  <strong>
                    Strength
                  </strong>
                </h2>

                <span></span>

              </div>

            </div>


            <div className="strength-grid">

              {data.strength.items.map(
                (item, index) => {

                  const icons = [
                    FiUsers,
                    FiUserCheck,
                    FiBookOpen,
                    FiHeart,
                  ];

                  const Icon =
                    icons[index] ||
                    FiHeart;

                  return (
                    <div key={index}>

                      <Icon />

                      <b>
                        {item.value}
                      </b>

                      <span>
                        {item.label}
                      </span>

                    </div>
                  );
                }
              )}

            </div>

          </aside>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="about-cta">

          <div className="cta-icon">
            <FiGlobe />
          </div>


          <div>

            <h2>
              {data.cta.title}
            </h2>

            <p>
              {data.cta.description}
            </p>

          </div>


          <Link
            to={
              data.cta.buttonLink ||
              "/academics"
            }
            className="cta-btn"
          >

            {data.cta.buttonText}

            <FiArrowRight />

          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}