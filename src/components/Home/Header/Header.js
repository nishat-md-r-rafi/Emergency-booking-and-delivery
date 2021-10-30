import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Header(props) {
  const { user, logOut } = useAuth();
  console.log(user, logOut);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">SafeEB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="#" disabled>
                Emergency Drug Delivery and ICU Booking
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {user?.email ? (
          <Link to="/login">
            <Button className="btn btn-primary">Login</Button>
          </Link>
        ) : (
          <Button className="btn btn-primary" onClick={logOut}>
            Logout
          </Button>
        )}
      </Navbar>
    </div>
  );
}

export default Header;
