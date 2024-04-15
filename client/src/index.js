import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import ErrorPage from "./page-404";
import { MainLayout } from "./Layout/MainLayout/MainLayout";
import { Home } from "./views/Home/Home";
import { Weather } from "./views/Weather/Weather";
import Settings from "./views/Settings/Settings";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/weather",
    element: <Weather />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
