import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiVolume2 } from "react-icons/fi";
import "./Navbar.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5025";

const links = [
  ["About Us", "/about"],
  ["Academics", "/academics"],
  ["Admission", "/admission"],
  ["Mandatory Documents", "/mandatory-documents"],
  ["Faculty", "/faculty"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["IQAC", "/iqac"],
  ["Downloads", "/downloads"],
  ["Student Support", "/student-support"],
  ["Contact Us", "/contact"],
];

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [tickerData, setTickerData] = useState(defaultTicker);
  const location = useLocation();
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Load live ticker content from API
  useEffect(() => {
    let isMounted = true;
    fetch(`${API_URL}/api/ticker`)
      .then((res) => res.json())
      .then((result) => {
        if (isMounted && result.success && result.data) {
          setTickerData(result.data);
        }
      })
      .catch((err) => {
        console.log("Navbar ticker fetch (using fallback):", err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Dynamically compute and sync header height to prevent page content overlap
  useEffect(() => {
    const updateHeight = () => {
      if (!headerRef.current) return;
      const brand = headerRef.current.querySelector(".brand-row");
      const nav = headerRef.current.querySelector(".main-nav");
      const ticker = headerRef.current.querySelector(".nav-ticker-bar");
      const isMobile = window.innerWidth <= 960;
      const tH = ticker ? ticker.offsetHeight : 0;

      if (isMobile) {
        const bH = brand ? brand.offsetHeight : 85;
        setHeaderHeight(bH + tH);
      } else {
        const bH = brand ? brand.offsetHeight : 120;
        const nH = nav ? nav.offsetHeight : 42;
        setHeaderHeight(bH + nH + tH);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    window.addEventListener("resize", updateHeight);

    const timer = setTimeout(updateHeight, 200);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timer);
    };
  }, [tickerData]);

  const activeItems = (tickerData.items || []).filter(
    (item) => item.isActive && item.text
  );

  return (
    <>
      <header className="site-header fixed-header" ref={headerRef}>
        <div className="brand-row">
          <Link to="/" className="brand-logo" onClick={() => setOpen(false)}>
            <img
              src="/images/logo.png"
              alt="Chhotu Ram College of Education logo"
            />
          </Link>

          <div className="brand-copy">
            <h1>CHHOTU RAM COLLEGE OF EDUCATION</h1>
            <div className="brand-city">ROHTAK</div>
            <div className="accreditation">
              "A" Grade Accredited by NAAC (UGC)
            </div>
            <p>
              Affiliated to M.D. University, Rohtak &amp; Recognised by Govt. of
              Haryana &amp; NCTE
            </p>
          </div>

          <div className="brand-campus">
            <img src="/images/naac-logo.png" alt="NAAC Logo" />
          </div>

          {/* Mobile hamburger menu button inside brand row on mobile */}
          <button
            className="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link
            className={location.pathname === "/" ? "active" : ""}
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          {links.map(([label, path]) => (
            <Link
              key={path}
              className={location.pathname === path ? "active" : ""}
              to={path}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* =================================================
            SCROLLING ANNOUNCEMENT TICKER TAPE
        ================================================= */}
        {tickerData.enabled && activeItems.length > 0 && (
          <div
            className="nav-ticker-bar"
            role="region"
            aria-label="College Announcements"
          >
            <div className="nav-ticker-badge">
              <FiVolume2 className="ticker-badge-icon" />
              <span>{tickerData.badgeText || "UPDATES"}</span>
            </div>

            <div className="nav-ticker-marquee">
              <div
                className="nav-ticker-track"
                style={{ animationDuration: `${tickerData.speed || 35}s` }}
              >
                {[...activeItems, ...activeItems].map((item, idx) => {
                  const content = (
                    <span className="ticker-item-content">
                      {item.badge && (
                        <span className="ticker-item-badge">{item.badge}</span>
                      )}
                      <span className="ticker-item-text">{item.text}</span>
                    </span>
                  );

                  return (
                    <span key={idx} className="ticker-item-wrap">
                      {item.link ? (
                        item.isExternal ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ticker-item-link"
                          >
                            {content}
                          </a>
                        ) : (
                          <Link to={item.link} className="ticker-item-link">
                            {content}
                          </Link>
                        )
                      ) : (
                        content
                      )}
                      <span className="ticker-star" aria-hidden="true">
                        ✦
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to seamlessly push page content below the fixed header */}
      <div
        className="site-header-spacer"
        style={headerHeight ? { height: `${headerHeight}px` } : undefined}
        aria-hidden="true"
      />
    </>
  );
}