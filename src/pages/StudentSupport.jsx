import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiUsers, FiBookOpen, FiPhone, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./StudentSupport.css";

export default function StudentSupport(){
  const support=[["Academic Guidance",FiBookOpen,"Mentoring and academic support to help students plan learning and progress."],["Student Welfare",FiHeart,"A supportive environment focused on student wellbeing, inclusion and participation."],["Career Guidance",FiUsers,"Guidance for professional growth, teaching careers, examinations and future study."],["Help Desk",FiPhone,"A convenient point of contact for admission, academic and general queries."]];
  return <><Navbar/><main className="support-page">
    <section className="support-hero"><div><span>Home › Student Support</span><h2>Student <strong>Support</strong></h2><h3>Guidance, Care and a Student-Centric Campus</h3><p>We are committed to creating a supportive environment where every student can learn, participate and grow with confidence.</p></div><img src="/images/students.jpg" alt="Students"/></section>
    <section className="support-grid">{support.map(([t,I,d])=><article key={t}><I/><h3>{t}</h3><p>{d}</p><Link to="/contact">Learn More <FiArrowRight/></Link></article>)}</section>
    <section className="support-process"><div><h2>How We <strong>Support</strong> Students</h2>{["Accessible faculty and academic guidance","Student feedback and grievance support","Participation in co-curricular activities","Career and professional guidance","Inclusive and respectful campus environment"].map(x=><p key={x}><FiCheckCircle/>{x}</p>)}</div><aside><h2>Need <strong>Assistance?</strong></h2><p>Reach out to the college office or use the contact page for support related to academics, admission and student services.</p><Link to="/contact">Contact Us <FiArrowRight/></Link></aside></section>
  </main><Footer/></>
}