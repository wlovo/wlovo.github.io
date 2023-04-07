import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Footer = () => (
  <footer>
    <Navbar>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar>
  </footer>
);

export default Footer;
