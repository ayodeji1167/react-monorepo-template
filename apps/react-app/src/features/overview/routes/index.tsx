import type { RouteObject } from "react-router-dom";
import { lazyImport } from "../../../utils/lazy-import";

const { OverviewPage } = lazyImport(
  () => import("../pages/OverviewPage"),
  "OverviewPage",
);
export const OverviewRouteList: RouteObject[] = [
  {
    index: true,
    element: <OverviewPage />,
  },
];
