import React from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import {
  FiGrid,
  FiHome,
  FiInfo,
  FiBookOpen,
  FiUserPlus,
  FiFileText,
  FiUsers,
  FiLayers,
  FiImage,
  FiAward,
  FiDownload,
  FiHelpCircle,
  FiMessageSquare,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  adminLogout,
} from "./adminApi";

import "./AdminLayout.css";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <FiGrid />,
  },
  {
    title: "Home",
    path: "/admin/home",
    icon: <FiHome />,
  },
  {
    title: "About Us",
    path: "/admin/about",
    icon: <FiInfo />,
  },
  // {
  //   title: "Academics",
  //   path: "/admin/academics",
  //   icon: <FiBookOpen />,
  // },
  // {
  //   title: "Admission",
  //   path: "/admin/admission",
  //   icon: <FiUserPlus />,
  // },
  // {
  //   title: "Mandatory Documents",
  //   path: "/admin/mandatory-documents",
  //   icon: <FiFileText />,
  // },
  {
    title: "Faculty",
    path: "/admin/faculty",
    icon: <FiUsers />,
  },
  {
    title: "Facilities",
    path: "/admin/facilities",
    icon: <FiLayers />,
  },
  {
    title: "Gallery",
    path: "/admin/gallery",
    icon: <FiImage />,
  },
  // {
  //   title: "IQAC",
  //   path: "/admin/iqac",
  //   icon: <FiAward />,
  // },
  // {
  //   title: "Downloads",
  //   path: "/admin/downloads",
  //   icon: <FiDownload />,
  // },
  // {
  //   title: "Student Support",
  //   path: "/admin/student-support",
  //   icon: <FiHelpCircle />,
  // },
  {
    title: "Contact / Inquiries",
    path: "/admin/contact",
    icon: <FiMessageSquare />,
  },
];

const AdminLayout = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] =
    React.useState(false);

  const admin = JSON.parse(
    localStorage.getItem(
      "crcoe_admin"
    ) || "{}"
  );

  const handleLogout = async () => {
    await adminLogout();

    navigate("/admin/login");
  };

  return (
    <div className="admin-layout">

      <aside
        className={`admin-sidebar ${
          mobileOpen
            ? "admin-sidebar-open"
            : ""
        }`}
      >

        <div className="admin-sidebar-header">

          <div className="admin-logo-box">
            CR
          </div>

          <div>
            <h3>CRCOE</h3>
            <span>ADMIN PANEL</span>
          </div>

          <button
            className="admin-mobile-close"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <FiX />
          </button>

        </div>


        <div className="admin-sidebar-menu">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              onClick={() =>
                setMobileOpen(false)
              }
              className={({ isActive }) =>
                `admin-menu-link ${
                  isActive
                    ? "active"
                    : ""
                }`
              }
            >
              <span>
                {item.icon}
              </span>

              <label>
                {item.title}
              </label>
            </NavLink>
          ))}

        </div>


        <div className="admin-sidebar-bottom">

          <div className="admin-user">

            <div className="admin-user-avatar">
              {(admin.name || "A")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {admin.name ||
                  "Administrator"}
              </strong>

              <span>
                {admin.email ||
                  "Admin"}
              </span>
            </div>

          </div>

          <button
            className="admin-logout"
            onClick={handleLogout}
          >
            <FiLogOut />
            Logout
          </button>

        </div>

      </aside>


      <main className="admin-main">

        <header className="admin-topbar">

          <button
            className="admin-mobile-menu"
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <FiMenu />
          </button>

          <div>
            <span>
              CHHOTU RAM COLLEGE OF EDUCATION
            </span>

            <h1>
              Administration Panel
            </h1>
          </div>

          <div className="admin-topbar-badge">
            ADMIN
          </div>

        </header>


        <section className="admin-content">
          <Outlet />
        </section>

      </main>

    </div>
  );
};

export default AdminLayout;