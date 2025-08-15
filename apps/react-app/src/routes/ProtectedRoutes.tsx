// import { getToken } from "@repo/utils";
// import { useMemo } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RouteConstants } from "../constants/routes";

export default function ProtectedRoutes() {
  const location = useLocation();

  const isAuthenticated = true;
  // const isAuthenticated = useMemo(() => {
  //   const token = getToken();
  //   return !!token?.accessToken;
  // }, [location.pathname]);

  if (!isAuthenticated) {
    return (
      <Navigate
        to={RouteConstants.auth.login.path}
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
