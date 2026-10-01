import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import MandatoryDocuments from "./pages/MandatoryDocuments";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import IQAC from "./pages/IQAC";
import Downloads from "./pages/Downloads";
import StudentSupport from "./pages/StudentSupport";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/mandatory-documents" element={<MandatoryDocuments />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/iqac" element={<IQAC />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/student-support" element={<StudentSupport />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}