import React, { useEffect, useState } from "react";
import {
  FiSave,
  FiUpload,
  FiPlus,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiImage,
  FiRotateCcw,
} from "react-icons/fi";
import "./ManageHome.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

const tabs = [
  "Hero Section",
  "News & Events",
  "Programmes",
  "About CRCOE",
  "Principal Message",
  "Why Choose Us",
  "Life at CRCOE",
];

const initialData = {
  hero: {
    eyebrow: "Shaping Future Educators",
    titlePart1: "CHHOTU RAM",
    titlePart2: "COLLEGE OF EDUCATION",
    subtitle: "ROHTAK",
    description:
      "Committed to excellence in teacher education and to developing confident, responsible and skilled educators.",
    primaryBtnText: "Explore Academics",
    primaryBtnLink: "/academics",
    secondaryBtnText: "Admission Details",
    secondaryBtnLink: "/admission",
    image: "/images/student-hero.jpg",
    points: [
      { title1: "Quality", title2: "Education", icon: "book" },
      { title1: "Experienced", title2: "Faculty", icon: "users" },
      { title1: "Holistic", title2: "Development", icon: "award" },
      { title1: "Bright", title2: "Future", icon: "heart" },
    ],
  },
  newsEvents: {
    introImage: "/images/campus-about.jpg",
    introSubtitle: "STAY UPDATED",
    introTitle: "Latest News\n& Events",
    introDescription:
      "Stay informed with the latest notices, academic updates, important announcements and college events.",
    badge: "COLLEGE UPDATES",
    headingTitle: "News",
    headingAccent: "& Events",
    items: [
      {
        title: "Reschedule of Election",
        date: "Latest Update",
        type: "Notice",
        link: "/news",
      },
      {
        title: "List of 105 Collegium Members",
        date: "Important Notice",
        type: "Notice",
        link: "/news",
      },
      {
        title: "Election of the Governing Body of the College",
        date: "College Update",
        type: "Event",
        link: "/news",
      },
      {
        title: "Admission Open for B.Ed. & M.Ed.",
        date: "Admissions",
        type: "Admission",
        link: "/admission",
      },
      {
        title: "Important Notice for All Students",
        date: "Student Notice",
        type: "Notice",
        link: "/news",
      },
      {
        title: "M.D. University Examination Updates",
        date: "Examination",
        type: "Academic",
        link: "/news",
      },
    ],
  },
  programmes: {
    headingTitle: "Our",
    headingAccent: "Programmes",
    programs: [
      {
        badge: "Bachelor of Education",
        title: "B.Ed.",
        description:
          "Professional teacher education programme focused on pedagogy, practice and learner development.",
        image: "/images/docs-books.jpg",
        link: "/academics",
        btnText: "Know More",
      },
      {
        badge: "Master of Education",
        title: "M.Ed.",
        description:
          "Advanced study for educational leadership, research, curriculum and professional growth.",
        image: "/images/docs-books.jpg",
        link: "/academics",
        btnText: "Know More",
      },
    ],
  },
  about: {
    headingTitle: "About",
    headingAccent: "CRCOE",
    description:
      "Chhotu Ram College of Education, Rohtak is dedicated to providing quality teacher education and nurturing future educators through knowledge, values, practical learning and a student-centric environment.",
    buttonText: "Read More",
    buttonLink: "/about",
    image: "/images/campus-about.jpg",
    features: [
      { title1: "Experienced", title2: "Faculty", icon: "users" },
      { title1: "Modern", title2: "Infrastructure", icon: "book" },
      { title1: "Student", title2: "Centric Environment", icon: "heart" },
      { title1: "Co-curricular", title2: "Activities", icon: "award" },
    ],
  },
  principal: {
    headingTitle: "Principal’s",
    headingAccent: "Message",
    quote:
      "Our aim is to develop enlightened, responsible and skilled teachers who can bring positive changes in society.",
    description:
      "We focus on holistic development, discipline and the pursuit of excellence in teacher education.",
    buttonText: "Read Full Message",
    buttonLink: "/about",
    image: "/images/principal.jpg",
  },
  whyChoose: {
    headingTitle: "Why Choose",
    headingAccent: "CRCOE?",
    points: [
      "NAAC A Grade Accredited",
      "Experienced & Dedicated Faculty",
      "Modern Infrastructure & Facilities",
      "Practical and Value-Based Learning",
      "Cultural & Co-curricular Activities",
      "Supportive Learning Environment",
    ],
  },
  gallery: {
    headingTitle: "Life at",
    headingAccent: "CRCOE",
    buttonText: "View Gallery",
    buttonLink: "/gallery",
    images: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
      "/images/gallery5.jpg",
    ],
  },
};

