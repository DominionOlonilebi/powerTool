import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container className="blog_container">
        <h4 className="mb-4">Latest information from our blog</h4>
        <hr className="blog_line mb-4" />
        <Row className="d-flex flex-row justify-content-center">
          <Col md={3} className="mb-4">
            <img src="Images/pw16.jpg" alt="" width={278} />
          </Col>
          <Col md={3} className="mb-4">
            <img src="Images/pw11.jpg" alt="" width={278} />
          </Col>
          <Col md={3} className="mb-4">
            <img src="Images/pw16.jpg" alt="" width={278} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
