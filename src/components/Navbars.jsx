import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbars = () => {
  return (
    <>
      <Container fluid className="navbar_container">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand href="#home" className="navbar_brand"></Navbar.Brand>
            <Row className="d-flex flex-row justify-content-end">
              <Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav variant="underline">
                    <Nav.Link href="/" className="links mx-3">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#about" className="links mx-3">
                      About
                    </Nav.Link>
                    <Nav.Link href="#services" className="links mx-3">
                      Services
                    </Nav.Link>
                    <Nav.Link href="#careers" className="links mx-3">
                      Careers
                    </Nav.Link>
                    <Nav.Link href="#footer" className="links mx-3">
                      Contact
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Navbars;
