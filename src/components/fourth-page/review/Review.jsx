import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRightAlt,
} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  return (
    <div>
      <Container className="clients_container">
        <h2>Our Valued clients</h2>
        <p className="mb-5">
          At powertools, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat quos incidunt eligendi quae nihil ducimus maxime
          perferendis, culpa ex unde. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugit delectus hic dignissimos vitae ducimus at quos
          error eum eos consequ ndis quidem tenetur amet untur. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Commodi ipsam laborum
          odit ut! Possimus, expedita saepe veniam minima hic unde laborum
          reiciendis quidem tenetur amet. Ullam tempora laudantium sed
          inventore?{" "}
          <b>Global Oil Corp, SeaDrill Energy, and PureGas Solutions</b>
        </p>
        <h3 className="mt-4 mb-3">What our esteemed clients have to say</h3>
        <FontAwesomeIcon icon={faQuoteRightAlt} className="clients_icon mb-4" />
        <Row className="d-flex flex-row justify-content-center">
          <Col md={10} className="clients_col">
            <div className="  mb-4">
              <p>
                "Powertools Equipment Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eveniet, illo. Dolor autem iusto temporibus
                necessitatibus accusamus sapiente Lorem ipsum dolor sit amet
                consectetur adipisicing elit. tatibus accusamus sapiente
                deserunt dignissimos eum"-
              </p>
              <p>
                <b>Jane Doe, Engineering Manager, Global Oil Corp</b>
              </p>
            </div>
            <div className="mb-4">
              <p>
                "Powertools Equipment Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eveniet, illo. Dolor autem iusto temporibus
                necessitatibus accusamus sapiente Lorem ipsum dolor sit amet
                consectetur adipisicing elit. tatibus accusamus sapiente
                deserunt dignissimos eum"-
              </p>
              <p>
                <b>Jane Doe, Engineering Manager, Global Oil Corp</b>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="why_line" />

      {/* esteemed clients */}
      <div className="esteemed_div">
        <h5>Our esteemed clients</h5>
      </div>
      <Container fluid className="esteemed_client_container ">
        <hr className="text-warning esteemed_line mb-5" />

        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <img src="Images/noch5.png" alt="" className="img-fluid" />
              </Card>
            </Col>
          </Row>
        </Container>
        <hr className="text-warning esteemed_line" />
      </Container>

      {/* what our clients says */}
      <Container fluid className="review_container py-5">
        <h3>what our clients say about us</h3>
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={6}>
                  <Card className="mb-5">
                    <Card.Img
                      variant="top"
                      src="Images/pw9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <b>John Doe</b>
                      </Card.Title>
                      <Card.Text>
                        Operations Manager, XYZ Drilling Company
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-5">
                    <Card.Img
                      variant="top"
                      src="Images/pw9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <b>John Doe</b>
                      </Card.Title>
                      <Card.Text>
                        Operations Manager, XYZ Drilling Company
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-5">
                    <Card.Img
                      variant="top"
                      src="Images/pw9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <b>John Doe</b>
                      </Card.Title>
                      <Card.Text>
                        Operations Manager, XYZ Drilling Company
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-5">
                    <Card.Img
                      variant="top"
                      src="Images/pw9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <b>John Doe</b>
                      </Card.Title>
                      <Card.Text>
                        Operations Manager, XYZ Drilling Company
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-5">
                    <Card.Img
                      variant="top"
                      src="Images/pw9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <b>John Doe</b>
                      </Card.Title>
                      <Card.Text>
                        Operations Manager, XYZ Drilling Company
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-5">
                    <Card.Img
                      variant="top"
                      src="Images/pw9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        <b>John Doe</b>
                      </Card.Title>
                      <Card.Text>
                        Operations Manager, XYZ Drilling Company
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="review_col">
              <Card>
                <Card.Body>
                  <Card.Title className="text">
                    <b>John Doe, Operations Manager, XYZ Drilling Company</b>
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, illo. Dolor autem iusto temporibus necessitatibus
                    accusamus sapiente deserunt dignissimos eum!
                  </Card.Text>
                </Card.Body>
                <hr className="text-warning review_line" />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text">
                    <b>John Doe, Operations Manager, XYZ Drilling Company</b>
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, illo. Dolor autem iusto temporibus necessitatibus
                    accusamus sapiente deserunt dignissimos eum!
                  </Card.Text>
                </Card.Body>
                <hr className="text-warning review_line" />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text">
                    <b>John Doe, Operations Manager, XYZ Drilling Company</b>
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, illo. Dolor autem iusto temporibus necessitatibus
                    accusamus sapiente deserunt dignissimos eum!
                  </Card.Text>
                </Card.Body>
                <hr className="text-warning review_line" />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text">
                    <b>John Doe, Operations Manager, XYZ Drilling Company</b>
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, illo. Dolor autem iusto temporibus necessitatibus
                    accusamus sapiente deserunt dignissimos eum!
                  </Card.Text>
                </Card.Body>
                <hr className="text-warning review_line" />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text">
                    <b>John Doe, Operations Manager, XYZ Drilling Company</b>
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, illo. Dolor autem iusto temporibus necessitatibus
                    accusamus sapiente deserunt dignissimos eum!
                  </Card.Text>
                </Card.Body>
                <hr className="text-warning review_line" />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text">
                    <b>John Doe, Operations Manager, XYZ Drilling Company</b>
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, illo. Dolor autem iusto temporibus necessitatibus
                    accusamus sapiente deserunt dignissimos eum!
                  </Card.Text>
                </Card.Body>
                <hr className="text-warning review_line" />
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text">
                    <b>John Doe, Operations Manager, XYZ Drilling Company</b>
                  </Card.Title>
                  <Card.Text className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, illo. Dolor autem iusto temporibus necessitatibus
                    accusamus sapiente deserunt dignissimos eum!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Review;
