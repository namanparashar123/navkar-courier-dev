import React from "react";
import logo from "../images/Logo.png";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-logo">
        <a href="www.google.com">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="nav-bar">
        <li>Home</li>
        <li>Company</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navigation;
