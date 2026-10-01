import React, { useState } from "react";
import { FiGrid, FiBookOpen, FiUsers, FiAward, FiHome, FiImage, FiPlay, FiSearch, FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Gallery.css";

const categories = [
  ["All",FiGrid],["Academic Activities",FiBookOpen],["Cultural Events",FiUsers],["Sports",FiAward],
  ["Seminars & Workshops",FiUsers],["Campus Life",FiHome],["Infrastructure",FiImage],["Extension Activities",FiHeartIcon]
];
const photos = [
  ["gallery1.jpg","Classroom Activities"],["gallery2.jpg","Seminars & Workshops"],["gallery3.jpg","Cultural Events"],["gallery4.jpg","Sports Activities"],
  ["gallery5.jpg","Library"],["gallery6.jpg","ICT Center"],["gallery7.jpg","Laboratory"],["gallery8.jpg","Women Cell Activities"],
  ["gallery9.jpg","National Festivals"],["gallery10.jpg","Campus Infrastructure"],["gallery11.jpg","Extension Activities"],["gallery12.jpg","Awards & Achievements"]
];

function FiHeartIcon() { return <span className="heart-icon">♥</span>; }

export default function Gallery() {
  const [active,setActive]=useState("All");
  const visible = active==="All" ? photos : photos.filter(([,name])=>name.toLowerCase().includes(active.split(" ")[0].toLowerCase()));
  return (
    <>
      <Navbar />
      <main className="gallery-page">
        <section className="gallery-hero"><div><span>Home › Gallery</span><h2>Our <strong>Gallery</strong></h2><h3>Memories that Inspire</h3><p>A glimpse into the vibrant life at Chhotu Ram College of Education, Rohtak through academic activities, cultural events, sports and campus moments.</p></div><img src="/images/campus-about.jpg" alt="Campus" /></section>
        <section className="gallery-tabs">{categories.map(([name,I])=><button key={name} className={active===name?"active":""} onClick={()=>setActive(name)}>{typeof I==="function"?<I/>:<I/>}<span>{name}</span></button>)}</section>
        <section className="gallery-section"><div className="gallery-head"><div className="section-title"><h2>Photo <strong>Gallery</strong></h2><span></span></div><div className="gallery-tools"><label><FiSearch/><input placeholder="Search photos..." /></label><select><option>Latest First</option><option>Oldest First</option></select></div></div><div className="photo-grid">{visible.map(([img,name],i)=><article key={img}><img src={`/images/${img}`} alt={name}/><div><b>{name}</b><span><FiImage/> {20+i*2}</span></div></article>)}</div></section>
        <section className="gallery-section video-section"><div className="section-title"><h2><FiPlay/> Video <strong>Gallery</strong></h2><span></span><button>View All Videos <FiArrowRight/></button></div><div className="video-grid">{["gallery10.jpg","gallery3.jpg","sports.jpg","gallery4.jpg"].map((img,i)=><article key={img}><div><img src={`/images/${img}`} alt="Video"/><span><FiPlay/></span><small>0{i+2}:1{i+5}</small></div><b>{["College Overview","Annual Function","Sports Meet","Teacher's Day Celebration"][i]}</b></article>)}</div></section>
        <section className="gallery-stats"><span><FiImage/><b>500+</b>Photos</span><span><FiPlay/><b>50+</b>Videos</span><span><FiUsers/><b>20+</b>Events</span><span><FiAward/><b>10+</b>Activities</span><span><FiHome/><b>Beautiful</b>Campus Life</span></section>
      </main>
      <Footer />
    </>
  );
}