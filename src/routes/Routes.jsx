import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import LaporPage from "../pages/laporpage/LaporPage";
import Login from "../pages/auth/Login";
import { useToken } from "../utils/states/token-context";
import LandingPage from "../pages/landingpage/LandingPage.jsx";
import Qnabot from "../pages/qnabot/Qnabot.jsx";
import Katalog from "../pages/katalog.jsx";

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
      path: "/qnabot",
      element: <Qnabot />,
    },
    {
      path: "/katalog",
      element: <Katalog />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