const getImageUrl = (src) => {
  if (!src) return "";
  if (src.startsWith("blob:") || src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (src.startsWith("/uploads")) return `${API_URL}${src}`;
  if (src.startsWith("uploads/")) return `${API_URL}/${src}`;
  if (src.startsWith("/images/")) return src;
  if (src.startsWith("gallery") || src.endsWith(".jpg") || src.endsWith(".png")) {
    if (!src.startsWith("/")) return `/images/${src}`;
  }
  return src;
};

const ManageHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // Uploaded files and their instant object previews
  const [imageFiles, setImageFiles] = useState({});
  const [imagePreviews, setImagePreviews] = useState({});

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const res = await fetch(`${API_URL}/api/home/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      if (res.ok && result.success && result.data) {
        setData((prev) => ({
          ...prev,
          ...result.data,
          hero: { ...prev.hero, ...(result.data.hero || {}) },
          newsEvents: { ...prev.newsEvents, ...(result.data.newsEvents || {}) },
          programmes: { ...prev.programmes, ...(result.data.programmes || {}) },
          about: { ...prev.about, ...(result.data.about || {}) },
          principal: { ...prev.principal, ...(result.data.principal || {}) },
          whyChoose: { ...prev.whyChoose, ...(result.data.whyChoose || {}) },
          gallery: { ...prev.gallery, ...(result.data.gallery || {}) },
        }));
      }
    } catch (err) {
      console.error("ManageHome load error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (fieldKey, e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFiles((prev) => ({ ...prev, [fieldKey]: file }));
      const previewUrl = URL.createObjectURL(file);
      setImagePreviews((prev) => ({ ...prev, [fieldKey]: previewUrl }));
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const formData = new FormData();

      // Append clean data without circular references
      formData.append("data", JSON.stringify(data));

      // Append any uploaded image files
      Object.entries(imageFiles).forEach(([key, file]) => {
        if (file) {
          formData.append(key, file);
        }
      });

      const res = await fetch(`${API_URL}/api/home`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to update home page");
      }

      setMessage({
        type: "success",
        text: "Home page content updated and published successfully!",
      });

      if (result.data) {
        setData((prev) => ({
          ...prev,
          ...result.data,
        }));
      }

      // Clear pending upload files
      setImageFiles({});
      setImagePreviews({});
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Error saving changes",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleResetDefaults = async () => {
    if (
      !window.confirm(
        "Are you sure you want to reset all Home page content to standard defaults?"
      )
    ) {
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const res = await fetch(`${API_URL}/api/home/reset`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to reset");
      }

      setData(result.data || initialData);
      setImageFiles({});
      setImagePreviews({});

      setMessage({
        type: "success",
        text: "Home page reset to default content successfully!",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Error resetting content",
      });
    } finally {
      setSaving(false);
    }
  };

  // Helper updaters
  const updateSection = (section, key, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  if (loading) {
    return (
      <div className="manage-home">
        <div style={{ padding: "40px", textAlign: "center", color: "#64748b" }}>
          Loading Home Page data...
        </div>
      </div>
    );
  }

  return (
    <div className="manage-home">
      {/* HEADER */}
      <div className="manage-home-header">
        <div>
          <span>LIVE CONTENT CONTROLLER</span>
          <h2>
            Manage <strong>Home Page</strong>
          </h2>
          <p>
            Customize all banners, headlines, notices, programmes, messages and
            gallery on the home page.
          </p>
        </div>

        <div className="home-header-actions">
          <button
            type="button"
            className="home-reset-btn"
            onClick={handleResetDefaults}
            disabled={saving}
          >
            <FiRotateCcw />
            Reset Defaults
          </button>

          <button
            type="button"
            className="home-save-btn"
            onClick={handleSave}
            disabled={saving}
          >
            <FiSave />
            {saving ? "Publishing..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* STATUS TOAST */}
      {message && (
        <div className={`home-admin-message ${message.type}`}>
          <FiCheck />
          {message.text}
        </div>
      )}

      {/* TAB STEP BAR */}
      <div className="home-step-bar">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={activeTab === idx ? "active" : ""}
            onClick={() => setActiveTab(idx)}
          >
            <span className="tab-num">{idx + 1}</span>
            {tab}
          </button>
        ))}
      </div>

      {/* EDITOR CARD */}
      <div className="home-editor-card">
        <div className="home-step-content">
          {/* ================= TAB 0: HERO SECTION ================= */}
          {activeTab === 0 && (
            <div>
              <div className="home-step-title">
                <h3>Hero Banner &amp; Highlights</h3>
                <p>Edit the main hero banner headline, description and buttons.</p>
              </div>

              <div className="home-fields">
                <label className="home-field full">
                  <span>Eyebrow Tagline</span>
                  <input
                    type="text"
                    value={data.hero.eyebrow || ""}
                    onChange={(e) =>
                      updateSection("hero", "eyebrow", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Main Heading Part 1</span>
                  <input
                    type="text"
                    value={data.hero.titlePart1 || ""}
                    onChange={(e) =>
                      updateSection("hero", "titlePart1", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Main Heading Part 2 (Bold)</span>
                  <input
                    type="text"
                    value={data.hero.titlePart2 || ""}
                    onChange={(e) =>
                      updateSection("hero", "titlePart2", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Subtitle / Location</span>
                  <input
                    type="text"
                    value={data.hero.subtitle || ""}
                    onChange={(e) =>
                      updateSection("hero", "subtitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field full">
                  <span>Description</span>
                  <textarea
                    value={data.hero.description || ""}
                    onChange={(e) =>
                      updateSection("hero", "description", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Primary Button Text</span>
                  <input
                    type="text"
                    value={data.hero.primaryBtnText || ""}
                    onChange={(e) =>
                      updateSection("hero", "primaryBtnText", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Primary Button Link</span>
                  <input
                    type="text"
                    value={data.hero.primaryBtnLink || ""}
                    onChange={(e) =>
                      updateSection("hero", "primaryBtnLink", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Secondary Button Text</span>
                  <input
                    type="text"
                    value={data.hero.secondaryBtnText || ""}
                    onChange={(e) =>
                      updateSection("hero", "secondaryBtnText", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Secondary Button Link</span>
                  <input
                    type="text"
                    value={data.hero.secondaryBtnLink || ""}
                    onChange={(e) =>
                      updateSection("hero", "secondaryBtnLink", e.target.value)
                    }
                  />
                </label>

                {/* Hero Image */}
                <div className="home-image-box">
                  <span>Hero Banner Image</span>
                  <div className="home-image-inner">
                    <div className="home-image-preview">
                      <img
                        src={
                          imagePreviews.heroImage ||
                          getImageUrl(data.hero.image)
                        }
                        alt="Hero Preview"
                      />
                    </div>

                    <label className="home-image-btn">
                      <FiUpload /> Choose New Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange("heroImage", e)}
                      />
                    </label>
                  </div>
                </div>

                {/* 4 Feature Points */}
                <div className="home-sub-section">
                  <div className="home-sub-header">
                    <h4>Hero Feature Badges (4 Points)</h4>
                  </div>

                  <div className="home-grid-cards">
                    {(data.hero.points || []).map((pt, idx) => (
                      <div className="home-grid-card" key={idx}>
                        <label className="home-field" style={{ marginBottom: "8px" }}>
                          <span>Line 1</span>
                          <input
                            type="text"
                            value={pt.title1 || ""}
                            onChange={(e) => {
                              const updated = [...data.hero.points];
                              updated[idx] = { ...updated[idx], title1: e.target.value };
                              updateSection("hero", "points", updated);
                            }}
                          />
                        </label>

                        <label className="home-field" style={{ marginBottom: "8px" }}>
                          <span>Line 2</span>
                          <input
                            type="text"
                            value={pt.title2 || ""}
                            onChange={(e) => {
                              const updated = [...data.hero.points];
                              updated[idx] = { ...updated[idx], title2: e.target.value };
                              updateSection("hero", "points", updated);
                            }}
                          />
                        </label>

                        <label className="home-field">
                          <span>Icon</span>
                          <select
                            value={pt.icon || "book"}
                            onChange={(e) => {
                              const updated = [...data.hero.points];
                              updated[idx] = { ...updated[idx], icon: e.target.value };
                              updateSection("hero", "points", updated);
                            }}
                          >
                            <option value="book">Book (Quality)</option>
                            <option value="users">Users (Faculty)</option>
                            <option value="award">Award (Holistic)</option>
                            <option value="heart">Heart (Bright Future)</option>
                          </select>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 1: NEWS & EVENTS ================= */}
          {activeTab === 1 && (
            <div>
              <div className="home-step-title">
                <h3>News, Notices &amp; Events Ticker</h3>
                <p>Manage the left intro banner and dynamic scrolling notices.</p>
              </div>

              <div className="home-fields">
                <label className="home-field">
                  <span>Intro Card Subtitle</span>
                  <input
                    type="text"
                    value={data.newsEvents.introSubtitle || ""}
                    onChange={(e) =>
                      updateSection("newsEvents", "introSubtitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Intro Card Title</span>
                  <input
                    type="text"
                    value={data.newsEvents.introTitle || ""}
                    onChange={(e) =>
                      updateSection("newsEvents", "introTitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field full">
                  <span>Intro Card Description</span>
                  <textarea
                    value={data.newsEvents.introDescription || ""}
                    onChange={(e) =>
                      updateSection(
                        "newsEvents",
                        "introDescription",
                        e.target.value
                      )
                    }
                  />
                </label>

                {/* News Intro Image */}
                <div className="home-image-box">
                  <span>News Intro Card Image</span>
                  <div className="home-image-inner">
                    <div className="home-image-preview">
                      <img
                        src={
                          imagePreviews.newsIntroImage ||
                          getImageUrl(data.newsEvents.introImage)
                        }
                        alt="News Intro Preview"
                      />
                    </div>

                    <label className="home-image-btn">
                      <FiUpload /> Choose New Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange("newsIntroImage", e)}
                      />
                    </label>
                  </div>
                </div>

                <label className="home-field">
                  <span>News Panel Badge</span>
                  <input
                    type="text"
                    value={data.newsEvents.badge || ""}
                    onChange={(e) =>
                      updateSection("newsEvents", "badge", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Panel Heading (Main + Accent)</span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="text"
                      placeholder="Title (News)"
                      value={data.newsEvents.headingTitle || ""}
                      onChange={(e) =>
                        updateSection("newsEvents", "headingTitle", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Accent (& Events)"
                      value={data.newsEvents.headingAccent || ""}
                      onChange={(e) =>
                        updateSection("newsEvents", "headingAccent", e.target.value)
                      }
                    />
                  </div>
                </label>

                {/* News Items List */}
                <div className="home-sub-section">
                  <div className="home-sub-header">
                    <h4>Notice &amp; Ticker Items ({data.newsEvents.items?.length || 0})</h4>
                    <button
                      type="button"
                      className="home-add-btn"
                      onClick={() => {
                        const updated = [
                          ...(data.newsEvents.items || []),
                          {
                            title: "New College Notice",
                            date: "Latest Update",
                            type: "Notice",
                            link: "/news",
                          },
                        ];
                        updateSection("newsEvents", "items", updated);
                      }}
                    >
                      <FiPlus /> Add Notice Item
                    </button>
                  </div>

                  {(data.newsEvents.items || []).map((item, idx) => (
                    <div className="home-item-card" key={idx}>
                      <div className="home-item-card-top">
                        <span>Notice #{idx + 1}</span>
                        <button
                          type="button"
                          className="home-del-btn"
                          title="Delete Notice"
                          onClick={() => {
                            const updated = data.newsEvents.items.filter(
                              (_, i) => i !== idx
                            );
                            updateSection("newsEvents", "items", updated);
                          }}
                        >
                          <FiTrash2 />
                        </button>
                      </div>

                      <div className="home-fields">
                        <label className="home-field full">
                          <span>Notice Title</span>
                          <input
                            type="text"
                            value={item.title || ""}
                            onChange={(e) => {
                              const updated = [...data.newsEvents.items];
                              updated[idx] = { ...updated[idx], title: e.target.value };
                              updateSection("newsEvents", "items", updated);
                            }}
                          />
                        </label>

                        <label className="home-field">
                          <span>Date / Sub-text</span>
                          <input
                            type="text"
                            value={item.date || ""}
                            onChange={(e) => {
                              const updated = [...data.newsEvents.items];
                              updated[idx] = { ...updated[idx], date: e.target.value };
                              updateSection("newsEvents", "items", updated);
                            }}
                          />
                        </label>

                        <label className="home-field">
                          <span>Category / Type</span>
                          <select
                            value={item.type || "Notice"}
                            onChange={(e) => {
                              const updated = [...data.newsEvents.items];
                              updated[idx] = { ...updated[idx], type: e.target.value };
                              updateSection("newsEvents", "items", updated);
                            }}
                          >
                            <option value="Notice">Notice</option>
                            <option value="Event">Event</option>
                            <option value="Admission">Admission</option>
                            <option value="Academic">Academic</option>
                          </select>
                        </label>

                        <label className="home-field full">
                          <span>Link Destination</span>
                          <input
                            type="text"
                            value={item.link || "/news"}
                            onChange={(e) => {
                              const updated = [...data.newsEvents.items];
                              updated[idx] = { ...updated[idx], link: e.target.value };
                              updateSection("newsEvents", "items", updated);
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 2: PROGRAMMES ================= */}
          {activeTab === 2 && (
            <div>
              <div className="home-step-title">
                <h3>Our Programmes</h3>
                <p>Manage degree courses (B.Ed., M.Ed., etc.) showcased on home page.</p>
              </div>

              <div className="home-fields">
                <label className="home-field">
                  <span>Section Title</span>
                  <input
                    type="text"
                    value={data.programmes.headingTitle || ""}
                    onChange={(e) =>
                      updateSection("programmes", "headingTitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Heading Accent</span>
                  <input
                    type="text"
                    value={data.programmes.headingAccent || ""}
                    onChange={(e) =>
                      updateSection("programmes", "headingAccent", e.target.value)
                    }
                  />
                </label>

                {/* Programme Cards */}
                <div className="home-sub-section">
                  <div className="home-sub-header">
                    <h4>Programmes List</h4>
                    <button
                      type="button"
                      className="home-add-btn"
                      onClick={() => {
                        const updated = [
                          ...(data.programmes.programs || []),
                          {
                            badge: "Diploma in Elementary Education",
                            title: "D.El.Ed.",
                            description: "Fundamental teacher training programme.",
                            image: "/images/docs-books.jpg",
                            link: "/academics",
                            btnText: "Know More",
                          },
                        ];
                        updateSection("programmes", "programs", updated);
                      }}
                    >
                      <FiPlus /> Add Programme Card
                    </button>
                  </div>

                  {(data.programmes.programs || []).map((prog, idx) => (
                    <div className="home-item-card" key={idx}>
                      <div className="home-item-card-top">
                        <span>Programme #{idx + 1}: {prog.title}</span>
                        {data.programmes.programs.length > 1 && (
                          <button
                            type="button"
                            className="home-del-btn"
                            title="Delete Programme"
                            onClick={() => {
                              const updated = data.programmes.programs.filter(
                                (_, i) => i !== idx
                              );
                              updateSection("programmes", "programs", updated);
                            }}
                          >
                            <FiTrash2 />
                          </button>
                        )}
                      </div>

                      <div className="home-fields">
                        <label className="home-field">
                          <span>Course Title (e.g. B.Ed.)</span>
                          <input
                            type="text"
                            value={prog.title || ""}
                            onChange={(e) => {
                              const updated = [...data.programmes.programs];
                              updated[idx] = { ...updated[idx], title: e.target.value };
                              updateSection("programmes", "programs", updated);
                            }}
                          />
                        </label>

                        <label className="home-field">
                          <span>Badge / Full Name</span>
                          <input
                            type="text"
                            value={prog.badge || ""}
                            onChange={(e) => {
                              const updated = [...data.programmes.programs];
                              updated[idx] = { ...updated[idx], badge: e.target.value };
                              updateSection("programmes", "programs", updated);
                            }}
                          />
                        </label>

                        <label className="home-field full">
                          <span>Description</span>
                          <textarea
                            value={prog.description || ""}
                            onChange={(e) => {
                              const updated = [...data.programmes.programs];
                              updated[idx] = { ...updated[idx], description: e.target.value };
                              updateSection("programmes", "programs", updated);
                            }}
                          />
                        </label>

                        <label className="home-field">
                          <span>Button Text</span>
                          <input
                            type="text"
                            value={prog.btnText || ""}
                            onChange={(e) => {
                              const updated = [...data.programmes.programs];
                              updated[idx] = { ...updated[idx], btnText: e.target.value };
                              updateSection("programmes", "programs", updated);
                            }}
                          />
                        </label>

                        <label className="home-field">
                          <span>Button Link</span>
                          <input
                            type="text"
                            value={prog.link || ""}
                            onChange={(e) => {
                              const updated = [...data.programmes.programs];
                              updated[idx] = { ...updated[idx], link: e.target.value };
                              updateSection("programmes", "programs", updated);
                            }}
                          />
                        </label>

                        {/* Programme Image */}
                        <div className="home-image-box">
                          <span>Card Image</span>
                          <div className="home-image-inner">
                            <div className="home-image-preview">
                              <img
                                src={
                                  imagePreviews[`programImage_${idx}`] ||
                                  getImageUrl(prog.image)
                                }
                                alt={prog.title}
                              />
                            </div>

                            <label className="home-image-btn">
                              <FiUpload /> Choose Image
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  handleFileChange(`programImage_${idx}`, e)
                                }
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 3: ABOUT CRCOE ================= */}
          {activeTab === 3 && (
            <div>
              <div className="home-step-title">
                <h3>About CRCOE Section</h3>
                <p>Manage the summary narrative, mini feature icons and campus photo.</p>
              </div>

              <div className="home-fields">
                <label className="home-field">
                  <span>Heading Title</span>
                  <input
                    type="text"
                    value={data.about.headingTitle || ""}
                    onChange={(e) =>
                      updateSection("about", "headingTitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Heading Accent</span>
                  <input
                    type="text"
                    value={data.about.headingAccent || ""}
                    onChange={(e) =>
                      updateSection("about", "headingAccent", e.target.value)
                    }
                  />
                </label>

                <label className="home-field full">
                  <span>About Description</span>
                  <textarea
                    value={data.about.description || ""}
                    onChange={(e) =>
                      updateSection("about", "description", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Button Text</span>
                  <input
                    type="text"
                    value={data.about.buttonText || ""}
                    onChange={(e) =>
                      updateSection("about", "buttonText", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Button Link</span>
                  <input
                    type="text"
                    value={data.about.buttonLink || ""}
                    onChange={(e) =>
                      updateSection("about", "buttonLink", e.target.value)
                    }
                  />
                </label>

                {/* About Image */}
                <div className="home-image-box">
                  <span>About Section Image</span>
                  <div className="home-image-inner">
                    <div className="home-image-preview">
                      <img
                        src={
                          imagePreviews.aboutImage ||
                          getImageUrl(data.about.image)
                        }
                        alt="About Preview"
                      />
                    </div>

                    <label className="home-image-btn">
                      <FiUpload /> Choose New Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange("aboutImage", e)}
                      />
                    </label>
                  </div>
                </div>

                {/* 4 Mini Features */}
                <div className="home-sub-section">
                  <div className="home-sub-header">
                    <h4>4 Mini Features</h4>
                  </div>

                  <div className="home-grid-cards">
                    {(data.about.features || []).map((feat, idx) => (
                      <div className="home-grid-card" key={idx}>
                        <label className="home-field" style={{ marginBottom: "8px" }}>
                          <span>Line 1</span>
                          <input
                            type="text"
                            value={feat.title1 || ""}
                            onChange={(e) => {
                              const updated = [...data.about.features];
                              updated[idx] = { ...updated[idx], title1: e.target.value };
                              updateSection("about", "features", updated);
                            }}
                          />
                        </label>

                        <label className="home-field" style={{ marginBottom: "8px" }}>
                          <span>Line 2</span>
                          <input
                            type="text"
                            value={feat.title2 || ""}
                            onChange={(e) => {
                              const updated = [...data.about.features];
                              updated[idx] = { ...updated[idx], title2: e.target.value };
                              updateSection("about", "features", updated);
                            }}
                          />
                        </label>

                        <label className="home-field">
                          <span>Icon</span>
                          <select
                            value={feat.icon || "users"}
                            onChange={(e) => {
                              const updated = [...data.about.features];
                              updated[idx] = { ...updated[idx], icon: e.target.value };
                              updateSection("about", "features", updated);
                            }}
                          >
                            <option value="users">Users (Faculty)</option>
                            <option value="book">Book (Infrastructure)</option>
                            <option value="heart">Heart (Environment)</option>
                            <option value="award">Award (Activities)</option>
                          </select>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: PRINCIPAL MESSAGE ================= */}
          {activeTab === 4 && (
            <div>
              <div className="home-step-title">
                <h3>Principal’s Message</h3>
                <p>Customize the Principal quote, overview, button and picture.</p>
              </div>

              <div className="home-fields">
                <label className="home-field">
                  <span>Heading Title</span>
                  <input
                    type="text"
                    value={data.principal.headingTitle || ""}
                    onChange={(e) =>
                      updateSection("principal", "headingTitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Heading Accent</span>
                  <input
                    type="text"
                    value={data.principal.headingAccent || ""}
                    onChange={(e) =>
                      updateSection("principal", "headingAccent", e.target.value)
                    }
                  />
                </label>

                <label className="home-field full">
                  <span>Principal's Quote</span>
                  <textarea
                    value={data.principal.quote || ""}
                    onChange={(e) =>
                      updateSection("principal", "quote", e.target.value)
                    }
                  />
                </label>

                <label className="home-field full">
                  <span>Message Body Description</span>
                  <textarea
                    value={data.principal.description || ""}
                    onChange={(e) =>
                      updateSection("principal", "description", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Button Text</span>
                  <input
                    type="text"
                    value={data.principal.buttonText || ""}
                    onChange={(e) =>
                      updateSection("principal", "buttonText", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Button Link</span>
                  <input
                    type="text"
                    value={data.principal.buttonLink || ""}
                    onChange={(e) =>
                      updateSection("principal", "buttonLink", e.target.value)
                    }
                  />
                </label>

                {/* Principal Image */}
                <div className="home-image-box">
                  <span>Principal Photo</span>
                  <div className="home-image-inner">
                    <div className="home-image-preview">
                      <img
                        src={
                          imagePreviews.principalImage ||
                          getImageUrl(data.principal.image)
                        }
                        alt="Principal Preview"
                      />
                    </div>

                    <label className="home-image-btn">
                      <FiUpload /> Choose Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange("principalImage", e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 5: WHY CHOOSE US ================= */}
          {activeTab === 5 && (
            <div>
              <div className="home-step-title">
                <h3>Why Choose CRCOE?</h3>
                <p>Manage the bullet points highlighting reasons to choose CRCOE.</p>
              </div>

              <div className="home-fields">
                <label className="home-field">
                  <span>Heading Title</span>
                  <input
                    type="text"
                    value={data.whyChoose.headingTitle || ""}
                    onChange={(e) =>
                      updateSection("whyChoose", "headingTitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Heading Accent</span>
                  <input
                    type="text"
                    value={data.whyChoose.headingAccent || ""}
                    onChange={(e) =>
                      updateSection("whyChoose", "headingAccent", e.target.value)
                    }
                  />
                </label>

                {/* Points List */}
                <div className="home-sub-section">
                  <div className="home-sub-header">
                    <h4>Bullet Points ({data.whyChoose.points?.length || 0})</h4>
                    <button
                      type="button"
                      className="home-add-btn"
                      onClick={() => {
                        const updated = [
                          ...(data.whyChoose.points || []),
                          "New accreditation or special feature",
                        ];
                        updateSection("whyChoose", "points", updated);
                      }}
                    >
                      <FiPlus /> Add Point
                    </button>
                  </div>

                  {(data.whyChoose.points || []).map((pt, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          height: "40px",
                          border: "1px solid #dfe4eb",
                          borderRadius: "8px",
                          padding: "0 12px",
                          fontFamily: "inherit",
                          fontSize: "14px",
                        }}
                        value={pt || ""}
                        onChange={(e) => {
                          const updated = [...data.whyChoose.points];
                          updated[idx] = e.target.value;
                          updateSection("whyChoose", "points", updated);
                        }}
                      />

                      <button
                        type="button"
                        className="home-del-btn"
                        title="Delete Point"
                        onClick={() => {
                          const updated = data.whyChoose.points.filter(
                            (_, i) => i !== idx
                          );
                          updateSection("whyChoose", "points", updated);
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 6: LIFE AT CRCOE ================= */}
          {activeTab === 6 && (
            <div>
              <div className="home-step-title">
                <h3>Life at CRCOE (Home Gallery Grid)</h3>
                <p>Manage the gallery photos and button at the bottom of the home page.</p>
              </div>

              <div className="home-fields">
                <label className="home-field">
                  <span>Heading Title</span>
                  <input
                    type="text"
                    value={data.gallery.headingTitle || ""}
                    onChange={(e) =>
                      updateSection("gallery", "headingTitle", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Heading Accent</span>
                  <input
                    type="text"
                    value={data.gallery.headingAccent || ""}
                    onChange={(e) =>
                      updateSection("gallery", "headingAccent", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Button Text</span>
                  <input
                    type="text"
                    value={data.gallery.buttonText || ""}
                    onChange={(e) =>
                      updateSection("gallery", "buttonText", e.target.value)
                    }
                  />
                </label>

                <label className="home-field">
                  <span>Button Link</span>
                  <input
                    type="text"
                    value={data.gallery.buttonLink || ""}
                    onChange={(e) =>
                      updateSection("gallery", "buttonLink", e.target.value)
                    }
                  />
                </label>

                {/* Upload New Image */}
                <div className="home-image-box">
                  <span>Upload and Add New Gallery Image</span>
                  <div className="home-image-inner">
                    <label className="home-image-btn">
                      <FiUpload /> Upload &amp; Append Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange("newGalleryImage", e)}
                      />
                    </label>

                    {imagePreviews.newGalleryImage && (
                      <span style={{ fontSize: "12px", color: "#10b981", fontWeight: 600 }}>
                        ✓ New photo ready to upload on save!
                      </span>
                    )}
                  </div>
                </div>

                {/* Gallery Images List */}
                <div className="home-sub-section">
                  <div className="home-sub-header">
                    <h4>Current Gallery Images ({data.gallery.images?.length || 0})</h4>
                  </div>

                  <div className="home-admin-gallery-grid">
                    {(data.gallery.images || []).map((imgSrc, idx) => (
                      <div className="home-admin-gallery-item" key={idx}>
                        <img src={getImageUrl(imgSrc)} alt={`Gallery ${idx}`} />
                        <button
                          type="button"
                          className="home-gallery-del"
                          title="Delete from home page"
                          onClick={() => {
                            const updated = data.gallery.images.filter(
                              (_, i) => i !== idx
                            );
                            updateSection("gallery", "images", updated);
                          }}
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FOOTER TAB NAVIGATION */}
          <div className="home-footer-nav">
            <button
              type="button"
              className="home-nav-btn"
              disabled={activeTab === 0}
              onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
            >
              <FiChevronLeft /> Previous Tab
            </button>

            <span>
              Tab {activeTab + 1} of {tabs.length}
            </span>

            <button
              type="button"
              className="home-nav-btn"
              disabled={activeTab === tabs.length - 1}
              onClick={() =>
                setActiveTab((prev) => Math.min(tabs.length - 1, prev + 1))
              }
            >
              Next Tab <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHome;