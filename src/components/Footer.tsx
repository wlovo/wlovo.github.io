import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const links: [string, string][] = [
  ["LinkedIn", "https://linkedin.com/in/william-lovo"],
  ["GitHub", "https://github.com/wlovo"],
];

const Footer = () => (
  <footer>
    <Navbar>
      <Nav>
        <Navbar.Brand>You can find me on:</Navbar.Brand>
        {links
          ? links.map(([name, link]) => (
              <Nav.Link target="_blank" rel="nofollow noopener noreferrer" href={link}>
                {name}
              </Nav.Link>
            ))
          : "Sorry, couldn't find my links!"}
      </Nav>
    </Navbar>
  </footer>
);

export default Footer;
