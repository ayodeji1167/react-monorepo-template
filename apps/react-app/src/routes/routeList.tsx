import type { RouteObject } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { BaseApp } from "./BaseApp";

import { DashboardRoutes } from "./DashboardRoutes";
import { RouteError } from "../components/error/RoutError";
import { NotFound } from "../components/error/NotFound";
import { AuthRouteLists } from "../features/auth/routes";

const protectedRoutes: RouteObject = {
  path: "/",
  element: <ProtectedRoutes />,
  children: [DashboardRoutes],
  errorElement: <RouteError />,
};

export const RoutesList: RouteObject[] = [
  {
    path: "",
    element: <BaseApp />,
    errorElement: <RouteError />,
    children: [protectedRoutes, ...AuthRouteLists],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
