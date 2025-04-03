import React from "react";
import Contact from "./pages/contact/contact.page";
import Home from "./pages/home/home.page";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
