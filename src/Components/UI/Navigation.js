import React from "react";
import logo from "../images/Logo.png";

import "./Navigation.css";

const Navigation = () => {
  return (
      <div className="navigation">
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="nav-bar">
          <li><a href='/'>Home</a></li>
          <li><a href='/company'>Company
            {/* <ul className="nav-bar_drop">
              <li>About Us</li>
              <li>Careers</li>
              <li>Locations</li>
            </ul> */}
            </a>
          </li>
          <li><a href='/Services'>Services</a></li>
          <li><a href='/contact'>Contact Us</a></li>
        </ul>
      </div>
  );
};

export default Navigation;
