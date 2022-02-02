import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/home" className="navbar-brand">
          Movies App
        </Link>
        <Nav className="me-auto">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/add-movie" className="nav-link">
            Add Movies
          </Link>
          <Link to="/latest-releases" className="nav-link">
            Latest Releases
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
