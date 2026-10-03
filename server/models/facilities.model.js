const mongoose = require("mongoose");

const defaultFacilitiesData = {
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

const facilitySectionSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    paragraphs: [{ type: String }],
  },
  { _id: false }
);

const otherFacilityItemSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    icon: { type: String, default: "FiMonitor" },
    text: { type: String, default: "" },
  },
  { _id: false }
);

const subLabSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, default: "FiMonitor" },
    image: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    text: { type: String, default: "" },
    paragraphs: [{ type: String }],
    objectiveTitle: { type: String, default: "" },
    points: [{ type: String }],
  },
  { _id: false }
);

const facilityItemSchema = new mongoose.Schema(
  {
    key: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, default: "FiHome" },
    image: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    text: { type: String, default: "" },
    paragraphs: [{ type: String }],
    sections: [facilitySectionSchema],
    points: [{ type: String }],
    otherFacilities: [otherFacilityItemSchema],
    labs: [subLabSchema],
  },
  { _id: false }
);

const facilitiesPageSchema = new mongoose.Schema(
  {
    hero: {
      badge: { type: String, default: "Campus Infrastructure" },
      title: { type: String, default: "Our Facilities" },
      titleHighlight: { type: String, default: "Facilities" },
      subtitle: {
        type: String,
        default: "Modern Infrastructure for Holistic Development",
      },
      description: {
        type: String,
        default:
          "We provide supportive, inclusive and enriching facilities to strengthen learning, practical exposure and student life.",
      },
      image: { type: String, default: "/images/campus-about.jpg" },
      cardTitle: { type: String, default: "Learning Beyond Classrooms" },
      cardSubtitle: {
        type: String,
        default: "Infrastructure • Resources • Development",
      },
    },
    facilities: [facilityItemSchema],
  },
  {
    timestamps: true,
  }
);

const Facilities = mongoose.model("Facilities", facilitiesPageSchema);

module.exports = {
  Facilities,
  defaultFacilitiesData,
};
