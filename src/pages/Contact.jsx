import React, {
  useEffect,
  useState,
} from "react";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiMap,
  FiHeadphones,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Contact.css";


const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


export default function Contact() {

  const [contact, setContact] =
    useState(null);

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      phone: "",
      queryType: "",
      message: "",
    });

  const [sending, setSending] =
    useState(false);

  const [message, setMessage] =
    useState({
      type: "",
      text: "",
    });


  /*
  ========================================
  LOAD CONTACT DETAILS
  ========================================
  */

  useEffect(() => {

    const fetchContact =
      async () => {

        try {

          const response =
            await fetch(
              `${API_URL}/api/contact/details`
            );

          const result =
            await response.json();

          if (result.success) {
            setContact(result.data);
          }

        } catch (error) {

          console.error(
            "Contact Details Error:",
            error
          );

        }
      };


    fetchContact();

  }, []);


  /*
  ========================================
  FORM CHANGE
  ========================================
  */

  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  /*
  ========================================
  SUBMIT INQUIRY
  ========================================
  */

  const handleSubmit =
    async (e) => {

      e.preventDefault();


      if (
        !form.name.trim() ||
        !form.email.trim() ||
        !form.queryType ||
        !form.message.trim()
      ) {

        setMessage({
          type: "error",
          text:
            "Please fill all required fields.",
        });

        return;
      }


      try {

        setSending(true);

        setMessage({
          type: "",
          text: "",
        });


        const response =
          await fetch(
            `${API_URL}/api/contact/inquiry`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify(
                form
              ),
            }
          );


        const result =
          await response.json();


        if (!response.ok) {
          throw new Error(
            result.message ||
            "Failed to send enquiry"
          );
        }


        setMessage({
          type: "success",
          text:
            "Your enquiry has been submitted successfully. We will get back to you soon.",
        });


        setForm({
          name: "",
          email: "",
          phone: "",
          queryType: "",
          message: "",
        });


      } catch (error) {

        setMessage({
          type: "error",
          text:
            error.message ||
            "Unable to send enquiry.",
        });

      } finally {

        setSending(false);

      }
    };


  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* HERO */}

        <section className="contact-hero">

          <div>

            <span>
              Home › Contact Us
            </span>

            <h2>
              Contact{" "}
              <strong>Us</strong>
            </h2>

            <h3>
              We are here to help you
            </h3>

            <p>
              Feel free to reach out for
              queries related to admission,
              academics, facilities or any
              other information. We are
              always happy to assist you.
            </p>

          </div>

          <img
            src="/images/campus-about.jpg"
            alt="College campus"
          />

        </section>


        {/* CONTACT CARDS */}

        <section className="contact-cards">

          <Card
            icon={<FiMapPin />}
            title="Our Address"
            text={
              <>
                {contact?.address ||
                  "Chhotu Ram College of Education, Delhi Road, Rohtak, Haryana - 124001"}
              </>
            }
          />

          <Card
            icon={<FiPhone />}
            title="Call Us"
            text={
              <>
                {contact?.phone ||
                  "91-90533-14403"}
              </>
            }
          />

          <Card
            icon={<FiMail />}
            title="Email Us"
            text={
              <>
                {contact?.email ||
                  "info@crcoertk.org"}
                <br />
                {contact?.alternateEmail ||
                  "crcoe2008@yahoo.com"}
              </>
            }
          />

          <Card
            icon={<FiClock />}
            title="Working Hours"
            text={
              <>
                {contact?.workingDays ||
                  "Monday - Saturday"}
                <br />
                {contact?.workingHours ||
                  "9:00 AM - 5:00 PM"}
              </>
            }
          />

        </section>


        {/* MAIN */}

        <section className="contact-main">

          <div className="message-box">

            <div className="section-title">

              <h2>
                <FiSend />
                Send us a{" "}
                <strong>Message</strong>
              </h2>

              <span></span>

            </div>

            <p>
              Fill out the form below and
              we will get back to you soon.
            </p>


            {message.text && (

              <div
                className={`contact-form-message ${message.type}`}
              >
                {message.text}
              </div>

            )}


            <form
              onSubmit={handleSubmit}
            >

              <input
                name="name"
                placeholder="Your Name *"
                value={form.name}
                onChange={handleChange}
              />


              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={form.email}
                onChange={handleChange}
              />


              <input
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
              />


              <select
                name="queryType"
                value={form.queryType}
                onChange={handleChange}
              >

                <option value="">
                  Select Query Type
                </option>

                <option value="Admission">
                  Admission
                </option>

                <option value="Academics">
                  Academics
                </option>

                <option value="General Information">
                  General Information
                </option>

              </select>


              <textarea
                name="message"
                placeholder="Your Message *"
                value={form.message}
                onChange={handleChange}
              />


              <button
                type="submit"
                disabled={sending}
              >

                {sending
                  ? "Sending..."
                  : "Send Message"}

                {!sending && (
                  <FiArrowRight />
                )}

              </button>

            </form>

          </div>


          {/* MAP */}

          <div className="map-box">

            <div className="section-title">

              <h2>
                <FiMap />
                Our{" "}
                <strong>Location</strong>
              </h2>

              <span></span>

            </div>

            <div className="map-placeholder">

              <div>

                <b>
                  Chhotu Ram College of Education
                </b>

                <span>
                  Rohtak, Haryana
                </span>

                <FiMapPin />

              </div>

            </div>

            <button className="direction-btn">

              <FiMapPin />

              Get Directions

              <FiArrowRight />

            </button>

          </div>

        </section>


        {/* LOWER */}

        <section className="contact-lower">

          <article>

            <div className="section-title">

              <h2>
                <FiHeadphones />
                Quick{" "}
                <strong>Contact</strong>
              </h2>

              <span></span>

            </div>


            <p>
              <b>Admission Enquiry</b>
              <br />
              {contact?.admissionPhone ||
                "Contact office"}
            </p>


            <p>
              <b>Academic Query</b>
              <br />
              {contact?.academicPhone ||
                "Contact office"}
            </p>


            <p>
              <b>General Information</b>
              <br />
              {contact?.generalPhone ||
                "Contact office"}
            </p>


            <p>
              <b>Email Us</b>
              <br />
              {contact?.quickEmail ||
                "crcoe.rohtak@gmail.com"}
            </p>

          </article>


          <article>

            <div className="section-title">

              <h2>
                Reach Us{" "}
                <strong>Easily</strong>
              </h2>

              <span></span>

            </div>

            <p>
              The college is well connected
              by road and public transport
              and is located in Rohtak city.
            </p>

            <img
              src="/images/contact-campus.jpg"
              alt="College gate"
            />

          </article>


          <article>

            <div className="section-title">

              <h2>
                Frequently Asked{" "}
                <strong>Questions</strong>
              </h2>

              <span></span>

            </div>


            {[
              "What are the working hours of the college?",
              "How can I apply for admission?",
              "Where is the college located?",
              "Whom should I contact for academic queries?",
              "Is hostel facility available?",
            ].map((q) => (

              <div
                className="faq"
                key={q}
              >

                <span>
                  {q}
                </span>

                <FiChevronDown />

              </div>

            ))}

          </article>

        </section>

      </main>

      <Footer />
    </>
  );
}


function Card({
  icon,
  title,
  text,
}) {

  return (

    <article className="contact-card">

      <div>
        {icon}
      </div>

      <section>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </section>

    </article>

  );
}