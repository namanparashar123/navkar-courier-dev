import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
        <div>
        <img src={require("/images/logo.png")} alt="logo" />
        </div>
      <ul className="nav-bar">
        <li>Home</li>
        <li>Compnay</li>
        <ul className="nav-bar_drop">
          <li>About Us</li>
          <li>Careers</li>
          <li>Locations</li>
        </ul>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navigation;
