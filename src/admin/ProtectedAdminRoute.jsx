import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const token = localStorage.getItem(
    "crcoe_admin_token"
  );

  if (!token) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;