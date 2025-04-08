import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/navbar/navbar.component";
import "./styles.scss";
const App = () => {
  const routing = useRoutes(routes);
  return (
    <>
      <Navbar />
      {routing}
    </>
  );
};

export default App;
