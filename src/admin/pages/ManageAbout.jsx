import React, {
  useEffect,
  useState,
} from "react";

import {
  FiSave,
  FiUpload,
  FiPlus,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiImage,
} from "react-icons/fi";

import "./ManageAbout.css";


const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


const steps = [
  "Hero",
  "History",
  "Inspiration",
  "Society",
  "Institutions",
  "Objectives",
  "Panchayat",
  "Vision & Mission",
  "Principal",
  "Strength",
  "CTA",
];


const defaultData = {
  hero: {
    title: "About",
    titleAccent: "Us",
    subtitle:
      "Nurturing Educators for a Better Tomorrow",
    description:
      "Chhotu Ram College of Education, Rohtak is dedicated to excellence in teacher education and committed to shaping responsible, skilled and value-based educators for a progressive and inclusive society.",
    image: "/images/campus-about.jpg",
    captionSmall: "Education",
    captionStrong: "Empowers Nation",
  },

  history: {
    paragraphs: [
      "Chhotu Ram College of Education is one of the premier institutions of Haryana. Catering to the growing concern of our leaders to impart quality education to the students, it was felt that the objective can only be achieved if we have a sizable class of well trained teachers.",
      "Hence B.T. class was started in 1951 and B.Ed. in 1955 under the patronage of Ch. Uday Mann, worthy president of Jat Society and Sh. S.S. Gill, Principal. The institution scaled another height when M.Ed. was introduced in the college.",
      "The institution has contributed a lot in spreading higher education in North India. The institution has the pride privilege of having Dr. Rajender Prasad, Hon’ble President of India as the Guest of honor to award degrees to the students in 1958.",
      "The college has an attractive building with latest infrastructure and well stocked library.",
      "The college has also been successfully managing IGNOU study Centre since 1987. We know that the goals of higher education are always expanding. The college is committed to the noble task of trying to follow the ever expanding horizon of education.",
    ],

    highlights: [
      {
        value: "1951",
        label: "B.T. Class Started",
      },
      {
        value: "1955",
        label: "B.Ed. Introduced",
      },
      {
        value: "M.Ed.",
        label: "Higher Education Expanded",
      },
      {
        value: "1987",
        label: "IGNOU Study Centre",
      },
    ],
  },

  inspiration: {
    image: "/images/chhotu-ram.jpg",
    badge: "1881 – 1945",
    name: "Deenbandhu Sir Chhotu Ram",
    designation:
      "Educationist • Reformer • Visionary Leader",

    paragraphs: [
      "Deenbandhu Sir Chhotu Ram was born on 24th Nov. 1881 in Garhi Sampla, a village in the old Rohtak District, in the family of Ch. Sukh Ram and Mrs. Sirya Devi.",
      "He was a renowned educationist and was named as the father of reform for farmers. He established Jat Anglo Sansthan on 26th March, 1913 after completion of his Graduation in Law.",
      "In 1916, he became president of Congress Party and continued till 1919. He formed Unionist Party in 1923 and became Agriculture Minister in 1924, continuing till 1926.",
      "He remained as Development Minister from 1937-45 after his party came into power. He was awarded various honours including Rai Bahadur, Deenbandhu and Rehbar-e-Azam.",
      "Besides being a luminary figure in agricultural and educational reforms, he was involved in various developmental policies for joint Punjab including Bhakra's Project.",
    ],

    quote:
      "His vision of an educated, self-reliant and socially responsible society continues to inspire generations and strengthens our commitment to meaningful education.",

    quoteLabel:
      "Our Guiding Inspiration",
  },

  society: {
    paragraphs: [
      "Jat Education Society, Rohtak is an educational society registered under Societies Regulation Act XXI of 1860. The society was formed in 1914 under the name of Jat Anglo Sanskrit High School, Rohtak with the prime object to serve the cause of education.",
      "In the year 1927 it changed its name as Jat Heroes Memorial Anglo Sanskrit High School, Rohtak. The name of the society was changed to Jat Education Society, Rohtak in 1977.",
      "The society is presently running nine prestigious institutions dedicated to education and development.",
    ],

    buttonText: "Contact Us",
    buttonLink: "/contact",

    cards: [
      {
        title: "Quality",
        subtitle: "Education",
      },
      {
        title: "Social",
        subtitle: "Development",
      },
      {
        title: "Community",
        subtitle: "Empowerment",
      },
      {
        title: "Inclusive",
        subtitle: "Growth",
      },
    ],
  },

  institutions: {
    items: [
      "Chhotu Ram College of Education, Rohtak",
      "Jat HAMS High School, Rohtak",
      "Jat Senior Secondary Schools, Rohtak",
      "Chhotu Ram Memorial Public School, Rohtak",
      "All India Jat Heroes Memorial Degree College, Rohtak",
      "M.K.J.K. Degree College, Rohtak",
      "Chhotu Ram Polytechnic College, Rohtak",
      "Matu Ram Institute of Engineering and Management, Rohtak",
      "C.R. Institute of Law, Rohtak",
    ],
  },

  objectives: {
    intro:
      "The institution is committed to preparing professionally competent, reflective, socially sensitive and value-based teachers who can contribute meaningfully to education, society and nation building.",

    items: [
      "To ensure that the youth gets adequate opportunities to identify and develop their skills and potentials.",
      "To produce intellectual capital in term of research output, transfer of knowledge and technology oriented attitude to land in the field of education.",
      "To enable prospective teachers to understand the inter-disciplinary nature of educational theory and practice and its incorporation in teacher education.",
      "To prepare individual for independent learning to develop reference skills, critical thinking, conceptualization and self evaluation of their own progress.",
      "To enable prospective teacher to realize diverse need of students and give respect to equity.",
      "To prepare the prospective teachers for self development and advancement in their field.",
      "To mould individuals into integrated personalities who are competent, spiritually mature, physically strong and socially sensitive.",
      "To help them build happy and healthy school and community relationship and promote interest in life long learning.",
      "To develop feeling of love for Indian culture and strengthen a sense of national pride and identity among the prospective teachers.",
      "To create among them the awareness of environmental protection and need to maintain ecological balance.",
      "To prepare them for inculcation of values and develop sense of citizenship.",
      "To enable the prospective teachers to inculcate dignity and morality in work and produce work culture among their students.",
      "To empower them to prepare fully professionally competent, committed and reflective teachers for secondary and senior secondary school education.",
      "To enable them to develop the teaching competencies and performance skill for the subjects they have to teach, using appropriate aids including ICT.",
      "To provide among them the capacity to think, problem solving attitude, capacity to undertake action research and research.",
    ],
  },

  panchayat: {
    paragraphs: [
      "The three days orientation programme for the newly inducted B.Ed. and M.Ed. students are organised. This orientation enables them to become familiar with the activities and programmes of the college.",
      "In the beginning of the session Chhatra Panchayat and Clubs are formed. Chhatra Panchayat and clubs are actively involved in planning, organizing and executing various activities of the institution along with the faculty.",
      "In Chhatra Panchayat and method clubs students develop various characteristics including cooperation, leadership, creativity, advancement of knowledge, decision making, self disclosure, sharing, self-confidence, social values and dignity towards manual works.",
    ],

    points: [
      "Student Representation",
      "Leadership Development",
      "Cooperation & Teamwork",
      "Creative Thinking",
      "Decision Making",
      "Self Confidence",
      "Social Values",
      "Sharing & Self Disclosure",
      "Dignity of Manual Work",
      "Participation in College Activities",
    ],

    image: "/images/panchayat.jpg",
    overlayTitle: "Student Leadership",
    overlayText:
      "Cooperation • Responsibility • Participation",
  },

  visionMission: {
    vision:
      "To provide intellectual and moral leadership by igniting the mind of student teachers to realize their potential and make positive contribution leading to prosperity of education, society and nation at large.",

    mission:
      "To provide educational opportunities to release the inherent capabilities of all student teachers to make them professionally competent, morally mature, socially sensitive, cooperative, ICT enabled, research oriented and globally awakened in a dynamic environment.",

    missionPoints: [
      "Professional Competence",
      "Moral & Social Responsibility",
      "ICT Enabled Learning",
      "Research Orientation",
    ],
  },

  principal: {
    image: "/images/principal.jpg",
    label: "Principal",

    quote:
      "Our aim is to develop enlightened, responsible and skilled teachers who can bring positive changes in society.",

    paragraph:
      "We focus on holistic development, discipline and the pursuit of excellence in teacher education.",

    signature: "Principal, CRCOE",
  },

  strength: {
    items: [
      {
        value: "500+",
        label: "Students",
      },
      {
        value: "50+",
        label: "Faculty",
      },
      {
        value: "2+",
        label: "Programmes",
      },
      {
        value: "100%",
        label: "Commitment",
      },
    ],
  },

  cta: {
    title:
      "Education for a Better Tomorrow",

    description:
      "Empowering future educators with knowledge, values, skills and responsibility.",

    buttonText:
      "Explore Academics",

    buttonLink:
      "/academics",
  },
};


