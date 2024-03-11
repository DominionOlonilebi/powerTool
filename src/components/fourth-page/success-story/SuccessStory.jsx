import { faCheck, faInbox, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../landing-page/Footer";
import "./SuccessStory.css";

const SuccessStory = () => {
  return (
    <div>
      <Container className="success_container">
        <Row className="d-flex flex-row justify-content-center">
          <Col md={8}>
            <Card className="px-5">
              <Card.Body>
                <Card.Title className="text pt-5 mb-3">
                  <b>Some of our success stories</b>
                </Card.Title>
                <Card.Text>
                  <div className="mb-4">
                    <span>Challenge Overcome at DeepSea Ventures: </span>Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    illo. Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Sequi quo eum in? Fugiat unde quo ratione molestias
                    numquam tempore porro? Dolor autem iusto temporibus
                    necessitatibus accusamus sapiente deserunt dignissimos eum!
                  </div>
                  <div className="mb-4">
                    <span>Innovative Solutions for PureGas: </span>Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eveniet, illo.
                    Dolor autem Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nam minus dolor culpa impedit maiores
                    tenetur similique facilis atque velit sapiente? iusto
                    temporibus necessitatibus accusamus sapiente deserunt
                    dignissimos eum!
                  </div>
                  <div className="mb-4">
                    <span>Challenge Overcome at DeepSea Ventures: </span>Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    illo. Dolor autem Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nostrum vel voluptates assumenda quod fuga
                    accusantium rerum nemo perspiciatis quo neque? deserunt
                    dignissimos eum!
                  </div>
                  <div className="mb-4">
                    <span>Innovative Solutions for PureGas: </span>Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eveniet, illo.
                    Dolor autem iusto temporibus necessitatibus accusamus
                    sapiente deserunt dignis dignis simos eum simos eum! iusto
                    temporibus necessit atibus accusamus sapiente
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* partner with powertools */}
      <Container fluid className="partner_container py-4 mb-4">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={7}>
              <h4>Why Partner with Powertools</h4>
              <p>
                <FontAwesomeIcon
                  icon={faMessage}
                  className="cards_icon   p-2  rounded-circle"
                />
                &nbsp; &nbsp; <b>Custom Engineering Solutions:</b> Lorem ipsum
                dolor sit amet consectetur adipisicing
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faMessage}
                  className="cards_icon   p-2  rounded-circle"
                />
                &nbsp; &nbsp; <b>Award-Winning Quality and Safety:</b> Lorem
                ipsum dolor sit amet consectetur adipisicing
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faMessage}
                  className="cards_icon   p-2  rounded-circle"
                />
                &nbsp; &nbsp; <b>Global Reach, Local Support:</b> Lorem ipsum
                dolor sit amet consectetur adipisicing
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faMessage}
                  className="cards_icon   p-2  rounded-circle"
                />
                &nbsp; &nbsp; <b>Sustainable Practices:</b> Lorem ipsum dolor
                sit amet consectetur adipisicing
              </p>
              <Button className="story_btn">About us</Button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* start your journey with us */}
      <section>
        <Container fluid className="journey_container ">
          <Container>
            <Row className="d-flex flex-row justify-content-center">
              <Col md={6}>
                <h4 className="pt-4">Start Your Journey with Us</h4>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi impedit molestiae perspi turi impedit molestiae
                  perspiciatis natus at id fugiat aperiam omnis eius, accus
                  ciatis natus at id fugiat aperiam omnis eius, accusantium
                  delectus sint, voluptates, magni est aliquam? Delectus sunt
                  magni dolor?
                </p>
                <Button className="journey_btn">Contact us</Button>
              </Col>
              <Col md={4}>
                <img src="Images/pw7.jpg" alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default SuccessStory;
