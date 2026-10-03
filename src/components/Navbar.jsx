import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const links = [
  ["About Us", "/about"],
  ["Academics", "/academics"],
  ["Admission", "/admission"],
  ["Mandatory Documents", "/mandatory-documents"],
  ["Faculty", "/faculty"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["IQAC", "/iqac"],
  ["Downloads", "/downloads"],
  ["Student Support", "/student-support"],
  ["Contact Us", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Dynamically compute and sync header height to prevent page content overlap
  useEffect(() => {
    const updateHeight = () => {
      if (!headerRef.current) return;
      const brand = headerRef.current.querySelector(".brand-row");
      const nav = headerRef.current.querySelector(".main-nav");
      const isMobile = window.innerWidth <= 960;

      if (isMobile) {
        setHeaderHeight(brand ? brand.offsetHeight : 85);
      } else {
        const bH = brand ? brand.offsetHeight : 120;
        const nH = nav ? nav.offsetHeight : 42;
        setHeaderHeight(bH + nH);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    window.addEventListener("resize", updateHeight);

    const timer = setTimeout(updateHeight, 200);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <header className="site-header fixed-header" ref={headerRef}>
        <div className="brand-row">
          <Link to="/" className="brand-logo" onClick={() => setOpen(false)}>
            <img
              src="/images/logo.png"
              alt="Chhotu Ram College of Education logo"
            />
          </Link>

          <div className="brand-copy">
            <h1>CHHOTU RAM COLLEGE OF EDUCATION</h1>
            <div className="brand-city">ROHTAK</div>
            <div className="accreditation">
              "A" Grade Accredited by NAAC (UGC)
            </div>
            <p>
              Affiliated to M.D. University, Rohtak &amp; Recognised by Govt. of
              Haryana &amp; NCTE
            </p>
          </div>

          <div className="brand-campus">
            <img src="/images/campus-home.jpg" alt="College campus" />
          </div>

          {/* Mobile hamburger menu button inside brand row on mobile */}
          <button
            className="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link
            className={location.pathname === "/" ? "active" : ""}
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          {links.map(([label, path]) => (
            <Link
              key={path}
              className={location.pathname === path ? "active" : ""}
              to={path}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Spacer to seamlessly push page content below the fixed header */}
      <div
        className="site-header-spacer"
        style={headerHeight ? { height: `${headerHeight}px` } : undefined}
        aria-hidden="true"
      />
    </>
  );
}