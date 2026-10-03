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







import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";

import ManageHome from "./admin/pages/ManageHome";
import ManageAbout from "./admin/pages/ManageAbout";
import ManageAcademics from "./admin/pages/ManageAcademics";
import ManageAdmission from "./admin/pages/ManageAdmission";
import ManageMandatoryDocuments from "./admin/pages/ManageMandatoryDocuments";
import ManageFaculty from "./admin/pages/ManageFaculty";
import ManageFacilities from "./admin/pages/ManageFacilities";
import ManageGallery from "./admin/pages/ManageGallery";
import ManageIQAC from "./admin/pages/ManageIQAC";
import ManageDownloads from "./admin/pages/ManageDownloads";
import ManageStudentSupport from "./admin/pages/ManageStudentSupport";
import ManageContact from "./admin/pages/ManageContact";



import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <>
    <ScrollToTop />
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





 {/* =========================
          ADMIN LOGIN
      ========================== */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

       
      <Route element={<ProtectedAdminRoute />}>
        <Route
          path="/admin"
          element={<AdminLayout />}
        >
          <Route
            index
            element={<AdminDashboard />}
          />

          <Route
            path="home"
            element={<ManageHome />}
          />

          <Route
            path="about"
            element={<ManageAbout />}
          />

          <Route
            path="academics"
            element={<ManageAcademics />}
          />
          <Route
            path="admission"
            element={<ManageAdmission />}
          />

          <Route
            path="mandatory-documents"
            element={
              <ManageMandatoryDocuments />
            }
          />
          <Route
            path="faculty"
            element={<ManageFaculty />}
          />

          <Route
            path="facilities"
            element={<ManageFacilities />}
          />

          <Route
            path="gallery"
            element={<ManageGallery />}
          />
          <Route
            path="iqac"
            element={<ManageIQAC />}
          />

          <Route
            path="downloads"
            element={<ManageDownloads />}
          />

          <Route
            path="student-support"
            element={
              <ManageStudentSupport />
            }
          />

          <Route
            path="contact"
            element={<ManageContact />}
          />
        </Route>
      </Route>




    </Routes>
    </>
  );
}