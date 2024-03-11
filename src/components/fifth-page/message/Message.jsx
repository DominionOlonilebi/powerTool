import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Footer from "../../landing-page/Footer";
import "./Message.css";

const Message = () => {
  return (
    <div>
      <Container fluid className="message_container">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={9}>
              <h4>Send us a message</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas aliquid, voluptatem nemo simiptatem nemo similique ut
                reprehen lique ut repreh reprehen enderit!
              </p>
              <Form>
                <Row>
                  <Col md={6}>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="First Name"
                        required
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-4"
                        placeholder="Email"
                        required
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <InputGroup>
                  <input
                    type="dropdown"
                    className="form-control mb-4"
                    placeholder="Phone No"
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="form-control"
                  ></textarea>
                </InputGroup>

                <Button
                  type="submit"
                  className="form-control submit_button mb-4"
                >
                  Send your message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default Message;
