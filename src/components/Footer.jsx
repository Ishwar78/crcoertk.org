import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiFacebook, FiInstagram, FiYoutube, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave"></div>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="CRCOE logo" />
          <h3>CHHOTU RAM COLLEGE OF EDUCATION</h3>
          <p>Rohtak, Haryana</p>
          <p>Quality teacher education for responsible, skilled and empowered educators.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/about">About Us <FiArrowRight /></Link><Link to="/academics">Academics <FiArrowRight /></Link>
          <Link to="/faculty">Faculty <FiArrowRight /></Link><Link to="/facilities">Facilities <FiArrowRight /></Link>
          <Link to="/gallery">Gallery <FiArrowRight /></Link>
        </div>
        <div className="footer-links">
          <h4>Student Corner</h4>
          <Link to="/admission">Admission <FiArrowRight /></Link><Link to="/mandatory-documents">Mandatory Documents <FiArrowRight /></Link>
          <Link to="/downloads">Downloads <FiArrowRight /></Link><Link to="/student-support">Student Support <FiArrowRight /></Link>
          <Link to="/contact">Contact Us <FiArrowRight /></Link>
        </div>
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p><FiMapPin /> Chhotu Ram College of Education, Rohtak, Haryana</p><p><FiPhone /> +91-90533-14403</p>
          <p><FiMail />  info@crcoertk.org</p><div className="footer-socials"><FiFacebook /><FiInstagram /><FiYoutube /></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Chhotu Ram College of Education, Rohtak. All Rights Reserved.</span><span>Education • Empowerment • Excellence</span></div>
    </footer>
  );
}