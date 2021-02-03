import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Jean-Christophe Robertson</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Do</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">All </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">The Things!</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              One mooooore thing
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">LinkedIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
