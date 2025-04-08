import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
const Navbar = (props) => {
  const { title } = props;
  return (
    <main>
      <header>
        <h1>Logo</h1>
        <nav>
          <div className="link-wrapper">
            <Link className="nav-links">Home</Link>
            <Link className="nav-links">Contact Us</Link>
          </div>
        </nav>
        <div className="auth-buttons">
          <Link to="#">
            <Button>Login</Button>
          </Link>
          <Link to="#">
            <Button>Signup</Button>
          </Link>
        </div>
      </header>
    </main>
  );
};

export default Navbar;
