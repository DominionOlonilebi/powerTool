import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../../landing-page/Navbars";
import Header from "../../landing-page/Header";
import "./Backgroundss.css";

const Backgroundss = () => {
  return (
    <div className="backgroundss_div">
      <Header />
      <Container fluid className="background_container">
        <Navbars />
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col>
              <h1>Specialized services and integrated solutions</h1>
              <hr className="background_line mb-4" />
              <p>We offer tailored made solutions to empower your operations</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Backgroundss;
