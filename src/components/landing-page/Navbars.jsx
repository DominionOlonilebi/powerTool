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
                    <Nav.Link href="/" className="links mx-2">
                      Home
                    </Nav.Link>
                    <Nav.Link href="/abt" className="links mx-2">
                      About us
                    </Nav.Link>
                    <Nav.Link href="/servicess" className="links mx-2">
                      Services
                    </Nav.Link>
                    <Nav.Link href="/testimonials" className="links mx-2">
                      Our Clients
                    </Nav.Link>
                    <Nav.Link href="/contactus" className="links mx-2">
                      Contact us
                    </Nav.Link>
                    <Nav.Link href="/career" className="links mx-2">
                      Careers
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
