import React from "react";
import logo from "../images/Logo.png";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./Navigation.css";

const Navigation = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="navigation">
      <Nav.Item as="li" className="nav-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </Nav.Item>
      <ul className="nav-bar"> 
        <Nav.Item as="li">
          <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
        </Nav.Item>
        < NavDropdown title="Company" id="nav-dropdown">
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item >Another action</NavDropdown.Item>
          <NavDropdown.Item >Something else here</NavDropdown.Item>
      </NavDropdown>
        <Nav.Item as="li">
          <Nav.Link style={{color:"white"}} href='/'>Services</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link style={{color:"white"}} href='/'>Contact</Nav.Link>
        </Nav.Item>
      </ul>
  </Nav>
  );
};

export default Navigation;
