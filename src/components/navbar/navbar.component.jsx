import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const { title } = props;
  return (
    <main>
      <nav>
        <div className="link-wrapper">
          <Link className="nav-links">Home</Link>
          <Link className="nav-links">Contact Us</Link>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
