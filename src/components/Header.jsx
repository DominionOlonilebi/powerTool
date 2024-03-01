import {
  faAudioDescription,
  faIdCard,
  faPerson,
  faToolbox,
  faVolumeControlPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Container fluid className="header_container">
        <Container>
          <Row>
            <Col md={6}>
              <h4>
                <span>P</span> Powertools
              </h4>
            </Col>
            <Col>
              <h6 className="d-flex flex-row justify-content-end">
                <FontAwesomeIcon icon={faIdCard} className="mx-3 mt-2" />
                <FontAwesomeIcon
                  icon={faVolumeControlPhone}
                  className="mx-3 mt-2"
                />
                <FontAwesomeIcon icon={faToolbox} className="mx-3 mt-2" />
              </h6>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