const clone = (value) =>
  JSON.parse(
    JSON.stringify(value)
  );


const mergeData = (saved = {}) => ({
  ...clone(defaultData),
  ...saved,

  hero: {
    ...defaultData.hero,
    ...(saved.hero || {}),
  },

  history: {
    ...defaultData.history,
    ...(saved.history || {}),
  },

  inspiration: {
    ...defaultData.inspiration,
    ...(saved.inspiration || {}),
  },

  society: {
    ...defaultData.society,
    ...(saved.society || {}),
  },

  institutions: {
    ...defaultData.institutions,
    ...(saved.institutions || {}),
  },

  objectives: {
    ...defaultData.objectives,
    ...(saved.objectives || {}),
  },

  panchayat: {
    ...defaultData.panchayat,
    ...(saved.panchayat || {}),
  },

  visionMission: {
    ...defaultData.visionMission,
    ...(saved.visionMission || {}),
  },

  principal: {
    ...defaultData.principal,
    ...(saved.principal || {}),
  },

  strength: {
    ...defaultData.strength,
    ...(saved.strength || {}),
  },

  cta: {
    ...defaultData.cta,
    ...(saved.cta || {}),
  },
});


const imageUrl = (image) => {
  if (!image) return "";

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:")
  ) {
    return image;
  }

  if (image.startsWith("/uploads")) {
    return `${API_URL}${image}`;
  }

  return image;
};


