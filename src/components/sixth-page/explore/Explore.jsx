import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore_div">
      <Container className="explore_container ">
        <h2 className="py-4" style={{ textAlign: "center" }}>
          Explore our current job opportunities
        </h2>
        <Row className="d-flex flex-row justify-content-center">
          <Col md={10}>
            <Card className="explore_card py-4 mb-4">
              <div className="mx-3">
                <h6>
                  <b>Title: Senior Mechanical Engineer</b>
                </h6>
                <ul>
                  <li>
                    <b>Location:</b> Lagos Ni<b>geria</b>
                  </li>
                  <li>
                    <b>Description:</b> We ar
                    <b>
                      e seeking Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Omnis earum fuga, sequi soluta eos saepe
                      ex minima quasi deserunt incidunt. Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit. Voluptate magni,
                      nesciunt ea qui alias minima reprehenderit tempore
                      deleniti adipisci voluptates?
                    </b>
                  </li>
                  <li>
                    <b>Qualifications:</b>
                    <ul>
                      <li>
                        Bachelor's de
                        <b>gree in Lorem ipsum dolor adipisicing elit.</b>
                      </li>
                      <li>
                        Minimum of 7{" "}
                        <b>
                          years in Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Saepe, cum?
                        </b>{" "}
                      </li>
                      <li>
                        Proficiency in Lorem ipsum dolor adipisicing elit.
                      </li>
                      <li>
                        Strong problem-
                        <b>solving Lorem ipsum dolor adipisicing elit.</b>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Row className="d-flex flex-row justify-content-end">
                <Col md={3} sm={3}>
                  <Button className="explore_btn">Apply now</Button>
                </Col>
              </Row>{" "}
            </Card>
            <Card className="explore_card py-4 mb-4">
              <div className="mx-3">
                <h6>
                  <b>Title: Senior Mechanical Engineer</b>
                </h6>
                <ul>
                  <li>
                    <b>Location:</b> Lagos Nigeria
                  </li>
                  <li>
                    <b>Description:</b> We are seeking Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Omnis earum fuga, sequi
                    soluta eos saepe ex minima quasi deserunt incidunt.
                    Voluptate magni, nesciunt ea qui alias minima reprehenderit
                    tempore deleniti adipisci voluptates?
                  </li>
                  <li>
                    <b>Qualifications:</b>
                    <ul>
                      <li>
                        Bachelor's degree in Lorem ipsum dolor adipisicing elit.
                      </li>
                      <li>
                        Minimum of 7 years in Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Saepe, cum?{" "}
                      </li>
                      <li>
                        Proficiency in Lorem ipsum dolor adipisicing elit.
                      </li>
                      <li>
                        Strong problem-solving Lorem ipsum dolor adipisicing
                        elit.{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Row className="d-flex flex-row justify-content-end">
                <Col md={3} sm={3}>
                  <Button className="explore_btn">Apply now</Button>
                </Col>
              </Row>{" "}
            </Card>
            <Card className="explore_card py-4 mb-4">
              <div className="mx-3">
                <h6>
                  <b>Title: Environmental Health and Safety Specialist</b>
                </h6>
                <ul>
                  <li>
                    <b>Location:</b> Lagos Nigeria
                  </li>
                  <li>
                    <b>Description:</b> We are seeking Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Omnis earum fuga, sequi
                    soluta eos saepe ex minima quasi deserunt incidunt.
                    Voluptate magni, nesciunt ea qui alias minima reprehenderit
                    tempore deleniti adipisci voluptates?
                  </li>
                  <li>
                    <b>Qualifications:</b>
                    <ul>
                      <li>
                        Bachelor's degree in Lorem ipsum dolor adipisicing elit.
                      </li>
                      <li>
                        Minimum of 7 years in Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Saepe, cum?{" "}
                      </li>
                      <li>
                        Proficiency in Lorem ipsum dolor adipisicing elit.
                      </li>
                      <li>
                        Strong problem-solving Lorem ipsum dolor adipisicing
                        elit.{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Row className="d-flex flex-row justify-content-end">
                <Col md={3} sm={3}>
                  <Button className="explore_btn">Apply now</Button>
                </Col>
              </Row>{" "}
            </Card>
            <Card className="explore_cards py-4">
              <div className="mx-3">
                <h6>
                  <b>Title: Supply Chain Manager</b>
                </h6>
                <ul>
                  <li>
                    <b>Location:</b> Lagos Nigeria
                  </li>
                  <li>
                    <b>Description:</b> We are seeking Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Omnis earum fuga, sequi
                    soluta eos saepe ex minima quasi deserunt incidunt.
                    Voluptate magni, nesciunt ea qui alias minima reprehenderit
                    tempore deleniti adipisci voluptates?
                  </li>
                  <li>
                    <b>Qualifications:</b>
                    <ul>
                      <li>
                        Bachelor's degree in Lorem ipsum dolor adipisicing elit.
                      </li>
                      <li>
                        Minimum of 7 years in Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Saepe, cum?{" "}
                      </li>
                      <li>
                        Proficiency in Lorem ipsum dolor adipisicing elit.
                      </li>
                      <li>
                        Strong problem-solving Lorem ipsum dolor adipisicing
                        elit.{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <Row className="d-flex flex-row justify-content-end">
                <Col md={3} sm={3}>
                  <Button className="explore_btn">Apply now</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* how to apply */}
      <Container fluid className="apply_container pt-5">
        <Container>
          <h5 className="mt-3">How to apply</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            eaque.
          </p>
          <>
            <div>
              1. &nbsp;Lorem ipsum dolor sit amet conse ctetur adipisicing
              edivt. Moldivctetur adipisicing edivt. Impedit, laboriosam.
            </div>
            <div>
              2. &nbsp;Lorem ipsum dolor sit amet conse ctetur adipisicing
              edivt. Moldivctetur adipisicing edivt. Impedit, laboriosam.
            </div>
            <div>
              3. &nbsp;Lorem ipsum dolor sit amet consec ctetur adipisicing
              edivt. Moldivtetur adipisicing edivt. Impedit, laboriosam.
            </div>
            <div>
              4. &nbsp;Lorem ipsum dolor sit amet consec ctetur adipisicing
              edivt. Moldivtetur adipisicing edivt. Impedit, laboriosam.
            </div>
          </>
          <p className="mt-3">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Mollic
            tetur adipisicing elit. Mollitia, nam.
          </p>
          <Button className="apply_btn mt-3">Contact us</Button>
        </Container>
        <hr className="apply_line" />
      </Container>
    </div>
  );
};

export default Explore;
