import React from "react";
import footerLogo from "../images/Logo_footer.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons'
import fblogo from "../images/fblogo.png"
import whatspplogo from "../images/whatspplogo.png"
import instalogo from "../images/instalogo.png"

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
        <div className="col-sm-4">
        <div className="logo">
           <img style = {{width:'50px', height: '50px', margin:'10px'}} src={fblogo} alt="logo" />
           <img style = {{width:'50px', height: '50px', margin:'10px'}} src={whatspplogo} alt="logo" />
           <img style = {{width:'50px', height: '50px', margin:'10px'}} src={instalogo} alt="logo" />
        </div>
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff", margin:'10px'}} size="3x"/>
            <FontAwesomeIcon icon={faAt} style={{color: "#ffffff", margin:'10px'}} size="3x"/>
        </div>

        <div className="footer line">
          {`Copyright © Navkar Courier Ltd. ${year} | All Rights Reserved | Designed and developed by Naman Parashar`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
