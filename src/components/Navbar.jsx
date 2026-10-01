import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube, FiSearch, FiMenu, FiX, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import "./Navbar.css";

const links = [
  ["About Us", "/about"], ["Academics", "/academics"], ["Admission", "/admission"],
  ["Mandatory Documents", "/mandatory-documents"], ["Faculty", "/faculty"],
  ["Facilities", "/facilities"], ["Gallery", "/gallery"], ["IQAC", "/iqac"],
  ["Downloads", "/downloads"], ["Student Support", "/student-support"], ["Contact Us", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="site-header">
      {/* <div className="top-strip">
        <div className="top-left">
          <span><FiMapPin /> Rohtak, Haryana</span>
          <span><FiPhone /> +91-xxxx-xxxxxx</span>
          <span><FiMail /> crcoe.rohtak@gmail.com</span>
        </div>
        <div className="top-right">
          <span>Student Login</span><i></i><span>Staff Login</span><i></i><span>Webmail</span>
          <div className="socials"><FiFacebook /><FiInstagram /><FiYoutube /><FiSearch /></div>
        </div>
      </div> */}
      <div className="brand-row">
        <Link to="/" className="brand-logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Chhotu Ram College of Education logo" />
        </Link>
        <div className="brand-copy">
          <h1>CHHOTU RAM COLLEGE OF EDUCATION</h1>
          <div className="brand-city">ROHTAK</div>
          <div className="accreditation">"A" Grade Accredited by NAAC (UGC)</div>
          <p>Affiliated to M.D. University, Rohtak &amp; Recognised by Govt. of Haryana &amp; NCTE</p>
        </div>
        <div className="brand-campus"><img src="/images/campus-home.jpg" alt="College campus" /></div>
      </div>
      <nav className={`main-nav ${open ? "open" : ""}`}>
        <Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={() => setOpen(false)}>Home</Link>
        {links.map(([label, path]) => (
          <Link key={path} className={location.pathname === path ? "active" : ""} to={path} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <button className="mobile-menu" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
        {open ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}