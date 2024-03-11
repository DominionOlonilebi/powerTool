import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../landing-page/Footer";
import { FaClock } from "react-icons/fa";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission_div">
      <h2 className="my-5">Our mission and vision</h2>
      <hr className="text-primary mission_line" />
      <Container fluid className="mission_container">
        <Container>
          <Row>
            <Col md={4} className="mnb-3">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <FaClock className="p-2 fs-1 faclock rounded-circle " />
                  </h4>
                </div>

                <div>
                  <h4 className="mt-2">Mission</h4>
                </div>
              </div>
              <p>
                At powertools, our mission Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur adipis ratione bland icing elit. Voluptates culpa ea
                expedita mollitia quaerat optio nam repellat sequi similique
                eum. Placeat, sunt recusandae? Provident, ut rerum possimus sit
                at rem eligendi dolore!
              </p>
            </Col>
            <Col md={4}>
              <img src="Images/pw9.jpg" alt="" className="img-fluid" />
            </Col>
            <Col md={4} className="mnb-3">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <FaClock className="p-2 fs-1 faclock rounded-circle " />
                  </h4>
                </div>

                <div>
                  <h4 className="mt-2">Vision</h4>
                </div>
              </div>
              <p>
                Our mission at powertools, Lorem ipsum dolor sit amet
                consectetur adipi ratione bland sicing elit. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Fuga velit cum nemo
                sequi ipsa, autem et ratione bland itiis unde numquam. Placeat,
                sunt recusandae? Provident, ut rerum possimus sit at rem
                eligendi dolore!
              </p>
            </Col>
          </Row>
        </Container>
        <hr className="text-warning missions_line" />
      </Container>

      {/* Directors */}
      <hr className="text-warning xline" />

      <Container fluid className="directors_container">
        <h2>Our Directors</h2>
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={2}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src="Images/mv2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Gabriel Willson</b>
                  </Card.Title>
                  <Card.Text className="texts">Sales Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src="Images/mv2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Gabriel Willson</b>
                  </Card.Title>
                  <Card.Text className="texts">Sales Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src="Images/mv2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Gabriel Willson</b>
                  </Card.Title>
                  <Card.Text className="texts">Sales Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src="Images/mv2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Gabriel Willson</b>
                  </Card.Title>
                  <Card.Text className="texts">Sales Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button className="directors_btn">Contact us</Button>
        </Container>
      </Container>

      {/* Accreditation */}
      <Container fluid>
        <div className="services_heading">
          <h1>
            <span>P</span>POWERTOOLS
          </h1>
          <h3>INTEGRATED SERVICES LIMITED</h3>
          <h4>Accreditations</h4>
          <hr className="text-primary line" />
        </div>
        <Container>
          <Row>
            <Col md={3}>
              <img src="Images/noch5.png" alt="" className="img-fluid" />
            </Col>
            <Col md={3}>
              <img src="Images/noch5.png" alt="" className="img-fluid" />
            </Col>
            <Col md={3}>
              <img src="Images/noch5.png" alt="" className="img-fluid" />
            </Col>
            <Col md={3}>
              <img src="Images/noch5.png" alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <hr className="text-warning lines" />
      </Container>
      <Footer />
    </div>
  );
};

export default Mission;
