import React, { useEffect, useState } from "react";
import {
  FiSave,
  FiUpload,
  FiPlus,
  FiTrash2,
  FiRotateCcw,
  FiExternalLink,
  FiHome,
  FiMonitor,
  FiBookOpen,
  FiSettings,
  FiActivity,
  FiHeart,
  FiCheck,
} from "react-icons/fi";
import "./ManageFacilities.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

const tabs = [
  "Hero Banner",
  "Classroom",
  "ICT Center",
  "Library",
  "Laboratories",
  "Sports Facilities",
  "Women Cell",
  "Other Facilities",
];

const subLabTabs = [
  "ICT Centre",
  "Home Science Lab",
  "Language Lab",
  "Psychology Lab",
  "Science & Mathematics Lab",
];

const initialData = {
  hero: {
    badge: "Campus Infrastructure",
    title: "Our Facilities",
    titleHighlight: "Facilities",
    subtitle: "Modern Infrastructure for Holistic Development",
    description:
      "We provide supportive, inclusive and enriching facilities to strengthen learning, practical exposure and student life.",
    image: "/images/campus-about.jpg",
    cardTitle: "Learning Beyond Classrooms",
    cardSubtitle: "Infrastructure • Resources • Development",
  },
  facilities: [
    {
      key: "Classroom",
      name: "Classroom",
      icon: "FiHome",
      image: "classroom.jpg",
      subtitle: "Spacious, Smart and Student-Centric Classrooms",
      text: "All the classrooms are spacious, architecturally designed and equipped with smart classroom equipment including computers, tablet monitors, projectors, visualizers and sound systems.",
      paragraphs: [],
      sections: [],
      points: [
        "Passion for teaching, learning and research",
        "Respect for students",
        "Deeper understanding",
        "Clarity of expression and thought",
        "Fluency of language",
        "Discipline",
        "Self-esteem",
        "Sound subject knowledge",
      ],
      otherFacilities: [],
      labs: [],
    },
    {
      key: "ICT Center",
      name: "ICT Center",
      icon: "FiMonitor",
      image: "ict.jpg",
      subtitle: "Digital Learning & Technology Support",
      text: "Our college has a well-equipped ICT Centre. Its basic aim is to create general awareness among prospective teachers about Information and Communication Technology (ICT) and its use in the teaching-learning process.",
      paragraphs: [],
      sections: [
        {
          title: "Objectives of the ICT Centre",
          paragraphs: [
            "To create general awareness among prospective teachers about Information and Communication Technology (ICT) and its use in teaching learning.",
            "To acquaint prospective teachers with different parts of computer system and their functions.",
            "To develop competency among prospective teachers in use of off-line electronic resources such as CD ROM and on-line resources such as World Wide Web.",
            "To encourage prospective teachers in using ICT for improving classroom teaching and professional development.",
            "To develop vocabulary of ICT among prospective teachers.",
          ],
        },
        {
          title: "Incharge",
          paragraphs: ["Ranju Malik"],
        },
      ],
      points: [
        "20 Multimedia Computers with Broadband Internet Facility",
        "Seven Laptops",
        "Four Printers with Scan and Copy facility",
        "Scanner",
        "Digital Handycam",
        "Video Camera",
        "Television",
        "VCD Player",
        "DLP Projector",
        "OHP",
        "Four Webcam",
        "Slide Projector",
        "Effective Offline Resources",
        "Licensed Software",
      ],
      otherFacilities: [],
      labs: [],
    },
    {
      key: "Library",
      name: "Library",
      icon: "FiBookOpen",
      image: "library.jpg",
      subtitle: "A Rich Learning Resource Centre",
      text: "A well-equipped and rich library is the soul of good institution. With this dictum in mind, the college has arranged for a rich and well-equipped library with all modern facilities.",
      paragraphs: [],
      sections: [
        {
          title: "Introduction",
          paragraphs: [
            "A well-equipped and rich library is the soul of good institution. With this dictum in mind, the college has arranged for the rich and well-equipped library with all modern facilities.",
          ],
        },
        {
          title: "Collection",
          paragraphs: [
            "CRCOE library is one of the oldest and largest college libraries. Library has rich collection of around 21830 books with 15000 titles on education and other subjects on the shelves of the library.",
            "The library subscribes 58 Journals on Education and related subjects.",
          ],
        },
        {
          title: "Journal Collection",
          paragraphs: [
            "National and Peer reviewed = 52",
            "International = 4",
            "Local = 2",
            "Online + hardcopy = 1",
            "Online Newsletters = 3",
          ],
        },
        {
          title: "Newspapers & Magazines",
          paragraphs: [
            "Our library subscribes Newspapers in Hindi & English = 13 and Magazines = 15.",
          ],
        },
        {
          title: "Audio-Visual Collection",
          paragraphs: [
            "We have separate Audio-video collection which includes Audio cassettes, VCDs on Education, CDs on Education, DVDs on Education, DVDs on Science and Lesson Plan VCDs from Class IV to XII for B.Ed. students.",
          ],
        },
        {
          title: "Reference Section",
          paragraphs: [
            "Reference section is very rich. It has latest Encyclopedias, Dictionaries, Surveys both Research and Educational, Commission/Committee reports, Abstracts, Bibliographies, Biographies, Gazetteers, Yearbooks, Maps, Handbooks, Travel Guides, Foreign and rare books.",
            "Reference section of the library caters to the needs of brilliant students and teachers as it gives them sufficient intellectual stimuli.",
          ],
        },
        {
          title: "Computer Facility",
          paragraphs: [
            "Our library is computerized with SOUL software.",
            "A special E-learning Centre is formed to provide free internet access to all the students to check various educational websites.",
            "Students and teachers avail the facility to use CD-ROMs available in the library.",
            "Students can use Audio CDs, VCDs and DVDs in the library through computers and headphones.",
          ],
        },
        {
          title: "Service",
          paragraphs: [
            "Library has two reading rooms with seating capacity of 70 students.",
            "We have separate Periodical section, Reference section, Newspaper section, Text Book section etc.",
          ],
        },
      ],
      points: [
        "Document delivery service - Books, photocopies of articles, CDs etc.",
        "Inter-library loan",
        "Bibliographic Service - in anticipation and on demand",
        "User Orientation Service - At the beginning of session",
        "Newspaper clipping service",
        "Referral services",
        "Current Awareness service",
        "Photocopier facility",
      ],
      otherFacilities: [],
      labs: [],
    },
    {
      key: "Laboratory",
      name: "Laboratory",
      icon: "FiSettings",
      image: "lab.jpg",
      subtitle: "Practical Learning & Resource Centres",
      text: "We have separate full equipped resource centers for ICT, Science & Mathematics, Psychology, Home Science, Art and Craft and Languages. These resource centres provide opportunities to students and staff to develop their manipulative skills as we believe in the kernel principles of learning by doing.",
      paragraphs: [],
      sections: [],
      points: [
        "ICT Resource Centre",
        "Home Science Laboratory",
        "Language Laboratory",
        "Psychology Laboratory",
        "Science and Mathematics Laboratory",
      ],
      otherFacilities: [],
      labs: [
        {
          name: "ICT Centre",
          icon: "FiMonitor",
          image: "ict.jpg",
          subtitle: "Technology Enabled Learning",
          text: "Our ICT centre is well equipped with modern technological facilities to support teaching, learning and professional development.",
          paragraphs: [],
          objectiveTitle: "",
          points: [
            "Multimedia Computers with Broadband Internet Facility",
            "Laptops",
            "Printers - Coloured and black - with Scan and Copy facility",
            "Digital Handycam",
            "Camera",
            "Document Camera",
            "Visualizer",
            "Television (LED)",
            "VCD Player",
            "LCD Projector",
            "OHP",
            "Webcams",
            "Slide Projector",
            "Effective Offline Resources",
            "Licensed Software",
            "Online UPS",
          ],
        },
        {
          name: "Home Science Lab",
          icon: "FiHome",
          image: "home-science.jpg",
          subtitle: "Practical Home Science Learning Environment",
          text: "Provision of adequate, convenient and attractive facilities for the Home Science Laboratory contributes towards pupil-teachers learning environment and satisfaction of teaching. The Home Science Laboratory of our college is situated on the first floor in a corner of the main building which has two stories.",
          paragraphs: [
            "The laboratory is located on the top floor and has convenient arrangements for bringing supplies and disposing of waste materials. The lab is less disturbed by passing classes and is orderly, attractive, well-lighted and ventilated. It may also be utilized as a classroom.",
          ],
          objectiveTitle: "Objectives of Establishing Home Science Laboratory",
          points: [
            "To develop practical skills of pupil-teachers to organize various activities related to teaching of Home Science.",
            "To develop practical skills and competencies required for preparing teaching aids in teaching of Home Science.",
            "To develop understanding of the various methods and procedures required for teaching of Home Science.",
            "To develop basic skills and competencies required for teaching of Home Science.",
            "To demonstrate activities like cooking, stitching, embroidery, knitting and home management and provide facilities to do them independently.",
          ],
        },
        {
          name: "Language Lab",
          icon: "FiMic",
          image: "language-lab.jpg",
          subtitle: "Developing Communication & Linguistic Skills",
          text: "In the 21st century, language lab is the latest innovation in language teaching and learning. Recently it has become a common concept in educational institutions. Today's world is of competence and one needs to acquire proper communication skills.",
          paragraphs: [
            "Digital language lab has teaching-learning software. This digital lab makes use of intelligible English that both native and non-native speakers of English can apprehend quite easily.",
            "Our language lab has twenty five computer PCs and seating capacity of 25 students at a time.",
            "Various linguistic skills like speaking and listening are developed. Students can effortlessly communicate with the teacher. They can listen to the native speaker's voice, record their voices and compare.",
            "Students can assess their own capabilities and abilities. Teachers have the provision to provide group discussions to the students on a given topic and ascertain the performance of the students.",
          ],
          objectiveTitle: "",
          points: [
            "25 Computer PCs",
            "Seating capacity of 25 students",
            "Speaking skill development",
            "Listening skill development",
            "Voice recording and comparison",
            "Self-assessment facilities",
            "Group discussion activities",
            "Teacher-guided language practice",
          ],
        },
        {
          name: "Psychology Lab",
          icon: "FiHeart",
          image: "psychology-lab.jpg",
          subtitle: "Psychological Testing & Practical Learning",
          text: "The aim of the Psychology Laboratory is to provide psychology educators, students of B.Ed. and M.Ed. and researchers with a tool that supports the analysis, modification and re-execution of previously archived experiments.",
          paragraphs: [
            "The archive includes experimental materials, designs, procedures and results which can be submitted by active researchers and educators.",
          ],
          objectiveTitle: "",
          points: [
            "Support for B.Ed. students",
            "Support for M.Ed. students",
            "Support for psychology educators",
            "Support for researchers",
            "Psychological testing resources",
            "Approximately 150 psychology tests",
            "Experimental learning",
            "Research-oriented practical work",
          ],
        },
        {
          name: "Science & Mathematics Lab",
          icon: "FiCpu",
          image: "science-mathematics-lab.jpg",
          subtitle: "Learning Science & Mathematics Through Practical Work",
          text: "Science and Mathematics Laboratory has been fully equipped in respect of instruments, apparatuses, specimens, microscopes, slides and chemicals to demonstrate practicals that help to make subject matter more clear.",
          paragraphs: [
            "Students can also avail practical material and prepare teaching aids during teaching practice.",
          ],
          objectiveTitle: "",
          points: [
            "Scientific instruments",
            "Mathematical apparatus",
            "Specimens",
            "Microscopes",
            "Slides",
            "Chemicals",
            "Practical demonstrations",
            "Teaching aid preparation",
            "Hands-on learning",
          ],
        },
      ],
    },
    {
      key: "Sports Facilities",
      name: "Sports Facilities",
      icon: "FiActivity",
      image: "sports.jpg",
      subtitle: "Fitness, Teamwork and Active Learning",
      text: "In order to keep our young talents full of life and vigour, we encourage and organize lots of sports activity in the college.",
      paragraphs: [
        "The college encourages students to participate in different sporting activities. Sports help students develop physical fitness, teamwork, discipline and a healthy competitive spirit.",
        "The college organizes sports events every year for the students. We believe in healthy hearts and strong minds.",
      ],
      sections: [],
      points: [
        "Cricket",
        "Football",
        "Badminton",
        "Softball",
        "Other sports activities",
        "Annual sports events",
        "Student participation",
        "Teamwork and discipline",
      ],
      otherFacilities: [],
      labs: [],
    },
    {
      key: "Women Cell",
      name: "Women Cell",
      icon: "FiHeart",
      image: "women.jpg",
      subtitle: "Safe, Supportive and Empowering",
      text: "The Women Cell has been pressed into service for the empowerment of girl students. This service unit takes care of creating social awareness, justice and infuses courage and fortitude amongst the girls by undertaking socially useful projects for women empowerment, women and justice and female health hazards.",
      paragraphs: [
        "In order to create awareness amongst girl students, they are given illuminating talks about their right to property, anti-dowry law and protection of women against crimes committed against them.",
        "Seminars on women empowerment are organised. Students are given valuable suggestions to get rid of social evils.",
        "In addition to this, competitions in essay writing, poster making, poetic competition and symposia are arranged by the college from time to time through the untiring efforts of the programme coordinator Dr. Sushila Sangwan.",
      ],
      sections: [
        {
          title: "Co-ordinator",
          paragraphs: ["Dr. (Mrs.) Sushila Sangwan"],
        },
      ],
      points: [
        "Women empowerment awareness",
        "Awareness regarding women's rights",
        "Anti-dowry law awareness",
        "Protection against crimes",
        "Female health awareness",
        "Women empowerment seminars",
        "Essay writing competitions",
        "Poster making competitions",
        "Poetic competitions",
        "Symposia",
      ],
      otherFacilities: [],
      labs: [],
    },
    {
      key: "Other Facilities",
      name: "Other Facilities",
      icon: "FiSettings",
      image: "other.jpg",
      subtitle: "Support Services for Campus Life",
      text: "The college provides additional facilities to support academic activities, student life and a comfortable campus environment.",
      paragraphs: [],
      sections: [],
      points: [
        "Seminar Hall",
        "Multipurpose Hall",
        "Canteen",
        "Transport Facilities",
      ],
      otherFacilities: [
        {
          title: "Seminar Hall",
          icon: "FiMonitor",
          text: "We have Seminar Hall with all electronic gadgets including Computer, Projector, Tablet Monitor, Sound System and Online UPS.",
        },
        {
          title: "Multipurpose Hall",
          icon: "FiUsers",
          text: "We have a Multipurpose Hall at the first floor of the building with electronic gadgets including Wall Mount Screen, Projector, Computer, Tablet Monitor, LED TVs, Sound System and Online UPS. It has seating capacity of 150 students.",
        },
        {
          title: "Canteen",
          icon: "FiHome",
          text: "We have a canteen in the college campus. Good quality hygienic food is ensured in the college canteens by checking the quality by the students and faculty on a regular basis.",
        },
        {
          title: "Transport Facilities",
          icon: "FiActivity",
          text: "Transport facilities are shared with the Sister Concern.",
        },
      ],
      labs: [],
    },
  ],
};

