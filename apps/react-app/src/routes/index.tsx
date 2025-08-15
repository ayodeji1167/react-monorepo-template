import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RoutesList } from "./routeList";

const router = createBrowserRouter([...RoutesList]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
