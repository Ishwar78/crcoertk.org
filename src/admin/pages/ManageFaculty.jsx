import React, {
  useEffect,
  useState,
} from "react";

import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiUsers,
  FiUpload,
  FiX,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import "./ManageFaculty.css";


const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


const emptyForm = {
  name: "",
  designation: "",
  qualification: "",
  department: "",
  category: "Teaching",
  email: "",
  phone: "",
  bio: "",
  sortOrder: 0,
};


const ManageFaculty = () => {

  const [faculty, setFaculty] =
    useState([]);

  const [form, setForm] =
    useState(emptyForm);

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [showForm, setShowForm] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState({
      type: "",
      text: "",
    });


  const token = () =>
    localStorage.getItem(
      "crcoe_admin_token"
    );


  /*
  ========================================
  LOAD
  ========================================
  */

  const loadFaculty = async () => {

    try {

      setLoading(true);

      const response =
        await fetch(
          `${API_URL}/api/faculty/admin/all`,
          {
            headers: {
              Authorization:
                `Bearer ${token()}`,
            },
          }
        );


      const result =
        await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Failed to load faculty"
        );

      }


      setFaculty(
        result.data || []
      );

    } catch (error) {

      console.error(error);

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to load faculty",
      });

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    loadFaculty();
  }, []);


  /*
  ========================================
  INPUT
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
  IMAGE
  ========================================
  */

  const handleImage = (e) => {

    const file =
      e.target.files?.[0];

    if (!file) return;


    if (
      ![
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ].includes(file.type)
    ) {

      setMessage({
        type: "error",
        text:
          "Only JPG, PNG and WEBP images are allowed.",
      });

      return;
    }


    if (
      file.size >
      5 * 1024 * 1024
    ) {

      setMessage({
        type: "error",
        text:
          "Image size must be less than 5MB.",
      });

      return;
    }


    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };


  /*
  ========================================
  OPEN ADD
  ========================================
  */

  const openAdd = () => {

    setForm(
      emptyForm
    );

    setImage(null);

    setPreview("");

    setEditingId(null);

    setShowForm(true);

    setMessage({
      type: "",
      text: "",
    });
  };


  /*
  ========================================
  OPEN EDIT
  ========================================
  */

  const openEdit = (item) => {

    setForm({
      name:
        item.name || "",

      designation:
        item.designation || "",

      qualification:
        item.qualification || "",

      department:
        item.department || "",

      category:
        item.category || "Teaching",

      email:
        item.email || "",

      phone:
        item.phone || "",

      bio:
        item.bio || "",

      sortOrder:
        item.sortOrder || 0,
    });


    setEditingId(
      item._id
    );


    setImage(null);


    setPreview(
      item.image
        ? item.image.startsWith("http")
          ? item.image
          : `${API_URL}${item.image}`
        : ""
    );


    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /*
  ========================================
  CLOSE
  ========================================
  */

  const closeForm = () => {

    setShowForm(false);

    setEditingId(null);

    setImage(null);

    setPreview("");

    setForm(
      emptyForm
    );
  };


  /*
  ========================================
  SAVE
  ========================================
  */

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();


    if (
      !form.name.trim() ||
      !form.designation.trim() ||
      !form.qualification.trim() ||
      !form.department.trim()
    ) {

      setMessage({
        type: "error",
        text:
          "Please fill all required fields.",
      });

      return;
    }


    try {

      setSaving(true);


      const formData =
        new FormData();


      Object.entries(
        form
      ).forEach(
        ([key, value]) => {
          formData.append(
            key,
            value
          );
        }
      );


      if (image) {
        formData.append(
          "image",
          image
        );
      }


      const url = editingId
        ? `${API_URL}/api/faculty/${editingId}`
        : `${API_URL}/api/faculty`;


      const response =
        await fetch(
          url,
          {
            method:
              editingId
                ? "PUT"
                : "POST",

            headers: {
              Authorization:
                `Bearer ${token()}`,
            },

            body: formData,
          }
        );


      const result =
        await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Failed to save faculty"
        );

      }


      setMessage({
        type: "success",
        text:
          editingId
            ? "Faculty updated successfully."
            : "Faculty added successfully.",
      });


      closeForm();

      await loadFaculty();

    } catch (error) {

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to save faculty",
      });

    } finally {

      setSaving(false);

    }
  };


  /*
  ========================================
  DELETE
  ========================================
  */

  const deleteFaculty = async (
    id
  ) => {

    if (
      !window.confirm(
        "Are you sure you want to delete this faculty member?"
      )
    ) {
      return;
    }


    try {

      const response =
        await fetch(
          `${API_URL}/api/faculty/${id}`,
          {
            method: "DELETE",

            headers: {
              Authorization:
                `Bearer ${token()}`,
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


      setFaculty(
        (prev) =>
          prev.filter(
            (item) =>
              item._id !== id
          )
      );


      setMessage({
        type: "success",
        text:
          "Faculty deleted successfully.",
      });

    } catch (error) {

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to delete faculty",
      });

    }
  };


  /*
  ========================================
  STATUS
  ========================================
  */

  const toggleStatus =
    async (id) => {

      try {

        const response =
          await fetch(
            `${API_URL}/api/faculty/${id}/status`,
            {
              method: "PUT",

              headers: {
                Authorization:
                  `Bearer ${token()}`,
              },
            }
          );


        const result =
          await response.json();


        if (!response.ok) {

          throw new Error(
            result.message ||
            "Status update failed"
          );

        }


        setFaculty(
          (prev) =>
            prev.map(
              (item) =>
                item._id === id
                  ? result.data
                  : item
            )
        );

      } catch (error) {

        setMessage({
          type: "error",
          text:
            error.message ||
            "Failed to update status",
        });

      }
    };


  const teaching =
    faculty.filter(
      (item) =>
        item.category ===
        "Teaching"
    ).length;


  const nonTeaching =
    faculty.filter(
      (item) =>
        item.category ===
        "Non-Teaching"
    ).length;


  return (

    <div className="manage-faculty">

      {/* HEADER */}

      <div className="manage-faculty-header">

        <div>

          <span className="faculty-eyebrow">
            ACADEMIC MANAGEMENT
          </span>

          <h2>
            Manage{" "}
            <strong>Faculty</strong>
          </h2>

          <p>
            Add, update and manage
            teaching and non-teaching
            staff.
          </p>

        </div>


        <button
          className="add-faculty-btn"
          onClick={openAdd}
        >
          <FiPlus />
          Add Faculty
        </button>

      </div>


      {/* MESSAGE */}

      {message.text && (

        <div
          className={`faculty-admin-message ${message.type}`}
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


      {/* STATS */}

      <div className="faculty-admin-stats">

        <div>

          <FiUsers />

          <section>

            <strong>
              {faculty.length}
            </strong>

            <span>
              Total Staff
            </span>

          </section>

        </div>


        <div>

          <FiUsers />

          <section>

            <strong>
              {teaching}
            </strong>

            <span>
              Teaching
            </span>

          </section>

        </div>


        <div>

          <FiUsers />

          <section>

            <strong>
              {nonTeaching}
            </strong>

            <span>
              Non-Teaching
            </span>

          </section>

        </div>

      </div>


      {/* FORM */}

      {showForm && (

        <form
          className="faculty-form-card"
          onSubmit={handleSubmit}
        >

          <div className="faculty-form-header">

            <div>

              <h3>
                {editingId
                  ? "Edit Faculty"
                  : "Add New Faculty"}
              </h3>

              <p>
                Enter faculty information
                and upload profile photo.
              </p>

            </div>


            <button
              type="button"
              onClick={closeForm}
            >
              <FiX />
            </button>

          </div>


          <div className="faculty-form-body">

            {/* IMAGE */}

            <div className="faculty-upload">

              <div className="faculty-preview">

                {preview ? (

                  <img
                    src={preview}
                    alt="Preview"
                  />

                ) : (

                  <FiUsers />

                )}

              </div>


              <label className="upload-btn">

                <FiUpload />

                Choose Photo

                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleImage}
                />

              </label>

              <small>
                JPG, PNG or WEBP · Max 5MB
              </small>

            </div>


            {/* FIELDS */}

            <div className="faculty-form-fields">

              <div className="faculty-field">

                <label>
                  Full Name *
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Prof. (Dr.) Sunita Sharma"
                />

              </div>


              <div className="faculty-field">

                <label>
                  Designation *
                </label>

                <input
                  name="designation"
                  value={
                    form.designation
                  }
                  onChange={handleChange}
                  placeholder="Principal"
                />

              </div>


              <div className="faculty-field">

                <label>
                  Qualification *
                </label>

                <input
                  name="qualification"
                  value={
                    form.qualification
                  }
                  onChange={handleChange}
                  placeholder="M.Ed., Ph.D."
                />

              </div>


              <div className="faculty-field">

                <label>
                  Department / Subject *
                </label>

                <input
                  name="department"
                  value={
                    form.department
                  }
                  onChange={handleChange}
                  placeholder="Educational Administration"
                />

              </div>


              <div className="faculty-field">

                <label>
                  Category *
                </label>

                <select
                  name="category"
                  value={
                    form.category
                  }
                  onChange={handleChange}
                >

                  <option value="Teaching">
                    Teaching
                  </option>

                  <option value="Non-Teaching">
                    Non-Teaching
                  </option>

                </select>

              </div>


              <div className="faculty-field">

                <label>
                  Display Order
                </label>

                <input
                  type="number"
                  name="sortOrder"
                  value={
                    form.sortOrder
                  }
                  onChange={handleChange}
                  min="0"
                />

              </div>


              <div className="faculty-field">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="faculty@crcoe.in"
                />

              </div>


              <div className="faculty-field">

                <label>
                  Phone
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                />

              </div>


              <div className="faculty-field full">

                <label>
                  Short Bio
                </label>

                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  placeholder="Write a short profile..."
                />

              </div>

            </div>

          </div>


          <div className="faculty-form-footer">

            <button
              type="button"
              className="cancel-btn"
              onClick={closeForm}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-faculty-btn"
              disabled={saving}
            >

              {saving
                ? "Saving..."
                : editingId
                  ? "Update Faculty"
                  : "Add Faculty"}

            </button>

          </div>

        </form>

      )}


      {/* LIST */}

      <div className="faculty-list-card">

        <div className="faculty-list-header">

          <div>

            <h3>
              Faculty Members
            </h3>

            <p>
              All teaching and
              non-teaching staff
            </p>

          </div>

          <span>
            {faculty.length} Members
          </span>

        </div>


        {loading ? (

          <div className="faculty-admin-empty">
            Loading faculty...
          </div>

        ) : faculty.length === 0 ? (

          <div className="faculty-admin-empty">

            <FiUsers />

            <h3>
              No Faculty Added
            </h3>

            <p>
              Click "Add Faculty" to
              add the first faculty member.
            </p>

          </div>

        ) : (

          <div className="faculty-admin-table-wrap">

            <table className="faculty-admin-table">

              <thead>

                <tr>

                  <th>
                    Faculty
                  </th>

                  <th>
                    Designation
                  </th>

                  <th>
                    Category
                  </th>

                  <th>
                    Qualification
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {faculty.map(
                  (item) => (

                    <tr
                      key={
                        item._id
                      }
                    >

                      <td>

                        <div className="admin-faculty-person">

                          <div>

                            {item.image ? (

                              <img
                                src={
                                  item.image.startsWith(
                                    "http"
                                  )
                                    ? item.image
                                    : `${API_URL}${item.image}`
                                }
                                alt={
                                  item.name
                                }
                              />

                            ) : (

                              <FiUsers />

                            )}

                          </div>

                          <section>

                            <strong>
                              {item.name}
                            </strong>

                            <small>
                              {item.department}
                            </small>

                          </section>

                        </div>

                      </td>


                      <td>
                        {item.designation}
                      </td>


                      <td>

                        <span
                          className={`faculty-category ${item.category === "Teaching"
                            ? "teaching"
                            : "non-teaching"
                            }`}
                        >
                          {item.category}
                        </span>

                      </td>


                      <td>
                        {item.qualification}
                      </td>


                      <td>

                        <button
                          className={`faculty-status ${item.isActive
                            ? "active"
                            : "inactive"
                            }`}
                          onClick={() =>
                            toggleStatus(
                              item._id
                            )
                          }
                        >

                          {item.isActive ? (
                            <>
                              <FiEye />
                              Active
                            </>
                          ) : (
                            <>
                              <FiEyeOff />
                              Hidden
                            </>
                          )}

                        </button>

                      </td>


                      <td>

                        <div className="faculty-actions">

                          <button
                            className="edit"
                            onClick={() =>
                              openEdit(
                                item
                              )
                            }
                            title="Edit"
                          >
                            <FiEdit2 />
                          </button>


                          <button
                            className="delete"
                            onClick={() =>
                              deleteFaculty(
                                item._id
                              )
                            }
                            title="Delete"
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

    </div>
  );
};


export default ManageFaculty;