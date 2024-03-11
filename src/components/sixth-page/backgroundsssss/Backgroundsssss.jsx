import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbars from "../../landing-page/Navbars";
import Header from "../../landing-page/Header";
import "./Backgroundsssss.css";

const Backgroundsssss = () => {
  return (
    <div className="backgroundsssss_div">
      <Header />
      <Container fluid className="background_container">
        <Navbars />
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col>
              <h1>Careers at powertools </h1>
              <hr className="background_line mb-4" />
              <p>
                Elevate Your Career: Exciting Opportunities Await at PowerTools
                in the Oil & Gas Sector
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Backgroundsssss;
