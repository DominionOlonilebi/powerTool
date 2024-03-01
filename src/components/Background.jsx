import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FirstLayer from "./FirstLayer";
import Navbars from "./Navbars";

const Background = () => {
  return (
    <div>
      <Container fluid className="background_container">
        <Navbars />
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col>
              <h1>
                Maximize effiency and safety with
                <br /> our <span>oil</span> and <span>gas</span> equipment
                solutions
              </h1>
              <hr className="background_line" />
              <p>
                Lorem ipsum dolor sit, amet conse aut volupt ctetur adipisicing
                elit.
                <br />
                Reiciendis aliquam.
              </p>
              <Button className="background_btn">Purchase</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Background;
