import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "context";

type LocationState ={
  from : {
    pathname:number
  }
}

export function RestrictAuth() {

  const location  = useLocation();

  const { user } = useAuth();

  return user.id ? (
    <Navigate
      to={`${
        (location?.state as LocationState)?.from?.pathname ?(location?.state as LocationState)?.from?.pathname : "/"
      }`}
      replace
    />
  ) : (
    <Outlet />
  );
}
