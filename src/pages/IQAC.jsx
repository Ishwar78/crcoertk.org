import React from "react";
import {
  FiAward,
  FiCheckCircle,
  FiBarChart2,
  FiFileText,
  FiUsers,
  FiDownload,
  FiEye,
  FiCalendar,
  FiTarget,
  FiActivity,
  FiBookOpen,
  FiClipboard,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./IQAC.css";


/* =========================================================
   IQAC PURPOSE
========================================================= */

const purposeItems = [
  "Quality up gradation of institution.",
  "Assessment and accreditation.",
  "Performance evaluation.",
  "Enhancement of good morals and ideals.",
  "Improving teaching proficiency among prospective teachers.",
  "Upliftment of values of activities.",
  "Knowledge explosion.",
];


/* =========================================================
   IQAC COMPOSITION
========================================================= */

const facultyMembers = [
  "Dr. (Mrs.) Sunita Arya",
  "Dr. (Mrs.) Indu Bala",
  "Dr. Renu Mann",
  "Dr. Poonam Deswal",
  "Dr. Manju Hooda",
  "Dr. Renu Bala",
  "Mrs. Savita",
  "Dr. Aja",
];

const otherMembers = [
  "Administrative Officer - Mrs. Manisha Dalal",
  "Management Member - Mr. Ram Mehar Hooda (Advocate)",
  "Management Member - Mr. Mandeep",
  "Nominee from Local Society - Dr. K. S. Sangwan (Ex Head, Deptt. of Social Sc., M.D.U. Rohtak)",
  "Nominee from Local Society - Dr. M.S. Chahar (Ex-Principal, C.R. College of Education, Rohtak)",
];


/* =========================================================
   IQAC WORKING
========================================================= */

const workingItems = [
  "The role and activities properly communicated.",
  "Prescribed formats supplied for proper documentation and collection of data.",
  "Action plan for each year obtained.",
  "Progress monitored by IQAC.",
  "Annual Quality Assurance Report (AQAR) prepared accordingly.",
];


/* =========================================================
   MAJOR ACTIVITIES
========================================================= */

const majorActivities = [
  "Provision of short term training courses for students.",
  "Planning and organization of awareness programmes for the schools and community.",
  "Organization of Seminars.",
  "Organization of workshops.",
  "Organization of workshops for school teachers.",
  "Development of ICT skills.",
  "Establishment of smart class rooms.",
  "Development of language proficiency.",
  "Preparing students for future competencies.",
  "Personality development programmes.",
  "Planning and organizing health checkup programmes and blood donation camp.",
  "Sponsoring educational tours and field trips for academic improvement.",
  "Conducting community based activities.",
  "Development of 'We' feeling among students.",
  "Introduction of uniform and Identity Card for all students to inculcate feeling of oneness and uniformity amongst different sections of students.",
  "Organisation of inter club and inter college competitions.",
  "Develop benchmarks / parameters for the various academic activities of the college.",
  "Facilitate the creation of a learner-centric environment conducive for quality education.",
  "Obtain feedback responses from students, parents and other stakeholders on quality-related institutional processes.",
];


/* =========================================================
   PDF DOCUMENTS
========================================================= */

const meetingMinutes = [
  {
    title: "IQAC 2019-2020",
    file: "/MeetingMinutes/IQAC 2019-2020.pdf",
  },
  {
    title: "IQAC 2020-2021",
    file: "/MeetingMinutes/IQAC 2020-2021.pdf",
  },
  {
    title: "IQAC 2021-2022",
    file: "/MeetingMinutes/IQAC 2021-2022.pdf",
  },
  {
    title: "IQAC 2022-2023",
    file: "/MeetingMinutes/IQAC 2022-2023.pdf",
  },
  {
    title: "IQAC 2023-2024",
    file: "/MeetingMinutes/IQAC 2023-2024.pdf",
  },
];


const aqarReports = [
  {
    title: "AQAR 2023-2024",
    file: "/AQARReports/AQAR 2023-2024.pdf",
  },
  {
    title: "AQAR 2022-2023",
    file: "/AQARReports/AQAR 2022-2023.pdf",
  },
  {
    title: "AQAR 2021-2022",
    file: "/AQARReports/AQAR 2021-2022.pdf",
  },
  {
    title: "AQAR 2020-2021",
    file: "/AQARReports/AQAR 2020-2021.pdf",
  },
  {
    title: "AQAR 2019-2020",
    file: "/AQARReports/AQAR 2019-2020.pdf",
  },
];


const aqarList = [
  {
    title: "AQAR 2018-19",
    file: "/AQARList/AQAR 2018-19.pdf",
  },
  {
    title: "AQAR 2019-20",
    file: "/AQARList/AQAR 2019-20.pdf",
  },
  {
    title: "AQAR 2020-21",
    file: "/AQARList/AQAR 2020-21.pdf",
  },
  {
    title: "AQAR 2021-22",
    file: "/AQARList/AQAR 2021-22.pdf",
  },
  {
    title: "AQAR 2022-23",
    file: "/AQARList/AQAR 2022-23.pdf",
  },
  {
    title: "AQAR 2023-24",
    file: "/AQARList/AQAR 2023-24.pdf",
  },
];


/* =========================================================
   PDF CARD COMPONENT
========================================================= */

function PdfCard({ item, number }) {
  return (
    <article className="iqac-pdf-card">

      <div className="iqac-pdf-number">
        {String(number).padStart(2, "0")}
      </div>

      <div className="iqac-pdf-icon">
        <FiFileText />
      </div>

      <div className="iqac-pdf-info">

        <h3>{item.title}</h3>

        <p>
          Official IQAC document available for viewing and download.
        </p>

        <div className="iqac-pdf-actions">

          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-view-btn"
          >
            <FiEye />
            View PDF
          </a>

          <a
            href={item.file}
            download
            className="pdf-download-btn"
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
   PDF SECTION COMPONENT
========================================================= */

function PdfSection({ icon, title, description, documents }) {

  return (
    <section className="iqac-pdf-section">

      <div className="iqac-section-heading">

        <div className="iqac-section-icon">
          {icon}
        </div>

        <div>
          <h2>{title}</h2>
          <span></span>
        </div>

      </div>

      {description && (
        <p className="iqac-section-description">
          {description}
        </p>
      )}

      <div className="iqac-pdf-grid">

        {documents.map((item, index) => (
          <PdfCard
            key={item.title}
            item={item}
            number={index + 1}
          />
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function IQAC() {

  return (
    <>
      <Navbar />

      <main className="iqac-page">


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="iqac-hero">

          <div className="iqac-hero-content">

            <div className="iqac-breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>IQAC</span>
            </div>

            <div className="iqac-badge">
              <FiShield />
              Quality Assurance
            </div>

            <h1>
              IQAC <strong>Cell</strong>
            </h1>

            <h3>
              Quality Assurance for Continuous Improvement
            </h3>

            <div className="iqac-hero-line"></div>

            <p>
              The Internal Quality Assurance Cell supports a culture
              of quality, review, documentation and continuous
              institutional improvement.
            </p>

          </div>


          <div className="iqac-hero-image">

            <img
              src="/images/campus-about.jpg"
              alt="Chhotu Ram College of Education Campus"
            />

            <div className="iqac-image-card">

              <FiAward />

              <div>
                <strong>Internal Quality Assurance Cell</strong>
                <span>Quality • Review • Improvement</span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO / ESTABLISHMENT
        ===================================================== */}

        <section className="iqac-intro">

          <article className="iqac-about-card">

            <div className="iqac-card-icon">
              <FiAward />
            </div>

            <div>

              <span className="small-heading">
                QUALITY ASSURANCE
              </span>

              <h2>
                About <strong>IQAC</strong>
              </h2>

              <p>
                Institution has established Internal Quality
                Assurance Cell (IQAC) in 2004. Norms and guidelines
                of NAAC followed while constituting IQAC.
              </p>

              <p>
                IQAC works towards maintaining and enhancing
                academic and administrative quality through
                systematic planning, monitoring, feedback and
                documentation.
              </p>

            </div>

          </article>


          <aside className="iqac-establishment-card">

            <div className="establishment-icon">
              <FiCalendar />
            </div>

            <small>
              ESTABLISHED
            </small>

            <strong>
              2004
            </strong>

            <span>
              Internal Quality Assurance Cell
            </span>

          </aside>

        </section>


        {/* =====================================================
            PURPOSE
        ===================================================== */}

        <section className="iqac-section">

          <div className="iqac-section-heading">

            <div className="iqac-section-icon">
              <FiTarget />
            </div>

            <div>
              <h2>
                Purpose of <strong>IQAC</strong>
              </h2>

              <span></span>
            </div>

          </div>


          <div className="purpose-grid">

            {purposeItems.map((item, index) => (

              <article
                className="purpose-card"
                key={item}
              >

                <div className="purpose-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <FiCheckCircle />

                <p>
                  {item}
                </p>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            IQAC COMPOSITION
        ===================================================== */}

        <section className="iqac-section composition-section">

          <div className="iqac-section-heading">

            <div className="iqac-section-icon">
              <FiUsers />
            </div>

            <div>
              <h2>
                IQAC <strong>Composition 2019-20</strong>
              </h2>

              <span></span>
            </div>

          </div>


          <div className="composition-grid">


            {/* Chairperson */}

            <article className="member-highlight">

              <div className="member-icon">
                <FiAward />
              </div>

              <div>

                <small>
                  IQAC CHAIRPERSON
                </small>

                <h3>
                  Dr. (Mrs.) Surekha Khokhar
                </h3>

                <p>
                  Principal
                </p>

              </div>

            </article>


            {/* Coordinator */}

            <article className="member-highlight">

              <div className="member-icon">
                <FiActivity />
              </div>

              <div>

                <small>
                  COORDINATOR OF IQAC
                </small>

                <h3>
                  Dr. (Mrs.) Seema Sirohi
                </h3>

                <p>
                  IQAC Coordinator
                </p>

              </div>

            </article>


            {/* Administrative Officer */}

            <article className="member-highlight">

              <div className="member-icon">
                <FiUsers />
              </div>

              <div>

                <small>
                  ADMINISTRATIVE OFFICER
                </small>

                <h3>
                  Mrs. Sunita Sharma
                </h3>

                <p>
                  Director Administration
                </p>

              </div>

            </article>

          </div>


          {/* Faculty Members */}

          <div className="members-block">

            <div className="members-block-heading">

              <h3>
                Faculty <strong>Members</strong>
              </h3>

              <span>
                {facultyMembers.length} Members
              </span>

            </div>


            <div className="members-grid">

              {facultyMembers.map((member, index) => (

                <div
                  className="member-item"
                  key={member}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiCheckCircle />

                  <p>
                    {member}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* Other Members */}

          <div className="members-block">

            <div className="members-block-heading">

              <h3>
                Management & <strong>Society Members</strong>
              </h3>

            </div>


            <div className="members-grid">

              {otherMembers.map((member, index) => (

                <div
                  className="member-item"
                  key={member}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiCheckCircle />

                  <p>
                    {member}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WORKING OF IQAC
        ===================================================== */}

        <section className="iqac-section working-section">

          <div className="iqac-section-heading">

            <div className="iqac-section-icon">
              <FiBarChart2 />
            </div>

            <div>
              <h2>
                Working of <strong>IQAC</strong>
              </h2>

              <span></span>
            </div>

          </div>


          <div className="working-layout">

            <div className="working-content">

              <p>
                The IQAC works systematically to ensure proper
                communication, documentation, planning, monitoring
                and reporting of institutional quality initiatives.
              </p>

              <div className="working-list">

                {workingItems.map((item, index) => (

                  <div
                    className="working-item"
                    key={item}
                  >

                    <div className="working-number">
                      {index + 1}
                    </div>

                    <FiCheckCircle />

                    <span>
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            <div className="quality-cycle">

              <div className="cycle-icon">
                <FiBarChart2 />
              </div>

              <h3>
                Quality <strong>Cycle</strong>
              </h3>

              <div className="cycle-steps">

                <span>Plan</span>
                <b>→</b>
                <span>Monitor</span>
                <b>→</b>
                <span>Review</span>
                <b>→</b>
                <span>Improve</span>

              </div>

              <p>
                Continuous quality monitoring and improvement
                through systematic institutional practices.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            MAJOR ACTIVITIES
        ===================================================== */}

        <section className="iqac-section activities-section">

          <div className="iqac-section-heading">

            <div className="iqac-section-icon">
              <FiActivity />
            </div>

            <div>
              <h2>
                Major Activities <strong>Undertaken</strong>
              </h2>

              <span></span>
            </div>

          </div>


          <p className="section-intro">
            The IQAC undertakes and facilitates various activities
            for academic development, institutional quality,
            professional development and learner-centric education.
          </p>


          <div className="activities-grid">

            {majorActivities.map((activity, index) => (

              <article
                className="activity-card"
                key={activity}
              >

                <div className="activity-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <FiCheckCircle />

                <p>
                  {activity}
                </p>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            QUALITY FOCUS
        ===================================================== */}

        <section className="quality-focus">

          <div className="quality-focus-heading">

            <FiAward />

            <div>
              <small>
                INSTITUTIONAL QUALITY
              </small>

              <h2>
                Our Quality <strong>Focus</strong>
              </h2>
            </div>

          </div>


          <div className="quality-focus-grid">

            <div>
              <FiBarChart2 />
              <strong>Continuous</strong>
              <span>Review</span>
            </div>

            <div>
              <FiUsers />
              <strong>Student</strong>
              <span>Feedback</span>
            </div>

            <div>
              <FiFileText />
              <strong>Annual</strong>
              <span>Documentation</span>
            </div>

            <div>
              <FiTarget />
              <strong>Quality</strong>
              <span>Improvement</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            MEETING MINUTES PDF
        ===================================================== */}

        <PdfSection
          icon={<FiCalendar />}
          title={
            <>
              Meeting <strong>Minutes</strong>
            </>
          }
          description="View and download IQAC meeting minutes for different academic sessions."
          documents={meetingMinutes}
        />


        {/* =====================================================
            AQAR REPORTS PDF
        ===================================================== */}

        <PdfSection
          icon={<FiFileText />}
          title={
            <>
              AQAR <strong>Reports</strong>
            </>
          }
          description="Annual Quality Assurance Reports submitted for different academic sessions."
          documents={aqarReports}
        />


        {/* =====================================================
            AQAR LIST PDF
        ===================================================== */}

        <PdfSection
          icon={<FiClipboard />}
          title={
            <>
              AQAR <strong>List</strong>
            </>
          }
          description="Academic session-wise AQAR documents available for reference and download."
          documents={aqarList}
        />


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="iqac-cta">

          <div className="iqac-cta-icon">
            <FiAward />
          </div>

          <div>

            <h2>
              Commitment to <strong>Quality</strong>
            </h2>

            <p>
              IQAC continues to support a learner-centric,
              transparent and quality-oriented academic environment.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}