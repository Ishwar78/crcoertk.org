import React, {
  useEffect,
  useState,
} from "react";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSave,
  FiMessageSquare,
  FiEye,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import "./ManageContact.css";


const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


const ManageContact = () => {

  const [contact, setContact] =
    useState({
      address: "",
      phone: "",
      email: "",
      alternateEmail: "",
      workingDays: "",
      workingHours: "",
      admissionPhone: "",
      academicPhone: "",
      generalPhone: "",
      quickEmail: "",
    });


  const [inquiries, setInquiries] =
    useState([]);


  const [loading, setLoading] =
    useState(true);


  const [saving, setSaving] =
    useState(false);


  const [message, setMessage] =
    useState({
      type: "",
      text: "",
    });


  const [selectedInquiry, setSelectedInquiry] =
    useState(null);


  /*
  ========================================
  TOKEN
  ========================================
  */

  const getToken = () =>
    localStorage.getItem(
      "crcoe_admin_token"
    );


  /*
  ========================================
  LOAD DATA
  ========================================
  */

  const loadData = async () => {

    try {

      setLoading(true);

      const token = getToken();


      const [
        contactResponse,
        inquiryResponse,
      ] = await Promise.all([

        fetch(
          `${API_URL}/api/contact/details`
        ),

        fetch(
          `${API_URL}/api/contact/inquiries`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        ),

      ]);


      const contactResult =
        await contactResponse.json();

      const inquiryResult =
        await inquiryResponse.json();


      if (
        contactResult.success
      ) {

        setContact(
          contactResult.data
        );

      }


      if (
        inquiryResult.success
      ) {

        setInquiries(
          inquiryResult.data
        );

      }

    } catch (error) {

      console.error(error);

      setMessage({
        type: "error",
        text:
          "Failed to load contact data",
      });

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    loadData();
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

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  /*
  ========================================
  SAVE CONTACT
  ========================================
  */

  const saveContact = async (e) => {

    e.preventDefault();

    try {

      setSaving(true);

      const token = getToken();


      const response =
        await fetch(
          `${API_URL}/api/contact/details`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify(
              contact
            ),
          }
        );


      const result =
        await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Failed to update contact"
        );

      }


      setContact(
        result.data
      );


      setMessage({
        type: "success",
        text:
          "Contact details updated successfully",
      });

    } catch (error) {

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to save contact details",
      });

    } finally {

      setSaving(false);

    }
  };


  /*
  ========================================
  MARK READ
  ========================================
  */

  const markAsRead = async (
    inquiry
  ) => {

    try {

      const token = getToken();


      const response =
        await fetch(
          `${API_URL}/api/contact/inquiries/${inquiry._id}/read`,
          {
            method: "PUT",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );


      const result =
        await response.json();


      if (result.success) {

        setInquiries((prev) =>
          prev.map((item) =>
            item._id === inquiry._id
              ? result.data
              : item
          )
        );

      }

    } catch (error) {

      console.error(error);

    }
  };


  /*
  ========================================
  VIEW
  ========================================
  */

  const viewInquiry = async (
    inquiry
  ) => {

    setSelectedInquiry(
      inquiry
    );


    if (
      inquiry.status === "unread"
    ) {

      await markAsRead(
        inquiry
      );

    }
  };


  /*
  ========================================
  DELETE
  ========================================
  */

  const deleteInquiry = async (
    id
  ) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this enquiry?"
      );

    if (!confirmed) {
      return;
    }


    try {

      const token = getToken();


      const response =
        await fetch(
          `${API_URL}/api/contact/inquiries/${id}`,
          {
            method: "DELETE",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );


      const result =
        await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Delete failed"
        );

      }


      setInquiries((prev) =>
        prev.filter(
          (item) =>
            item._id !== id
        )
      );


      if (
        selectedInquiry?._id === id
      ) {

        setSelectedInquiry(
          null
        );

      }


      setMessage({
        type: "success",
        text:
          "Enquiry deleted successfully",
      });

    } catch (error) {

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to delete enquiry",
      });

    }
  };


  const unreadCount =
    inquiries.filter(
      (item) =>
        item.status === "unread"
    ).length;


  return (
    <div className="manage-contact">

      {/* HEADER */}

      <div className="manage-contact-header">

        <div>

          <span className="admin-page-eyebrow">
            WEBSITE COMMUNICATION
          </span>

          <h2>
            Contact{" "}
            <strong>Management</strong>
          </h2>

          <p>
            Manage college contact details
            and website enquiries.
          </p>

        </div>


        <div className="contact-admin-stats">

          <div>

            <FiMessageSquare />

            <section>

              <strong>
                {inquiries.length}
              </strong>

              <span>
                Total Enquiries
              </span>

            </section>

          </div>


          <div className="unread">

            <FiMail />

            <section>

              <strong>
                {unreadCount}
              </strong>

              <span>
                Unread
              </span>

            </section>

          </div>

        </div>

      </div>


      {/* MESSAGE */}

      {message.text && (

        <div
          className={`contact-admin-message ${message.type}`}
        >

          {message.text}

          <button
            onClick={() =>
              setMessage({
                type: "",
                text: "",
              })
            }
          >
            <FiX />
          </button>

        </div>

      )}


      {/* CONTACT DETAILS */}

      <form
        className="contact-details-card"
        onSubmit={saveContact}
      >

        <div className="contact-admin-card-title">

          <div className="contact-admin-icon">
            <FiMapPin />
          </div>

          <div>

            <h3>
              College Contact Details
            </h3>

            <p>
              These details will appear
              on the public Contact page.
            </p>

          </div>

        </div>


        <div className="contact-admin-form-grid">

          <div className="contact-admin-field full">

            <label>
              College Address
            </label>

            <textarea
              name="address"
              value={contact.address}
              onChange={handleChange}
            />

          </div>


          <div className="contact-admin-field">

            <label>
              Main Phone
            </label>

            <div className="contact-input-icon">

              <FiPhone />

              <input
                name="phone"
                value={contact.phone}
                onChange={handleChange}
              />

            </div>

          </div>


          <div className="contact-admin-field">

            <label>
              Main Email
            </label>

            <div className="contact-input-icon">

              <FiMail />

              <input
                name="email"
                value={contact.email}
                onChange={handleChange}
              />

            </div>

          </div>


          <div className="contact-admin-field">

            <label>
              Alternate Email
            </label>

            <input
              name="alternateEmail"
              value={
                contact.alternateEmail
              }
              onChange={handleChange}
            />

          </div>


          <div className="contact-admin-field">

            <label>
              Working Days
            </label>

            <input
              name="workingDays"
              value={
                contact.workingDays
              }
              onChange={handleChange}
            />

          </div>


          <div className="contact-admin-field">

            <label>
              Working Hours
            </label>

            <div className="contact-input-icon">

              <FiClock />

              <input
                name="workingHours"
                value={
                  contact.workingHours
                }
                onChange={handleChange}
              />

            </div>

          </div>


          <div className="contact-admin-field">

            <label>
              Admission Enquiry Phone
            </label>

            <input
              name="admissionPhone"
              value={
                contact.admissionPhone
              }
              onChange={handleChange}
            />

          </div>


          <div className="contact-admin-field">

            <label>
              Academic Query Phone
            </label>

            <input
              name="academicPhone"
              value={
                contact.academicPhone
              }
              onChange={handleChange}
            />

          </div>


          <div className="contact-admin-field">

            <label>
              General Information Phone
            </label>

            <input
              name="generalPhone"
              value={
                contact.generalPhone
              }
              onChange={handleChange}
            />

          </div>


          <div className="contact-admin-field">

            <label>
              Quick Contact Email
            </label>

            <input
              name="quickEmail"
              value={
                contact.quickEmail
              }
              onChange={handleChange}
            />

          </div>

        </div>


        <div className="contact-save-row">

          <button
            type="submit"
            disabled={saving}
          >

            <FiSave />

            {saving
              ? "Saving..."
              : "Save Contact Details"}

          </button>

        </div>

      </form>


      {/* INQUIRIES */}

      <div className="contact-inquiries-card">

        <div className="contact-inquiries-header">

          <div>

            <h3>
              Contact Form Inquiries
            </h3>

            <p>
              Messages submitted from
              the public Contact page.
            </p>

          </div>

          <span>
            {inquiries.length} Inquiries
          </span>

        </div>


        {loading ? (

          <div className="contact-admin-empty">
            Loading inquiries...
          </div>

        ) : inquiries.length === 0 ? (

          <div className="contact-admin-empty">

            <FiMessageSquare />

            <h3>
              No Inquiries Yet
            </h3>

            <p>
              New contact form messages
              will appear here.
            </p>

          </div>

        ) : (

          <div className="inquiry-table-wrap">

            <table className="inquiry-table">

              <thead>

                <tr>

                  <th>
                    Name
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Query
                  </th>

                  <th>
                    Date
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {inquiries.map(
                  (inquiry) => (

                    <tr
                      key={
                        inquiry._id
                      }
                      className={
                        inquiry.status ===
                        "unread"
                          ? "unread-row"
                          : ""
                      }
                    >

                      <td>

                        <div className="inquiry-name">

                          <strong>
                            {inquiry.name}
                          </strong>

                          {inquiry.phone && (
                            <small>
                              {inquiry.phone}
                            </small>
                          )}

                        </div>

                      </td>


                      <td>
                        {inquiry.email}
                      </td>


                      <td>

                        <span className="query-badge">
                          {inquiry.queryType}
                        </span>

                      </td>


                      <td>
                        {new Date(
                          inquiry.createdAt
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </td>


                      <td>

                        <span
                          className={`status-badge ${inquiry.status}`}
                        >
                          {inquiry.status}
                        </span>

                      </td>


                      <td>

                        <div className="inquiry-actions">

                          <button
                            title="View"
                            onClick={() =>
                              viewInquiry(
                                inquiry
                              )
                            }
                          >
                            <FiEye />
                          </button>


                          <button
                            className="delete"
                            title="Delete"
                            onClick={() =>
                              deleteInquiry(
                                inquiry._id
                              )
                            }
                          >
                            <FiTrash2 />
                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        )}

      </div>


      {/* INQUIRY MODAL */}

      {selectedInquiry && (

        <div
          className="inquiry-modal-overlay"
          onClick={() =>
            setSelectedInquiry(null)
          }
        >

          <div
            className="inquiry-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="inquiry-modal-header">

              <div>

                <span>
                  {selectedInquiry.queryType}
                </span>

                <h3>
                  {selectedInquiry.name}
                </h3>

              </div>

              <button
                onClick={() =>
                  setSelectedInquiry(
                    null
                  )
                }
              >
                <FiX />
              </button>

            </div>


            <div className="inquiry-modal-contact">

              <div>
                <FiMail />
                <span>
                  {selectedInquiry.email}
                </span>
              </div>


              {selectedInquiry.phone && (

                <div>
                  <FiPhone />
                  <span>
                    {selectedInquiry.phone}
                  </span>
                </div>

              )}

            </div>


            <div className="inquiry-message">

              <label>
                Message
              </label>

              <p>
                {selectedInquiry.message}
              </p>

            </div>


            <small>
              Submitted on{" "}
              {new Date(
                selectedInquiry.createdAt
              ).toLocaleString(
                "en-IN"
              )}
            </small>

          </div>

        </div>

      )}

    </div>
  );
};


export default ManageContact;