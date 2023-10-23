import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "../pages/landingpage/landingpage";
import LaporPage from "../pages/laporpage/LaporPage";
import Login from "../pages/auth/Login";
import { useToken } from "../utils/states/token-context";

export default function Routes() {
  const { token } = useToken();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/lapor",
      element: token === "" ? <Navigate to="/login" /> : <LaporPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
