import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <section>
        <Container className="join_container">
          <h2>Join Our Team</h2>
          <p>
            At powertools, Lorem ipsum dolor sit amet conse omnis ipsa, velit
            eveniet quos. Maiores, sunt officia veritatis necessitatibus
            voluptatem deserunt debitis perferendis veniam architecto, ctetur,
            adipisicing elit. Ex odit omnis ipsa, velit eveniet quos. Maiores,
            sunt officia veritatis necessitatibus voluptatem deserunt debitis
            perferendis veniam architecto, voluptatibus adipisci rem deleniti.
          </p>
          <Button className="join_btn">Apply now</Button>
        </Container>
        <Container fluid className="teams">
          <div></div>
        </Container>
        <hr className="why_line" />
      </section>

      {/* why choose pt section */}
      <Container fluid className="why_container py-4 mb-5">
        <h2 className="mb-5 pt-4">Why Choose Power Tools</h2>
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={4} className="mb-4">
              <Card>
                <Row className="d-flex flex-row justify-content-center">
                  <Col md={3}>
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="cards_icon mb-2 mt-4 p-2  rounded-circle"
                    />
                  </Col>
                </Row>
                <h6>Innovative Environment:</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores sunt natus adipisci error unde iusto nostrum earum?
                </p>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Row className="d-flex flex-row justify-content-center">
                  <Col md={3}>
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="cardss_icon mb-2 mt-4 p-2  rounded-circle"
                    />
                  </Col>
                </Row>
                <h6>Career Growth:</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores sunt natus adipisci error unde iusto nostrum earum?
                </p>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Row className="d-flex flex-row justify-content-center">
                  <Col md={3}>
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="cards_icon mb-2 mt-4 p-2  rounded-circle"
                    />
                  </Col>
                </Row>{" "}
                <h6>Industry Impact:</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores sunt natus adipisci error unde iusto nostrum earum?
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={4} className="mb-4">
              <Card>
                <Row className="d-flex flex-row justify-content-center">
                  <Col md={3}>
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="cards_icon mb-2 mt-4 p-2  rounded-circle"
                    />
                  </Col>
                </Row>{" "}
                <h6>Innovative Environment:</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores sunt natus adipisci error unde iusto nostrum earum?
                </p>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Row className="d-flex flex-row justify-content-center">
                  <Col md={3}>
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="cardss_icon mb-2 mt-4 p-2  rounded-circle"
                    />
                  </Col>
                </Row>
                <h6>Career Growth:</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores sunt natus adipisci error unde iusto nostrum earum?
                </p>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Row className="d-flex flex-row justify-content-center">
                  <Col md={3}>
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="cards_icon mb-2 mt-4 p-2  rounded-circle"
                    />
                  </Col>
                </Row>
                <div className="mx-4">
                  <h6>Industry Impact:</h6>
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipis icing elit.
                    Maiores sunt natus adipisci error unde ius to nost rum
                    earurum earum?
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <hr className="why_line" />
    </div>
  );
};

export default Team;
