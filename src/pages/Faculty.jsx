import React, {
  useEffect,
  useState,
} from "react";

import {
  FiSearch,
  FiFilter,
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiHeart,
  FiMail,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Faculty.css";


const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


export default function Faculty() {

  const [faculty, setFaculty] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    const loadFaculty =
      async () => {

        try {

          const response =
            await fetch(
              `${API_URL}/api/faculty`
            );

          const result =
            await response.json();


          if (result.success) {

            setFaculty(
              result.data
            );

          }

        } catch (error) {

          console.error(
            "Faculty Load Error:",
            error
          );

        } finally {

          setLoading(false);

        }
      };


    loadFaculty();

  }, []);


  const teaching =
    faculty.filter(
      (item) =>
        item.category ===
        "Teaching"
    );


  const nonTeaching =
    faculty.filter(
      (item) =>
        item.category ===
        "Non-Teaching"
    );


  return (
    <>
      <Navbar />

      <main className="faculty-page">

        <section className="faculty-hero">

          <div>

            <span>
              Home › Faculty
            </span>

            <h2>
              Our{" "}
              <strong>Faculty</strong>
            </h2>

            <h3>
              Guiding Minds, Shaping Futures
            </h3>

            <p>
              Our faculty members are the
              backbone of CRCOE, bringing
              rich experience, expertise and
              dedication to teacher education.
            </p>

          </div>

          <img
            src="/images/campus-about.jpg"
            alt="Campus"
          />

        </section>


        <section className="faculty-highlights">

          {[
            [
              FiUsers,
              "Qualified Faculty",
            ],
            [
              FiBookOpen,
              "Rich Teaching Experience",
            ],
            [
              FiAward,
              "Research & Innovation",
            ],
            [
              FiHeart,
              "Student Centric Approach",
            ],
          ].map(([Icon, title]) => (

            <div key={title}>

              <Icon />

              <b>
                {title}
              </b>

            </div>

          ))}

        </section>


        {loading ? (

          <div className="faculty-loading">
            Loading faculty...
          </div>

        ) : (

          <>
            <StaffSection
              title={
                <>
                  Teaching{" "}
                  <strong>Staff</strong>
                </>
              }
              items={teaching}
            />

            <StaffSection
              title={
                <>
                  Non-Teaching{" "}
                  <strong>Staff</strong>
                </>
              }
              items={nonTeaching}
              nonTeaching
            />
          </>

        )}


        <section className="faculty-bottom">

          <span>
            <FiBookOpen />
            <b>Experienced</b>
            Faculty Members
          </span>

          <span>
            <FiUsers />
            <b>Dedicated</b>
            Non-Teaching Staff
          </span>

          <span>
            <FiAward />
            <b>Student Focused</b>
            Environment
          </span>

          <span>
            <FiHeart />
            <b>Continuous</b>
            Support & Guidance
          </span>

        </section>

      </main>

      <Footer />
    </>
  );
}


function StaffSection({
  title,
  items,
  nonTeaching = false,
}) {

  const [search, setSearch] =
    useState("");

  const filteredItems =
    items.filter((item) => {

      const value =
        `${item.name} ${item.designation} ${item.department} ${item.qualification}`
          .toLowerCase();

      return value.includes(
        search.toLowerCase()
      );

    });


  return (

    <section className="staff-section">

      <div className="staff-head">

        <div>

          <div className="section-title">

            <h2>
              {title}
            </h2>

            <span></span>

          </div>

          <p>
            Dedicated professionals
            supporting excellence in
            education and the smooth
            functioning of the institution.
          </p>

        </div>


        <div className="staff-tools">

          <label>

            <FiSearch />

            <input
              placeholder="Search staff..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

          </label>


          <button>
            <FiFilter />

            {nonTeaching
              ? "Designation"
              : "Department"}

          </button>

        </div>

      </div>


      {filteredItems.length === 0 ? (

        <div className="faculty-empty">

          <FiUsers />

          <h3>
            No Faculty Found
          </h3>

          <p>
            Faculty members will appear
            here once added by the admin.
          </p>

        </div>

      ) : (

        <div className="staff-grid">

          {filteredItems.map(
            (item) => (

              <article
                key={item._id}
              >

                <div className="faculty-image-wrap">

                  {item.image ? (

                    <img
                      src={
                        item.image.startsWith(
                          "http"
                        )
                          ? item.image
                          : `${API_URL}${item.image}`
                      }
                      alt={item.name}
                    />

                  ) : (

                    <div className="faculty-image-placeholder">
                      <FiUsers />
                    </div>

                  )}

                </div>


                <h3>
                  {item.name}
                </h3>


                <b className="role">
                  {item.designation}
                </b>


                <p>
                  <FiAward />

                  {item.qualification}
                </p>


                <p>
                  <FiBookOpen />

                  {item.department}
                </p>


                {item.email && (

                  <p>
                    <FiMail />

                    {item.email}
                  </p>

                )}


                <a href="/contact">
                  View Profile
                  <FiArrowRight />
                </a>

              </article>

            )
          )}

        </div>

      )}

    </section>
  );
}