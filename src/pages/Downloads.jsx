import React, { useState } from "react";
import {
  FiDownload,
  FiFileText,
  FiCalendar,
  FiBookOpen,
  FiArrowRight,
  FiUsers,
  FiAward,
  FiHeart,
  FiShield,
  FiHome,
  FiEye,
  FiCheckCircle,
  FiMail,
  FiPhone,
  FiTarget,
  FiStar,
  FiClipboard,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Downloads.css";


/* =========================================================
   DOWNLOAD DOCUMENTS
   PDFs are loaded from public/downloads/
========================================================= */

const downloadFiles = [
  {
    id: 1,
    title:
      "Seminar Brochure and Registration Form for One Day Interdisciplinary DGHE Sponsored National Seminar to be held on 14th October 2018",
    file: "/downloads/seminar-brochure-registration-form.pdf",
  },
  {
    id: 2,
    title: "Application Form of Head Clerk",
    file: "/downloads/application-form-head-clerk.pdf",
  },
  {
    id: 3,
    title:
      "Application are invited for Regular Grant-in-aid Post of Head Clerk-1, Sweeper-1 (Gen) on the prescribed Proforma",
    file: "/downloads/head-clerk-sweeper-application.pdf",
  },
];


/* =========================================================
   STUDENT SUPPORT
========================================================= */

const supportServices = [
  {
    title: "Grievance Redressal Cell",
    person: "Dr. Sunita Arya",
    icon: FiShield,
  },
  {
    title: "Placement Cell",
    person: "Dr. Sunita Arya",
    icon: FiTarget,
  },
  {
    title: "SC/ST Cell",
    person: "Dr. Indu Bala Tehlan",
    icon: FiUsers,
  },
  {
    title: "Guidance & Counseling Cell",
    person: "Dr. Indu Bala, Convener",
    icon: FiBookOpen,
  },
  {
    title: "Legal Cell",
    person: "Dr. Sunita Arya, Convener",
    icon: FiFileText,
  },
  {
    title: "Current Affair Forum",
    person: "Student Academic Support",
    icon: FiCalendar,
  },
  {
    title: "Canteen",
    person: "Campus Support Facility",
    icon: FiHome,
  },
];


/* =========================================================
   CO-CURRICULAR CONTACTS
========================================================= */

const cocurricular = [
  {
    title: "Red Ribbon Club",
    person: "Dr. Sunita Arya",
    email: "sunitaarya95@gmail.com",
    phone: "90533-14403",
  },
  {
    title: "Placement Cell",
    person: "Dr. Manju",
    email: "mghooda@gmail.com",
    phone: "92546-32532",
  },
  {
    title: "Cultural Club",
    person: "Dr. Ranju",
    email: "Malikranju26@yahoo.com",
    phone: "90503-85227",
  },
  {
    title: "Legal Literacy Cell",
    person: "Dr. Renu Bala",
    email: "renubala@gmail.com",
    phone: "94670-30954",
  },
  {
    title: "NCC",
    person: "No Unit",
    email: "",
    phone: "",
  },
  {
    title: "NSS",
    person:
      "Applied for NSS unit to Directorate Higher Education, Panchkula",
    email: "",
    phone: "",
  },
];


/* =========================================================
   CO-CURRICULAR PDFS
========================================================= */

const cocurricularFiles = [
  {
    title: "Cultural Activities",
    file: "/downloads/cultural-activities.pdf",
  },
  {
    title: "Legal Literacy Cell Activities",
    file: "/downloads/legal-literacy-cell-activities.pdf",
  },
  {
    title: "Placement Cell Activities",
    file: "/downloads/placement-cell-activities.pdf",
  },
  {
    title: "Red Ribbon Club Activities",
    file: "/downloads/red-ribbon-club-activities.pdf",
  },
];


/* =========================================================
   HONOUR LIST
========================================================= */

const medHonours = [
  ["2000-01", "SEEMA", "402/600"],
  ["2001-02", "ANU BANSAL", "406/600"],
  ["2002-03", "MAMTA", "533/800"],
  ["2003-04", "POOJA MINOCHA (G.MEDAL)", "668/800"],
  ["2004-05", "MANJEET", "591/800"],
  ["2005-06", "VANITA CHOPERA", "595/800"],
  ["2006-07", "MUKTA RATHEE", "594/800"],
  ["2007-08", "POONAM", "598/800"],
  ["2008-09", "RITU RANI (G.MEDAL)", "597/800"],
  ["2009-10", "SUSHEELA DEVI", "551/800"],
  ["2010-11", "VANITA ROSE", "535/800"],
  ["2011-12", "SARIKA MALIK", "1077/1400"],
];


const bedHonours = [
  ["1989-90", "ARUN BHARDWAJ", "580/900"],
  ["1990-91", "RAKESH KUMAR", "581/900"],
  ["1991-92", "REKHA SUHAG", "584/900"],
  ["1992-93", "PARVEEN SANGWAN", "579/900"],
  ["1993-94", "ASHA", "568/900"],
  ["1994-95", "SAPNA", "609/900"],
  ["1995-96", "NEELAM KHAGRA", "584/900"],
  ["1996-97", "SONIA", "598/900"],
  ["1997-98", "INDU KATARIA", "607/900"],
  ["1998-99", "RACHNA KATARIA", "606/900"],
  ["1999-2000", "SUMITA", "618/900"],
  ["2000-01", "DEEPTI MALIK", "608/900"],
  ["2001-02", "GARGI LOHCHA", "627/900"],
  ["2002-03", "NEERAJ", "757/1000"],
  ["2003-04", "SEEMA CHOPERA", "766/1000"],
  ["2004-05", "SWATI", "726/1000"],
  ["2005-06", "POONAM SHARMA", "749/1000"],
  ["2006-07", "MANISHA", "738/1000"],
  ["2007-08", "AAKANSHA CHAUDHARY", "747/1000"],
  ["2008-09", "PREETI SINGH", "758/1000"],
  ["2009-10", "VANITA ROSE", "774/1000"],
  ["2010-11", "MONIKA RATHEE", "693/1000"],
  ["2011-12", "MENAKSHI MAHAUR", "736/1000"],
];


/* =========================================================
   SIDEBAR ITEMS
========================================================= */

const menuItems = [
  {
    id: "downloads",
    label: "Downloads",
    icon: FiDownload,
  },
  {
    id: "student-support",
    label: "Student Support Services",
    icon: FiUsers,
  },
  {
    id: "co-curricular",
    label: "Co Curricular Activities",
    icon: FiStar,
  },
  {
    id: "publications",
    label: "Publications",
    icon: FiBookOpen,
  },
  {
    id: "functions",
    label: "Functions",
    icon: FiCalendar,
  },
  {
    id: "honour-list",
    label: "Honour List",
    icon: FiAward,
  },
  {
    id: "panchayat",
    label: "Panchayat System",
    icon: FiUsers,
  },
  {
    id: "sexual-harassment",
    label: "Committee against Sexual Harassment",
    icon: FiShield,
  },
];


/* =========================================================
   DOWNLOAD CARD
========================================================= */

function DownloadCard({ item }) {
  return (
    <article className="download-document-card">

      <div className="download-document-icon">
        <FiFileText />
      </div>

      <div className="download-document-content">

        <div className="download-document-number">
          {String(item.id).padStart(2, "0")}
        </div>

        <h3>{item.title}</h3>

        <p>
          Official document available for viewing and download.
        </p>

        <div className="download-actions">

          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="download-view-btn"
          >
            <FiEye />
            View PDF
          </a>

          <a
            href={item.file}
            download
            className="download-file-btn"
          >
            <FiDownload />
            Download
          </a>

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   PDF MINI CARD
========================================================= */

function PdfMiniCard({ item, index }) {
  return (
    <article className="pdf-mini-card">

      <span className="pdf-mini-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <FiFileText />

      <div>
        <h4>{item.title}</h4>

        <div className="pdf-mini-actions">

          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiEye />
            View
          </a>

          <a
            href={item.file}
            download
          >
            <FiDownload />
            Download
          </a>

        </div>
      </div>

    </article>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function Downloads() {

  const [activeSection, setActiveSection] =
    useState("downloads");


  const changeSection = (id) => {
    setActiveSection(id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <Navbar />

      <main className="downloads-page">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="downloads-hero">

          <div className="downloads-hero-content">

            <div className="downloads-breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>{menuItems.find(
                (item) => item.id === activeSection
              )?.label}</span>
            </div>

            <span className="downloads-badge">
              <FiFileText />
              Student Resources
            </span>

            <h1>
              {activeSection === "downloads"
                ? <>Downloads <strong>Centre</strong></>
                : menuItems.find(
                    (item) => item.id === activeSection
                  )?.label}
            </h1>

            <h3>
              Important Information & Resources
            </h3>

            <div className="downloads-hero-line"></div>

            <p>
              Access important academic documents, student
              support services, activities, publications and
              institutional information.
            </p>

          </div>


          <div className="downloads-hero-image">

            <img
              src="/images/docs-books.jpg"
              alt="Documents and academic resources"
            />

            <div className="downloads-hero-card">

              <FiBookOpen />

              <div>
                <strong>CR College of Education</strong>
                <span>Information & Resources</span>
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            MAIN LAYOUT
        ================================================= */}

        <section className="downloads-layout">


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="downloads-sidebar">

            <div className="sidebar-heading">

              <span>QUICK NAVIGATION</span>

              <h3>
                College <strong>Resources</strong>
              </h3>

            </div>


            <div className="sidebar-menu">

              {menuItems.map((item) => {

                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={
                      activeSection === item.id
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      changeSection(item.id)
                    }
                  >

                    <Icon />

                    <span>
                      {item.label}
                    </span>

                    <FiArrowRight />

                  </button>
                );

              })}

            </div>

          </aside>


          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="downloads-main-content">


            {/* =================================================
                DOWNLOADS
            ================================================= */}

            {activeSection === "downloads" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiDownload />}
                  title={
                    <>
                      Downloads <strong>Centre</strong>
                    </>
                  }
                  text="Important documents, forms and notices available for students and visitors."
                />


                <div className="download-document-grid">

                  {downloadFiles.map((item) => (
                    <DownloadCard
                      key={item.id}
                      item={item}
                    />
                  ))}

                </div>


                <div className="content-note">

                  <FiCheckCircle />

                  <div>
                    <strong>Document Information</strong>

                    <p>
                      Click on View PDF to open the document
                      in a new browser tab or use Download
                      to save the PDF to your device.
                    </p>
                  </div>

                </div>

              </section>

            )}


            {/* =================================================
                STUDENT SUPPORT
            ================================================= */}

            {activeSection === "student-support" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiUsers />}
                  title={
                    <>
                      Student <strong>Support Services</strong>
                    </>
                  }
                  text="Various support cells and services are available to assist students in their academic, personal and professional development."
                />


                <div className="support-grid">

                  {supportServices.map((service) => {

                    const Icon = service.icon;

                    return (
                      <article
                        className="support-card"
                        key={service.title}
                      >

                        <div className="support-icon">
                          <Icon />
                        </div>

                        <div>
                          <h3>
                            {service.title}
                          </h3>

                          <p>
                            {service.person}
                          </p>
                        </div>

                        <FiArrowRight />

                      </article>
                    );

                  })}

                </div>

              </section>

            )}


            {/* =================================================
                CO CURRICULAR
            ================================================= */}

            {activeSection === "co-curricular" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiStar />}
                  title={
                    <>
                      Co Curricular <strong>Activities</strong>
                    </>
                  }
                  text="College clubs and cells provide opportunities for participation, leadership, creativity and professional development."
                />


                <div className="cocurricular-grid">

                  {cocurricular.map((item) => (

                    <article
                      className="club-card"
                      key={item.title}
                    >

                      <div className="club-icon">
                        <FiStar />
                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      <p className="club-person">
                        {item.person}
                      </p>

                      {item.email && (
                        <a
                          href={`mailto:${item.email}`}
                          className="club-contact"
                        >
                          <FiMail />
                          {item.email}
                        </a>
                      )}

                      {item.phone && (
                        <a
                          href={`tel:${item.phone}`}
                          className="club-contact"
                        >
                          <FiPhone />
                          {item.phone}
                        </a>
                      )}

                    </article>

                  ))}

                </div>


                <div className="sub-section-heading">
                  <FiFileText />
                  <h3>
                    Activity <strong>Documents</strong>
                  </h3>
                </div>


                <div className="pdf-mini-grid">

                  {cocurricularFiles.map(
                    (item, index) => (
                      <PdfMiniCard
                        key={item.title}
                        item={item}
                        index={index}
                      />
                    )
                  )}

                </div>

              </section>

            )}


            {/* =================================================
                PUBLICATIONS
            ================================================= */}

            {activeSection === "publications" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiBookOpen />}
                  title={
                    <>
                      <strong>Publications</strong>
                    </>
                  }
                  text="Academic and scholarly publication activities of the college."
                />


                <article className="publication-card">

                  <div className="publication-icon">
                    <FiBookOpen />
                  </div>

                  <div>

                    <span className="publication-label">
                      OFFICIAL JOURNAL
                    </span>

                    <h2>
                      The Educand:
                      <strong>
                        Journal of Humanities and Social Science
                      </strong>
                    </h2>

                    <div className="publication-line"></div>

                    <p>
                      Our college has started publishing its own
                      official Journal <strong>
                        "The Educand: Journal of Humanities
                        and Social Science"
                      </strong>, a biannual interdisciplinary
                      refereed journal since July-December 2011.
                    </p>

                    <div className="publication-details">

                      <div>
                        <span>ISSN</span>
                        <strong>2249-9741</strong>
                      </div>

                      <div>
                        <span>Frequency</span>
                        <strong>Biannual</strong>
                      </div>

                      <div>
                        <span>Type</span>
                        <strong>Refereed Journal</strong>
                      </div>

                    </div>


                    <div className="editor-box">

                      <FiUsers />

                      <div>

                        <small>
                          FOR MORE DETAILS CONTACT
                        </small>

                        <strong>
                          Dr. Sunita Arya
                        </strong>

                        <span>
                          Editor-in-chief
                        </span>

                        <a
                          href="mailto:sunitaarya95@gmail.com"
                        >
                          <FiMail />
                          sunitaarya95@gmail.com
                        </a>

                        <a href="tel:9053314403">
                          <FiPhone />
                          9053314403
                        </a>

                      </div>

                    </div>

                  </div>

                </article>

              </section>

            )}


            {/* =================================================
                FUNCTIONS
            ================================================= */}

            {activeSection === "functions" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiCalendar />}
                  title={
                    <>
                      College <strong>Functions</strong>
                    </>
                  }
                  text="Various functions and activities are organized throughout the academic session."
                />


                <div className="functions-intro">

                  <div className="functions-big-icon">
                    <FiCalendar />
                  </div>

                  <p>
                    Various functions are organized in the college
                    throughout the session to celebrate various
                    events and days of national and international
                    significance.
                  </p>

                  <p>
                    Woman Cell of the college organizes different
                    activities pertaining to the upliftment of
                    status of women in society.
                  </p>

                </div>


                <div className="functions-grid">

                  <FunctionCard
                    icon={<FiBookOpen />}
                    title="Morning Assembly"
                    text="Regular academic and value-oriented morning assembly activities."
                  />

                  <FunctionCard
                    icon={<FiUsers />}
                    title="Tutorials"
                    text="Tutorial activities supporting student learning and development."
                  />

                  <FunctionCard
                    icon={<FiAward />}
                    title="Periodic Seminars"
                    text="Seminars are organized to enrich academic knowledge and exposure."
                  />

                  <FunctionCard
                    icon={<FiStar />}
                    title="Inter-House Competitions"
                    text="Students participate in different inter-house activities and competitions."
                  />

                  <FunctionCard
                    icon={<FiHome />}
                    title="Educational Tours"
                    text="Students are exposed to sites of educational significance through tours and trips."
                  />

                  <FunctionCard
                    icon={<FiHeart />}
                    title="Women Development Activities"
                    text="Activities are organized to support awareness and upliftment of women."
                  />

                </div>

              </section>

            )}


            {/* =================================================
                HONOUR LIST
            ================================================= */}

            {activeSection === "honour-list" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiAward />}
                  title={
                    <>
                      <strong>Honour List</strong>
                    </>
                  }
                  text="Academic honour boards of M.Ed. and B.Ed. students."
                />


                <HonourTable
                  title="M.Ed Honour Board"
                  data={medHonours}
                />


                <HonourTable
                  title="B.Ed Honour Board"
                  data={bedHonours}
                />

              </section>

            )}


            {/* =================================================
                PANCHAYAT
            ================================================= */}

            {activeSection === "panchayat" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiUsers />}
                  title={
                    <>
                      <strong>Panchayat System</strong>
                    </>
                  }
                  text="Student participation, leadership and institutional activities through Chhatra Panchayat and Clubs."
                />


                <article className="panchayat-card">

                  <div className="panchayat-icon">
                    <FiUsers />
                  </div>

                  <div>

                    <p>
                      The three days orientation programme for the
                      newly inducted B.Ed. and M.Ed. students are
                      organised. This orientation enabled them to
                      become familiar with the activities and
                      programmes of the college.
                    </p>

                    <p>
                      In the beginning of the session Chhatra
                      Panchayat and Clubs are formed.
                    </p>

                    <p>
                      Chhatra Panchayat and clubs are actively
                      involved in planning, organizing and
                      executing various activities of the
                      institution along with the faculty.
                    </p>

                  </div>

                </article>


                <div className="panchayat-values">

                  <div className="sub-section-heading">
                    <FiTarget />

                    <h3>
                      Student <strong>Development</strong>
                    </h3>
                  </div>


                  <div className="value-grid">

                    {[
                      "Cooperation",
                      "Leadership",
                      "Creativity",
                      "Advancement of Knowledge",
                      "Decision Making",
                      "Self Disclosure",
                      "Sharing",
                      "Self-Confidence",
                      "Social Values",
                      "Dignity Towards Manual Work",
                    ].map((value, index) => (

                      <div
                        className="value-card"
                        key={value}
                      >

                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <FiCheckCircle />

                        <strong>
                          {value}
                        </strong>

                      </div>

                    ))}

                  </div>

                </div>

              </section>

            )}


            {/* =================================================
                SEXUAL HARASSMENT
            ================================================= */}

            {activeSection === "sexual-harassment" && (

              <section className="content-panel">

                <SectionHeading
                  icon={<FiShield />}
                  title={
                    <>
                      Committee against{" "}
                      <strong>
                        Sexual Harassment
                      </strong>
                    </>
                  }
                  text="Institutional information and support related to safety, dignity and respectful campus environment."
                />


                <article className="harassment-card">

                  <div className="harassment-icon">
                    <FiShield />
                  </div>

                  <div>

                    <h2>
                      Safe & Respectful <strong>Campus</strong>
                    </h2>

                    <div className="publication-line"></div>

                    <p>
                      The Committee against Sexual Harassment
                      section provides institutional information
                      relating to awareness, support and a safe
                      learning environment.
                    </p>

                    <div className="harassment-points">

                      <div>
                        <FiCheckCircle />
                        <span>
                          Awareness and sensitisation
                        </span>
                      </div>

                      <div>
                        <FiCheckCircle />
                        <span>
                          Student support and guidance
                        </span>
                      </div>

                      <div>
                        <FiCheckCircle />
                        <span>
                          Respectful academic environment
                        </span>
                      </div>

                      <div>
                        <FiCheckCircle />
                        <span>
                          Confidential assistance
                        </span>
                      </div>

                    </div>

                    <div className="harassment-note">
                      <FiFileText />

                      <p>
                        Official committee member details,
                        contact information and related documents
                        can be added to this section when provided
                        by the institution.
                      </p>

                    </div>

                  </div>

                </article>

              </section>

            )}

          </div>

        </section>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <section className="downloads-bottom-cta">

          <div className="cta-icon">
            <FiBookOpen />
          </div>

          <div>

            <h2>
              Need More <strong>Information?</strong>
            </h2>

            <p>
              For any additional institutional information or
              document-related assistance, please contact the
              college office.
            </p>

          </div>

          <a href="/contact">
            Contact Us
            <FiArrowRight />
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ icon, title, text }) {

  return (
    <div className="content-heading">

      <div className="content-heading-icon">
        {icon}
      </div>

      <div>

        <h2>{title}</h2>

        <span></span>

        {text && (
          <p>{text}</p>
        )}

      </div>

    </div>
  );
}


/* =========================================================
   FUNCTION CARD
========================================================= */

function FunctionCard({ icon, title, text }) {

  return (
    <article className="function-card">

      <div className="function-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </article>
  );
}


/* =========================================================
   HONOUR TABLE
========================================================= */

function HonourTable({ title, data }) {

  return (
    <div className="honour-section">

      <div className="honour-title">

        <div>
          <FiAward />
          <h3>{title}</h3>
        </div>

        <span>
          {data.length} Students
        </span>

      </div>


      <div className="honour-table-wrapper">

        <table className="honour-table">

          <thead>

            <tr>
              <th>Sr. No.</th>
              <th>Session</th>
              <th>Name of Student</th>
              <th>Marks Obtained / Maximum Marks</th>
            </tr>

          </thead>

          <tbody>

            {data.map((row, index) => (

              <tr key={`${row[0]}-${row[1]}`}>

                <td>
                  {index + 1}
                </td>

                <td>
                  {row[0]}
                </td>

                <td>
                  <strong>
                    {row[1]}
                  </strong>
                </td>

                <td>
                  {row[2]}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}