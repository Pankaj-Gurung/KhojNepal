import React from "react";
import Contact from "./pages/contact/contact.page";
import Home from "./pages/home/home.page";
import Navbar from "./components/navbar/navbar.component";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
