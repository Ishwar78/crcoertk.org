import React from "react";
import {
  FiHome,
  FiUsers,
  FiImage,
  FiFileText,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";

import {
  Link,
} from "react-router-dom";

import "./AdminDashboard.css";

const cards = [
  {
    title: "Home Content",
    description:
      "Manage homepage banner and sections.",
    icon: <FiHome />,
    path: "/admin/home",
  },
  {
    title: "Faculty",
    description:
      "Manage faculty members and profiles.",
    icon: <FiUsers />,
    path: "/admin/faculty",
  },
  {
    title: "Gallery",
    description:
      "Manage college gallery images.",
    icon: <FiImage />,
    path: "/admin/gallery",
  },
  {
    title: "Documents",
    description:
      "Manage mandatory college documents.",
    icon: <FiFileText />,
    path: "/admin/mandatory-documents",
  },
  {
    title: "Contact",
    description:
      "View website contact inquiries.",
    icon: <FiMessageSquare />,
    path: "/admin/contact",
  },
];

const AdminDashboard = () => {
  const admin = JSON.parse(
    localStorage.getItem(
      "crcoe_admin"
    ) || "{}"
  );

  return (
    <div className="dashboard-page">

      <div className="dashboard-welcome">

        <div>
          <span>
            ADMINISTRATOR DASHBOARD
          </span>

          <h2>
            Welcome,{" "}
            {admin.name ||
              "Administrator"}
          </h2>

          <p>
            Manage your CRCOE website
            content from one place.
          </p>
        </div>

        <div className="dashboard-welcome-shape">
          CRCOE
        </div>

      </div>


      <div className="dashboard-stat-grid">

        <div className="dashboard-stat">
          <span>WEBSITE</span>
          <strong>ACTIVE</strong>
          <small>
            Website status
          </small>
        </div>

        <div className="dashboard-stat">
          <span>DATABASE</span>
          <strong>CONNECTED</strong>
          <small>
            MongoDB CRCOE
          </small>
        </div>

        <div className="dashboard-stat">
          <span>ADMIN</span>
          <strong>SECURE</strong>
          <small>
            Authenticated session
          </small>
        </div>

        <div className="dashboard-stat">
          <span>CONTENT</span>
          <strong>MANAGE</strong>
          <small>
            Website sections
          </small>
        </div>

      </div>


      <div className="dashboard-heading">
        <div>
          <h3>
            Website Management
          </h3>

          <p>
            Select a section to manage
            its content.
          </p>
        </div>
      </div>


      <div className="dashboard-card-grid">

        {cards.map((card) => (
          <Link
            to={card.path}
            className="dashboard-card"
            key={card.path}
          >

            <div className="dashboard-card-icon">
              {card.icon}
            </div>

            <h4>
              {card.title}
            </h4>

            <p>
              {card.description}
            </p>

            <span>
              Manage
              <FiArrowRight />
            </span>

          </Link>
        ))}

      </div>

    </div>
  );
};

export default AdminDashboard;