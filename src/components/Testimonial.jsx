import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaClock,
  FaLightbulb,
  FaSearch,
  FaThumbsUp,
} from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="review_div">
      <h3>TESTIMONIES FROM OUR ESTEEMED CLIENTS</h3>
      <Container fluid className="review_container">
        <Container className="cards">
          <Row className="cards_row d-flex flex-row justify-content-center">
            <Col md={4} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <img
                      src="Images/img13.jpg"
                      alt=""
                      className=" faclock rounded-circle"
                      width={50}
                      height={60}
                    />
                  </h4>
                </div>

                <div>
                  <h6>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat, blanditiis?
                  </h6>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
            </Col>

            <Col md={4} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <img
                      src="Images/img13.jpg"
                      alt=""
                      className=" faclock rounded-circle"
                      width={50}
                      height={60}
                    />
                  </h4>
                </div>

                <div>
                  <h6>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat, blanditiis?
                  </h6>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="cards_row d-flex flex-row justify-content-center">
            <Col md={4} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <img
                      src="Images/img13.jpg"
                      alt=""
                      className=" faclock rounded-circle"
                      width={50}
                      height={60}
                    />
                  </h4>
                </div>

                <div>
                  <h6>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat, blanditiis?
                  </h6>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <img
                      src="Images/img13.jpg"
                      alt=""
                      className=" faclock rounded-circle"
                      width={50}
                      height={60}
                    />
                  </h4>
                </div>

                <div>
                  <h6>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat, blanditiis?
                  </h6>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
            </Col>
          </Row>
          <div className="d-flex flex-row justify-content-end">
            <Button className="review_btn mb-3">Read more</Button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Testimonial;
