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
    file: "/Document/Affidavit.pdf",
  },
  {
    id: 2,
    name: "Audit Report",
    file: "/Document/Audit Report.pdf",
  },
  {
    id: 3,
    name: "Balance Sheet for Financial Year",
    file: "/Document/BalanceSheetforFinancialYear.pdf",
  },
  {
    id: 4,
    name: "Income and Expenditure Account for Financial Year",
    file: "/Document/Income and Expenditure Account for Financial Year.pdf",
  },
  {
    id: 5,
    name: "Infrastructure Detail",
    file: "/Document/Infrastructure Detail.pdf",
  },
  {
    id: 6,
    name: "Land Document",
    file: "/Document/Land Document.pdf",
  },
  {
    id: 7,
    name: "List of B.Ed. Student of session 2018-19",
    file: "/Document/List of B.Ed. Student of session 2018-19.pdf",
  },
  {
    id: 8,
    name: "List of Instructional Facilities during last quarter",
    file: "/Document/List of Instructional Facilities during last quarter.pdf",
  },
  {
    id: 9,
    name: "List of Journals",
    file: "/Document/List of Journals.pdf",
  },
  {
    id: 10,
    name: "List of M.Ed. Student of session 2017-19",
    file: "/Document/List of M.Ed. Student of session 2017-19.pdf",
  },
  {
    id: 11,
    name: "List of M.Ed. Student of session 2018-20",
    file: "/Document/List of M.Ed. Student of session 2018-20.pdf",
  },
  {
    id: 12,
    name: "List of M.Ed. Student of session 2019-21",
    file: "/Document/List of M.Ed. Student of session 2019-21.pdf",
  },
  {
    id: 13,
    name: "List of M.Ed. Student of session 2020-22",
    file: "/Document/List of M.Ed. Student of session 2020-22.pdf",
  },
  {
    id: 14,
    name: "Mandatory Disclosure",
    file: "/Document/Mandatory Disclosure.pdf",
  },
  {
    id: 15,
    name: "NCTE Order",
    file: "/Document/NCTE Order.pdf",
  },
  {
    id: 16,
    name: "Receipt & Payment Account for Financial Year",
    file: "/Document/Receipt & Payment Account for Financial Year.pdf",
  },
  {
    id: 17,
    name: "Revised Recognition Order of B.Ed by NCTE",
    file: "/Document/Revised Recognition Order of B.Ed by NCTE.pdf",
  },
  {
    id: 18,
    name: "Revised Recognition Order of M.Ed by NCTE",
    file: "/Document/Revised Recognition Order of M.Ed by NCTE.pdf",
  },
  {
    id: 19,
    name: "Society Registration",
    file: "/Document/Society Registration.pdf",
  },
  {
    id: 20,
    name: "Student List of B.Ed. IInd Year 2018-20",
    file: "/Document/Student List of B.Ed. IInd Year 2018-20.pdf",
  },
  {
    id: 21,
    name: "Student List of B.Ed. Ist year 2019-21",
    file: "/Document/Student List of B.Ed. Ist year 2019-21.pdf",
  },
  {
    id: 22,
    name: "Student List of M.Ed. I Semester",
    file: "/Document/Student List of M.Ed. I Semester.pdf",
  },
  {
    id: 23,
    name: "Student List of M.Ed. III Semester",
    file: "/Document/Student List of M.Ed. III Semester.pdf",
  },
  {
    id: 24,
    name: "Students List of B.Ed Ist year 2020-2022",
    file: "/Document/Students List of B.Ed Ist year 2020-2022.pdf",
  },
  {
    id: 25,
    name: "Teaching Staff",
    file: "/Document/Teaching Staff.pdf",
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

  const handleDownload = async (e, fileUrl, fileName) => {
    e.preventDefault();
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
              const pdfUrl = encodeURI(document.file);

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
                      title={`View ${document.name} in new tab`}
                    >
                      <FiEye />
                      <span>View PDF</span>
                    </a>

                    <a
                      href={pdfUrl}
                      download={`${document.name}.pdf`}
                      onClick={(e) => handleDownload(e, pdfUrl, document.name)}
                      className="download-pdf-btn"
                      title={`Download ${document.name}`}
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