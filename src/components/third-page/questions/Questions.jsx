import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Footer from "../../landing-page/Footer";
import "./Questions.css";

const Questions = () => {
  return (
    <div>
      <Container fluid className="question_container">
        <hr className="text-primary quest_line" />
        <h3>Frequently asked questions</h3>
        <Container>
          <Row>
            <Col md={6} className="mb-5">
              <hr className="text-warning" />
              <Accordion defaultActiveKey="0" className=" mb-3">
                <Accordion.Item eventKey="0" className="accord">
                  <Accordion.Header>
                    What type of equipment do you supply to the oil and gas
                    industry
                  </Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
                <hr className="text-warning" />
                <Accordion.Item eventKey="1" className=" accord mb-3">
                  <Accordion.Header>
                    What type of equipment do you supply to the oil and gas
                    industry
                  </Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
                <hr className="text-warning" />
                <Accordion.Item eventKey="2" className=" accord mb-3">
                  <Accordion.Header>
                    What type of equipment do you supply to the oil and gas
                    industry
                  </Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6} className="mb-5">
              <hr className="text-warning" />
              <Accordion defaultActiveKey="0" className=" accord mb-3">
                <Accordion.Item eventKey="0" className="accord">
                  <Accordion.Header>
                    What type of equipment do you supply to the oil and gas
                    industry
                  </Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
                <hr className="text-warning" />
                <Accordion.Item eventKey="1" className="accord mb-3">
                  <Accordion.Header>
                    What type of equipment do you supply to the oil and gas
                    industry
                  </Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
                <hr className="text-warning" />
                <Accordion.Item eventKey="2" className=" accord mb-3">
                  <Accordion.Header>
                    What type of equipment do you supply to the oil and gas
                    industry
                  </Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <hr className="text-warning quest_line" />
      </Container>
      <Footer />
    </div>
  );
};

export default Questions;
