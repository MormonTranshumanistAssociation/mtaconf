import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MTAConf2022 from "./2022";
import MTAConf2024 from "./2024";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/2022",
    element: <MTAConf2022 />,
  },
  {
    path: "/",
    element: <MTAConf2024 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
