import { Outlet, Navigate } from "react-router-dom";

export const ProtectRoutes = () => {
  const userIsAuthenticated = localStorage.getItem("auth_token") ?? null;

  return userIsAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
