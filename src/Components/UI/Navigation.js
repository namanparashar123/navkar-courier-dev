import React from "react";
import logo from "../images/Logo.png";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import "./Navigation.css";

const Navigation = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="navigation" activeKey="/">
    <Nav.Item as="li" className="nav-logo">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </Nav.Item>
    <ul className="nav-bar"> 
      <Nav.Item as="li">
        <Nav.Link style={{color:"white"}} href="/navkar-courier-dev">Home</Nav.Link>
      </Nav.Item>
      < NavDropdown className="nav_dropdown" title="Company" id="nav-dropdown" style={{color: 'white'}}>
        <NavDropdown.Item href="/navkar-courier-dev/about" >About Us</NavDropdown.Item>
        <NavDropdown.Item href="/navkar-courier-dev/careers">Careers</NavDropdown.Item>
        <NavDropdown.Item href="/navkar-courier-dev/locations">Locations</NavDropdown.Item>
    </NavDropdown>
      <Nav.Item as="li">
        <Nav.Link style={{color:"white"}} href='/navkar-courier-dev/services'>Services</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{color:"white"}} href='/navkar-courier-dev/sontact'>Contact</Nav.Link>
      </Nav.Item>
    </ul>
</Nav>
  );
};

export default Navigation;
