import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiX, FiExternalLink, FiArrowRight, FiBell } from "react-icons/fi";
import "./PopupModal.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

export default function PopupModal() {
  const [popupData, setPopupData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Never show on admin panel
    if (location.pathname.startsWith("/admin")) {
      return;
    }

    let isMounted = true;

    const fetchPopup = async () => {
      try {
        const res = await fetch(`${API_URL}/api/popup`);
        const json = await res.json();

        if (isMounted && json.success && json.data) {
          const data = json.data;
          setPopupData(data);

          // Check if enabled and has an image
          if (data.enabled && data.image) {
            // Check session storage if showOncePerSession is active
            const isDismissed =
              data.showOncePerSession &&
              sessionStorage.getItem("crcoe_popup_closed") === "true";

            if (!isDismissed) {
              const delay = Math.max(100, (data.delaySeconds || 0.5) * 1000);
              const timer = setTimeout(() => {
                if (isMounted) {
                  setIsOpen(true);
                }
              }, delay);

              return () => clearTimeout(timer);
            }
          }
        }
      } catch (err) {
        console.error("Popup fetch error:", err);
      }
    };

    fetchPopup();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("crcoe_popup_closed", "true");
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleActionClick = () => {
    if (!popupData?.link) {
      handleClose();
      return;
    }

    const url = popupData.link.trim();
    handleClose();

    if (popupData.isExternal || url.startsWith("http://") || url.startsWith("https://")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url.startsWith("/") ? url : `/${url}`);
    }
  };

  if (!isOpen || !popupData || !popupData.image) {
    return null;
  }

  // Resolve image source
  const imageSrc = popupData.image.startsWith("http")
    ? popupData.image
    : `${API_URL}${popupData.image.startsWith("/") ? "" : "/"}${popupData.image}`;

  return (
    <div
      className="popup-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={popupData.title || "Announcement Notice"}
    >
      <div className="popup-dialog animate-popup">
        {/* Close Button at top right */}
        <button
          type="button"
          className="popup-close-btn"
          onClick={handleClose}
          aria-label="Close Notice Popup"
          title="Close (Esc)"
        >
          <FiX />
        </button>

        {/* Optional Header / Title Bar */}
        {popupData.title && (
          <div className="popup-header-bar">
            <span className="popup-header-icon">
              <FiBell />
            </span>
            <span className="popup-header-title">{popupData.title}</span>
          </div>
        )}

        {/* Poster Image Container */}
        <div
          className={`popup-image-wrapper ${popupData.link ? "clickable" : ""}`}
          onClick={popupData.link ? handleActionClick : undefined}
          title={popupData.link ? "Click to view details" : undefined}
        >
          <img
            src={imageSrc}
            alt={popupData.title || "College Notice"}
            className="popup-poster-image"
            loading="eager"
          />

          {popupData.link && (
            <div className="popup-image-overlay-hint">
              <span>Click to view details</span>
              <FiExternalLink />
            </div>
          )}
        </div>

        {/* Optional Action Button / Footer */}
        {popupData.link && (
          <div className="popup-footer">
            <button
              type="button"
              className="popup-action-btn"
              onClick={handleActionClick}
            >
              <span>{popupData.buttonText || "Click Here to View / Apply"}</span>
              {popupData.isExternal ? <FiExternalLink /> : <FiArrowRight />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
