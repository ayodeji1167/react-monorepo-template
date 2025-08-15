import type { RouteObject } from "react-router-dom";
import { lazyImport } from "../../../utils/lazy-import";
import { RouteConstants } from "../../../constants/routes";

const { LoginPage } = lazyImport(
  () => import("../pages/LoginPage"),
  "LoginPage",
);
export const AuthRouteLists: RouteObject[] = [
  {
    path: RouteConstants.auth.login.path,
    element: <LoginPage />,
  },
];
