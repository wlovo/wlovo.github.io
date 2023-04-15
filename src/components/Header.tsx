import ProPic from "../images/NewProPic.png";

import React, { useState } from "react";
import { Button, Image, Modal, Nav, Navbar } from "react-bootstrap";

const Header = (): JSX.Element => {
  const [menuToggled, setToggled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const aboutMeLines: string[] = [
    "Hello! My name is William Lovo, a full time software engineer by day and a husband, brother, uncle, and dog dad by night.",
  ];

  return (
    <>
      <Navbar expand={false}>
        <Navbar.Brand
          as={Button}
          className="d-flex align-items-center"
          variant="dark"
          onClick={() => setShowModal(true)}>
          <Image
            src={ProPic as string}
            alt="William Lovo"
            width="50"
            height="50"
            className="me-1"
            roundedCircle
            thumbnail
          />
          William Lovo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          label="Toggle the navigation bar"
          className={menuToggled ? "rotate-in" : "rotate-out"}
          onClick={() => setToggled(!menuToggled)}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="text-left">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="nav-bar-brand-title">
        <Modal.Header closeButton>
          <Modal.Title id="nav-bar-brand-title">About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className={"text-center"}>
          <Image src={ProPic as string} alt="William Lovo" width={"50%"} fluid className="m-2" rounded />
          {aboutMeLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
