import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProjectCard = () => {
  return (
    <div className="project_div" id="careers">
      <h5 className="mb-3">Our portfolio</h5>
      <Container fluid className="project_container">
        <h2 className="mb-4">A showcase of some of our projects</h2>
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <Card style={{ width: "21rem" }}>
                <Card.Img variant="top" src="Images/pw9.jpg" alt="" />
                <Card.Body>
                  <Card.Title>
                    <b>Lorem ipsum dolor sit amet</b>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card style={{ width: "21rem" }}>
                <Card.Img variant="top" src="Images/pw14.jpg" alt="" />
                <Card.Body>
                  <Card.Title>
                    <b>Lorem ipsum dolor sit amet</b>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card style={{ width: "21rem" }}>
                <Card.Img variant="top" src="Images/pw8.jpg" alt="" />
                <Card.Body>
                  <Card.Title>
                    <b>Lorem ipsum dolor sit amet</b>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="d-flex flex-row justify-content-end">
            <Button className="project_btn">Read more</Button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default ProjectCard;
