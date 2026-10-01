import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiFileText,
  FiEye,
  FiCheckCircle,
  FiDownload,
  FiPhone,
  FiArrowRight,
  FiSearch,
  FiBookOpen,
  FiExternalLink,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MandatoryDocuments.css";

const documents = [
  {
    id: 1,
    name: "Affidavit",
    file: "n67ceaf8422452.pdf",
  },
  {
    id: 2,
    name: "Audit Report",
    file: "n67ceaf597147c.pdf",
  },
  {
    id: 3,
    name: "Balance Sheet for Financial Year",
    file: "n67ceaf4c37a0a.pdf",
  },
  {
    id: 4,
    name: "Income and Expenditure Account for Financial Year",
    file: "n67ceaf4151aa7.pdf",
  },
  {
    id: 5,
    name: "Infrastructure Detail",
    file: "n67ceaf34228e0.pdf",
  },
  {
    id: 6,
    name: "Land Document",
    file: "n67ceaf1a448ce.pdf",
  },
  {
    id: 7,
    name: "List of B.Ed. Student of session 2018-19",
    file: "n67ceaefc24d09.pdf",
  },
  {
    id: 8,
    name: "List of Instructional Facilities during last quarter",
    file: "n67ceaef2779e6.pdf",
  },
  {
    id: 9,
    name: "List of Journals",
    file: "n67ceaee9db091.pdf",
  },
  {
    id: 10,
    name: "List of M.Ed. Student of session 2017-19",
    file: "n67ceaed8e4910.pdf",
  },
  {
    id: 11,
    name: "List of M.Ed. Student of session 2018-20",
    file: "n67ceaece8eb19.pdf",
  },
  {
    id: 12,
    name: "List of M.Ed. Student of session 2019-21",
    file: "n67ceaec488429.pdf",
  },
  {
    id: 13,
    name: "List of M.Ed. Student of session 2020-22",
    file: "n67ceaebc5d778.pdf",
  },
  {
    id: 14,
    name: "Mandatory Disclosure",
    file: "n67ceaeab4eba0.pdf",
  },
  {
    id: 15,
    name: "NCTE Order",
    file: "n67ceaea382395.pdf",
  },
  {
    id: 16,
    name: "Receipt & Payment Account for Financial Year",
    file: "n67ceae92719c9.pdf",
  },
  {
    id: 17,
    name: "Revised Recognition Order of B.Ed by NCTE",
    file: "n67ceae85995b1.pdf",
  },
  {
    id: 18,
    name: "Revised Recognition Order of M.Ed by NCTE",
    file: "n67ceae767a7da.pdf",
  },
  {
    id: 19,
    name: "Society Registration",
    file: "n67ceae6a78f5c.pdf",
  },
  {
    id: 20,
    name: "Student List of B.Ed. IInd Year 2018-20",
    file: "n67ceae5892548.pdf",
  },
  {
    id: 21,
    name: "Student List of B.Ed. Ist year 2019-21",
    file: "n67ceae4e2b833.pdf",
  },
  {
    id: 22,
    name: "Student List of M.Ed. I Semester",
    file: "n67ceae323452d.pdf",
  },
  {
    id: 23,
    name: "Student List of M.Ed. III Semester",
    file: "n67ceae2438f94.pdf",
  },
  {
    id: 24,
    name: "Students List of B.Ed Ist year 2020-2022",
    file: "n67ceae163f102.pdf",
  },
  {
    id: 25,
    name: "Teaching Staff",
    file: "n67ceae0872a1e.pdf",
  },
];