const getImageUrl = (src) => {
  if (!src) return "";
  if (
    src.startsWith("blob:") ||
    src.startsWith("http://") ||
    src.startsWith("https://")
  ) {
    return src;
  }
  if (src.startsWith("/uploads/")) return `${API_URL}${src}`;
  if (src.startsWith("uploads/")) return `${API_URL}/${src}`;
  if (src.startsWith("/images/")) return src;
  if (!src.startsWith("/")) return `/images/${src}`;
  return src;
};

const ManageFacilities = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeLabTab, setActiveLabTab] = useState(0);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // File objects and preview URLs
  const [imageFiles, setImageFiles] = useState({});
  const [imagePreviews, setImagePreviews] = useState({});

  useEffect(() => {
    loadFacilitiesData();
  }, []);

  const loadFacilitiesData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const res = await fetch(`${API_URL}/api/facilities/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      if (res.ok && result.success && result.data) {
        setData({
          hero: { ...initialData.hero, ...(result.data.hero || {}) },
          facilities:
            result.data.facilities && result.data.facilities.length > 0
              ? result.data.facilities
              : initialData.facilities,
        });
      }
    } catch (err) {
      console.error("ManageFacilities load error:", err);
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

      formData.append("data", JSON.stringify(data));

      Object.entries(imageFiles).forEach(([key, file]) => {
        if (file) {
          formData.append(key, file);
        }
      });

      const res = await fetch(`${API_URL}/api/facilities`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to update facilities");
      }

      setMessage({
        type: "success",
        text: "Facilities content & images updated successfully!",
      });

      if (result.data) {
        setData({
          hero: { ...initialData.hero, ...(result.data.hero || {}) },
          facilities: result.data.facilities || initialData.facilities,
        });
      }

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
        "Are you sure you want to reset all Facilities content to standard college defaults? Any custom modifications will be overwritten."
      )
    ) {
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const res = await fetch(`${API_URL}/api/facilities/reset`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to reset facilities");
      }

      setMessage({
        type: "success",
        text: "Facilities reset to standard defaults successfully!",
      });

      if (result.data) {
        setData({
          hero: { ...initialData.hero, ...(result.data.hero || {}) },
          facilities: result.data.facilities || initialData.facilities,
        });
      }

      setImageFiles({});
      setImagePreviews({});
    } catch (err) {
      setMessage({
        type: "error",
        text: err.message || "Failed to reset facilities",
      });
    } finally {
      setSaving(false);
    }
  };

  // Helper getters & setters
  const updateHero = (field, value) => {
    setData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value,
      },
    }));
  };

  const getFacIndex = (key) => {
    return data.facilities.findIndex((f) => f.key === key || f.name === key);
  };

  const updateFacField = (facKey, field, value) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      updatedList[idx] = {
        ...updatedList[idx],
        [field]: value,
      };
      return { ...prev, facilities: updatedList };
    });
  };

  // Points helpers
  const addPoint = (facKey) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      const points = [...(updatedList[idx].points || []), ""];
      updatedList[idx] = { ...updatedList[idx], points };
      return { ...prev, facilities: updatedList };
    });
  };

  const updatePoint = (facKey, pointIdx, value) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      const points = [...(updatedList[idx].points || [])];
      points[pointIdx] = value;
      updatedList[idx] = { ...updatedList[idx], points };
      return { ...prev, facilities: updatedList };
    });
  };

  const removePoint = (facKey, pointIdx) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      const points = (updatedList[idx].points || []).filter(
        (_, i) => i !== pointIdx
      );
      updatedList[idx] = { ...updatedList[idx], points };
      return { ...prev, facilities: updatedList };
    });
  };

  // Paragraphs helpers
  const addParagraph = (facKey) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      const paragraphs = [...(updatedList[idx].paragraphs || []), ""];
      updatedList[idx] = { ...updatedList[idx], paragraphs };
      return { ...prev, facilities: updatedList };
    });
  };

  const updateParagraph = (facKey, pIdx, value) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      const paragraphs = [...(updatedList[idx].paragraphs || [])];
      paragraphs[pIdx] = value;
      updatedList[idx] = { ...updatedList[idx], paragraphs };
      return { ...prev, facilities: updatedList };
    });
  };

  const removeParagraph = (facKey, pIdx) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      const paragraphs = (updatedList[idx].paragraphs || []).filter(
        (_, i) => i !== pIdx
      );
      updatedList[idx] = { ...updatedList[idx], paragraphs };
      return { ...prev, facilities: updatedList };
    });
  };

  // Section incharge / coordinator helper
  const updateSectionParagraph = (facKey, secTitle, value) => {
    setData((prev) => {
      const idx = prev.facilities.findIndex(
        (f) => f.key === facKey || f.name === facKey
      );
      if (idx === -1) return prev;
      const updatedList = [...prev.facilities];
      const sections = [...(updatedList[idx].sections || [])];
      const secIdx = sections.findIndex(
        (s) => s.title.toLowerCase() === secTitle.toLowerCase()
      );
      if (secIdx !== -1) {
        sections[secIdx] = {
          ...sections[secIdx],
          paragraphs: [value],
        };
      } else {
        sections.push({
          title: secTitle,
          paragraphs: [value],
        });
      }
      updatedList[idx] = { ...updatedList[idx], sections };
      return { ...prev, facilities: updatedList };
    });
  };

  // Sub-lab helpers (for Laboratory)
  const labFacility =
    data.facilities.find((f) => f.key === "Laboratory") ||
    initialData.facilities.find((f) => f.key === "Laboratory");

  const currentSubLab =
    labFacility?.labs?.[activeLabTab] ||
    initialData.facilities[3]?.labs?.[activeLabTab] ||
    {};

  const updateSubLabField = (field, value) => {
    setData((prev) => {
      const facIdx = prev.facilities.findIndex((f) => f.key === "Laboratory");
      if (facIdx === -1) return prev;
      const updatedFacilities = [...prev.facilities];
      const labs = [...(updatedFacilities[facIdx].labs || [])];
      if (!labs[activeLabTab]) return prev;

      labs[activeLabTab] = {
        ...labs[activeLabTab],
        [field]: value,
      };
      updatedFacilities[facIdx] = {
        ...updatedFacilities[facIdx],
        labs,
      };
      return { ...prev, facilities: updatedFacilities };
    });
  };

  const addSubLabPoint = () => {
    setData((prev) => {
      const facIdx = prev.facilities.findIndex((f) => f.key === "Laboratory");
      if (facIdx === -1) return prev;
      const updatedFacilities = [...prev.facilities];
      const labs = [...(updatedFacilities[facIdx].labs || [])];
      if (!labs[activeLabTab]) return prev;

      const points = [...(labs[activeLabTab].points || []), ""];
      labs[activeLabTab] = { ...labs[activeLabTab], points };
      updatedFacilities[facIdx] = { ...updatedFacilities[facIdx], labs };
      return { ...prev, facilities: updatedFacilities };
    });
  };

  const updateSubLabPoint = (pointIdx, value) => {
    setData((prev) => {
      const facIdx = prev.facilities.findIndex((f) => f.key === "Laboratory");
      if (facIdx === -1) return prev;
      const updatedFacilities = [...prev.facilities];
      const labs = [...(updatedFacilities[facIdx].labs || [])];
      if (!labs[activeLabTab]) return prev;

      const points = [...(labs[activeLabTab].points || [])];
      points[pointIdx] = value;
      labs[activeLabTab] = { ...labs[activeLabTab], points };
      updatedFacilities[facIdx] = { ...updatedFacilities[facIdx], labs };
      return { ...prev, facilities: updatedFacilities };
    });
  };

  const removeSubLabPoint = (pointIdx) => {
    setData((prev) => {
      const facIdx = prev.facilities.findIndex((f) => f.key === "Laboratory");
      if (facIdx === -1) return prev;
      const updatedFacilities = [...prev.facilities];
      const labs = [...(updatedFacilities[facIdx].labs || [])];
      if (!labs[activeLabTab]) return prev;

      const points = (labs[activeLabTab].points || []).filter(
        (_, i) => i !== pointIdx
      );
      labs[activeLabTab] = { ...labs[activeLabTab], points };
      updatedFacilities[facIdx] = { ...updatedFacilities[facIdx], labs };
      return { ...prev, facilities: updatedFacilities };
    });
  };

  // Other facilities helper
  const updateOtherFacilityCard = (index, field, value) => {
    setData((prev) => {
      const facIdx = prev.facilities.findIndex(
        (f) => f.key === "Other Facilities"
      );
      if (facIdx === -1) return prev;
      const updatedFacilities = [...prev.facilities];
      const otherFacilities = [
        ...(updatedFacilities[facIdx].otherFacilities || []),
      ];
      if (!otherFacilities[index]) return prev;

      otherFacilities[index] = {
        ...otherFacilities[index],
        [field]: value,
      };
      updatedFacilities[facIdx] = {
        ...updatedFacilities[facIdx],
        otherFacilities,
      };
      return { ...prev, facilities: updatedFacilities };
    });
  };

  if (loading) {
    return (
      <div className="manage-facilities">
        <div className="facilities-admin-message">
          Loading Facilities Data...
        </div>
      </div>
    );
  }

  const currentFacility =
    activeTab > 0 ? data.facilities[activeTab - 1] : null;

  return (
    <div className="manage-facilities">
      {/* HEADER */}
      <div className="manage-facilities-header">
        <div>
          <span>ADMINISTRATION PANEL</span>
          <h2>
            Manage <strong>Facilities</strong>
          </h2>
          <p>
            Update facilities content, descriptions, highlighted points, and
            upload images with live public synchronization.
          </p>
        </div>

        <div className="facilities-header-actions">
          <a
            href="/facilities"
            target="_blank"
            rel="noopener noreferrer"
            className="facilities-view-btn"
          >
            <FiExternalLink /> View Live Page
          </a>

          {/* <button
            type="button"
            className="facilities-reset-btn"
            onClick={handleResetDefaults}
            disabled={saving}
          >
            <FiRotateCcw /> Reset Defaults
          </button> */}

          <button
            type="button"
            className="facilities-save-btn"
            onClick={handleSave}
            disabled={saving}
          >
            <FiSave /> {saving ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* FEEDBACK ALERT */}
      {message && (
        <div className={`facilities-admin-message ${message.type}`}>
          {message.text}
        </div>
      )}

      {/* TOP TABS NAVIGATION */}
      <div className="facilities-tabs-nav">
        {tabs.map((tabName, index) => (
          <button
            key={tabName}
            type="button"
            className={`facilities-tab-btn ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tabName}
          </button>
        ))}
      </div>

      {/* ==============================================================
          TAB 0: HERO BANNER
      ============================================================== */}
      {activeTab === 0 && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiHome /> Hero Banner & Infrastructure Header
          </h3>
          <p className="facilities-card-desc">
            Edit the top banner heading, subtitle, description, badge, and hero
            photo displayed on the Facilities page.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group">
              <label>Top Badge</label>
              <input
                type="text"
                value={data.hero?.badge || ""}
                onChange={(e) => updateHero("badge", e.target.value)}
                placeholder="e.g. Campus Infrastructure"
              />
            </div>

            <div className="facilities-form-group">
              <label>Hero Title</label>
              <input
                type="text"
                value={data.hero?.title || ""}
                onChange={(e) => updateHero("title", e.target.value)}
                placeholder="e.g. Our Facilities"
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Hero Subtitle</label>
              <input
                type="text"
                value={data.hero?.subtitle || ""}
                onChange={(e) => updateHero("subtitle", e.target.value)}
                placeholder="e.g. Modern Infrastructure for Holistic Development"
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Description Paragraph</label>
              <textarea
                value={data.hero?.description || ""}
                onChange={(e) => updateHero("description", e.target.value)}
                placeholder="Describe college facilities and infrastructure..."
              />
            </div>

            <div className="facilities-form-group">
              <label>Floating Card Title</label>
              <input
                type="text"
                value={data.hero?.cardTitle || ""}
                onChange={(e) => updateHero("cardTitle", e.target.value)}
                placeholder="e.g. Learning Beyond Classrooms"
              />
            </div>

            <div className="facilities-form-group">
              <label>Floating Card Subtitle</label>
              <input
                type="text"
                value={data.hero?.cardSubtitle || ""}
                onChange={(e) => updateHero("cardSubtitle", e.target.value)}
                placeholder="e.g. Infrastructure • Resources • Development"
              />
            </div>

            {/* HERO IMAGE UPLOADER */}
            <div className="facilities-form-group full-width">
              <label>Hero Image</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["heroImage"] || data.hero?.image ? (
                    <img
                      src={
                        imagePreviews["heroImage"] ||
                        getImageUrl(data.hero?.image)
                      }
                      alt="Hero Preview"
                    />
                  ) : (
                    <div className="no-img">No Image Selected</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>
                    Upload a high quality photo of the campus building or
                    learning facilities. Recommended size: 1200x800.
                  </p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Choose New Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange("heroImage", e)}
                    />
                  </label>
                  {imageFiles["heroImage"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Ready to upload: {imageFiles["heroImage"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 1: CLASSROOM
      ============================================================== */}
      {activeTab === 1 && currentFacility && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiHome /> Classroom Management
          </h3>
          <p className="facilities-card-desc">
            Edit classroom descriptions, smart room features, ethics list, and
            upload the classroom photograph.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group full-width">
              <label>Classroom Subtitle</label>
              <input
                type="text"
                value={currentFacility.subtitle || ""}
                onChange={(e) =>
                  updateFacField("Classroom", "subtitle", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Classroom Description</label>
              <textarea
                value={currentFacility.text || ""}
                onChange={(e) =>
                  updateFacField("Classroom", "text", e.target.value)
                }
              />
            </div>

            {/* PHOTO UPLOAD */}
            <div className="facilities-form-group full-width">
              <label>Classroom Photo</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["facilityImage_Classroom"] ||
                  currentFacility.image ? (
                    <img
                      src={
                        imagePreviews["facilityImage_Classroom"] ||
                        getImageUrl(currentFacility.image)
                      }
                      alt="Classroom"
                    />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>Upload a clear photo of the smart classroom.</p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Upload Classroom Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange("facilityImage_Classroom", e)
                      }
                    />
                  </label>
                  {imageFiles["facilityImage_Classroom"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Selected:{" "}
                      {imageFiles["facilityImage_Classroom"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* POINTS / ETHICS */}
            <div className="facilities-form-group full-width">
              <label>Class Room Ethics & Values</label>
              <div className="facilities-items-list">
                {currentFacility.points?.map((pt, pIdx) => (
                  <div key={pIdx} className="facilities-item-row">
                    <span className="facilities-item-num">{pIdx + 1}</span>
                    <input
                      type="text"
                      value={pt}
                      onChange={(e) =>
                        updatePoint("Classroom", pIdx, e.target.value)
                      }
                      placeholder="Point title or value..."
                    />
                    <button
                      type="button"
                      className="facilities-item-delete"
                      onClick={() => removePoint("Classroom", pIdx)}
                      title="Remove point"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => addPoint("Classroom")}
                >
                  <FiPlus /> Add New Point
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 2: ICT CENTER
      ============================================================== */}
      {activeTab === 2 && currentFacility && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiMonitor /> ICT Center Management
          </h3>
          <p className="facilities-card-desc">
            Edit the ICT Centre digital learning intro, incharge name,
            objectives, photo, and equipment list.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group full-width">
              <label>ICT Center Subtitle</label>
              <input
                type="text"
                value={currentFacility.subtitle || ""}
                onChange={(e) =>
                  updateFacField("ICT Center", "subtitle", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>ICT Center Main Description</label>
              <textarea
                value={currentFacility.text || ""}
                onChange={(e) =>
                  updateFacField("ICT Center", "text", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Incharge Name</label>
              <input
                type="text"
                value={
                  currentFacility.sections?.find((s) => s.title === "Incharge")
                    ?.paragraphs?.[0] || ""
                }
                onChange={(e) =>
                  updateSectionParagraph(
                    "ICT Center",
                    "Incharge",
                    e.target.value
                  )
                }
                placeholder="e.g. Ranju Malik"
              />
            </div>

            {/* PHOTO UPLOAD */}
            <div className="facilities-form-group full-width">
              <label>ICT Center Photo</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["facilityImage_ICT Center"] ||
                  currentFacility.image ? (
                    <img
                      src={
                        imagePreviews["facilityImage_ICT Center"] ||
                        getImageUrl(currentFacility.image)
                      }
                      alt="ICT Center"
                    />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>Upload a photo of the computer lab / ICT centre.</p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Upload ICT Center Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange("facilityImage_ICT Center", e)
                      }
                    />
                  </label>
                  {imageFiles["facilityImage_ICT Center"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Selected:{" "}
                      {imageFiles["facilityImage_ICT Center"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* OBJECTIVES */}
            <div className="facilities-form-group full-width">
              <label>Objectives of the ICT Centre</label>
              <div className="facilities-items-list">
                {currentFacility.sections
                  ?.find((s) => s.title.includes("Objectives"))
                  ?.paragraphs?.map((obj, oIdx) => (
                    <div key={oIdx} className="facilities-item-row">
                      <span className="facilities-item-num">{oIdx + 1}</span>
                      <textarea
                        value={obj}
                        onChange={(e) => {
                          const val = e.target.value;
                          setData((prev) => {
                            const idx = prev.facilities.findIndex(
                              (f) => f.key === "ICT Center"
                            );
                            if (idx === -1) return prev;
                            const updatedList = [...prev.facilities];
                            const sections = [
                              ...(updatedList[idx].sections || []),
                            ];
                            const secIdx = sections.findIndex((s) =>
                              s.title.includes("Objectives")
                            );
                            if (secIdx !== -1) {
                              const paragraphs = [
                                ...sections[secIdx].paragraphs,
                              ];
                              paragraphs[oIdx] = val;
                              sections[secIdx] = {
                                ...sections[secIdx],
                                paragraphs,
                              };
                            }
                            updatedList[idx] = {
                              ...updatedList[idx],
                              sections,
                            };
                            return { ...prev, facilities: updatedList };
                          });
                        }}
                      />
                      <button
                        type="button"
                        className="facilities-item-delete"
                        onClick={() => {
                          setData((prev) => {
                            const idx = prev.facilities.findIndex(
                              (f) => f.key === "ICT Center"
                            );
                            if (idx === -1) return prev;
                            const updatedList = [...prev.facilities];
                            const sections = [
                              ...(updatedList[idx].sections || []),
                            ];
                            const secIdx = sections.findIndex((s) =>
                              s.title.includes("Objectives")
                            );
                            if (secIdx !== -1) {
                              const paragraphs = sections[
                                secIdx
                              ].paragraphs.filter((_, i) => i !== oIdx);
                              sections[secIdx] = {
                                ...sections[secIdx],
                                paragraphs,
                              };
                            }
                            updatedList[idx] = {
                              ...updatedList[idx],
                              sections,
                            };
                            return { ...prev, facilities: updatedList };
                          });
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => {
                    setData((prev) => {
                      const idx = prev.facilities.findIndex(
                        (f) => f.key === "ICT Center"
                      );
                      if (idx === -1) return prev;
                      const updatedList = [...prev.facilities];
                      const sections = [...(updatedList[idx].sections || [])];
                      const secIdx = sections.findIndex((s) =>
                        s.title.includes("Objectives")
                      );
                      if (secIdx !== -1) {
                        sections[secIdx] = {
                          ...sections[secIdx],
                          paragraphs: [
                            ...sections[secIdx].paragraphs,
                            "New objective statement...",
                          ],
                        };
                      }
                      updatedList[idx] = { ...updatedList[idx], sections };
                      return { ...prev, facilities: updatedList };
                    });
                  }}
                >
                  <FiPlus /> Add Objective
                </button>
              </div>
            </div>

            {/* ICT EQUIPMENT POINTS */}
            <div className="facilities-form-group full-width">
              <label>ICT Facilities & Equipment Available</label>
              <div className="facilities-items-list">
                {currentFacility.points?.map((pt, pIdx) => (
                  <div key={pIdx} className="facilities-item-row">
                    <span className="facilities-item-num">{pIdx + 1}</span>
                    <input
                      type="text"
                      value={pt}
                      onChange={(e) =>
                        updatePoint("ICT Center", pIdx, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="facilities-item-delete"
                      onClick={() => removePoint("ICT Center", pIdx)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => addPoint("ICT Center")}
                >
                  <FiPlus /> Add Equipment Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 3: LIBRARY
      ============================================================== */}
      {activeTab === 3 && currentFacility && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiBookOpen /> College Library Management
          </h3>
          <p className="facilities-card-desc">
            Edit library collection details, journals, book counts, reference
            sections, photo, and available services.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group full-width">
              <label>Library Subtitle</label>
              <input
                type="text"
                value={currentFacility.subtitle || ""}
                onChange={(e) =>
                  updateFacField("Library", "subtitle", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Library Main Description</label>
              <textarea
                value={currentFacility.text || ""}
                onChange={(e) =>
                  updateFacField("Library", "text", e.target.value)
                }
              />
            </div>

            {/* PHOTO UPLOAD */}
            <div className="facilities-form-group full-width">
              <label>Library Photo</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["facilityImage_Library"] ||
                  currentFacility.image ? (
                    <img
                      src={
                        imagePreviews["facilityImage_Library"] ||
                        getImageUrl(currentFacility.image)
                      }
                      alt="Library"
                    />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>Upload an attractive photo of the library reading hall.</p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Upload Library Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange("facilityImage_Library", e)
                      }
                    />
                  </label>
                  {imageFiles["facilityImage_Library"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Selected:{" "}
                      {imageFiles["facilityImage_Library"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* SECTIONS LIST (Collection, Journals, Magazines, AV, etc.) */}
            <div className="facilities-form-group full-width">
              <label>Library Information Sections</label>
              {currentFacility.sections?.map((sec, sIdx) => (
                <div key={sIdx} className="facilities-section-block">
                  <div className="facilities-section-header">
                    <h4>{sec.title}</h4>
                  </div>
                  <textarea
                    rows={Math.max(2, sec.paragraphs?.length || 2)}
                    value={sec.paragraphs?.join("\n") || ""}
                    onChange={(e) => {
                      const lines = e.target.value.split("\n");
                      setData((prev) => {
                        const idx = prev.facilities.findIndex(
                          (f) => f.key === "Library"
                        );
                        if (idx === -1) return prev;
                        const updatedList = [...prev.facilities];
                        const sections = [...(updatedList[idx].sections || [])];
                        sections[sIdx] = {
                          ...sections[sIdx],
                          paragraphs: lines,
                        };
                        updatedList[idx] = { ...updatedList[idx], sections };
                        return { ...prev, facilities: updatedList };
                      });
                    }}
                    placeholder="Enter paragraphs (one per line)..."
                  />
                </div>
              ))}
            </div>

            {/* LIBRARY SERVICES */}
            <div className="facilities-form-group full-width">
              <label>Library Services & Facilities Provided</label>
              <div className="facilities-items-list">
                {currentFacility.points?.map((pt, pIdx) => (
                  <div key={pIdx} className="facilities-item-row">
                    <span className="facilities-item-num">{pIdx + 1}</span>
                    <input
                      type="text"
                      value={pt}
                      onChange={(e) =>
                        updatePoint("Library", pIdx, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="facilities-item-delete"
                      onClick={() => removePoint("Library", pIdx)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => addPoint("Library")}
                >
                  <FiPlus /> Add Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 4: LABORATORIES
      ============================================================== */}
      {activeTab === 4 && labFacility && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiSettings /> Laboratories & Resource Centres
          </h3>
          <p className="facilities-card-desc">
            Manage the overall Laboratory overview, plus individual details and
            photos for each of the 5 specialized resource labs.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group full-width">
              <label>Overall Laboratory Subtitle</label>
              <input
                type="text"
                value={labFacility.subtitle || ""}
                onChange={(e) =>
                  updateFacField("Laboratory", "subtitle", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Overall Laboratory Description</label>
              <textarea
                value={labFacility.text || ""}
                onChange={(e) =>
                  updateFacField("Laboratory", "text", e.target.value)
                }
              />
            </div>

            {/* OVERALL LAB PHOTO */}
            <div className="facilities-form-group full-width">
              <label>Main Laboratory Photo</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["facilityImage_Laboratory"] ||
                  labFacility.image ? (
                    <img
                      src={
                        imagePreviews["facilityImage_Laboratory"] ||
                        getImageUrl(labFacility.image)
                      }
                      alt="Laboratory"
                    />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>Upload a representative photo of college laboratories.</p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Upload Main Lab Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange("facilityImage_Laboratory", e)
                      }
                    />
                  </label>
                  {imageFiles["facilityImage_Laboratory"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Selected:{" "}
                      {imageFiles["facilityImage_Laboratory"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* SUB-LABS SELECTOR */}
            <div className="facilities-form-group full-width">
              <label>Select Individual Laboratory to Edit</label>
              <div className="facilities-subtabs-nav">
                {subLabTabs.map((labName, sIdx) => (
                  <button
                    key={labName}
                    type="button"
                    className={`facilities-subtab-btn ${
                      activeLabTab === sIdx ? "active" : ""
                    }`}
                    onClick={() => setActiveLabTab(sIdx)}
                  >
                    {labName}
                  </button>
                ))}
              </div>
            </div>

            {/* CURRENT SELECTED SUB-LAB DETAILS */}
            {currentSubLab && (
              <div
                className="facilities-form-group full-width"
                style={{
                  background: "#f8fafc",
                  padding: "16px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h4 style={{ margin: "0 0 14px 0", color: "#102d68" }}>
                  Editing: <strong>{currentSubLab.name}</strong>
                </h4>

                <div className="facilities-form-grid">
                  <div className="facilities-form-group full-width">
                    <label>Sub-Lab Tagline / Subtitle</label>
                    <input
                      type="text"
                      value={currentSubLab.subtitle || ""}
                      onChange={(e) =>
                        updateSubLabField("subtitle", e.target.value)
                      }
                    />
                  </div>

                  <div className="facilities-form-group full-width">
                    <label>Sub-Lab Description</label>
                    <textarea
                      value={currentSubLab.text || ""}
                      onChange={(e) =>
                        updateSubLabField("text", e.target.value)
                      }
                    />
                  </div>

                  {currentSubLab.objectiveTitle !== undefined && (
                    <div className="facilities-form-group full-width">
                      <label>Objective Heading (Optional)</label>
                      <input
                        type="text"
                        value={currentSubLab.objectiveTitle || ""}
                        onChange={(e) =>
                          updateSubLabField("objectiveTitle", e.target.value)
                        }
                        placeholder="e.g. Objectives of Establishing Home Science Laboratory"
                      />
                    </div>
                  )}

                  {/* SUB LAB PHOTO */}
                  <div className="facilities-form-group full-width">
                    <label>{currentSubLab.name} Photo</label>
                    <div className="facilities-image-uploader">
                      <div className="facilities-preview-box">
                        {imagePreviews[
                          `subLabImage_Laboratory_${activeLabTab}`
                        ] || currentSubLab.image ? (
                          <img
                            src={
                              imagePreviews[
                                `subLabImage_Laboratory_${activeLabTab}`
                              ] || getImageUrl(currentSubLab.image)
                            }
                            alt={currentSubLab.name}
                          />
                        ) : (
                          <div className="no-img">No Image</div>
                        )}
                      </div>

                      <div className="facilities-upload-actions">
                        <p>Upload a photo specific to {currentSubLab.name}.</p>
                        <label className="facilities-upload-btn-label">
                          <FiUpload /> Upload {currentSubLab.name} Photo
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleFileChange(
                                `subLabImage_Laboratory_${activeLabTab}`,
                                e
                              )
                            }
                          />
                        </label>
                        {imageFiles[
                          `subLabImage_Laboratory_${activeLabTab}`
                        ] && (
                          <span className="facilities-image-tag">
                            <FiCheck /> Selected:{" "}
                            {
                              imageFiles[
                                `subLabImage_Laboratory_${activeLabTab}`
                              ].name
                            }
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SUB LAB POINTS */}
                  <div className="facilities-form-group full-width">
                    <label>{currentSubLab.name} Equipment & Features</label>
                    <div className="facilities-items-list">
                      {currentSubLab.points?.map((pt, pIdx) => (
                        <div key={pIdx} className="facilities-item-row">
                          <span className="facilities-item-num">
                            {pIdx + 1}
                          </span>
                          <input
                            type="text"
                            value={pt}
                            onChange={(e) =>
                              updateSubLabPoint(pIdx, e.target.value)
                            }
                          />
                          <button
                            type="button"
                            className="facilities-item-delete"
                            onClick={() => removeSubLabPoint(pIdx)}
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="facilities-add-item-btn"
                        onClick={addSubLabPoint}
                      >
                        <FiPlus /> Add {currentSubLab.name} Feature
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 5: SPORTS FACILITIES
      ============================================================== */}
      {activeTab === 5 && currentFacility && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiActivity /> Sports Facilities Management
          </h3>
          <p className="facilities-card-desc">
            Edit sports facilities descriptions, annual sporting events, photo,
            and available games list.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group full-width">
              <label>Sports Subtitle</label>
              <input
                type="text"
                value={currentFacility.subtitle || ""}
                onChange={(e) =>
                  updateFacField("Sports Facilities", "subtitle", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Sports Overview Description</label>
              <textarea
                value={currentFacility.text || ""}
                onChange={(e) =>
                  updateFacField("Sports Facilities", "text", e.target.value)
                }
              />
            </div>

            {/* PHOTO UPLOAD */}
            <div className="facilities-form-group full-width">
              <label>Sports Photo</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["facilityImage_Sports Facilities"] ||
                  currentFacility.image ? (
                    <img
                      src={
                        imagePreviews["facilityImage_Sports Facilities"] ||
                        getImageUrl(currentFacility.image)
                      }
                      alt="Sports"
                    />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>Upload a sports activity or playground photo.</p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Upload Sports Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange("facilityImage_Sports Facilities", e)
                      }
                    />
                  </label>
                  {imageFiles["facilityImage_Sports Facilities"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Selected:{" "}
                      {imageFiles["facilityImage_Sports Facilities"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ADDITIONAL PARAGRAPHS */}
            <div className="facilities-form-group full-width">
              <label>Additional Paragraphs</label>
              <div className="facilities-items-list">
                {currentFacility.paragraphs?.map((pText, pIdx) => (
                  <div key={pIdx} className="facilities-item-row">
                    <span className="facilities-item-num">{pIdx + 1}</span>
                    <textarea
                      value={pText}
                      onChange={(e) =>
                        updateParagraph(
                          "Sports Facilities",
                          pIdx,
                          e.target.value
                        )
                      }
                    />
                    <button
                      type="button"
                      className="facilities-item-delete"
                      onClick={() =>
                        removeParagraph("Sports Facilities", pIdx)
                      }
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => addParagraph("Sports Facilities")}
                >
                  <FiPlus /> Add Paragraph
                </button>
              </div>
            </div>

            {/* SPORTS POINTS */}
            <div className="facilities-form-group full-width">
              <label>Sports & Games List</label>
              <div className="facilities-items-list">
                {currentFacility.points?.map((pt, pIdx) => (
                  <div key={pIdx} className="facilities-item-row">
                    <span className="facilities-item-num">{pIdx + 1}</span>
                    <input
                      type="text"
                      value={pt}
                      onChange={(e) =>
                        updatePoint("Sports Facilities", pIdx, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="facilities-item-delete"
                      onClick={() =>
                        removePoint("Sports Facilities", pIdx)
                      }
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => addPoint("Sports Facilities")}
                >
                  <FiPlus /> Add Sport / Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 6: WOMEN CELL
      ============================================================== */}
      {activeTab === 6 && currentFacility && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiHeart /> Women Cell Management
          </h3>
          <p className="facilities-card-desc">
            Edit Women Cell empowerment activities, coordinator details, photo,
            and seminar/competition initiatives.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group full-width">
              <label>Women Cell Subtitle</label>
              <input
                type="text"
                value={currentFacility.subtitle || ""}
                onChange={(e) =>
                  updateFacField("Women Cell", "subtitle", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Women Cell Main Description</label>
              <textarea
                value={currentFacility.text || ""}
                onChange={(e) =>
                  updateFacField("Women Cell", "text", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Co-ordinator Name</label>
              <input
                type="text"
                value={
                  currentFacility.sections?.find(
                    (s) => s.title === "Co-ordinator"
                  )?.paragraphs?.[0] || ""
                }
                onChange={(e) =>
                  updateSectionParagraph(
                    "Women Cell",
                    "Co-ordinator",
                    e.target.value
                  )
                }
                placeholder="e.g. Dr. (Mrs.) Sushila Sangwan"
              />
            </div>

            {/* PHOTO UPLOAD */}
            <div className="facilities-form-group full-width">
              <label>Women Cell Photo</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["facilityImage_Women Cell"] ||
                  currentFacility.image ? (
                    <img
                      src={
                        imagePreviews["facilityImage_Women Cell"] ||
                        getImageUrl(currentFacility.image)
                      }
                      alt="Women Cell"
                    />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>Upload a photo of women empowerment initiatives/seminars.</p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Upload Women Cell Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange("facilityImage_Women Cell", e)
                      }
                    />
                  </label>
                  {imageFiles["facilityImage_Women Cell"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Selected:{" "}
                      {imageFiles["facilityImage_Women Cell"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* WOMEN CELL PARAGRAPHS */}
            <div className="facilities-form-group full-width">
              <label>Activities & Awareness Paragraphs</label>
              <div className="facilities-items-list">
                {currentFacility.paragraphs?.map((pText, pIdx) => (
                  <div key={pIdx} className="facilities-item-row">
                    <span className="facilities-item-num">{pIdx + 1}</span>
                    <textarea
                      value={pText}
                      onChange={(e) =>
                        updateParagraph("Women Cell", pIdx, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="facilities-item-delete"
                      onClick={() => removeParagraph("Women Cell", pIdx)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => addParagraph("Women Cell")}
                >
                  <FiPlus /> Add Paragraph
                </button>
              </div>
            </div>

            {/* INITIATIVES POINTS */}
            <div className="facilities-form-group full-width">
              <label>Women Cell Initiatives & Activities</label>
              <div className="facilities-items-list">
                {currentFacility.points?.map((pt, pIdx) => (
                  <div key={pIdx} className="facilities-item-row">
                    <span className="facilities-item-num">{pIdx + 1}</span>
                    <input
                      type="text"
                      value={pt}
                      onChange={(e) =>
                        updatePoint("Women Cell", pIdx, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="facilities-item-delete"
                      onClick={() => removePoint("Women Cell", pIdx)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="facilities-add-item-btn"
                  onClick={() => addPoint("Women Cell")}
                >
                  <FiPlus /> Add Initiative
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 7: OTHER FACILITIES
      ============================================================== */}
      {activeTab === 7 && currentFacility && (
        <div className="facilities-card">
          <h3 className="facilities-card-title">
            <FiSettings /> Other Campus Facilities
          </h3>
          <p className="facilities-card-desc">
            Edit Seminar Hall, Multipurpose Hall, Canteen, and Transport support
            services cards.
          </p>

          <div className="facilities-form-grid">
            <div className="facilities-form-group full-width">
              <label>Other Facilities Subtitle</label>
              <input
                type="text"
                value={currentFacility.subtitle || ""}
                onChange={(e) =>
                  updateFacField("Other Facilities", "subtitle", e.target.value)
                }
              />
            </div>

            <div className="facilities-form-group full-width">
              <label>Overview Description</label>
              <textarea
                value={currentFacility.text || ""}
                onChange={(e) =>
                  updateFacField("Other Facilities", "text", e.target.value)
                }
              />
            </div>

            {/* PHOTO UPLOAD */}
            <div className="facilities-form-group full-width">
              <label>Other Facilities Photo</label>
              <div className="facilities-image-uploader">
                <div className="facilities-preview-box">
                  {imagePreviews["facilityImage_Other Facilities"] ||
                  currentFacility.image ? (
                    <img
                      src={
                        imagePreviews["facilityImage_Other Facilities"] ||
                        getImageUrl(currentFacility.image)
                      }
                      alt="Other Facilities"
                    />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>

                <div className="facilities-upload-actions">
                  <p>Upload a campus facility photograph.</p>
                  <label className="facilities-upload-btn-label">
                    <FiUpload /> Upload Facility Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange("facilityImage_Other Facilities", e)
                      }
                    />
                  </label>
                  {imageFiles["facilityImage_Other Facilities"] && (
                    <span className="facilities-image-tag">
                      <FiCheck /> Selected:{" "}
                      {imageFiles["facilityImage_Other Facilities"].name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 4 INDIVIDUAL SUPPORT SERVICE CARDS */}
            <div className="facilities-form-group full-width">
              <label>Campus Support Services</label>
              <div className="other-subfacilities-grid">
                {currentFacility.otherFacilities?.map((card, cIdx) => (
                  <div key={cIdx} className="other-subfacility-card">
                    <h4>{card.title}</h4>
                    <div className="facilities-form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) =>
                          updateOtherFacilityCard(cIdx, "title", e.target.value)
                        }
                      />
                    </div>
                    <div className="facilities-form-group">
                      <label>Description</label>
                      <textarea
                        value={card.text}
                        onChange={(e) =>
                          updateOtherFacilityCard(cIdx, "text", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM ACTION BAR */}
      <div className="facilities-footer-actions">
        <button
          type="button"
          className="facilities-reset-btn"
          onClick={handleResetDefaults}
          disabled={saving}
        >
          <FiRotateCcw /> Reset Defaults
        </button>

        <button
          type="button"
          className="facilities-save-btn"
          onClick={handleSave}
          disabled={saving}
        >
          <FiSave /> {saving ? "Saving Changes..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default ManageFacilities;
