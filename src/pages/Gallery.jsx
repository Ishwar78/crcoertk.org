import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FiGrid,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiHome,
  FiImage,
  FiPlay,
  FiSearch,
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Gallery.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


const categories = [
  ["All", FiGrid],
  ["Academic Activities", FiBookOpen],
  ["Cultural Events", FiUsers],
  ["Sports", FiAward],
  ["Seminars & Workshops", FiUsers],
  ["Campus Life", FiHome],
  ["Infrastructure", FiImage],
  ["Extension Activities", FiHeart],
];


export default function Gallery() {

  const [active, setActive] =
    useState("All");

  const [photos, setPhotos] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [sort, setSort] =
    useState("latest");

  const [loading, setLoading] =
    useState(true);


  // ======================================
  // FETCH GALLERY
  // ======================================

  useEffect(() => {

    const fetchGallery = async () => {

      try {

        const response =
          await fetch(
            `${API_URL}/api/gallery`
          );

        const result =
          await response.json();

        if (result.success) {
          setPhotos(result.data);
        }

      } catch (error) {

        console.error(
          "Gallery fetch error:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchGallery();

  }, []);


  // ======================================
  // FILTER + SEARCH + SORT
  // ======================================

  const visiblePhotos = useMemo(() => {

    let data = [...photos];


    if (active !== "All") {
      data = data.filter(
        (item) =>
          item.category === active
      );
    }


    if (search.trim()) {

      const keyword =
        search.toLowerCase();

      data = data.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(keyword) ||
          item.category
            .toLowerCase()
            .includes(keyword)
      );
    }


    if (sort === "latest") {

      data.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );

    } else {

      data.sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      );
    }


    return data;

  }, [
    photos,
    active,
    search,
    sort,
  ]);


  return (
    <>
      <Navbar />

      <main className="gallery-page">

        {/* ==============================
            HERO
        ============================== */}

        <section className="gallery-hero">

          <div>

            <span>
              Home › Gallery
            </span>

            <h2>
              Our{" "}
              <strong>Gallery</strong>
            </h2>

            <h3>
              Memories that Inspire
            </h3>

            <p>
              A glimpse into the vibrant
              life at Chhotu Ram College
              of Education, Rohtak through
              academic activities, cultural
              events, sports and campus
              moments.
            </p>

          </div>

          <img
            src="/images/campus-about.jpg"
            alt="Campus"
          />

        </section>


        {/* ==============================
            CATEGORY TABS
        ============================== */}

        <section className="gallery-tabs">

          {categories.map(
            ([name, Icon]) => (

              <button
                key={name}
                className={
                  active === name
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActive(name)
                }
              >

                <Icon />

                <span>
                  {name}
                </span>

              </button>

            )
          )}

        </section>


        {/* ==============================
            PHOTO GALLERY
        ============================== */}

        <section className="gallery-section">

          <div className="gallery-head">

            <div className="section-title">

              <h2>
                Photo{" "}
                <strong>Gallery</strong>
              </h2>

              <span></span>

            </div>


            <div className="gallery-tools">

              <label>

                <FiSearch />

                <input
                  placeholder="Search photos..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                />

              </label>


              <select
                value={sort}
                onChange={(e) =>
                  setSort(
                    e.target.value
                  )
                }
              >

                <option value="latest">
                  Latest First
                </option>

                <option value="oldest">
                  Oldest First
                </option>

              </select>

            </div>

          </div>


          {loading ? (

            <div className="gallery-status">
              Loading gallery...
            </div>

          ) : visiblePhotos.length === 0 ? (

            <div className="gallery-status">

              <FiImage />

              <h3>
                No Photos Available
              </h3>

              <p>
                Gallery images will appear
                here once they are added
                from the admin panel.
              </p>

            </div>

          ) : (

            <div className="photo-grid">

              {visiblePhotos.map(
                (photo, index) => (

                  <article
                    key={photo._id}
                  >

                    <img
                      src={`${API_URL}${photo.image}`}
                      alt={photo.title}
                      loading="lazy"
                    />

                    <div>

                      <b>
                        {photo.title}
                      </b>

                      <span>
                        <FiImage />
                        {index + 1}
                      </span>

                    </div>

                  </article>

                )
              )}

            </div>

          )}

        </section>


        {/* ==============================
            VIDEO GALLERY
        ============================== */}

        <section
          className="gallery-section video-section"
        >

          <div className="section-title">

            <h2>
              <FiPlay />
              Video{" "}
              <strong>Gallery</strong>
            </h2>

            <span></span>

            <button>
              View All Videos{" "}
              <FiArrowRight />
            </button>

          </div>


          <div className="video-grid">

            {[
              "gallery10.jpg",
              "gallery3.jpg",
              "sports.jpg",
              "gallery4.jpg",
            ].map(
              (img, i) => (

                <article key={img}>

                  <div>

                    <img
                      src={`/images/${img}`}
                      alt="Video"
                    />

                    <span>
                      <FiPlay />
                    </span>

                    <small>
                      0{i + 2}:1{i + 5}
                    </small>

                  </div>

                  <b>
                    {
                      [
                        "College Overview",
                        "Annual Function",
                        "Sports Meet",
                        "Teacher's Day Celebration",
                      ][i]
                    }
                  </b>

                </article>

              )
            )}

          </div>

        </section>


        {/* ==============================
            STATS
        ============================== */}

        <section className="gallery-stats">

          <span>
            <FiImage />

            <b>
              {photos.length}+
            </b>

            Photos
          </span>


          <span>
            <FiPlay />

            <b>
              50+
            </b>

            Videos
          </span>


          <span>
            <FiUsers />

            <b>
              20+
            </b>

            Events
          </span>


          <span>
            <FiAward />

            <b>
              10+
            </b>

            Activities
          </span>


          <span>
            <FiHome />

            <b>
              Beautiful
            </b>

            Campus Life
          </span>

        </section>

      </main>

      <Footer />
    </>
  );
}