import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "context";

export function RequireAuth() {
  const location = useLocation();
  const { user } = useAuth();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
}
