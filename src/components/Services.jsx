import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";

const Services = () => {
  return (
    <div className="service">
      <Container className="services_container">
        <div className="services_heading">
          <h1>
            <span>P</span>POWERTOOLS
          </h1>
          <h3>INTEGRATED SERVICES LIMITED</h3>
          <hr className="line" />
        </div>

        <Row>
          <Col md={5}>
            <img src="Images/pw1.jpg" alt="" width={400} />
          </Col>

          <Col md={6}>
            <h3>Global consultation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid incididunt ut labore et dolore magna aliqua.
              Congue quisque egestas diam in arcu cursus. Maecenas accumsan
              lacus vel facilisis volutpat idunt ut labore et dolore magna
              aliqua. Congue quisque egestas diam in arcu cursus. Maecenas
              accumsan lacus vel facilisis volutpat est velit egestas.
            </p>
            <h6 className="mt-4">
              <Button className="service_btn">Learn more</Button>

              <div className="btn-group mx-4">
                <Button className="faarow">
                  <FaArrowDown />
                </Button>{" "}
                <span className="btns-group pt-2 px-4">Download</span>
              </div>
            </h6>
          </Col>
        </Row>
      </Container>
      <hr className="service_line" />
    </div>
  );
};

export default Services;
