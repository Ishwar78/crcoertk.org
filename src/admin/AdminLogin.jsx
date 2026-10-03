import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiLock,
  FiMail,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";

import {
  adminLogin,
} from "./adminApi";

import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await adminLogin(
        form.email,
        form.password
      );

      if (!data.success) {
        setError(
          data.message ||
          "Invalid login credentials"
        );

        return;
      }

      localStorage.setItem(
        "crcoe_admin_token",
        data.token
      );

      localStorage.setItem(
        "crcoe_admin",
        JSON.stringify(data.admin)
      );

      navigate("/admin");
    } catch (error) {
      setError(
        "Unable to connect with server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-left">

        <div className="admin-login-brand">

          <div className="admin-brand-icon">
            <FiShield />
          </div>

          <div>
            <h2>
              CHHOTU RAM
            </h2>

            <span>
              COLLEGE OF EDUCATION
            </span>
          </div>

        </div>

        <div className="admin-login-content">

          <span className="admin-login-label">
            ADMINISTRATION PORTAL
          </span>

          <h1>
            Welcome Back,
            <strong> Administrator</strong>
          </h1>

          <p>
            Manage your college website,
            academic information and
            digital content from one
            secure dashboard.
          </p>

        </div>

        <div className="admin-login-footer">
          © 2026 Chhotu Ram College of
          Education, Rohtak
        </div>

      </div>


      <div className="admin-login-right">

        <form
          className="admin-login-card"
          onSubmit={handleSubmit}
        >

          <div className="admin-card-icon">
            <FiLock />
          </div>

          <h2>
            Admin Login
          </h2>

          <p>
            Sign in to access the
            administration dashboard
          </p>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <div className="admin-input-group">

            <label>
              Email Address
            </label>

            <div className="admin-input">
              <FiMail />

              <input
                type="email"
                name="email"
                placeholder="Enter admin email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>


          <div className="admin-input-group">

            <label>
              Password
            </label>

            <div className="admin-input">
              <FiLock />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

          </div>


          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >

            {loading
              ? "Signing In..."
              : "Sign In"}

            {!loading && (
              <FiArrowRight />
            )}

          </button>

          <div className="admin-login-note">
            <FiShield />
            Secure administrator access
          </div>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;