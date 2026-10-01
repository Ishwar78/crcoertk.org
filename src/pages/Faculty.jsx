import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiFilter, FiArrowRight, FiBookOpen, FiUsers, FiAward, FiHeart, FiMail } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Faculty.css";

const teaching = [
  ["faculty-1.jpg","Prof. (Dr.) Sunita Sharma","Principal","M.Ed., Ph.D.","Educational Administration, Teacher Education"],
  ["faculty-2.jpg","Dr. Rajesh Kumar","Associate Professor","M.Ed., Ph.D.","Pedagogy of Science"],
  ["faculty-3.jpg","Dr. Neelam Yadav","Assistant Professor","M.Ed., Ph.D.","Pedagogy of Mathematics"],
  ["faculty-4.jpg","Dr. Amit Kumar","Assistant Professor","M.Ed., NET, Ph.D.","Pedagogy of Social Science"],
  ["faculty-5.jpg","Dr. Pooja Malik","Assistant Professor","M.Ed., Ph.D.","Pedagogy of Hindi"]
];
const nonTeaching = [
  ["staff-1.jpg","Mr. Suresh Kumar","Superintendent","Administration"],
  ["staff-2.jpg","Mrs. Anita Devi","Clerk","Office Administration"],
  ["staff-3.jpg","Mr. Rajender Singh","Accountant","Accounts Section"],
  ["staff-4.jpg","Mr. Manish Kumar","Library Assistant","Library"],
  ["staff-5.jpg","Mr. Dharamvir","Lab Attendant","Computer Lab"]
];

export default function Faculty() {
  return (
    <>
      <Navbar />
      <main className="faculty-page">
        <section className="faculty-hero"><div><span>Home › Faculty</span><h2>Our <strong>Faculty</strong></h2><h3>Guiding Minds, Shaping Futures</h3><p>Our faculty members are the backbone of CRCOE, bringing rich experience, expertise and dedication to teacher education.</p></div><img src="/images/campus-about.jpg" alt="Campus" /></section>
        <section className="faculty-highlights">{[[FiUsers,"Qualified Faculty"],[FiBookOpen,"Rich Teaching Experience"],[FiAward,"Research & Innovation"],[FiHeart,"Student Centric Approach"]].map(([I,t])=><div key={t}><I/><b>{t}</b></div>)}</section>
        <StaffSection title={<>Teaching <strong>Staff</strong></>} items={teaching} />
        <StaffSection title={<>Non-Teaching <strong>Staff</strong></>} items={nonTeaching} nonTeaching />
        <section className="faculty-bottom"><span><FiBookOpen /><b>Experienced</b> Faculty Members</span><span><FiUsers /><b>Dedicated</b> Non-Teaching Staff</span><span><FiAward /><b>Student Focused</b> Environment</span><span><FiHeart /><b>Continuous</b> Support &amp; Guidance</span></section>
      </main>
      <Footer />
    </>
  );
}

function StaffSection({ title, items, nonTeaching }) {
  return <section className="staff-section"><div className="staff-head"><div><div className="section-title"><h2>{title}</h2><span></span></div><p>Dedicated professionals supporting excellence in education and the smooth functioning of the institution.</p></div><div className="staff-tools"><label><FiSearch /><input placeholder="Search staff..." /></label><button><FiFilter /> {nonTeaching ? "Designation" : "Department"}</button></div></div><div className="staff-grid">{items.map(([img,name,role,qual,subject])=><article key={name}><img src={`/images/${img}`} alt={name} /><h3>{name}</h3><b className="role">{role}</b><p><FiAward /> {qual}</p><p><FiBookOpen /> {subject}</p><Link to="/contact">View Profile <FiArrowRight /></Link></article>)}</div></section>;
}