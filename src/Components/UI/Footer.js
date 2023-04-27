import React from "react";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">{`Copyright © Navkar Courier Ltd. ${year} | All Rights Reserved | Designed and developed by Naman Parashar`}</footer>
  );
};

export default Footer;
