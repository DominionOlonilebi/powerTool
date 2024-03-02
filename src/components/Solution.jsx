import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Solution = () => {
  return (
    <div className="solution">
      <h5>
        <b>Solutions</b>
      </h5>
      <Container fluid className="solution_container">
        <h2 className="mb-5">Power tools the solution provider</h2>
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={4} className="mb-4">
              <h2>01 _________________</h2>
              <h5>Equipment solutions and maintenance</h5>
              <p>
                Lacus luctus accumsan tortor posuere. Suspendisse interdum
                consec ctetur libero idtetur libero id faucibus nisl tincidunt
                eget nullam.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h2>02 _________________</h2>
              <h5>Equipment solutions and maintenance</h5>
              <p>
                Lacus luctus accumsan tortor posuere. Suspendisse interdum
                consec ctetur libero idtetur libero id faucibus nisl tincidunt
                eget nullam.
              </p>
            </Col>
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={4} className="mb-4">
              <h2>03 _________________</h2>
              <h5>Equipment solutions and maintenance</h5>
              <p>
                Lacus luctus accumsan tortor posuere. Suspendisse interdum
                consec ctetur libero idtetur libero id faucibus nisl tincidunt
                eget nullam.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h2>04 _________________</h2>
              <h5>Equipment solutions and maintenance</h5>
              <p>
                Lacus luctus accumsan tortor posuere. Suspendisse interdum conse
                ctetur libero idctetur libero id faucibus nisl tincidunt eget
                nullam.
              </p>
            </Col>
          </Row>
          <div className="d-flex flex-row justify-content-end">
            <Button className="solution_btn">Read more</Button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Solution;
