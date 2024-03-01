import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container className="blog_container">
        <h4 className="mb-4">Latest information from our blog</h4>
        <hr className="blog_line mb-4" />
        <Row>
          <Col md={4} className="mb-3">
            <img src="Images/pw5.jpg" alt="" className="img-fluid" />
          </Col>
          <Col md={4} className="mb-3">
            <img src="Images/pw5.jpg" alt="" className="img-fluid" />
          </Col>
          <Col md={4} className="mb-3">
            <img src="Images/pw5.jpg" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
