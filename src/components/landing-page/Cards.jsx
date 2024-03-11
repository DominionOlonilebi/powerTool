import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <div>
      <Container fluid className="cards_container">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={3} className="mb-4">
              <FontAwesomeIcon icon={faTools} className="cards_icon mb-2" />
              <h5>Years of experience</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                sunt natus adipisci error unde iusto nostrum earum?
              </p>
            </Col>

            <Col md={3} className="mb-4">
              <FontAwesomeIcon icon={faTools} className="cards_icon mb-2" />
              <h5>Years of experience</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                sunt natus adipisci error unde iusto nostrum earum?
              </p>
            </Col>
            <Col md={3} className="mb-4">
              <FontAwesomeIcon icon={faTools} className="cards_icon mb-2" />
              <h5>Years of experience</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                sunt natus adipisci error unde iusto nostrum earum?
              </p>
            </Col>
            <Col md={3} className="mb-4">
              <FontAwesomeIcon icon={faTools} className="cards_icon mb-2 " />
              <h5>Years of experience</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                sunt natus adipisci error unde iusto nostrum earum?
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Cards;
