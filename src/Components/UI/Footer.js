import React from "react";
import footerLogo from "../images/Logo_footer.png";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid sec5 footercol">
      <div className="row">
      <div className="col-sm-5 input">
        <a href="/" >
          <img src={footerLogo} alt="logo" />
          <h1>Estd. 2020</h1>
        </a>
      </div>

      <div className="col-sm-4 m-address">
        <h5>Mailing Address</h5>
        <p>Address: 50 Chenier Bay <br /> Winnipeg <br /> R3X1K2</p> 
        <p>Email: info@navkarcourier.ca</p>
        <p>Mobile No: +1(204)999-3472</p>
      </div>
      <div className="col-sm-3 links">
          <h5> Our Company</h5>
            <ul className="footer_nav">
              <li><a href='/'>Home</a></li>
              <li><a href='/company'>Company </a></li>
              <li><a href='/Services'>Services</a></li>
              <li><a href='/contact'>Contact Us</a></li>
            </ul>
      <div>
      </div>
      </div>
      <div className="footer line">{`Copyright © Navkar Courier Ltd. ${year} | All Rights Reserved | Designed and developed by Naman Parashar`}
      </div>
      </div>
    </footer>
  );
};

export default Footer;
