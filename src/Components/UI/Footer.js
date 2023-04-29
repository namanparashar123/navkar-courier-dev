import React from "react";
import logo from "../images/Logo.png";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footerImg">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div>
        <h5>Mailing Address</h5>
        <p>Address: 50 Chenier Bay <br /> Winnipeg <br /> R3X1K2</p> 
        <p>Email: info@navkarcourier.ca</p>
        <p>Mobile No: +1(204)999-3472</p>
      </div>
          <h5> Our Company</h5>
      <div>

      </div>
    </footer>
  );
};

export default Footer;
