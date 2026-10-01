import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiMap, FiHeadphones, FiChevronDown, FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-hero"><div><span>Home › Contact Us</span><h2>Contact <strong>Us</strong></h2><h3>We are here to help you</h3><p>Feel free to reach out for queries related to admission, academics, facilities or any other information. We are always happy to assist you.</p></div><img src="/images/campus-about.jpg" alt="College campus" /></section>
        <section className="contact-cards">
          <Card icon={<FiMapPin/>} title="Our Address" text={<>Chhotu Ram College of Education <br/> Delhi Road ,Rohtak, Haryana - 124001</>} />
          <Card icon={<FiPhone/>} title="Call Us" text={<>91- 90533-14403<br/></>} />
          <Card icon={<FiMail/>} title="Email Us" text={<>info@crcoertk.org,<br/>crcoe2008@yahho.com</>} />
          <Card icon={<FiClock/>} title="Working Hours" text={<>Monday - Saturday<br/>9:00 AM - 5:00 PM</>} />
        </section>
        <section className="contact-main"><div className="message-box"><div className="section-title"><h2><FiSend/> Send us a <strong>Message</strong></h2><span></span></div><p>Fill out the form below and we will get back to you soon.</p><form onSubmit={e=>e.preventDefault()}><input placeholder="Your Name *" /><input type="email" placeholder="Your Email *" /><input placeholder="Your Phone Number" /><select><option>Select Query Type</option><option>Admission</option><option>Academics</option><option>General Information</option></select><textarea placeholder="Your Message *"></textarea><button>Send Message <FiArrowRight/></button></form></div><div className="map-box"><div className="section-title"><h2><FiMap/> Our <strong>Location</strong></h2><span></span></div><div className="map-placeholder"><div><b>Chhotu Ram College of Education</b><span>Rohtak, Haryana</span><FiMapPin/></div></div><button className="direction-btn"><FiMapPin/> Get Directions <FiArrowRight/></button></div></section>
        <section className="contact-lower"><article><div className="section-title"><h2><FiHeadphones/> Quick <strong>Contact</strong></h2><span></span></div><p><b>Admission Enquiry</b><br/>+91-xxxx-xxxxxx</p><p><b>Academic Query</b><br/>+91-xxxx-xxxxxx</p><p><b>General Information</b><br/>+91-xxxx-xxxxxx</p><p><b>Email Us</b><br/>crcoe.rohtak@gmail.com</p></article><article><div className="section-title"><h2>Reach Us <strong>Easily</strong></h2><span></span></div><p>The college is well connected by road and public transport and is located in Rohtak city.</p><img src="/images/contact-campus.jpg" alt="College gate"/></article><article><div className="section-title"><h2>Frequently Asked <strong>Questions</strong></h2><span></span></div>{["What are the working hours of the college?","How can I apply for admission?","Where is the college located?","Whom should I contact for academic queries?","Is hostel facility available?"].map((q,i)=><div className="faq" key={q}><span>{q}</span><FiChevronDown /></div>)}</article></section>
      </main>
      <Footer />
    </>
  );
}
function Card({icon,title,text}){return <article className="contact-card"><div>{icon}</div><section><h3>{title}</h3><p>{text}</p></section></article>}