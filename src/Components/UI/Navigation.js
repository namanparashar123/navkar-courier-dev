import React from "react";
import logo from "../images/Logo.png";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import "./Navigation.css";
import { Route } from "react-router";

const Navigation = () => {
  return (
    <Router>
    <Nav>
    <Nav.Item as="li" className="nav-logo">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </Nav.Item>
    <ul className="nav-bar"> 
      <Nav.Item as="li">
        <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
      </Nav.Item>
      < NavDropdown className="nav_dropdown" title="Company" id="nav-dropdown" style={{color: 'white'}}>
        <NavDropdown.Item href="/about" >About Us</NavDropdown.Item>
        <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
        <NavDropdown.Item href="/locations">Locations</NavDropdown.Item>
    </NavDropdown>
      <Nav.Item as="li">
        <Nav.Link style={{color:"white"}} href='/services'>Services</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{color:"white"}} href='
        /contact'>Contact</Nav.Link>
      </Nav.Item>
    </ul>
</Nav>
</Router>
  );
};

export default Navigation;
