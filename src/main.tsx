import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  SpeciesSpacecraft,
  SeriesActorStats,
  RuntimeStats,
} from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "spacecraft/",
    element: <SpeciesSpacecraft />,
  },
  {
    path: "performers/",
    element: <SeriesActorStats />,
  },
  {
    path: "run-date-stats/",
    element: <RuntimeStats />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
