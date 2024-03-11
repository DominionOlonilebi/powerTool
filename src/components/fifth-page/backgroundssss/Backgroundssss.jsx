import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbars from "../../landing-page/Navbars";
import Header from "../../landing-page/Header";
import "./Backgroundssss.css";

const Backgroundssss = () => {
  return (
    <div className="backgroundsss_div">
      <Header />
      <Container fluid className="background_container">
        <Navbars />
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col>
              <h1>Lets Get in Touch</h1>
              <hr className="background_line mb-4" />
              <p>
                Connect with us: Reach Out to PowerTools for Your Oil & Gas
                Equipment Needs
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Backgroundssss;
