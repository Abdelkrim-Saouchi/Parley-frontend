import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";
import HistoryChatWindow from "./components/HistoryChatWindow.tsx";
import Profile from "./pages/Profile.tsx";
import VisitProfile from "./pages/VisitProfile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/history",
        element: <HistoryPage />,
        children: [
          {
            path: ":id",
            element: <HistoryChatWindow />,
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profiles/:id",
        element: <VisitProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
