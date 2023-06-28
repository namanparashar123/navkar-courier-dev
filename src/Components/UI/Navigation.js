import React from "react";
import logo from "../images/Logo.png";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">

    <Container>

      <Navbar.Brand href="#home" className="navigation"> 
        <Nav.Item as="li" className="nav-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </Nav.Item>
      </Navbar.Brand>


      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto nav-bar">

        <Nav.Item as="li">
          <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link style={{color:"white"}} href='/Services'>Services</Nav.Link>
        </Nav.Item>
        
        <Nav.Item as="li">
          <Nav.Link style={{color:"white"}} href='/Contact'>Contact</Nav.Link>
        </Nav.Item>

      < NavDropdown className="nav_dropdown" title="Company" id="nav-dropdown" style={{color: 'white'}}>
              <NavDropdown.Item href="/About" >About Us</NavDropdown.Item>
              <NavDropdown.Item href="/Careers">Careers</NavDropdown.Item>
              <NavDropdown.Item href="/Locations">Locations</NavDropdown.Item>
      </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;
