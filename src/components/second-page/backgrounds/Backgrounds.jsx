import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbars from "../../landing-page/Navbars";
import Header from "../../landing-page/Header";

const Backgrounds = () => {
  return (
    <div>
      <Header />
      <Container fluid className="background_container">
        <Navbars />
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col>
              <h1>
                The foremost reliable source for quality equipment in
                <br /> the <span>oil</span> and <span>gas</span> sector
              </h1>
              <hr className="background_line mb-4" />
              <p>
                We provide high quality equipment and tools tailored to your
                unique needs and
                <br /> challenges
              </p>
              <Button className="background_btn">Know more</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Backgrounds;
