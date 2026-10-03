import React, {
  useEffect,
  useState,
} from "react";

import {
  FiUpload,
  FiImage,
  FiTrash2,
  FiEdit3,
  FiX,
} from "react-icons/fi";

import "./ManageGallery.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";


const categories = [
  "Academic Activities",
  "Cultural Events",
  "Sports",
  "Seminars & Workshops",
  "Campus Life",
  "Infrastructure",
  "Extension Activities",
];


const ManageGallery = () => {

  const [gallery, setGallery] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [uploading, setUploading] =
    useState(false);

  const [deleting, setDeleting] =
    useState(null);

  const [message, setMessage] =
    useState({
      type: "",
      text: "",
    });


  const [form, setForm] =
    useState({
      title: "",
      category:
        "Academic Activities",
      image: null,
    });


  const [preview, setPreview] =
    useState("");


  const [editing, setEditing] =
    useState(null);


  // ======================================
  // FETCH ADMIN GALLERY
  // ======================================

  const fetchGallery = async () => {

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "crcoe_admin_token"
        );

      const response =
        await fetch(
          `${API_URL}/api/gallery/admin`,
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
        response.status === 401
      ) {
        localStorage.removeItem(
          "crcoe_admin_token"
        );

        window.location.href =
          "/admin/login";

        return;
      }

      if (result.success) {
        setGallery(result.data);
      }

    } catch (error) {

      console.error(error);

      setMessage({
        type: "error",
        text:
          "Unable to load gallery",
      });

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    fetchGallery();
  }, []);


  // ======================================
  // FORM CHANGE
  // ======================================

  const handleChange = (e) => {

    const {
      name,
      value,
      files,
    } = e.target;


    if (name === "image") {

      const file =
        files?.[0] || null;

      setForm((prev) => ({
        ...prev,
        image: file,
      }));


      if (file) {

        const imageUrl =
          URL.createObjectURL(file);

        setPreview(imageUrl);

      } else {

        setPreview("");

      }

      return;
    }


    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // ======================================
  // UPLOAD
  // ======================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });


    if (!form.title.trim()) {

      setMessage({
        type: "error",
        text:
          "Please enter image title",
      });

      return;
    }


    if (!form.image) {

      setMessage({
        type: "error",
        text:
          "Please select an image",
      });

      return;
    }


    try {

      setUploading(true);

      const token =
        localStorage.getItem(
          "crcoe_admin_token"
        );


      const formData =
        new FormData();

      formData.append(
        "title",
        form.title
      );

      formData.append(
        "category",
        form.category
      );

      formData.append(
        "image",
        form.image
      );


      const response =
        await fetch(
          `${API_URL}/api/gallery`,
          {
            method: "POST",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },

            body: formData,
          }
        );


      const result =
        await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Upload failed"
        );

      }


      setMessage({
        type: "success",
        text:
          "Gallery image added successfully",
      });


      setForm({
        title: "",
        category:
          "Academic Activities",
        image: null,
      });

      setPreview("");


      const fileInput =
        document.getElementById(
          "gallery-image"
        );

      if (fileInput) {
        fileInput.value = "";
      }


      fetchGallery();

    } catch (error) {

      console.error(error);

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to upload image",
      });

    } finally {

      setUploading(false);

    }
  };


  // ======================================
  // DELETE
  // ======================================

  const handleDelete = async (id) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this image?"
      );

    if (!confirmed) {
      return;
    }


    try {

      setDeleting(id);

      const token =
        localStorage.getItem(
          "crcoe_admin_token"
        );


      const response =
        await fetch(
          `${API_URL}/api/gallery/${id}`,
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


      setMessage({
        type: "success",
        text:
          "Image deleted successfully",
      });


      setGallery((prev) =>
        prev.filter(
          (item) =>
            item._id !== id
        )
      );

    } catch (error) {

      console.error(error);

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to delete image",
      });

    } finally {

      setDeleting(null);

    }
  };


  // ======================================
  // EDIT
  // ======================================

  const startEdit = (item) => {

    setEditing({
      id: item._id,
      title: item.title,
      category: item.category,
    });
  };


  const cancelEdit = () => {
    setEditing(null);
  };


  const saveEdit = async () => {

    if (!editing?.title.trim()) {
      return;
    }


    try {

      const token =
        localStorage.getItem(
          "crcoe_admin_token"
        );


      const response =
        await fetch(
          `${API_URL}/api/gallery/${editing.id}`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify({
              title:
                editing.title,

              category:
                editing.category,
            }),
          }
        );


      const result =
        await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Update failed"
        );

      }


      setGallery((prev) =>
        prev.map((item) =>
          item._id === editing.id
            ? result.data
            : item
        )
      );


      setEditing(null);


      setMessage({
        type: "success",
        text:
          "Gallery details updated",
      });

    } catch (error) {

      console.error(error);

      setMessage({
        type: "error",
        text:
          error.message ||
          "Failed to update gallery",
      });
    }
  };


  return (
    <div className="manage-gallery">

      {/* =================================
          HEADER
      ================================= */}

      <div className="manage-gallery-header">

        <div>

          <span className="admin-page-eyebrow">
            WEBSITE CONTENT
          </span>

          <h2>
            Manage{" "}
            <strong>Gallery</strong>
          </h2>

          <p>
            Upload and manage the photos
            displayed on the public gallery.
          </p>

        </div>


        <div className="gallery-count-box">

          <FiImage />

          <div>

            <strong>
              {gallery.length}
            </strong>

            <span>
              Total Photos
            </span>

          </div>

        </div>

      </div>


      {/* =================================
          MESSAGE
      ================================= */}

      {message.text && (

        <div
          className={`gallery-admin-message ${message.type}`}
        >

          <span>
            {message.text}
          </span>

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


      {/* =================================
          UPLOAD FORM
      ================================= */}

      <div className="gallery-admin-upload-card">

        <div className="gallery-admin-card-heading">

          <div className="gallery-admin-heading-icon">
            <FiUpload />
          </div>

          <div>

            <h3>
              Add New Gallery Image
            </h3>

            <p>
              Upload an image that should
              appear on the public website.
            </p>

          </div>

        </div>


        <form
          className="gallery-upload-form"
          onSubmit={handleSubmit}
        >

          <div className="gallery-upload-left">

            <div className="gallery-admin-field">

              <label>
                Image Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="e.g. Classroom Activities"
                value={form.title}
                onChange={handleChange}
              />

            </div>


            <div className="gallery-admin-field">

              <label>
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >

                {categories.map(
                  (category) => (

                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>

                  )
                )}

              </select>

            </div>


            <div className="gallery-admin-field">

              <label>
                Select Image
              </label>

              <label
                htmlFor="gallery-image"
                className="gallery-file-button"
              >

                <FiUpload />

                <span>
                  {form.image
                    ? form.image.name
                    : "Choose Image"}
                </span>

                <small>
                  JPG, PNG, WEBP • Max 5MB
                </small>

              </label>

              <input
                id="gallery-image"
                type="file"
                name="image"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleChange}
                hidden
              />

            </div>


            <button
              type="submit"
              className="gallery-upload-button"
              disabled={uploading}
            >

              <FiUpload />

              {uploading
                ? "Uploading..."
                : "Upload to Gallery"}

            </button>

          </div>


          <div className="gallery-upload-preview">

            {preview ? (

              <img
                src={preview}
                alt="Preview"
              />

            ) : (

              <div>

                <FiImage />

                <span>
                  Image Preview
                </span>

                <small>
                  Select an image to preview
                </small>

              </div>

            )}

          </div>

        </form>

      </div>


      {/* =================================
          EXISTING GALLERY
      ================================= */}

      <div className="gallery-admin-list-card">

        <div className="gallery-admin-list-header">

          <div>

            <h3>
              Gallery Images
            </h3>

            <p>
              These images are currently
              visible on the website.
            </p>

          </div>

          <span>
            {gallery.length} Images
          </span>

        </div>


        {loading ? (

          <div className="gallery-admin-loading">
            Loading gallery...
          </div>

        ) : gallery.length === 0 ? (

          <div className="gallery-admin-empty">

            <FiImage />

            <h3>
              No Gallery Images
            </h3>

            <p>
              Upload your first image above.
            </p>

          </div>

        ) : (

          <div className="gallery-admin-grid">

            {gallery.map((item) => (

              <div
                className="gallery-admin-item"
                key={item._id}
              >

                <div className="gallery-admin-image">

                  <img
                    src={`${API_URL}${item.image}`}
                    alt={item.title}
                  />

                  <div className="gallery-admin-image-actions">

                    <button
                      title="Edit"
                      onClick={() =>
                        startEdit(item)
                      }
                    >
                      <FiEdit3 />
                    </button>

                    <button
                      title="Delete"
                      className="delete"
                      disabled={
                        deleting === item._id
                      }
                      onClick={() =>
                        handleDelete(
                          item._id
                        )
                      }
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </div>


                {editing?.id === item._id ? (

                  <div className="gallery-edit-box">

                    <input
                      value={
                        editing.title
                      }
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          title:
                            e.target.value,
                        })
                      }
                    />


                    <select
                      value={
                        editing.category
                      }
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          category:
                            e.target.value,
                        })
                      }
                    >

                      {categories.map(
                        (category) => (

                          <option
                            key={category}
                            value={category}
                          >
                            {category}
                          </option>

                        )
                      )}

                    </select>


                    <div>

                      <button
                        onClick={saveEdit}
                        className="save-edit"
                      >
                        Save
                      </button>

                      <button
                        onClick={cancelEdit}
                        className="cancel-edit"
                      >
                        Cancel
                      </button>

                    </div>

                  </div>

                ) : (

                  <div className="gallery-admin-item-info">

                    <h4>
                      {item.title}
                    </h4>

                    <span>
                      {item.category}
                    </span>

                  </div>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default ManageGallery;