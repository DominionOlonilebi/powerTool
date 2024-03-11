import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbars from "../../landing-page/Navbars";
import Header from "../../landing-page/Header";
import "./Backgroundsss.css";

const Backgroundsss = () => {
  return (
    <div className="backgroundsss_div">
      <Header />
      <Container fluid className="background_container">
        <Navbars />
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col>
              <h1>
                Empowering industry success; our partnership with
                <br /> leading <span>oil</span> and <span>gas</span> clients
              </h1>
              <hr className="background_line mb-4" />
              <p>Building strong foundations through credibility and trust</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Backgroundsss;
