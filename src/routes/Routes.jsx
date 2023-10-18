import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/landingpage/landingpage";
import LaporPage from "../pages/laporpage/LaporPage";
import { setAxiosConfig } from "../utils/apis/axiosWithConfig";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/lapor",
      element: <LaporPage />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
