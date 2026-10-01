import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiUsers, FiAward, FiHeart, FiCheckCircle, FiImage, FiBell } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <section className="home-hero">
          <div className="hero-copy">
            <span className="eyebrow">Shaping Future Educators</span>
            <h2>CHHOTU RAM<br /><strong>COLLEGE OF EDUCATION</strong></h2>
            <h3>ROHTAK</h3>
            <p>Committed to excellence in teacher education and to developing confident, responsible and skilled educators.</p>
            <div className="hero-actions"><Link to="/academics">Explore Academics <FiArrowRight /></Link><Link className="outline" to="/admission">Admission Details <FiArrowRight /></Link></div>
            <div className="hero-points">
              <span><FiBookOpen /><b>Quality<br />Education</b></span><span><FiUsers /><b>Experienced<br />Faculty</b></span>
              <span><FiAward /><b>Holistic<br />Development</b></span><span><FiHeart /><b>Bright<br />Future</b></span>
            </div>
          </div>
          <div className="hero-image"><img src="/images/student-hero.jpg" alt="Student at college campus" /></div>
        </section>

        <div className="notice-bar"><span><FiBell /> Latest Notice</span><marquee>Admission Open for B.Ed. &amp; M.Ed. • Important Notice for All Students • M.D. University Examination Updates • Fee and document submission updates</marquee></div>

        <section className="home-section programs">
          <div className="section-heading"><h2>Our <strong>Programmes</strong></h2><span></span></div>
          <div className="program-grid">
            <article className="program-card"><img src="/images/docs-books.jpg" alt="B.Ed." /><div><small>Bachelor of Education</small><h3>B.Ed.</h3><p>Professional teacher education programme focused on pedagogy, practice and learner development.</p><Link to="/academics">Know More <FiArrowRight /></Link></div></article>
            <article className="program-card"><img src="/images/docs-books.jpg" alt="M.Ed." /><div><small>Master of Education</small><h3>M.Ed.</h3><p>Advanced study for educational leadership, research, curriculum and professional growth.</p><Link to="/academics">Know More <FiArrowRight /></Link></div></article>
          </div>
        </section>

        <section className="home-section about-home">
          <div className="about-text"><div className="section-heading left"><h2>About <strong>CRCOE</strong></h2><span></span></div>
            <p>Chhotu Ram College of Education, Rohtak is dedicated to providing quality teacher education and nurturing future educators through knowledge, values, practical learning and a student-centric environment.</p>
            <Link className="pink-btn" to="/about">Read More <FiArrowRight /></Link>
          </div>
          <div className="feature-mini">
            <div><FiUsers /><span>Experienced<br />Faculty</span></div><div><FiBookOpen /><span>Modern<br />Infrastructure</span></div>
            <div><FiHeart /><span>Student<br />Centric Environment</span></div><div><FiAward /><span>Co-curricular<br />Activities</span></div>
          </div>
          <img className="about-photo" src="/images/campus-about.jpg" alt="CRCOE campus" />
        </section>

        <section className="home-section lower-grid">
          <div className="principal-card"><div className="section-heading left"><h2>Principal’s <strong>Message</strong></h2><span></span></div>
            <div className="principal-inner"><img src="/images/principal.jpg" alt="Principal" /><div><blockquote>Our aim is to develop enlightened, responsible and skilled teachers who can bring positive changes in society.</blockquote><p>We focus on holistic development, discipline and the pursuit of excellence in teacher education.</p><Link className="pink-btn" to="/about">Read Full Message <FiArrowRight /></Link></div></div>
          </div>
          <div className="why-card"><div className="section-heading left"><h2>Why Choose <strong>CRCOE?</strong></h2><span></span></div>
            {["NAAC A Grade Accredited","Experienced & Dedicated Faculty","Modern Infrastructure & Facilities","Practical and Value-Based Learning","Cultural & Co-curricular Activities","Supportive Learning Environment"].map(t => <p key={t}><FiCheckCircle /> {t}</p>)}
          </div>
        </section>

        <section className="home-section gallery-home">
          <div className="section-heading left"><h2>Life at <strong>CRCOE</strong></h2><span></span><Link to="/gallery">View Gallery <FiArrowRight /></Link></div>
          <div className="home-gallery-grid">{["gallery1.jpg","gallery2.jpg","gallery3.jpg","gallery4.jpg","gallery5.jpg"].map((x,i)=><img key={x} src={`/images/${x}`} alt={`Campus activity ${i+1}`} />)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}