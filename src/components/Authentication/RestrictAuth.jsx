import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "context";

export function RestrictAuth() {
  const location = useLocation();
  const { user } = useAuth();

  return user ? (
    <Navigate
      to={`${
        location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
      }`}
      replace
    />
  ) : (
    <Outlet />
  );
}
