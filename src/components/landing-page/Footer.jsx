import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import {
  FaAddressBook,
  FaBeer,
  FaEnvelope,
  FaFacebook,
  FaFemale,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaNetworkWired,
  FaObjectGroup,
  FaPhone,
  FaServicestack,
  FaToolbox,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <Container fluid className="footer_container">
        <Container>
          <Row>
            <Col md={3}>
              <h3>
                <span className="footer_span">P</span>Powertools
              </h3>
            </Col>
            <Col md={3} className="mb-3">
              <h5 className="mb-4">Company</h5>
              <p className="mx-2">
                <FaHome /> &nbsp; Home{" "}
                <span className="mx-5">
                  <FaToolbox /> &nbsp; Career
                </span>
              </p>
              <p className="mx-2">
                <FaFemale /> &nbsp; About-Us{" "}
                <span className="mx-4">
                  <FaMailBulk /> &nbsp; Contact
                </span>
              </p>
              <p className="mx-2">
                <FaNetworkWired /> &nbsp; Services
              </p>
            </Col>
            <Col md={3} className="mb-3">
              <h5 className="mb-4">Support</h5>
              <p>
                <FaPhone /> &nbsp; +2348012345678
              </p>
              <p>
                <FaEnvelope /> &nbsp; Laculuctusn@gmail.com
              </p>
              <p>
                <FaAddressBook /> &nbsp; Lacus luctus accumsan
              </p>
            </Col>

            <Col md={3} className="mb-3">
              <h5 className="mb-4">Get in touch</h5>
              <p>
                <FaPhone /> &nbsp; +2348012345678
              </p>
              <p>
                <FaEnvelope /> &nbsp; Laculuctusn@gmail.com
              </p>
              <p>
                <FaAddressBook /> &nbsp; Lacus luctus accumsan
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="d-flex flex-row justify-content-end">
            <FaFacebook className="social-media " />
            <FaInstagram className="social-medias " />
            <FaTwitter className="social-media " />
            <FaYoutube className="social-media " />
          </Row>
          <Row className="d-flex flex-row justify-content-start">
            <h6 className="text">&copy; CopyRight 2024. All Rights Reserved</h6>
          </Row>
          <hr />
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
