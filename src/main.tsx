import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import SpeciesSpacecraft from "./routes/species-spacecraft";
import SeriesActorStats from "./routes/series-actor-stats";
import RuntimeStats from "./routes/runtime-stats";

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
    </React.StrictMode>
);
