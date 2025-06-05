import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import ResumePage from "./components/ResumePage/ResumePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <AboutPage />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <NavBar />
        <ServicesPage />
      </>
    ),
  },
  {
    path: "/resume",
    element: (
      <>
        <NavBar />
        <ResumePage />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <NavBar />
        <ProjectsPage />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <ContactPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
