import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Connect.css";

const Connect = () => {
  return (
    <div>
      <Container className="map_container">
        <h3>Connect with us</h3>
        <p className="map_parag">
          You can reach out and connect with us both online and onsite
        </p>

        <Row>
          <Col md={7}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.061118635292!2d3.8813!3d7.350465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d940d6ae62f%3A0x56d4491dd5ea662f!2sMolete%20Baptist%20Church%20Ibadan!5e0!3m2!1sen!2sng!4v1704263350864!5m2!1sen!2sng"
              width={600}
              height={400}
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col md={5}>
            <h6>
              <b>Address</b>
            </h6>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h6>
              <b>Telephone</b>
            </h6>
            <p className="mb-5">+23467983412</p>
            <h6>
              <b>Email</b>
            </h6>
            <p className="mb-5">powertoolsint@gmail.com</p>
            <h6>
              <b>Social media</b>
            </h6>
            <Col md={3} className="div_icon py-1">
              <FaInstagram className="mx-2" />
              <FaFacebook className="mx-2" />
              <FaTwitter className="mx-2" />
            </Col>
          </Col>
        </Row>
      </Container>

      <Container fluid className="connect_container">
        <div></div>
      </Container>
    </div>
  );
};

export default Connect;
