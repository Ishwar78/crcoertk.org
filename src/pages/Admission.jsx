import React from "react";
import { Link } from "react-router-dom";
import {
  FiEdit3,
  FiFileText,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiUserCheck,
  FiClipboard,
  FiPhone,
  FiMessageCircle,
  FiAward,
  FiTarget,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Admission.css";

export default function Admission() {
  const admissionSteps = [
    {
      icon: <FiFileText />,
      number: "01",
      title: "Check Programme Eligibility",
      text: "Check the eligibility requirements for B.Ed. or M.Ed. programme before applying.",
    },
    {
      icon: <FiEdit3 />,
      number: "02",
      title: "Online Application",
      text: "Fill the online application form through the M.D. University, Rohtak website as per the academic schedule.",
    },
    {
      icon: <FiClipboard />,
      number: "03",
      title: "University Merit List",
      text: "The eligible candidates list is uploaded on the official university website as per the admission schedule.",
    },
    {
      icon: <FiUsers />,
      number: "04",
      title: "Counselling",
      text: "The counselling process is conducted by the university in stages accompanied by manual counselling.",
    },
    {
      icon: <FiCheckCircle />,
      number: "05",
      title: "Admission Confirmation",
      text: "Complete document verification and other required formalities for confirmation of admission.",
    },
  ];

  const guidancePoints = [
    "Personal guidance and counselling for students facing academic or personal difficulties.",
    "Support in choosing appropriate subjects and electives while joining the programme.",
    "Guidance to understand individual aptitude and professional interests.",
    "Career guidance for choosing suitable professional opportunities after completion of the programme.",
  ];

  return (
    <>
      <Navbar />

      <main className="admission-page">

        {/* ================= HERO ================= */}
        <section className="admission-hero">
          <div className="admission-hero-content">

            <div className="admission-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Admission</span>
            </div>

            <div className="hero-badge">
              <FiAward />
              <span>Admissions 2026</span>
            </div>

            <h1>
              Admission <strong>2026</strong>
            </h1>

            <h3>
              Begin Your Journey as a <strong>Future Educator</strong>
            </h3>

            <div className="hero-line"></div>

            <p>
              Explore programmes, eligibility requirements, admission
              procedure, counselling process and important information
              for admission at Chhotu Ram College of Education.
            </p>

            <div className="hero-buttons">
              <Link to="/mandatory-documents" className="pink-btn">
                View Documents
                <FiArrowRight />
              </Link>

              <Link to="/contact" className="outline-btn">
                Contact Admission Cell
              </Link>
            </div>

          </div>

          <div className="admission-hero-image">
            <img
              src="/images/student-hero.jpg"
              alt="Students at Chhotu Ram College of Education"
            />

            <div className="hero-image-card">
              <FiBookOpen />
              <div>
                <strong>Shape Your Future</strong>
                <span>Learn • Grow • Lead</span>
              </div>
            </div>
          </div>
        </section>


        {/* ================= INTRO ================= */}
        <section className="admission-section admission-intro">
          <div className="section-title">
            <div className="title-icon">
              <FiBookOpen />
            </div>

            <div>
              <h2>
                Start Your <strong>Academic Journey</strong>
              </h2>
              <span></span>
            </div>
          </div>

          <div className="intro-box">
            <div className="intro-icon">
              <FiTarget />
            </div>

            <div>
              <p>
                Chhotu Ram College of Education welcomes aspiring teachers
                and education professionals who wish to build a strong
                foundation in teaching, learning and professional
                development.
              </p>

              <p>
                Admission to B.Ed. and M.Ed. programmes is carried out
                according to the admission schedule, eligibility criteria
                and counselling process prescribed by M.D. University,
                Rohtak.
              </p>
            </div>
          </div>
        </section>


        {/* ================= PROGRAMMES ================= */}
        <section className="admission-section programmes-section">

          <div className="section-title">
            <div className="title-icon">
              <FiBookOpen />
            </div>

            <div>
              <h2>
                Admission <strong>Programmes</strong>
              </h2>
              <span></span>
            </div>
          </div>

          <div className="programme-grid">

            {/* B.Ed */}
            <article className="programme-card">

              <div className="programme-top">
                <div className="programme-icon">
                  <FiEdit3 />
                </div>

                <div>
                  <small>Bachelor of Education</small>
                  <h3>B.Ed.</h3>
                </div>
              </div>

              <div className="programme-divider"></div>

              <p>
                Professional teacher education programme designed to
                develop strong pedagogical knowledge, practical teaching
                abilities and professional competencies.
              </p>

              <div className="programme-info">
                <div>
                  <FiUsers />
                  <span>
                    <small>Seats</small>
                    <strong>100</strong>
                  </span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>
                    <small>Admission</small>
                    <strong>Merit Based</strong>
                  </span>
                </div>
              </div>

              <Link to="/contact" className="programme-btn">
                Apply / Enquire
                <FiArrowRight />
              </Link>

            </article>


            {/* M.Ed */}
            <article className="programme-card">

              <div className="programme-top">
                <div className="programme-icon">
                  <FiAward />
                </div>

                <div>
                  <small>Master of Education</small>
                  <h3>M.Ed.</h3>
                </div>
              </div>

              <div className="programme-divider"></div>

              <p>
                Advanced programme focused on educational research,
                leadership, curriculum development and professional
                growth in the field of education.
              </p>

              <div className="programme-info">
                <div>
                  <FiUsers />
                  <span>
                    <small>Seats</small>
                    <strong>50</strong>
                  </span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>
                    <small>Admission</small>
                    <strong>B.Ed. Merit</strong>
                  </span>
                </div>
              </div>

              <Link to="/contact" className="programme-btn">
                Apply / Enquire
                <FiArrowRight />
              </Link>

            </article>


            {/* Important Dates */}
            <article className="programme-card date-card">

              <div className="programme-top">
                <div className="programme-icon">
                  <FiCalendar />
                </div>

                <div>
                  <small>Admission Schedule</small>
                  <h3>Important Dates</h3>
                </div>
              </div>

              <div className="programme-divider"></div>

              <p>
                Keep checking official university and college notices
                for application, counselling, document verification
                and fee submission dates.
              </p>

              <div className="notice-box">
                <FiCalendar />
                <span>
                  Admission dates are subject to the official
                  academic schedule.
                </span>
              </div>

              <Link to="/notice" className="programme-btn">
                View Schedule
                <FiArrowRight />
              </Link>

            </article>

          </div>
        </section>


        {/* ================= ADMISSION PROCEDURE ================= */}
        <section className="admission-section procedure-section">

          <div className="section-title">
            <div className="title-icon">
              <FiClipboard />
            </div>

            <div>
              <h2>
                Admission <strong>Procedure</strong>
              </h2>
              <span></span>
            </div>
          </div>

          <div className="procedure-intro">
            <p>
              Admissions to the B.Ed. and M.Ed. programmes are made by
              M.D. University, Rohtak. Online forms are filled on the
              university website as per the schedule of the respective
              academic sessions.
            </p>

            <p>
              The admission process follows the university-prescribed
              schedule and the eligible candidate list is uploaded on
              the university website.
            </p>
          </div>

          <div className="procedure-grid">

            {admissionSteps.map((step) => (
              <article className="procedure-card" key={step.number}>

                <div className="procedure-number">
                  {step.number}
                </div>

                <div className="procedure-icon">
                  {step.icon}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </article>
            ))}

          </div>

          <div className="counselling-highlight">

            <div className="counselling-icon">
              <FiUsers />
            </div>

            <div>
              <h3>University Counselling Process</h3>

              <p>
                The counselling process is conducted by the university
                in three stages accompanied by manual counselling.
              </p>
            </div>

          </div>

        </section>


        {/* ================= ELIGIBILITY ================= */}
        <section className="admission-section eligibility-section">

          <div className="section-title">
            <div className="title-icon">
              <FiCheckCircle />
            </div>

            <div>
              <h2>
                Eligibility <strong>Criteria</strong>
              </h2>
              <span></span>
            </div>
          </div>

          <div className="eligibility-grid">

            {/* B.Ed Eligibility */}
            <article className="eligibility-card">

              <div className="eligibility-header">
                <div className="eligibility-icon">
                  <FiBookOpen />
                </div>

                <div>
                  <small>Bachelor of Education</small>
                  <h3>B.Ed. Eligibility</h3>
                </div>
              </div>

              <div className="eligibility-content">

                <div className="eligibility-check">
                  <FiCheckCircle />
                </div>

                <div>
                  <strong>Minimum Qualification</strong>

                  <p>
                    B.A. / B.Sc. / B.Com with
                    <b> 50% marks</b>.
                  </p>
                </div>

              </div>

              <div className="special-note">
                <FiAward />
                <span>
                  For SC students, eligibility is
                  <strong> 45% marks</strong>.
                </span>
              </div>

            </article>


            {/* M.Ed Eligibility */}
            <article className="eligibility-card">

              <div className="eligibility-header">
                <div className="eligibility-icon">
                  <FiAward />
                </div>

                <div>
                  <small>Master of Education</small>
                  <h3>M.Ed. Eligibility</h3>
                </div>
              </div>

              <div className="eligibility-content">

                <div className="eligibility-check">
                  <FiCheckCircle />
                </div>

                <div>
                  <strong>Minimum Qualification</strong>

                  <p>
                    B.Ed. with
                    <b> 50% marks</b>.
                  </p>
                </div>

              </div>

              <div className="special-note">
                <FiUserCheck />
                <span>
                  Candidates must fulfil the admission requirements
                  prescribed by the university.
                </span>
              </div>

            </article>

          </div>
        </section>


        {/* ================= UNIVERSITY ADMISSION ================= */}
        <section className="admission-section university-section">

          <div className="university-layout">

            <div className="university-content">

              <div className="section-title left-title">
                <div className="title-icon">
                  <FiFileText />
                </div>

                <div>
                  <h2>
                    University <strong>Admission Process</strong>
                  </h2>
                  <span></span>
                </div>
              </div>

              <p>
                For both B.Ed. and M.Ed. programmes, candidates are
                required to follow the admission schedule and
                instructions issued by M.D. University, Rohtak.
              </p>

              <p>
                Online application forms are filled through the
                university website. The admission list is uploaded
                on the university website and the counselling process
                is conducted according to the prescribed schedule.
              </p>

              <div className="university-points">

                <div>
                  <FiCheckCircle />
                  <span>Online application through university website</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>University-prescribed admission schedule</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Merit / eligibility based admission process</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>University counselling and manual counselling</span>
                </div>

              </div>

            </div>

            <div className="university-card">

              <div className="university-card-icon">
                <FiAward />
              </div>

              <small>Affiliating University</small>

              <h3>
                M.D. University,
                <strong> Rohtak</strong>
              </h3>

              <div className="university-line"></div>

              <p>
                Follow the official university notifications for
                current admission schedules and counselling updates.
              </p>

              <Link to="/notice">
                View Notices
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </section>


        {/* ================= GUIDANCE & COUNSELING ================= */}
        <section className="admission-section guidance-section">

          <div className="guidance-layout">

            <div className="guidance-image">

              <img
                src="/images/academic-campus.jpg"
                alt="Guidance and Counseling Cell"
              />

              <div className="guidance-image-card">
                <FiMessageCircle />

                <div>
                  <strong>Student Guidance</strong>
                  <span>Support • Advice • Career</span>
                </div>
              </div>

            </div>


            <div className="guidance-content">

              <div className="section-title left-title">

                <div className="title-icon">
                  <FiMessageCircle />
                </div>

                <div>
                  <h2>
                    Guidance & <strong>Counseling Cell</strong>
                  </h2>
                  <span></span>
                </div>

              </div>

              <p className="guidance-main-text">
                Apart from receiving sympathy and sound advice in
                moments of personal stresses and problems, career
                guidance and counselling are available to the students
                for choosing the right subjects and electives and
                understanding their aptitude while deciding about
                their professional career.
              </p>

              <div className="guidance-list">

                {guidancePoints.map((point, index) => (
                  <div className="guidance-item" key={index}>

                    <div className="guidance-check">
                      <FiCheckCircle />
                    </div>

                    <p>{point}</p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================= ADMISSION CHECKLIST ================= */}
        <section className="admission-section checklist-section">

          <div className="section-title centered-title">

            <div className="title-icon">
              <FiFileText />
            </div>

            <div>
              <h2>
                Before You <strong>Apply</strong>
              </h2>
              <span></span>
            </div>

          </div>

          <div className="checklist-grid">

            <div className="checklist-card">
              <span>01</span>
              <FiCheckCircle />
              <h3>Check Eligibility</h3>
              <p>
                Make sure you fulfil the required academic
                qualification.
              </p>
            </div>

            <div className="checklist-card">
              <span>02</span>
              <FiFileText />
              <h3>Prepare Documents</h3>
              <p>
                Keep all mandatory documents ready for the admission
                process.
              </p>
            </div>

            <div className="checklist-card">
              <span>03</span>
              <FiCalendar />
              <h3>Check Schedule</h3>
              <p>
                Follow the latest university admission and counselling
                schedule.
              </p>
            </div>

            <div className="checklist-card">
              <span>04</span>
              <FiUserCheck />
              <h3>Complete Counselling</h3>
              <p>
                Participate in the counselling and complete the
                required admission formalities.
              </p>
            </div>

          </div>

        </section>


        {/* ================= HELP CTA ================= */}
        <section className="admission-help">

          <div className="help-icon">
            <FiPhone />
          </div>

          <div className="help-content">
            <span>Admission Assistance</span>

            <h2>
              Need <strong>Help?</strong>
            </h2>

            <p>
              For admission assistance, contact the college admission
              cell during working hours. Our team can guide you
              regarding programmes, eligibility and admission
              formalities.
            </p>
          </div>

          <Link to="/contact" className="help-btn">
            Contact Us
            <FiArrowRight />
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}