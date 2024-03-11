import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaClock } from "react-icons/fa";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div id="about" className="abt">
      <h4>About Power Tool</h4>
      <hr className="abt_line" />
      <h2 className="mt-4 mb-5">
        <b>Commitment to providing Durable equipment</b>
      </h2>

      <Container>
        <Row>
          <Col md={3}>
            <img
              src="Images/pw3.jpg"
              alt=""
              width={270}
              height={440}
              className="mb-3"
            />
          </Col>
          <Col md={3}>
            <img
              src="Images/pw3.jpg"
              alt=""
              width={270}
              height={440}
              className="mb-3"
            />
          </Col>
          <Col md={6}>
            <div
              className={`slide-down-container ${isVisible ? "visible" : ""}`}
            >
              <p className="slide-down-text">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Congue quisque egestas diam in arcu cursus. Maecenas accumsan
                lacus vel facilisis volutpat est velit egestas. Aliquam
                vestibulum morbi blandit cursus risus. Neque sodales ut etiam
                sit amet nisl purus. Lacus luctus accumsan tortor posuere.
                Suspendisse interdum consectetur libero id faucibus nisl
                tincidunt eget nullam. Sed viverra ipsum nunc aliquet bibendum
                enim facilisis. Diam vel quam elementum pulvinar etiam non quam
                lacus suspendisse. Egestas integer eget aliquet nibh. Feugiat in
                ante metus dictum at tempor commodo velit egestas.{" "}
              </p>
            </div>

            <div className="cards">
              <Row className="cards_row">
                <Col md={6} className="mb-5">
                  <div className="d-flex flex-row">
                    <div className="me-3">
                      <h4>
                        <FaClock className="p-2 fs-1 faclock rounded-circle " />
                      </h4>
                    </div>

                    <div>
                      <h4 className="mt-2">lorem Scelerisque felis</h4>
                    </div>
                  </div>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp; &nbsp; Cappucs cino pellentesq nibh.
                    <br />
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp; &nbsp; Scele ritum sque feli sen tum.
                    <br />
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp; &nbsp; Nisl con dim ent um id venen
                  </p>
                </Col>
                <Col md={6} className="mb-5">
                  <div className="d-flex flex-row">
                    <div className="me-3">
                      <h4>
                        <FaClock className="p-2 fs-1 faclock rounded-circle " />
                      </h4>
                    </div>

                    <div>
                      <h4 className="mt-2">lorem Scelerisque felis</h4>
                    </div>
                  </div>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp; &nbsp; Cappucs cino pellentesq nibh.
                    <br />
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp; &nbsp; Scele ritum sque feli sen tum.
                    <br />
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp; &nbsp; Nisl con dim ent um id venen
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
