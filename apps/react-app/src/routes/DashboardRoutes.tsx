import { Outlet, type RouteObject } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import { RouteError } from "../components/error/RoutError";
import { OverviewRouteList } from "../features/overview/routes";

const DashboardOutlet = (
  <AppLayout>
    <Outlet />
  </AppLayout>
);
export const DashboardRoutes: RouteObject = {
  path: "/",
  element: DashboardOutlet,
  errorElement: <RouteError />,
  children: [...OverviewRouteList],
};
