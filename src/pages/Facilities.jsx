import React, { useState } from "react";
import {
  FiMonitor,
  FiBookOpen,
  FiHome,
  FiActivity,
  FiHeart,
  FiSettings,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiAward,
  FiChevronDown,
  FiChevronUp,
  FiWifi,
  FiCamera,
  FiPrinter,
  FiMic,
  FiCpu,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Facilities.css";

const facilityData = {
  /* =========================================================
     CLASSROOM
  ========================================================= */

  Classroom: {
    icon: FiHome,
    image: "classroom.jpg",

    subtitle:
      "Spacious, Smart and Student-Centric Classrooms",

    text:
      "All the classrooms are spacious, architecturally designed and equipped with smart classroom equipment including computers, tablet monitors, projectors, visualizers and sound systems.",

    points: [
      "Passion for teaching, learning and research",
      "Respect for students",
      "Deeper understanding",
      "Clarity of expression and thought",
      "Fluency of language",
      "Discipline",
      "Self-esteem",
      "Sound subject knowledge",
    ],
  },

  /* =========================================================
     ICT CENTER
  ========================================================= */

  "ICT Center": {
    icon: FiMonitor,
    image: "ict.jpg",

    subtitle:
      "Digital Learning & Technology Support",

    text:
      "Our college has a well-equipped ICT Centre. Its basic aim is to create general awareness among prospective teachers about Information and Communication Technology (ICT) and its use in the teaching-learning process.",

    sections: [
      {
        title: "Objectives of the ICT Centre",

        paragraphs: [
          "To create general awareness among prospective teachers about Information and Communication Technology (ICT) and its use in teaching learning.",

          "To acquaint prospective teachers with different parts of computer system and their functions.",

          "To develop competency among prospective teachers in use of off-line electronic resources such as CD ROM and on-line resources such as World Wide Web.",

          "To encourage prospective teachers in using ICT for improving classroom teaching and professional development.",

          "To develop vocabulary of ICT among prospective teachers.",
        ],
      },

      {
        title: "Incharge",

        paragraphs: ["Ranju Malik"],
      },
    ],

    points: [
      "20 Multimedia Computers with Broadband Internet Facility",
      "Seven Laptops",
      "Four Printers with Scan and Copy facility",
      "Scanner",
      "Digital Handycam",
      "Video Camera",
      "Television",
      "VCD Player",
      "DLP Projector",
      "OHP",
      "Four Webcam",
      "Slide Projector",
      "Effective Offline Resources",
      "Licensed Software",
    ],
  },

  /* =========================================================
     LIBRARY
  ========================================================= */

  Library: {
    icon: FiBookOpen,
    image: "library.jpg",

    subtitle:
      "A Rich Learning Resource Centre",

    text:
      "A well-equipped and rich library is the soul of good institution. With this dictum in mind, the college has arranged for a rich and well-equipped library with all modern facilities.",

    sections: [
      {
        title: "Introduction",

        paragraphs: [
          "A well-equipped and rich library is the soul of good institution. With this dictum in mind, the college has arranged for the rich and well-equipped library with all modern facilities.",
        ],
      },

      {
        title: "Collection",

        paragraphs: [
          "CRCOE library is one of the oldest and largest college libraries. Library has rich collection of around 21830 books with 15000 titles on education and other subjects on the shelves of the library.",

          "The library subscribes 58 Journals on Education and related subjects.",
        ],
      },

      {
        title: "Journal Collection",

        paragraphs: [
          "National and Peer reviewed = 52",
          "International = 4",
          "Local = 2",
          "Online + hardcopy = 1",
          "Online Newsletters = 3",
        ],
      },

      {
        title: "Newspapers & Magazines",

        paragraphs: [
          "Our library subscribes Newspapers in Hindi & English = 13 and Magazines = 15.",
        ],
      },

      {
        title: "Audio-Visual Collection",

        paragraphs: [
          "We have separate Audio-video collection which includes Audio cassettes, VCDs on Education, CDs on Education, DVDs on Education, DVDs on Science and Lesson Plan VCDs from Class IV to XII for B.Ed. students.",
        ],
      },

      {
        title: "Reference Section",

        paragraphs: [
          "Reference section is very rich. It has latest Encyclopedias, Dictionaries, Surveys both Research and Educational, Commission/Committee reports, Abstracts, Bibliographies, Biographies, Gazetteers, Yearbooks, Maps, Handbooks, Travel Guides, Foreign and rare books.",

          "Reference section of the library caters to the needs of brilliant students and teachers as it gives them sufficient intellectual stimuli.",
        ],
      },

      {
        title: "Computer Facility",

        paragraphs: [
          "Our library is computerized with SOUL software.",

          "A special E-learning Centre is formed to provide free internet access to all the students to check various educational websites.",

          "Students and teachers avail the facility to use CD-ROMs available in the library.",

          "Students can use Audio CDs, VCDs and DVDs in the library through computers and headphones.",
        ],
      },

      {
        title: "Service",

        paragraphs: [
          "Library has two reading rooms with seating capacity of 70 students.",

          "We have separate Periodical section, Reference section, Newspaper section, Text Book section etc.",
        ],
      },
    ],

    points: [
      "Document delivery service - Books, photocopies of articles, CDs etc.",
      "Inter-library loan",
      "Bibliographic Service - in anticipation and on demand",
      "User Orientation Service - At the beginning of session",
      "Newspaper clipping service",
      "Referral services",
      "Current Awareness service",
      "Photocopier facility",
    ],
  },

  /* =========================================================
     LABORATORY
  ========================================================= */

  Laboratory: {
    icon: FiSettings,
    image: "lab.jpg",

    subtitle:
      "Practical Learning & Resource Centres",

    text:
      "We have separate full equipped resource centers for ICT, Science & Mathematics, Psychology, Home Science, Art and Craft and Languages. These resource centres provide opportunities to students and staff to develop their manipulative skills as we believe in the kernel principles of learning by doing.",

    points: [
      "ICT Resource Centre",
      "Home Science Laboratory",
      "Language Laboratory",
      "Psychology Laboratory",
      "Science and Mathematics Laboratory",
    ],

    labs: {
      "ICT Centre": {
        image: "ict.jpg",
        icon: FiMonitor,

        subtitle: "Technology Enabled Learning",

        text:
          "Our ICT centre is well equipped with modern technological facilities to support teaching, learning and professional development.",

        points: [
          "Multimedia Computers with Broadband Internet Facility",
          "Laptops",
          "Printers - Coloured and black - with Scan and Copy facility",
          "Digital Handycam",
          "Camera",
          "Document Camera",
          "Visualizer",
          "Television (LED)",
          "VCD Player",
          "LCD Projector",
          "OHP",
          "Webcams",
          "Slide Projector",
          "Effective Offline Resources",
          "Licensed Software",
          "Online UPS",
        ],
      },

      "Home Science Lab": {
        image: "home-science.jpg",
        icon: FiHome,

        subtitle:
          "Practical Home Science Learning Environment",

        text:
          "Provision of adequate, convenient and attractive facilities for the Home Science Laboratory contributes towards pupil-teachers learning environment and satisfaction of teaching. The Home Science Laboratory of our college is situated on the first floor in a corner of the main building which has two stories.",

        paragraphs: [
          "The laboratory is located on the top floor and has convenient arrangements for bringing supplies and disposing of waste materials. The lab is less disturbed by passing classes and is orderly, attractive, well-lighted and ventilated. It may also be utilized as a classroom.",
        ],

        objectiveTitle:
          "Objectives of Establishing Home Science Laboratory",

        points: [
          "To develop practical skills of pupil-teachers to organize various activities related to teaching of Home Science.",

          "To develop practical skills and competencies required for preparing teaching aids in teaching of Home Science.",

          "To develop understanding of the various methods and procedures required for teaching of Home Science.",

          "To develop basic skills and competencies required for teaching of Home Science.",

          "To demonstrate activities like cooking, stitching, embroidery, knitting and home management and provide facilities to do them independently.",
        ],
      },

      "Language Lab": {
        image: "language-lab.jpg",
        icon: FiMic,

        subtitle:
          "Developing Communication & Linguistic Skills",

        text:
          "In the 21st century, language lab is the latest innovation in language teaching and learning. Recently it has become a common concept in educational institutions. Today's world is of competence and one needs to acquire proper communication skills.",

        paragraphs: [
          "Digital language lab has teaching-learning software. This digital lab makes use of intelligible English that both native and non-native speakers of English can apprehend quite easily.",

          "Our language lab has twenty five computer PCs and seating capacity of 25 students at a time.",

          "Various linguistic skills like speaking and listening are developed. Students can effortlessly communicate with the teacher. They can listen to the native speaker's voice, record their voices and compare.",

          "Students can assess their own capabilities and abilities. Teachers have the provision to provide group discussions to the students on a given topic and ascertain the performance of the students.",
        ],

        points: [
          "25 Computer PCs",
          "Seating capacity of 25 students",
          "Speaking skill development",
          "Listening skill development",
          "Voice recording and comparison",
          "Self-assessment facilities",
          "Group discussion activities",
          "Teacher-guided language practice",
        ],
      },

      "Psychology Lab": {
        image: "psychology-lab.jpg",
        icon: FiHeart,

        subtitle:
          "Psychological Testing & Practical Learning",

        text:
          "The aim of the Psychology Laboratory is to provide psychology educators, students of B.Ed. and M.Ed. and researchers with a tool that supports the analysis, modification and re-execution of previously archived experiments.",

        paragraphs: [
          "The archive includes experimental materials, designs, procedures and results which can be submitted by active researchers and educators.",
        ],

        points: [
          "Support for B.Ed. students",
          "Support for M.Ed. students",
          "Support for psychology educators",
          "Support for researchers",
          "Psychological testing resources",
          "Approximately 150 psychology tests",
          "Experimental learning",
          "Research-oriented practical work",
        ],
      },

      "Science & Mathematics Lab": {
        image: "science-mathematics-lab.jpg",
        icon: FiCpu,

        subtitle:
          "Learning Science & Mathematics Through Practical Work",

        text:
          "Science and Mathematics Laboratory has been fully equipped in respect of instruments, apparatuses, specimens, microscopes, slides and chemicals to demonstrate practicals that help to make subject matter more clear.",

        paragraphs: [
          "Students can also avail practical material and prepare teaching aids during teaching practice.",
        ],

        points: [
          "Scientific instruments",
          "Mathematical apparatus",
          "Specimens",
          "Microscopes",
          "Slides",
          "Chemicals",
          "Practical demonstrations",
          "Teaching aid preparation",
          "Hands-on learning",
        ],
      },
    },
  },

  /* =========================================================
     SPORTS
  ========================================================= */

  "Sports Facilities": {
    icon: FiActivity,
    image: "sports.jpg",

    subtitle:
      "Fitness, Teamwork and Active Learning",

    text:
      "In order to keep our young talents full of life and vigour, we encourage and organize lots of sports activity in the college.",

    paragraphs: [
      "The college encourages students to participate in different sporting activities. Sports help students develop physical fitness, teamwork, discipline and a healthy competitive spirit.",

      "The college organizes sports events every year for the students. We believe in healthy hearts and strong minds.",
    ],

    points: [
      "Cricket",
      "Football",
      "Badminton",
      "Softball",
      "Other sports activities",
      "Annual sports events",
      "Student participation",
      "Teamwork and discipline",
    ],
  },

  /* =========================================================
     WOMEN CELL
  ========================================================= */

  "Women Cell": {
    icon: FiHeart,
    image: "women.jpg",

    subtitle:
      "Safe, Supportive and Empowering",

    text:
      "The Women Cell has been pressed into service for the empowerment of girl students. This service unit takes care of creating social awareness, justice and infuses courage and fortitude amongst the girls by undertaking socially useful projects for women empowerment, women and justice and female health hazards.",

    sections: [
      {
        title: "Co-ordinator",

        paragraphs: [
          "Dr. (Mrs.) Sushila Sangwan",
        ],
      },
    ],

    paragraphs: [
      "In order to create awareness amongst girl students, they are given illuminating talks about their right to property, anti-dowry law and protection of women against crimes committed against them.",

      "Seminars on women empowerment are organised. Students are given valuable suggestions to get rid of social evils.",

      "In addition to this, competitions in essay writing, poster making, poetic competition and symposia are arranged by the college from time to time through the untiring efforts of the programme coordinator Dr. Sushila Sangwan.",
    ],

    points: [
      "Women empowerment awareness",
      "Awareness regarding women's rights",
      "Anti-dowry law awareness",
      "Protection against crimes",
      "Female health awareness",
      "Women empowerment seminars",
      "Essay writing competitions",
      "Poster making competitions",
      "Poetic competitions",
      "Symposia",
    ],
  },

  /* =========================================================
     OTHER FACILITIES
  ========================================================= */

  "Other Facilities": {
    icon: FiSettings,
    image: "other.jpg",

    subtitle:
      "Support Services for Campus Life",

    text:
      "The college provides additional facilities to support academic activities, student life and a comfortable campus environment.",

    otherFacilities: [
      {
        title: "Seminar Hall",
        icon: FiMonitor,

        text:
          "We have Seminar Hall with all electronic gadgets including Computer, Projector, Tablet Monitor, Sound System and Online UPS.",
      },

      {
        title: "Multipurpose Hall",
        icon: FiUsers,

        text:
          "We have a Multipurpose Hall at the first floor of the building with electronic gadgets including Wall Mount Screen, Projector, Computer, Tablet Monitor, LED TVs, Sound System and Online UPS. It has seating capacity of 150 students.",
      },

      {
        title: "Canteen",
        icon: FiHome,

        text:
          "We have a canteen in the college campus. Good quality hygienic food is ensured in the college canteens by checking the quality by the students and faculty on a regular basis.",
      },

      {
        title: "Transport Facilities",
        icon: FiActivity,

        text:
          "Transport facilities are shared with the Sister Concern.",
      },
    ],

    points: [
      "Seminar Hall",
      "Multipurpose Hall",
      "Canteen",
      "Transport Facilities",
    ],
  },
};


export default function Facilities() {
  const [active, setActive] = useState("Classroom");
  const [activeLab, setActiveLab] = useState("ICT Centre");

  const current = facilityData[active];
  const Icon = current.icon;

  const changeFacility = (name) => {
    setActive(name);

    if (name === "Laboratory") {
      setActiveLab("ICT Centre");
    }

    setTimeout(() => {
      window.scrollTo({
        top: 410,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <>
      <Navbar />

      <main className="facilities-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="facilities-hero">

          <div className="facilities-hero-content">

            <div className="facilities-breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>Facilities</span>
            </div>

            <div className="facilities-badge">
              <FiAward />
              <span>Campus Infrastructure</span>
            </div>

            <h1>
              Our <strong>Facilities</strong>
            </h1>

            <h3>
              Modern Infrastructure for Holistic Development
            </h3>

            <div className="facilities-hero-line"></div>

            <p>
              We provide supportive, inclusive and enriching facilities
              to strengthen learning, practical exposure and student life.
            </p>

          </div>

          <div className="facilities-hero-image">

            <img
              src="/images/campus-about.jpg"
              alt="College Campus"
            />

            <div className="facilities-image-card">

              <FiBookOpen />

              <div>
                <strong>
                  Learning Beyond Classrooms
                </strong>

                <span>
                  Infrastructure • Resources • Development
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FACILITY TABS
        ===================================================== */}

        <section className="facility-tabs">

          {Object.entries(facilityData).map(
            ([name, data]) => {

              const TabIcon = data.icon;

              return (
                <button
                  key={name}
                  className={
                    active === name
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    changeFacility(name)
                  }
                >
                  <TabIcon />

                  <span>
                    {name}
                  </span>
                </button>
              );
            }
          )}

        </section>


        {/* =====================================================
            MAIN FACILITY DETAIL
        ===================================================== */}

        <section
          className={`
            facility-detail
            ${active === "Laboratory"
              ? "facility-detail-laboratory"
              : ""}
            ${active === "Library"
              ? "facility-detail-library"
              : ""}
          `}
        >

          {/* ================= FACILITY COPY ================= */}

          <div
            className={`
              facility-copy
              ${active === "Library"
                ? "library-copy"
                : ""}
            `}
          >

            <div className="facility-title">

              <Icon />

              <div>

                <small>
                  College Facility
                </small>

                <h2>
                  {active}
                </h2>

                <h3>
                  {current.subtitle}
                </h3>

              </div>

            </div>


            <div className="facility-main-text">

              <p>
                {current.text}
              </p>

              {current.paragraphs?.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </div>


            {/* Sections */}

            {current.sections?.map(
              (section, index) => (

                <div
                  className="facility-text-section"
                  key={index}
                >

                  <h3>
                    {section.title}
                  </h3>

                  {section.paragraphs?.map(
                    (paragraph, pIndex) => (

                      <p key={pIndex}>
                        {paragraph}
                      </p>

                    )
                  )}

                </div>

              )
            )}


            {/* Other Facility Cards */}

            {current.otherFacilities && (

              <div className="other-facility-grid">

                {current.otherFacilities.map(
                  (item) => {

                    const ItemIcon = item.icon;

                    return (

                      <article
                        key={item.title}
                        className="other-facility-card"
                      >

                        <div>
                          <ItemIcon />
                        </div>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>

                      </article>

                    );
                  }
                )}

              </div>

            )}


            {/* Common Points */}

            {current.points?.length > 0 && (

              <div className="facility-points">

                <h3>

                  {active === "Classroom"
                    ? "Class Room Ethics"
                    : active === "ICT Center"
                    ? "ICT Centre Facilities"
                    : active === "Laboratory"
                    ? "Available Resource Centres"
                    : active === "Sports Facilities"
                    ? "Sports Activities"
                    : active === "Women Cell"
                    ? "Women Cell Activities"
                    : "Facilities & Services"}

                </h3>


                <div className="points-grid">

                  {current.points.map(
                    (point, index) => (

                      <div
                        className="facility-point"
                        key={index}
                      >

                        <FiCheckCircle />

                        <span>
                          {point}
                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>

            )}

          </div>


          {/* =================================================
              LABORATORY SUB SECTIONS
          ================================================= */}

          {active === "Laboratory" &&
            current.labs && (

              <div className="laboratory-subsection">

                <div className="laboratory-heading">

                  <div>

                    <small>
                      RESOURCE CENTRES
                    </small>

                    <h3>
                      Explore Our{" "}
                      <strong>
                        Laboratories
                      </strong>
                    </h3>

                  </div>

                  <FiSettings />

                </div>


                <div className="lab-selector">

                  {Object.entries(
                    current.labs
                  ).map(
                    ([labName, lab]) => {

                      const LabIcon = lab.icon;

                      return (

                        <button
                          key={labName}
                          className={
                            activeLab === labName
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            setActiveLab(
                              labName
                            )
                          }
                        >

                          {/* <span className="lab-arrow">
                            ›
                          </span> */}

                          <LabIcon />

                          <span>
                            {labName}
                          </span>

                        </button>

                      );

                    }
                  )}

                </div>


                {/* Selected Lab */}

                {(() => {

                  const selectedLab =
                    current.labs[activeLab];

                  const LabIcon =
                    selectedLab.icon;

                  return (

                    <article className="selected-lab">

                      <div className="selected-lab-content">

                        <div className="selected-lab-heading">

                          <div className="selected-lab-icon">
                            <LabIcon />
                          </div>

                          <div>

                            <small>
                              RESOURCE CENTRE
                            </small>

                            <h3>
                              {activeLab}
                            </h3>

                            <span>
                              {selectedLab.subtitle}
                            </span>

                          </div>

                        </div>


                        <p>
                          {selectedLab.text}
                        </p>


                        {selectedLab.paragraphs?.map(
                          (paragraph, index) => (

                            <p key={index}>
                              {paragraph}
                            </p>

                          )
                        )}


                        {selectedLab.objectiveTitle && (

                          <div className="lab-objective-title">

                            <h4>
                              {selectedLab.objectiveTitle}
                            </h4>

                          </div>

                        )}


                        <div className="selected-lab-points">

                          {selectedLab.points.map(
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


                      <div className="selected-lab-image">

                        <img
                          src={`/images/${selectedLab.image}`}
                          alt={activeLab}
                        />

                        <div className="lab-image-caption">

                          <LabIcon />

                          <span>
                            {activeLab}
                          </span>

                        </div>

                      </div>

                    </article>

                  );

                })()}

              </div>

            )}


          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <div
            className={`
              facility-gallery
              ${active === "Library"
                ? "library-gallery"
                : ""}
            `}
          >

            {active === "Library" ? (

              <div className="library-image-grid">

                <div className="gallery-main">

                  <img
                    src={`/images/${current.image}`}
                    alt={active}
                  />

                  <div className="gallery-overlay">

                    <Icon />

                    <span>
                      {active}
                    </span>

                  </div>

                </div>


                <div className="gallery-main">

                  <img
                    src="/images/campus-about.jpg"
                    alt="College Campus"
                  />

                  <div className="gallery-overlay">

                    <FiBookOpen />

                    <span>
                      College Learning Environment
                    </span>

                  </div>

                </div>

              </div>

            ) : (

              <>

                <div className="gallery-main">

                  <img
                    src={`/images/${current.image}`}
                    alt={active}
                  />

                  <div className="gallery-overlay">

                    <Icon />

                    <span>
                      {active}
                    </span>

                  </div>

                </div>


                <div className="thumb-row">

                  <button
                    onClick={() =>
                      setActive(active)
                    }
                  >

                    <img
                      src={`/images/${current.image}`}
                      alt={active}
                    />

                  </button>


                  <img
                    src="/images/campus-home.jpg"
                    alt="Campus"
                  />


                  <img
                    src="/images/campus-about.jpg"
                    alt="College Campus"
                  />

                </div>

              </>

            )}

          </div>

        </section>


        {/* =====================================================
            EXPLORE FACILITIES
        ===================================================== */}

        <section className="facility-explore">

          <div className="section-title">

            <div className="section-title-icon">
              <FiSettings />
            </div>

            <div>

              <h2>
                Explore Our{" "}
                <strong>
                  Facilities
                </strong>
              </h2>

              <span></span>

            </div>

          </div>


          <p className="explore-description">

            Select any facility to instantly view its detailed
            information, facilities, resources and images.

          </p>


          <div className="facility-cards">

            {Object.entries(
              facilityData
            ).map(
              ([name, data]) => {

                const CardIcon =
                  data.icon;

                return (

                  <button
                    key={name}
                    className={
                      active === name
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      changeFacility(name)
                    }
                  >

                    <div className="facility-card-image">

                      <img
                        src={`/images/${data.image}`}
                        alt={name}
                      />

                      <span>
                        {name}
                      </span>

                    </div>


                    <div className="facility-card-content">

                      <div className="facility-card-icon">
                        <CardIcon />
                      </div>

                      <h3>
                        {name}
                      </h3>

                      <p>
                        {data.subtitle}
                      </p>

                    </div>


                    <FiArrowRight
                      className="facility-card-arrow"
                    />

                  </button>

                );

              }
            )}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}