export default function ManageAbout() {

  const [data, setData] =
    useState(clone(defaultData));

  const [step, setStep] =
    useState(0);

  const [images, setImages] =
    useState({
      heroImage: null,
      inspirationImage: null,
      panchayatImage: null,
      principalImage: null,
    });

  const [previews, setPreviews] =
    useState({
      heroImage: "",
      inspirationImage: "",
      panchayatImage: "",
      principalImage: "",
    });

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const token =
    localStorage.getItem(
      "crcoe_admin_token"
    );


  // ===================================================
  // LOAD
  // ===================================================

  useEffect(() => {
    loadAbout();
  }, []);


  const loadAbout = async () => {

    try {

      setLoading(true);

      const response =
        await fetch(
          `${API_URL}/api/about/admin`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
          "Failed to load About data"
        );
      }


      /*
       * DB data exists:
       * use DB data.
       *
       * DB empty:
       * use frontend data and save it once.
       */

      if (result.data) {

        const merged =
          mergeData(
            result.data
          );

        setData(merged);

        updatePreviews(
          merged
        );

      } else {

        const seeded =
          await seedAbout();

        setData(
          seeded
        );

        updatePreviews(
          seeded
        );
      }

    } catch (error) {

      console.error(
        "Load About Error:",
        error
      );

      setMessage(
        error.message ||
        "Failed to load About page."
      );

    } finally {

      setLoading(false);

    }
  };


  // ===================================================
  // SEED CURRENT FRONTEND DATA
  // ===================================================

  const seedAbout = async () => {

    const response =
      await fetch(
        `${API_URL}/api/about/seed`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify(
            defaultData
          ),
        }
      );

    const result =
      await response.json();

    if (
      !response.ok ||
      !result.success
    ) {
      throw new Error(
        result.message ||
        "Failed to save existing About content."
      );
    }

    setMessage(
      "Existing About content saved to database."
    );

    return mergeData(
      result.data
    );
  };


  // ===================================================
  // PREVIEWS
  // ===================================================

  const updatePreviews = (
    aboutData
  ) => {

    setPreviews({
      heroImage:
        imageUrl(
          aboutData.hero?.image
        ),

      inspirationImage:
        imageUrl(
          aboutData.inspiration?.image
        ),

      panchayatImage:
        imageUrl(
          aboutData.panchayat?.image
        ),

      principalImage:
        imageUrl(
          aboutData.principal?.image
        ),
    });
  };


  // ===================================================
  // SECTION UPDATE
  // ===================================================

  const updateSection = (
    section,
    field,
    value
  ) => {

    setData((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],

        [field]: value,
      },
    }));
  };


  // ===================================================
  // ARRAY UPDATE
  // ===================================================

  const updateArray = (
    section,
    field,
    index,
    value
  ) => {

    setData((prev) => {

      const array = [
        ...(prev[section]?.[field] ||
          []),
      ];

      array[index] = value;

      return {
        ...prev,

        [section]: {
          ...prev[section],

          [field]: array,
        },
      };
    });
  };


  const addArrayItem = (
    section,
    field,
    value = ""
  ) => {

    setData((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],

        [field]: [
          ...(prev[section]?.[field] ||
            []),
          value,
        ],
      },
    }));
  };


  const removeArrayItem = (
    section,
    field,
    index
  ) => {

    setData((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],

        [field]:
          prev[section][field].filter(
            (_, i) =>
              i !== index
          ),
      },
    }));
  };


  // ===================================================
  // OBJECT ARRAY
  // ===================================================

  const updateObjectArray = (
    section,
    field,
    index,
    key,
    value
  ) => {

    setData((prev) => {

      const array = [
        ...(prev[section]?.[field] ||
          []),
      ];

      array[index] = {
        ...array[index],
        [key]: value,
      };

      return {
        ...prev,

        [section]: {
          ...prev[section],

          [field]: array,
        },
      };
    });
  };


  // ===================================================
  // IMAGE
  // ===================================================

  const handleImage = (
    field,
    event
  ) => {

    const file =
      event.target.files?.[0];

    if (!file) return;


    const allowed = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (
      !allowed.includes(
        file.type
      )
    ) {

      setMessage(
        "Only JPG, PNG and WEBP images are allowed."
      );

      return;
    }


    if (
      file.size >
      5 * 1024 * 1024
    ) {

      setMessage(
        "Image size must be less than 5MB."
      );

      return;
    }


    setImages((prev) => ({
      ...prev,
      [field]: file,
    }));


    setPreviews((prev) => ({
      ...prev,

      [field]:
        URL.createObjectURL(
          file
        ),
    }));
  };


  // ===================================================
  // SAVE
  // ===================================================

  const saveAbout = async () => {

    try {

      setSaving(true);
      setMessage("");


      const formData =
        new FormData();


      formData.append(
        "data",
        JSON.stringify(data)
      );


      Object.entries(
        images
      ).forEach(
        ([key, file]) => {

          if (file) {

            formData.append(
              key,
              file
            );
          }
        }
      );


      const response =
        await fetch(
          `${API_URL}/api/about`,
          {
            method: "PUT",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },

            body: formData,
          }
        );


      const result =
        await response.json();


      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
          "Save failed"
        );
      }


      const saved =
        mergeData(
          result.data
        );


      setData(saved);

      updatePreviews(
        saved
      );


      setImages({
        heroImage: null,
        inspirationImage: null,
        panchayatImage: null,
        principalImage: null,
      });


      setMessage(
        "About page saved successfully."
      );

    } catch (error) {

      console.error(
        "Save About Error:",
        error
      );

      setMessage(
        error.message ||
        "Failed to save About page."
      );

    } finally {

      setSaving(false);

    }
  };


  if (loading) {

    return (
      <div className="manage-about-loading">
        Loading About page...
      </div>
    );
  }


  return (

    <div className="manage-about">

      {/* HEADER */}

      <div className="manage-about-header">

        <div>

          <span>
            WEBSITE CONTENT
          </span>

          <h2>
            Manage{" "}
            <strong>
              About Us
            </strong>
          </h2>

          <p>
            Manage complete About page
            section by section.
          </p>

        </div>


        <button
          className="about-save-btn"
          onClick={saveAbout}
          disabled={saving}
        >

          <FiSave />

          {saving
            ? "Saving..."
            : "Save Changes"}

        </button>

      </div>


      {/* MESSAGE */}

      {message && (

        <div className="about-admin-message">

          <FiCheck />

          {message}

        </div>

      )}


      {/* STEPS */}

      <div className="about-step-bar">

        {steps.map(
          (item, index) => (

            <button
              key={item}
              className={
                step === index
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStep(index)
              }
            >

              <span>
                {String(
                  index + 1
                ).padStart(2, "0")}
              </span>

              {item}

            </button>

          )
        )}

      </div>


      {/* EDITOR */}

      <div className="about-editor-card">


        {/* HERO */}

        {step === 0 && (

          <StepWrapper
            title="Hero Section"
            description="Manage the main About page banner."
          >

            <TextField
              label="Main Title"
              value={
                data.hero.title
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "title",
                  value
                )
              }
            />

            <TextField
              label="Title Accent"
              value={
                data.hero.titleAccent
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "titleAccent",
                  value
                )
              }
            />

            <TextField
              label="Subtitle"
              value={
                data.hero.subtitle
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "subtitle",
                  value
                )
              }
            />

            <TextArea
              label="Description"
              value={
                data.hero.description
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "description",
                  value
                )
              }
            />

            <ImageUpload
              label="Hero Image"
              preview={
                previews.heroImage
              }
              onChange={(e) =>
                handleImage(
                  "heroImage",
                  e
                )
              }
            />

            <TextField
              label="Small Caption"
              value={
                data.hero.captionSmall
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "captionSmall",
                  value
                )
              }
            />

            <TextField
              label="Strong Caption"
              value={
                data.hero.captionStrong
              }
              onChange={(value) =>
                updateSection(
                  "hero",
                  "captionStrong",
                  value
                )
              }
            />

          </StepWrapper>

        )}


        {/* HISTORY */}

        {step === 1 && (

          <StepWrapper
            title="Brief History"
            description="Manage college history and milestones."
          >

            <ArrayTextArea
              title="History Paragraphs"
              items={
                data.history.paragraphs
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "history",
                  "paragraphs",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "history",
                  "paragraphs"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "history",
                  "paragraphs",
                  index
                )
              }
            />


            <div className="array-editor full">

              <h4>
                History Highlights
              </h4>


              {data.history.highlights.map(
                (item, index) => (

                  <div
                    className="repeat-row"
                    key={index}
                  >

                    <TextField
                      label="Value"
                      value={
                        item.value
                      }
                      onChange={(value) =>
                        updateObjectArray(
                          "history",
                          "highlights",
                          index,
                          "value",
                          value
                        )
                      }
                    />

                    <TextField
                      label="Label"
                      value={
                        item.label
                      }
                      onChange={(value) =>
                        updateObjectArray(
                          "history",
                          "highlights",
                          index,
                          "label",
                          value
                        )
                      }
                    />

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeArrayItem(
                          "history",
                          "highlights",
                          index
                        )
                      }
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                )
              )}


              <button
                className="add-row-btn"
                onClick={() =>
                  addArrayItem(
                    "history",
                    "highlights",
                    {
                      value: "",
                      label: "",
                    }
                  )
                }
              >

                <FiPlus />

                Add Highlight

              </button>

            </div>

          </StepWrapper>

        )}


        {/* INSPIRATION */}

        {step === 2 && (

          <StepWrapper
            title="Inspiration"
            description="Manage Sir Chhotu Ram inspiration section."
          >

            <ImageUpload
              label="Inspiration Image"
              preview={
                previews.inspirationImage
              }
              onChange={(e) =>
                handleImage(
                  "inspirationImage",
                  e
                )
              }
            />

            <TextField
              label="Badge"
              value={
                data.inspiration.badge
              }
              onChange={(value) =>
                updateSection(
                  "inspiration",
                  "badge",
                  value
                )
              }
            />

            <TextField
              label="Name"
              value={
                data.inspiration.name
              }
              onChange={(value) =>
                updateSection(
                  "inspiration",
                  "name",
                  value
                )
              }
            />

            <TextField
              label="Designation"
              value={
                data.inspiration.designation
              }
              onChange={(value) =>
                updateSection(
                  "inspiration",
                  "designation",
                  value
                )
              }
            />

            <ArrayTextArea
              title="Biography"
              items={
                data.inspiration.paragraphs
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "inspiration",
                  "paragraphs",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "inspiration",
                  "paragraphs"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "inspiration",
                  "paragraphs",
                  index
                )
              }
            />

            <TextArea
              label="Quote"
              value={
                data.inspiration.quote
              }
              onChange={(value) =>
                updateSection(
                  "inspiration",
                  "quote",
                  value
                )
              }
            />

            <TextField
              label="Quote Label"
              value={
                data.inspiration.quoteLabel
              }
              onChange={(value) =>
                updateSection(
                  "inspiration",
                  "quoteLabel",
                  value
                )
              }
            />

          </StepWrapper>

        )}


        {/* SOCIETY */}

        {step === 3 && (

          <StepWrapper
            title="About the Society"
            description="Manage society information and cards."
          >

            <ArrayTextArea
              title="Society Paragraphs"
              items={
                data.society.paragraphs
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "society",
                  "paragraphs",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "society",
                  "paragraphs"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "society",
                  "paragraphs",
                  index
                )
              }
            />


            <TextField
              label="Button Text"
              value={
                data.society.buttonText
              }
              onChange={(value) =>
                updateSection(
                  "society",
                  "buttonText",
                  value
                )
              }
            />


            <TextField
              label="Button Link"
              value={
                data.society.buttonLink
              }
              onChange={(value) =>
                updateSection(
                  "society",
                  "buttonLink",
                  value
                )
              }
            />


            <div className="array-editor full">

              <h4>
                Society Cards
              </h4>


              {data.society.cards.map(
                (item, index) => (

                  <div
                    className="repeat-row"
                    key={index}
                  >

                    <TextField
                      label="Title"
                      value={
                        item.title
                      }
                      onChange={(value) =>
                        updateObjectArray(
                          "society",
                          "cards",
                          index,
                          "title",
                          value
                        )
                      }
                    />

                    <TextField
                      label="Subtitle"
                      value={
                        item.subtitle
                      }
                      onChange={(value) =>
                        updateObjectArray(
                          "society",
                          "cards",
                          index,
                          "subtitle",
                          value
                        )
                      }
                    />

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeArrayItem(
                          "society",
                          "cards",
                          index
                        )
                      }
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                )
              )}


              <button
                className="add-row-btn"
                onClick={() =>
                  addArrayItem(
                    "society",
                    "cards",
                    {
                      title: "",
                      subtitle: "",
                    }
                  )
                }
              >

                <FiPlus />

                Add Society Card

              </button>

            </div>

          </StepWrapper>

        )}


        {/* INSTITUTIONS */}

        {step === 4 && (

          <StepWrapper
            title="Institutions"
            description="Manage institutions under Jat Education Society."
          >

            <ArrayTextArea
              title="Institutions List"
              items={
                data.institutions.items
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "institutions",
                  "items",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "institutions",
                  "items"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "institutions",
                  "items",
                  index
                )
              }
            />

          </StepWrapper>

        )}


        {/* OBJECTIVES */}

        {step === 5 && (

          <StepWrapper
            title="Objectives"
            description="Manage all objectives displayed on About page."
          >

            <TextArea
              label="Objectives Introduction"
              value={
                data.objectives.intro
              }
              onChange={(value) =>
                updateSection(
                  "objectives",
                  "intro",
                  value
                )
              }
            />


            <ArrayTextArea
              title="Objectives"
              items={
                data.objectives.items
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "objectives",
                  "items",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "objectives",
                  "items"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "objectives",
                  "items",
                  index
                )
              }
            />

          </StepWrapper>

        )}


        {/* PANCHAYAT */}

        {step === 6 && (

          <StepWrapper
            title="Chhatra Panchayat"
            description="Manage student leadership section."
          >

            <ArrayTextArea
              title="Paragraphs"
              items={
                data.panchayat.paragraphs
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "panchayat",
                  "paragraphs",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "panchayat",
                  "paragraphs"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "panchayat",
                  "paragraphs",
                  index
                )
              }
            />


            <ArrayTextArea
              title="Panchayat Points"
              items={
                data.panchayat.points
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "panchayat",
                  "points",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "panchayat",
                  "points"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "panchayat",
                  "points",
                  index
                )
              }
            />


            <ImageUpload
              label="Panchayat Image"
              preview={
                previews.panchayatImage
              }
              onChange={(e) =>
                handleImage(
                  "panchayatImage",
                  e
                )
              }
            />


            <TextField
              label="Overlay Title"
              value={
                data.panchayat.overlayTitle
              }
              onChange={(value) =>
                updateSection(
                  "panchayat",
                  "overlayTitle",
                  value
                )
              }
            />


            <TextField
              label="Overlay Text"
              value={
                data.panchayat.overlayText
              }
              onChange={(value) =>
                updateSection(
                  "panchayat",
                  "overlayText",
                  value
                )
              }
            />

          </StepWrapper>

        )}


        {/* VISION MISSION */}

        {step === 7 && (

          <StepWrapper
            title="Vision & Mission"
            description="Manage institution vision, mission and values."
          >

            <TextArea
              label="Vision"
              value={
                data.visionMission.vision
              }
              onChange={(value) =>
                updateSection(
                  "visionMission",
                  "vision",
                  value
                )
              }
            />


            <TextArea
              label="Mission"
              value={
                data.visionMission.mission
              }
              onChange={(value) =>
                updateSection(
                  "visionMission",
                  "mission",
                  value
                )
              }
            />


            <ArrayTextArea
              title="Mission Points"
              items={
                data.visionMission
                  .missionPoints
              }
              onChange={(
                index,
                value
              ) =>
                updateArray(
                  "visionMission",
                  "missionPoints",
                  index,
                  value
                )
              }
              onAdd={() =>
                addArrayItem(
                  "visionMission",
                  "missionPoints"
                )
              }
              onRemove={(index) =>
                removeArrayItem(
                  "visionMission",
                  "missionPoints",
                  index
                )
              }
            />

          </StepWrapper>

        )}


        {/* PRINCIPAL */}

        {step === 8 && (

          <StepWrapper
            title="Principal's Message"
            description="Manage principal photo and message."
          >

            <ImageUpload
              label="Principal Image"
              preview={
                previews.principalImage
              }
              onChange={(e) =>
                handleImage(
                  "principalImage",
                  e
                )
              }
            />


            <TextField
              label="Label"
              value={
                data.principal.label
              }
              onChange={(value) =>
                updateSection(
                  "principal",
                  "label",
                  value
                )
              }
            />


            <TextArea
              label="Principal Quote"
              value={
                data.principal.quote
              }
              onChange={(value) =>
                updateSection(
                  "principal",
                  "quote",
                  value
                )
              }
            />


            <TextArea
              label="Principal Description"
              value={
                data.principal.paragraph
              }
              onChange={(value) =>
                updateSection(
                  "principal",
                  "paragraph",
                  value
                )
              }
            />


            <TextField
              label="Signature"
              value={
                data.principal.signature
              }
              onChange={(value) =>
                updateSection(
                  "principal",
                  "signature",
                  value
                )
              }
            />

          </StepWrapper>

        )}


        {/* STRENGTH */}

        {step === 9 && (

          <StepWrapper
            title="Strength"
            description="Manage institution strength counters."
          >

            <div className="array-editor full">

              <h4>
                Strength Items
              </h4>


              {data.strength.items.map(
                (item, index) => (

                  <div
                    className="repeat-row"
                    key={index}
                  >

                    <TextField
                      label="Value"
                      value={
                        item.value
                      }
                      onChange={(value) =>
                        updateObjectArray(
                          "strength",
                          "items",
                          index,
                          "value",
                          value
                        )
                      }
                    />

                    <TextField
                      label="Label"
                      value={
                        item.label
                      }
                      onChange={(value) =>
                        updateObjectArray(
                          "strength",
                          "items",
                          index,
                          "label",
                          value
                        )
                      }
                    />

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeArrayItem(
                          "strength",
                          "items",
                          index
                        )
                      }
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                )
              )}


              <button
                className="add-row-btn"
                onClick={() =>
                  addArrayItem(
                    "strength",
                    "items",
                    {
                      value: "",
                      label: "",
                    }
                  )
                }
              >

                <FiPlus />

                Add Strength

              </button>

            </div>

          </StepWrapper>

        )}


        {/* CTA */}

        {step === 10 && (

          <StepWrapper
            title="Bottom CTA"
            description="Manage the final call-to-action section."
          >

            <TextField
              label="CTA Title"
              value={
                data.cta.title
              }
              onChange={(value) =>
                updateSection(
                  "cta",
                  "title",
                  value
                )
              }
            />


            <TextArea
              label="CTA Description"
              value={
                data.cta.description
              }
              onChange={(value) =>
                updateSection(
                  "cta",
                  "description",
                  value
                )
              }
            />


            <TextField
              label="Button Text"
              value={
                data.cta.buttonText
              }
              onChange={(value) =>
                updateSection(
                  "cta",
                  "buttonText",
                  value
                )
              }
            />


            <TextField
              label="Button Link"
              value={
                data.cta.buttonLink
              }
              onChange={(value) =>
                updateSection(
                  "cta",
                  "buttonLink",
                  value
                )
              }
            />

          </StepWrapper>

        )}

      </div>


      {/* PREVIOUS / NEXT */}

      <div className="about-step-footer">

        <button
          disabled={step === 0}
          onClick={() =>
            setStep(
              (prev) =>
                Math.max(
                  0,
                  prev - 1
                )
            )
          }
        >

          <FiChevronLeft />

          Previous

        </button>


        <span>
          Step {step + 1} of{" "}
          {steps.length}
        </span>


        {step <
        steps.length - 1 ? (

          <button
            onClick={() =>
              setStep(
                (prev) =>
                  Math.min(
                    steps.length - 1,
                    prev + 1
                  )
              )
            }
          >

            Next

            <FiChevronRight />

          </button>

        ) : (

          <button
            className="final-save"
            onClick={saveAbout}
            disabled={saving}
          >

            <FiSave />

            {saving
              ? "Saving..."
              : "Save About Page"}

          </button>

        )}

      </div>

    </div>
  );
}