export default function MandatoryDocuments() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) {
      return documents;
    }

    return documents.filter((document) =>
      document.name.toLowerCase().includes(value)
    );
  }, [searchTerm]);

  return (
    <>
      <Navbar />

      <main className="documents-page">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="documents-hero">

          <div className="documents-hero-content">

            <div className="documents-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Mandatory Documents</span>
            </div>

            <div className="documents-badge">
              <FiFileText />
              <span>NCTE Documents</span>
            </div>

            <h1>
              Mandatory <strong>Documents</strong>
            </h1>

            <h3>
              Important Institutional & Admission Documents
            </h3>

            <div className="documents-hero-line"></div>

            <p>
              Access important NCTE, institutional, financial,
              infrastructure and student-related documents of
              Chhotu Ram College of Education.
            </p>

            <div className="documents-hero-buttons">

              <a
                href="#ncte-documents"
                className="doc-primary-btn"
              >
                View Documents
                <FiArrowRight />
              </a>

              <Link
                to="/contact"
                className="doc-outline-btn"
              >
                Contact College
              </Link>

            </div>

          </div>

          <div className="documents-hero-visual">

            <img
              src="/images/docs-books.jpg"
              alt="Books and academic documents"
            />

            <div className="documents-visual-card">

              <div className="visual-icon">
                <FiFileText />
              </div>

              <div>
                <strong>25 Documents</strong>
                <span>Available for View & Download</span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DOCUMENT INTRO
        ===================================================== */}
        <section className="documents-section document-intro">

          <div className="document-intro-box">

            <div className="intro-document-icon">
              <FiCheckCircle />
            </div>

            <div>

              <h2>
                NCTE <strong>Documents</strong>
              </h2>

              <p>
                The following documents are available for viewing
                and downloading. Click on <b>View PDF</b> to open
                a document in a new tab or use <b>Download PDF</b>
                to save it to your device.
              </p>

            </div>

            <div className="document-count">
              <strong>{documents.length}</strong>
              <span>Documents</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            DOCUMENT LIST
        ===================================================== */}
        <section
          className="documents-section ncte-documents"
          id="ncte-documents"
        >

          <div className="documents-heading-row">

            <div className="section-title">

              <div className="section-title-icon">
                <FiFileText />
              </div>

              <div>
                <h2>
                  List of <strong>NCTE Documents</strong>
                </h2>

                <span></span>
              </div>

            </div>


            <div className="document-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>

          </div>


          <div className="document-note">
            <FiCheckCircle />

            <span>
              All documents are available in PDF format. Keep
              original documents wherever verification is required.
            </span>
          </div>


          <div className="document-list">

            {filteredDocuments.map((document) => {

              const pdfUrl = `/pdf/${document.file}`;

              return (
                <article
                  className="document-card"
                  key={document.id}
                >

                  {/* Number */}
                  <div className="document-number">
                    {String(document.id).padStart(2, "0")}
                  </div>


                  {/* Icon */}
                  <div className="document-icon">
                    <FiFileText />
                  </div>


                  {/* Content */}
                  <div className="document-content">

                    <div className="document-title-row">

                      <span className="document-label">
                        NCTE DOCUMENT
                      </span>

                      <h3>
                        {document.name}
                      </h3>

                    </div>

                    <p>
                      Official document available in PDF format
                      for viewing and downloading.
                    </p>

                  </div>


                  {/* Actions */}
                  <div className="document-actions">

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-pdf-btn"
                    >
                      <FiEye />
                      <span>View PDF</span>
                    </a>

                    <a
                      href={pdfUrl}
                      download
                      className="download-pdf-btn"
                    >
                      <FiDownload />
                      <span>Download</span>
                    </a>

                  </div>

                </article>
              );
            })}

          </div>


          {/* No Result */}
          {filteredDocuments.length === 0 && (
            <div className="no-documents">

              <FiSearch />

              <h3>
                No document found
              </h3>

              <p>
                Try searching with another document name.
              </p>

            </div>
          )}

        </section>


        {/* =====================================================
            IMPORTANT INSTRUCTIONS
        ===================================================== */}
        <section className="document-help">

          <article className="help-card">

            <div className="help-card-icon">
              <FiCheckCircle />
            </div>

            <h3>
              Important Instructions
            </h3>

            <p>
              Please ensure that the downloaded documents are
              clear and readable. Keep copies of important
              documents safely for future reference.
            </p>

          </article>


          <article className="help-card">

            <div className="help-card-icon">
              <FiBookOpen />
            </div>

            <h3>
              PDF Documents
            </h3>

            <p>
              All documents on this page are loaded directly from
              the website's public PDF folder.
            </p>

          </article>


          <article className="help-card">

            <div className="help-card-icon">
              <FiPhone />
            </div>

            <h3>
              Need Help?
            </h3>

            <p>
              For document-related queries, contact the college
              admission or administration cell during working hours.
            </p>

            <Link to="/contact">
              Contact Us
              <FiArrowRight />
            </Link>

          </article>

        </section>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <section className="documents-cta">

          <div className="documents-cta-icon">
            <FiFileText />
          </div>

          <div className="documents-cta-content">

            <span>Official Documents</span>

            <h2>
              Need More <strong>Information?</strong>
            </h2>

            <p>
              For any clarification regarding NCTE documents,
              admission documents or verification, please contact
              the college.
            </p>

          </div>

          <Link
            to="/contact"
            className="documents-cta-btn"
          >
            Contact College
            <FiArrowRight />
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}