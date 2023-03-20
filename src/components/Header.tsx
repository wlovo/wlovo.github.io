import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = (): JSX.Element => {
  const [toggled, setToggled] = useState(false);

  return (
    <Navbar expand={false}>
      <Navbar.Brand href="/">William Lovo</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbar-nav"
        label="Toggle the navigation bar"
        className={toggled ? 'rotate-in' : 'rotate-out'}
        onClick={() => setToggled(!toggled)}
      />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="text-left">
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
