import React, { useEffect, useState } from "react";
import {
  FiSave,
  FiPlus,
  FiTrash2,
  FiCheck,
  FiVolume2,
  FiEye,
  FiAlertCircle,
  FiExternalLink,
} from "react-icons/fi";
import "./ManageTicker.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

const defaultTicker = {
  enabled: true,
  badgeText: "ANNOUNCEMENTS",
  speed: 35,
  items: [
    {
      text: "Admissions Open for B.Ed. & M.Ed. (Session 2026-27) — Apply Online Today!",
      link: "/admission",
      badge: "ADMISSION",
      isExternal: false,
      isActive: true,
    },
    {
      text: "Accredited 'A' Grade by NAAC (UGC) | Affiliated to M.D. University, Rohtak & NCTE Approved",
      link: "/about",
      badge: "NAAC 'A'",
      isExternal: false,
      isActive: true,
    },
    {
      text: "Notice: Check the latest academic calendar, examination schedules, and college updates.",
      link: "/news",
      badge: "NOTICE",
      isExternal: false,
      isActive: true,
    },
    {
      text: "For admission guidance or student queries, contact college helpdesk: 01262-274295",
      link: "/contact",
      badge: "HELPDESK",
      isExternal: false,
      isActive: true,
    },
  ],
};

export default function ManageTicker() {
  const [data, setData] = useState(defaultTicker);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    loadTickerData();
  }, []);

  const loadTickerData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const res = await fetch(`${API_URL}/api/ticker/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      if (res.ok && result.success && result.data) {
        setData(result.data);
      }
    } catch (err) {
      console.error("ManageTicker load error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const token = localStorage.getItem("crcoe_admin_token");
      const res = await fetch(`${API_URL}/api/ticker`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to update ticker");
      }

      setMessage({
        type: "success",
        text: "Navbar scrolling ticker updated and published live!",
      });

      if (result.data) {
        setData(result.data);
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Error saving changes",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleAddItem = () => {
    const newItem = {
      text: "New college announcement text here...",
      link: "",
      badge: "NEW",
      isExternal: false,
      isActive: true,
    };
    setData((prev) => ({
      ...prev,
      items: [newItem, ...(prev.items || [])],
    }));
  };

  const handleRemoveItem = (idx) => {
    setData((prev) => ({
      ...prev,
      items: (prev.items || []).filter((_, i) => i !== idx),
    }));
  };

  const handleUpdateItem = (idx, field, value) => {
    const updated = [...(data.items || [])];
    if (updated[idx]) {
      updated[idx] = {
        ...updated[idx],
        [field]: value,
      };
      setData((prev) => ({
        ...prev,
        items: updated,
      }));
    }
  };

  const activeItems = (data.items || []).filter((it) => it.isActive && it.text);

  if (loading) {
    return (
      <div className="manage-ticker">
        <div style={{ padding: "40px", textAlign: "center", color: "#64748b" }}>
          Loading Navbar Ticker configuration...
        </div>
      </div>
    );
  }

  return (
    <div className="manage-ticker">
      {/* HEADER */}
      <div className="manage-ticker-header">
        <div>
          <span>NAVBAR LIVE ANNOUNCEMENT CONTROLLER</span>
          <h2>
            Manage <strong>Navbar Ticker</strong>
          </h2>
          <p>
            Control the continuous scrolling announcements tape displayed at the top of the website.
          </p>
        </div>

        <button
          type="button"
          className="ticker-save-btn"
          onClick={handleSave}
          disabled={saving}
        >
          <FiSave />
          {saving ? "Publishing..." : "Save Changes"}
        </button>
      </div>

      {/* STATUS TOAST */}
      {message && (
        <div className={`ticker-admin-message ${message.type}`}>
          {message.type === "success" ? <FiCheck /> : <FiAlertCircle />}
          {message.text}
        </div>
      )}

      {/* LIVE PREVIEW BOX */}
      <div className="ticker-preview-card">
        <div className="ticker-preview-header">
          <h4>
            <FiEye /> Real-time Live Preview
          </h4>
          <span
            className={`ticker-preview-status ${
              data.enabled && activeItems.length > 0 ? "on" : "off"
            }`}
          >
            {data.enabled
              ? activeItems.length > 0
                ? "Active on Navbar"
                : "No Active Items"
              : "Disabled / Hidden"}
          </span>
        </div>

        {data.enabled && activeItems.length > 0 ? (
          <div
            style={{
              background: "#0b1a3d",
              borderRadius: "8px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              height: "36px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                background: "#ed0b70",
                color: "#fff",
                fontWeight: 800,
                fontSize: "11px",
                letterSpacing: "0.8px",
                padding: "0 14px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                flexShrink: 0,
                zIndex: 2,
              }}
            >
              <FiVolume2 />
              <span>{data.badgeText || "UPDATES"}</span>
            </div>

            <div
              style={{
                flex: 1,
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  animation: `ticker-scroll ${data.speed || 35}s linear infinite`,
                  paddingLeft: "100%",
                }}
              >
                {[...activeItems, ...activeItems].map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "#f1f5f9",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginRight: "28px",
                    }}
                  >
                    {item.badge && (
                      <span
                        style={{
                          background: "#ed0b70",
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: 800,
                          padding: "2px 6px",
                          borderRadius: "4px",
                          marginRight: "7px",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                    <span>{item.text}</span>
                    <span
                      style={{
                        color: "#ed0b70",
                        marginLeft: "18px",
                        fontSize: "10px",
                      }}
                    >
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: "#f1f5f9",
              padding: "14px",
              borderRadius: "8px",
              textAlign: "center",
              color: "#64748b",
              fontSize: "13px",
            }}
          >
            The scrolling ticker is currently turned off or has no active notices. Enable it below to display on the navbar.
          </div>
        )}
      </div>

      {/* GENERAL CONFIGURATION */}
      <div className="ticker-card">
        <div className="ticker-card-title">
          <h3>Ticker Settings</h3>
          <p>Configure general display properties and scroll speed.</p>
        </div>

        <div className="ticker-grid">
          {/* ENABLE TOGGLE */}
          <div className="ticker-toggle-row">
            <div className="ticker-toggle-label">
              <h4>Display Scrolling Line on Navbar</h4>
              <p>Turn ON to show the continuous scrolling marquee line across the navbar.</p>
            </div>
            <label className="ticker-switch">
              <input
                type="checkbox"
                checked={Boolean(data.enabled)}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, enabled: e.target.checked }))
                }
              />
              <span className="ticker-slider"></span>
            </label>
          </div>

          {/* BADGE TEXT */}
          <label className="ticker-field">
            <span>Badge / Header Tagline</span>
            <input
              type="text"
              placeholder="e.g. ANNOUNCEMENTS or LATEST UPDATES"
              value={data.badgeText || ""}
              onChange={(e) =>
                setData((prev) => ({ ...prev, badgeText: e.target.value }))
              }
            />
          </label>

          {/* SPEED */}
          <label className="ticker-field">
            <span>Scroll Speed</span>
            <select
              value={data.speed || 35}
              onChange={(e) =>
                setData((prev) => ({ ...prev, speed: Number(e.target.value) }))
              }
            >
              <option value={20}>Fast (20 seconds)</option>
              <option value={35}>Normal (35 seconds - Recommended)</option>
              <option value={50}>Smooth &amp; Relaxed (50 seconds)</option>
              <option value={70}>Slow (70 seconds)</option>
            </select>
          </label>
        </div>
      </div>

      {/* TICKER ITEMS LIST */}
      <div className="ticker-card">
        <div className="ticker-items-header">
          <div>
            <h3 style={{ margin: 0, fontSize: "18px", color: "#102d68" }}>
              Announcement Items ({(data.items || []).length})
            </h3>
            <p style={{ margin: "4px 0 0", color: "#8a909c", fontSize: "12px" }}>
              Each item will scroll continuously in the ticker tape. You can attach links or tags.
            </p>
          </div>

          <button
            type="button"
            className="ticker-add-btn"
            onClick={handleAddItem}
          >
            <FiPlus /> Add Notice
          </button>
        </div>

        {(data.items || []).map((item, idx) => (
          <div
            className={`ticker-item-card ${!item.isActive ? "disabled" : ""}`}
            key={idx}
          >
            <div className="ticker-item-card-top">
              <div className="ticker-item-badge-title">
                <span className="ticker-item-num">Item #{idx + 1}</span>
                <label className="ticker-active-checkbox">
                  <input
                    type="checkbox"
                    checked={Boolean(item.isActive)}
                    onChange={(e) =>
                      handleUpdateItem(idx, "isActive", e.target.checked)
                    }
                  />
                  <span>{item.isActive ? "Active (Showing)" : "Hidden"}</span>
                </label>
              </div>

              <button
                type="button"
                className="ticker-del-btn"
                title="Delete this notice"
                onClick={() => handleRemoveItem(idx)}
              >
                <FiTrash2 />
              </button>
            </div>

            <div className="ticker-grid">
              {/* NOTICE TEXT */}
              <label className="ticker-field full">
                <span>Announcement Text *</span>
                <textarea
                  placeholder="Enter notice headline or announcement message..."
                  value={item.text || ""}
                  onChange={(e) =>
                    handleUpdateItem(idx, "text", e.target.value)
                  }
                />
              </label>

              {/* BADGE / TAG */}
              <label className="ticker-field">
                <span>Tag / Badge (Optional)</span>
                <input
                  type="text"
                  placeholder="e.g. NEW, ADMISSION, URGENT, NOTICE"
                  value={item.badge || ""}
                  onChange={(e) =>
                    handleUpdateItem(idx, "badge", e.target.value)
                  }
                />
              </label>

              {/* LINK */}
              <label className="ticker-field">
                <span>Click Destination Route / URL (Optional)</span>
                <input
                  type="text"
                  placeholder="e.g. /admission or /news or https://..."
                  value={item.link || ""}
                  onChange={(e) =>
                    handleUpdateItem(idx, "link", e.target.value)
                  }
                />
              </label>

              {/* EXTERNAL LINK CHECKBOX */}
              {item.link && (
                <div className="ticker-field full">
                  <label
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      color: "#475569",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={Boolean(item.isExternal)}
                      onChange={(e) =>
                        handleUpdateItem(idx, "isExternal", e.target.checked)
                      }
                    />
                    <span>Open link in new browser tab</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
