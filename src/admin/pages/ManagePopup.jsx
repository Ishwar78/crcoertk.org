import React, { useEffect, useState, useRef } from "react";
import {
  FiSave,
  FiUploadCloud,
  FiTrash2,
  FiCheck,
  FiAlertCircle,
  FiEye,
  FiMaximize2,
  FiExternalLink,
  FiLink,
  FiToggleLeft,
  FiToggleRight,
  FiX,
  FiBell,
  FiClock,
  FiLayers,
} from "react-icons/fi";
import "./ManagePopup.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

export default function ManagePopup() {
  const [data, setData] = useState({
    enabled: true,
    title: "Admission Notice 2026-27",
    image: "",
    link: "/admission",
    isExternal: false,
    buttonText: "Apply / View Details",
    showOncePerSession: true,
    delaySeconds: 0.5,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // File upload state
  const [newImageFile, setNewImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [markedRemoveImage, setMarkedRemoveImage] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPopupData();
  }, []);

  const fetchPopupData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const res = await fetch(`${API_URL}/api/popup/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      if (res.ok && result.success && result.data) {
        setData(result.data);
      }
    } catch (err) {
      console.error("ManagePopup load error:", err);
      setMessage({ type: "error", text: "Failed to load popup configuration." });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setMessage({
          type: "error",
          text: "File size exceeds 10MB limit. Please choose a smaller image.",
        });
        return;
      }
      setNewImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setMarkedRemoveImage(false);
    }
  };

  const handleRemoveImage = () => {
    setNewImageFile(null);
    setImagePreview(null);
    setMarkedRemoveImage(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const formData = new FormData();

      const payload = {
        enabled: data.enabled,
        title: data.title,
        link: data.link,
        isExternal: data.isExternal,
        buttonText: data.buttonText,
        showOncePerSession: data.showOncePerSession,
        delaySeconds: Number(data.delaySeconds) || 0.5,
        removeImage: markedRemoveImage,
      };

      formData.append("data", JSON.stringify(payload));

      if (newImageFile) {
        formData.append("popupImage", newImageFile);
      }

      const res = await fetch(`${API_URL}/api/popup`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result.success && result.data) {
        setData(result.data);
        setNewImageFile(null);
        setImagePreview(null);
        setMarkedRemoveImage(false);
        setMessage({
          type: "success",
          text: "Popup settings and poster updated successfully!",
        });
      } else {
        setMessage({
          type: "error",
          text: result.message || "Failed to update popup settings.",
        });
      }
    } catch (err) {
      console.error("Save popup error:", err);
      setMessage({
        type: "error",
        text: "Network error while saving popup settings.",
      });
    } finally {
      setSaving(false);
    }
  };

  // Determine current active display image
  const displayImageSrc = imagePreview
    ? imagePreview
    : !markedRemoveImage && data.image
    ? data.image.startsWith("http")
      ? data.image
      : `${API_URL}${data.image.startsWith("/") ? "" : "/"}${data.image}`
    : null;

  if (loading) {
    return (
      <div className="manage-popup-loading">
        <div className="spinner"></div>
        <p>Loading Popup Settings...</p>
      </div>
    );
  }

  return (
    <div className="manage-popup-container">
      {/* Page Header */}
      <div className="manage-popup-header">
        <div>
          <h1 className="manage-popup-title">
            <FiMaximize2 className="title-icon" /> Notice Popup Modal
          </h1>
          <p className="manage-popup-subtitle">
            Configure the admission notice or announcement popup shown when
            visitors open the website.
          </p>
        </div>

        <div className="header-actions">
          {displayImageSrc && (
            <button
              type="button"
              className="btn-preview-popup"
              onClick={() => setIsPreviewModalOpen(true)}
              title="Preview Popup"
            >
              <FiEye /> Live Preview
            </button>
          )}

          <button
            type="button"
            className="btn-save-popup"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? (
              <>
                <div className="spinner-sm"></div> Saving...
              </>
            ) : (
              <>
                <FiSave /> Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {/* Alert Notification */}
      {message && (
        <div className={`popup-alert-bar alert-${message.type}`}>
          <div className="alert-content">
            {message.type === "success" ? (
              <FiCheck className="alert-icon" />
            ) : (
              <FiAlertCircle className="alert-icon" />
            )}
            <span>{message.text}</span>
          </div>
          <button
            className="alert-close-btn"
            onClick={() => setMessage(null)}
          >
            <FiX />
          </button>
        </div>
      )}

      <div className="popup-grid-layout">
        {/* Left Column: Form Controls */}
        <div className="popup-form-col">
          {/* Card 1: Status & Behavior */}
          <div className="popup-admin-card">
            <div className="card-header">
              <div className="card-header-icon">
                <FiBell />
              </div>
              <div>
                <h3>Status & Display Rules</h3>
                <p>Turn popup on/off and control how often visitors see it</p>
              </div>
            </div>

            <div className="card-body">
              {/* Enable Switch */}
              <div className="setting-toggle-row">
                <div className="toggle-info">
                  <span className="toggle-label">Popup Status</span>
                  <span className="toggle-desc">
                    Enable or disable the popup banner on the website
                  </span>
                </div>
                <button
                  type="button"
                  className={`toggle-switch-btn ${data.enabled ? "active" : ""}`}
                  onClick={() => setData({ ...data, enabled: !data.enabled })}
                >
                  {data.enabled ? <FiToggleRight /> : <FiToggleLeft />}
                  <span>{data.enabled ? "Active (Shown)" : "Inactive (Off)"}</span>
                </button>
              </div>

              <hr className="setting-divider" />

              {/* Show Once Per Session */}
              <div className="setting-toggle-row">
                <div className="toggle-info">
                  <span className="toggle-label">Show Once Per Session</span>
                  <span className="toggle-desc">
                    Recommended: Opens once when visitor enters site; does not
                    annoy users on every page reload in the same session.
                  </span>
                </div>
                <button
                  type="button"
                  className={`toggle-switch-btn ${
                    data.showOncePerSession ? "active" : ""
                  }`}
                  onClick={() =>
                    setData({
                      ...data,
                      showOncePerSession: !data.showOncePerSession,
                    })
                  }
                >
                  {data.showOncePerSession ? (
                    <FiToggleRight />
                  ) : (
                    <FiToggleLeft />
                  )}
                  <span>{data.showOncePerSession ? "Once / Session" : "Every Visit"}</span>
                </button>
              </div>

              <hr className="setting-divider" />

              {/* Delay in seconds */}
              <div className="setting-input-row">
                <div className="input-info">
                  <label htmlFor="delaySeconds" className="input-label">
                    <FiClock /> Appearance Delay (Seconds)
                  </label>
                  <span className="input-hint">
                    Delay after page load before modal appears (0.5s recommended)
                  </span>
                </div>
                <input
                  id="delaySeconds"
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  className="form-control-sm"
                  value={data.delaySeconds}
                  onChange={(e) =>
                    setData({ ...data, delaySeconds: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Card 2: Notice Content & Links */}
          <div className="popup-admin-card">
            <div className="card-header">
              <div className="card-header-icon">
                <FiLink />
              </div>
              <div>
                <h3>Notice Content & Action Link</h3>
                <p>Provide title and where clicking the poster should redirect</p>
              </div>
            </div>

            <div className="card-body">
              {/* Title */}
              <div className="form-group">
                <label className="field-label" htmlFor="popupTitle">
                  Popup Title / Header (Optional)
                </label>
                <input
                  id="popupTitle"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Admission Notice 2026-27 | B.Ed. & M.Ed."
                  value={data.title || ""}
                  onChange={(e) =>
                    setData({ ...data, title: e.target.value })
                  }
                />
              </div>

              {/* Destination Link */}
              <div className="form-group">
                <label className="field-label" htmlFor="popupLink">
                  Redirect Destination URL / Path (Optional)
                </label>
                <div className="input-with-icon">
                  <FiLink className="field-icon" />
                  <input
                    id="popupLink"
                    type="text"
                    className="form-control pl-icon"
                    placeholder="e.g. /admission, /downloads, or https://mdu.ac.in"
                    value={data.link || ""}
                    onChange={(e) =>
                      setData({ ...data, link: e.target.value })
                    }
                  />
                </div>
                <span className="field-hint">
                  Clicking the image poster will navigate to this link.
                </span>
              </div>

              {/* External Link Toggle */}
              <div className="setting-toggle-row">
                <div className="toggle-info">
                  <span className="toggle-label">Open in New Tab</span>
                  <span className="toggle-desc">
                    Open destination link in a new browser tab
                  </span>
                </div>
                <button
                  type="button"
                  className={`toggle-switch-btn ${
                    data.isExternal ? "active" : ""
                  }`}
                  onClick={() =>
                    setData({ ...data, isExternal: !data.isExternal })
                  }
                >
                  {data.isExternal ? <FiToggleRight /> : <FiToggleLeft />}
                  <span>{data.isExternal ? "New Tab" : "Same Tab"}</span>
                </button>
              </div>

              {/* Button Text */}
              <div className="form-group mt-3">
                <label className="field-label" htmlFor="buttonText">
                  Button Action Label (Optional)
                </label>
                <input
                  id="buttonText"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Apply Now / View Details"
                  value={data.buttonText || ""}
                  onChange={(e) =>
                    setData({ ...data, buttonText: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Poster Image Upload & Preview */}
        <div className="popup-media-col">
          <div className="popup-admin-card">
            <div className="card-header">
              <div className="card-header-icon">
                <FiUploadCloud />
              </div>
              <div>
                <h3>Notice Poster Image</h3>
                <p>Upload the poster or banner image for the popup</p>
              </div>
            </div>

            <div className="card-body">
              {/* Uploader Box */}
              <div
                className="upload-dropzone"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <FiUploadCloud className="dropzone-icon" />
                <div className="dropzone-text">
                  <strong>Click to upload</strong> or drag and drop image
                </div>
                <div className="dropzone-hint">
                  Supports JPG, PNG, WEBP (Max 10MB). Recommended: portrait or
                  vertical poster (e.g. 600x800px).
                </div>
              </div>

              {/* Image Preview & Details */}
              {displayImageSrc ? (
                <div className="poster-preview-card">
                  <div className="preview-top-bar">
                    <span className="badge-preview">Current Poster</span>
                    <button
                      type="button"
                      className="btn-remove-poster"
                      onClick={handleRemoveImage}
                      title="Remove this image"
                    >
                      <FiTrash2 /> Remove Poster
                    </button>
                  </div>

                  <div className="preview-img-container">
                    <img
                      src={displayImageSrc}
                      alt="Popup Notice Preview"
                      className="preview-img"
                    />
                  </div>

                  <div className="preview-meta">
                    {newImageFile ? (
                      <span className="new-file-tag">
                        New file selected: {newImageFile.name} (
                        {(newImageFile.size / 1024).toFixed(1)} KB)
                      </span>
                    ) : (
                      <span className="saved-file-tag">
                        Active server poster image
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="no-image-placeholder">
                  <FiAlertCircle />
                  <p>No popup image currently uploaded.</p>
                  <span>Upload an image above to activate the popup notice.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive In-Admin Live Preview Modal */}
      {isPreviewModalOpen && displayImageSrc && (
        <div
          className="admin-preview-overlay"
          onClick={() => setIsPreviewModalOpen(false)}
        >
          <div
            className="admin-preview-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="admin-preview-close"
              onClick={() => setIsPreviewModalOpen(false)}
            >
              <FiX />
            </button>

            {data.title && (
              <div className="admin-preview-header">
                <FiBell />
                <span>{data.title}</span>
              </div>
            )}

            <div className="admin-preview-body">
              <img
                src={displayImageSrc}
                alt={data.title || "Popup Preview"}
                className="admin-preview-img"
              />
            </div>

            {data.link && (
              <div className="admin-preview-footer">
                <button
                  type="button"
                  className="admin-preview-action-btn"
                  onClick={() => setIsPreviewModalOpen(false)}
                >
                  <span>{data.buttonText || "Apply / View Details"}</span>
                  {data.isExternal ? <FiExternalLink /> : <FiLink />}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
