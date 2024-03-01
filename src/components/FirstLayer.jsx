import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaClock,
  FaLightbulb,
  FaPhone,
  FaSearch,
  FaThumbsUp,
} from "react-icons/fa";

const FirstLayer = () => {
  return (
    <div>
      <Container fluid className="firstsection_container">
        <Container className="mb-5">
          <Row className="d-flex flex-row justify-content-center">
            <Col className="firstsection">
              <h6 className="mt-4 d-flex flex-row justify-content-center">
                <div className="btn-group">
                  <Button className="faphone">
                    <p className="mx-3 mt-2">Visit: www.powertool.com</p>
                  </Button>
                  <span></span>
                </div>
              </h6>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default FirstLayer;