// =====================================================
// COMPONENTS
// =====================================================

function StepWrapper({
  title,
  description,
  children,
}) {
  return (

    <div className="about-step-content">

      <div className="about-step-title">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

      </div>


      <div className="about-fields">

        {children}

      </div>

    </div>
  );
}


function TextField({
  label,
  value,
  onChange,
}) {
  return (

    <label className="about-field">

      <span>
        {label}
      </span>

      <input
        value={value || ""}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
      />

    </label>
  );
}


function TextArea({
  label,
  value,
  onChange,
}) {
  return (

    <label className="about-field full">

      <span>
        {label}
      </span>

      <textarea
        value={value || ""}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
      />

    </label>
  );
}


function ImageUpload({
  label,
  preview,
  onChange,
}) {
  return (

    <div className="image-upload-box">

      <span>
        {label}
      </span>


      <div className="image-upload-inner">

        <div className="about-image-preview">

          {preview ? (

            <img
              src={preview}
              alt={label}
            />

          ) : (

            <FiImage />

          )}

        </div>


        <label className="image-select-btn">

          <FiUpload />

          Choose Image

          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={onChange}
          />

        </label>

      </div>


      <small>
        JPG, PNG, WEBP • Maximum 5MB
      </small>

    </div>
  );
}


function ArrayTextArea({
  title,
  items = [],
  onChange,
  onAdd,
  onRemove,
}) {
  return (

    <div className="array-editor full">

      <h4>
        {title}
      </h4>


      {items.map(
        (item, index) => (

          <div
            className="array-item"
            key={index}
          >

            <span>
              {String(
                index + 1
              ).padStart(2, "0")}
            </span>


            <textarea
              value={
                item || ""
              }
              onChange={(e) =>
                onChange(
                  index,
                  e.target.value
                )
              }
            />


            <button
              type="button"
              onClick={() =>
                onRemove(index)
              }
            >
              <FiTrash2 />
            </button>

          </div>

        )
      )}


      <button
        type="button"
        className="add-row-btn"
        onClick={onAdd}
      >

        <FiPlus />

        Add

      </button>

    </div>
  );
}