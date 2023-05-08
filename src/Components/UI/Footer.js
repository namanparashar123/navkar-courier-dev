import React from "react";
import footerLogo from "../images/Logo_footer.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid sec5 footercol">
      <div className="row">
        <div className="col-sm-5 input">
          <a href="/">
            <img src={footerLogo} alt="logo" />
            <h1>Estd. 2020</h1>
          </a>
        </div>
        <div className="col-sm-3 links">
          <h5> Our Company</h5>
          <ul className="footer_nav">
            <li>
              <a href="/About">About Us</a>
            </li>
            <li>
              <a href="/Careers">Careers</a>
            </li>
            <li>
              <a href="/contact" >Contact Us </a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <ul>
            <li><FontAwesomeIcon icon={faAt} style={{color: "#ffffff",}} size="2x"/></li>
            <li><FontAwesomeIcon icon={faAt} style={{color: "#ffffff",}} /></li>
            <li><FontAwesomeIcon icon={faAt} style={{color: "#ffffff",}} /></li>
            <li><FontAwesomeIcon icon={faAt} style={{color: "#ffffff",}} /></li>
            <li><FontAwesomeIcon icon={faAt} style={{color: "#ffffff",}} /></li>
            <li><FontAwesomeIcon icon={faAt} style={{color: "#ffffff",}} /></li>
          </ul>
        </div>

        <div className="footer line">
          {`Copyright © Navkar Courier Ltd. ${year} | All Rights Reserved | Designed and developed by Naman Parashar`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
