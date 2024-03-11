import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Container fluid className="abt_container">
        <hr className="text-primary abt_line" />
        <h2 className="mt-2 mb-3">About us</h2>
        <Container>
          <p>
            <span>Powertools</span> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempora velit fugit nesciunt perferendis ea minima
            suscipit iure quia. Delectus excepturi nisi veritatis magni aliquam
            voluptatem sunt repudiandae unde quos, necessitatibus, temporibus
            obcaecati. Delectus nam laudantium cum repudiandae placeat, ut vitae
            asperiores nostrum odit dolores inventore quidem? Quos delectus cum
            maiores?
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam recusandae placeat tenetur ex accusantium esse quis ipsa
            nemo neque mollitia atque, quod eaque excepturi sed tempore
            blanditiis ea vero fuga?
          </p>
          <h6>
            <b>Our core values</b>
          </h6>
          <ul>
            <li>
              <span>Quality:</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea hic quae dolor, incidunt sit quos eum
              perspiciatis quidem, officia, ab sunt beatae aspernatur inventore
              a at veritatis facere similique{" "}
            </li>
            <li>
              <span>Integrity:</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea hic quae dolor, facere similique{" "}
            </li>
            <li>
              <span>Innovation:</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea hic quae dolor, incidunt sit quos eum
              perspiciatis sunt beatae aspernatur inventore a at veritatis
              facere similique{" "}
            </li>
            <li>
              <span>Safety:</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea hic quae dolor, incidunt sit quos eum
              perspiciatis sunt beatae aspernatur inventore a at veritatis
              facere similique{" "}
            </li>
          </ul>
          <Row>
            <Col md={3} className="abt_col mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="Images/pw9.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Oil pump rig, oil and gas production</b>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="abt_col mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="Images/pw9.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Oil pump rig, oil and gas production</b>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="abt_col mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="Images/pw9.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Oil pump rig, oil and gas production</b>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="abt_col mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="Images/pw9.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="text">
                    <b>Oil pump rig, oil and gas production</b>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <hr className="text-warning abt_line" />
      <Container fluid className="abt_div">
        <div></div>
      </Container>
    </div>
  );
};

export default AboutUs;
