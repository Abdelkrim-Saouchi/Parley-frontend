import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";
import HistoryChatWindow from "./components/HistoryChatWindow.tsx";
import Profile from "./pages/Profile.tsx";
import VisitProfile from "./pages/VisitProfile.tsx";
import Search from "./pages/Search.tsx";
import ChatWindowPage from "./pages/ChatWindowPage.tsx";
import Signup from "./pages/Singup.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
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
        path: "/profiles/:id/",
        element: <VisitProfile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/conversations/:id",
        element: <ChatWindowPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
