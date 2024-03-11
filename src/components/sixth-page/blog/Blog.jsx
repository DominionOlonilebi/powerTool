import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../landing-page/Footer";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Container fluid className="blog_container mb-5 py-4">
        <h3 style={{ textAlign: "center" }} className="pb-4 pt-2">
          Latest information from our blog
        </h3>
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={10}>
              <Card className=" blog_card mb-4">
                <Row>
                  <Col md={10} className="pt-3">
                    <h6>
                      &nbsp;&nbsp;&nbsp;
                      <b>
                        The Future of Oil and Gas: Innovations in Equipment and
                        Technology
                      </b>
                    </h6>
                    <p>
                      &nbsp;&nbsp;&nbsp;Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Ullam ratione totam ex sit asper iores
                      conse quun tur
                      <br /> &nbsp;&nbsp;&nbsp;suscipit corrupti, illum quod.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam eos cupiditate tempora
                      <br /> &nbsp;&nbsp;&nbsp;suscipit corrupti, illum quod.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam eos cupiditate tempora
                      <br /> &nbsp;&nbsp;&nbsp;quos molestias et maiores in eius
                      deserunt repellat. Eveniet eos nemo eius
                    </p>
                  </Col>
                  <Col md={2}>
                    <Card.Img
                      variant="top"
                      src="Images/pw5.jpg"
                      alt=""
                      height={157}
                      style={{
                        borderBottomLeftRadius: "3px",
                        borderBottomRightRadius: "3px",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                      }}
                    ></Card.Img>
                  </Col>
                </Row>
              </Card>
              <Card className=" blog_card mb-4">
                <Row>
                  <Col md={10} className="pt-3">
                    <h6>
                      &nbsp;&nbsp;&nbsp;
                      <b>Enhanced Oil Recovery Techniques</b>
                    </h6>
                    <p>
                      &nbsp;&nbsp;&nbsp;Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Ullam ratione totam ex sit asper iores
                      conse quun tur
                      <br /> &nbsp;&nbsp;&nbsp;suscipit corrupti, illum quod.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam eos cupiditate tempora
                      <br /> &nbsp;&nbsp;&nbsp;suscipit corrupti, illum quod.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam eos cupiditate tempora
                      <br /> &nbsp;&nbsp;&nbsp;quos molestias et maiores in eius
                      deserunt repellat. Eveniet eos nemo eius
                    </p>
                  </Col>
                  <Col md={2}>
                    <Card.Img
                      variant="top"
                      src="Images/pw5.jpg"
                      alt=""
                      height={157}
                      style={{
                        borderBottomLeftRadius: "3px",
                        borderBottomRightRadius: "3px",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                      }}
                    ></Card.Img>
                  </Col>
                </Row>
              </Card>
              <Card className="blog_card mb-4">
                <Row>
                  <Col md={10} className="pt-3">
                    <h6>
                      &nbsp;&nbsp;&nbsp;
                      <b>Automation and Robotics</b>
                    </h6>
                    <p>
                      &nbsp;&nbsp;&nbsp;Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Ullam ratione totam ex sit asper iores
                      conse quun tur
                      <br /> &nbsp;&nbsp;&nbsp;suscipit corrupti, illum quod.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam eos cupiditate tempora
                      <br /> &nbsp;&nbsp;&nbsp;suscipit corrupti, illum quod.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam eos cupiditate tempora
                      <br /> &nbsp;&nbsp;&nbsp;quos molestias et maiores in eius
                      deserunt repellat. Eveniet eos nemo eius
                    </p>
                  </Col>
                  <Col md={2}>
                    <Card.Img
                      variant="top"
                      src="Images/pw5.jpg"
                      alt=""
                      height={157}
                      style={{
                        borderBottomLeftRadius: "3px",
                        borderBottomRightRadius: "3px",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                      }}
                    ></Card.Img>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
