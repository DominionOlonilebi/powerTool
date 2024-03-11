import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="services_div">
      <h2>Our services</h2>
      <hr className="text-primary services_line" />
      <Container fluid className="services_container">
        <Container>
          <Row>
            <Col md={6}>
              <h6>
                <b>Equipment Supply and Distribution:</b>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate excepturi maiores fugiat iusto minima, sunt iure quas
                praesentium earum deserunt a. Dignissimos, iure aut odio
                molestiae voluptatibus quaerat necessitatibus veritatis?
              </p>
              <ul>
                <li>
                  Drilling Equipmment: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolores quidem corrupti fuga eaque
                  voluptatum veniam laudantium tenetur, soluta officia
                  consequatur.
                </li>
                <li>
                  Production Equipmment: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolores quidem corrupti fuga eaque
                  voluptatum veniam laudantium tenetur, soluta officia
                  consequatur.
                </li>
                <li>
                  Safety and Environmental Equipmment: Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dolores quidem corrupti
                  fuga eaque voluptatum veniam laudantium tenetur, soluta
                  officia consequatur.
                </li>
              </ul>
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
            <Col md={3}>
              <img
                src="Images/pw3.jpg"
                alt=""
                width={270}
                height={440}
                className="mb-3"
              />
            </Col>
          </Row>
        </Container>
        <hr className="text-warning service_line" />
      </Container>

      {/* maintenance and repair second phase*/}
      <hr className="text-primary services_line" />
      <Container className="repair_container pt-4">
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
            <h6 className="mt-4 mx-5">
              <b>Equipment Maintenance and Repair:</b>
            </h6>
            <p className="mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate excepturi maiores fugiat iusto minima, sunt iure quas
              praese ctetur adipi Dolores quidem corrupti fuga eaque voluptatum
              ntium earum deserunt a sicing elit. Dolores quidem corrupti fuga
              eaque voluptatum ntium earum deserunt a. Dignissimos, iure aut
              odio molestiae voluptatibus quaerat necessitatibus veritatis?
            </p>
            <ul>
              <li className="mx-5 mb-2">
                <b>Equipment Maintenance and Repair:</b> Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit. Dolores quidem corrupti fuga
                eaque voluptatum ctetur adipisicing elit. Dolores quidem
                corrupti fuga eaque voluptatum veniam
              </li>
              <li className="mx-5">
                <b>Technical Support:</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolores quidem corrupti fuga eaque volup
                Dolores quidem corrupti fuga eaque voluptatum ntium earum
                deserunt a tatum veniam laudantium tenetur, soluta officia
                consequatur.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* equipment maintenance third phase*/}

      <Container fluid>
        <hr className="text-warning service_line" />
        <Container fluid className="equipment_container">
          <hr className="text-primary equipment_line" />
          <Container className="equip_container">
            <Row>
              <Col md={6}>
                <h6>
                  <b>Equipment Maintenance and Repair:</b>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate excepturi maiores fugiat iusto minima, sunt iure
                  quas praese itate excepturi maiores fugiat iusto minima, sunt
                  iure quas praesentium earum deserunt a. Dignissimos, iure aut
                  odio molestiae voluptatibus ntium earum deserunt a.
                  Dignissimos, iure aut odio molestiae voluptatibus quaerat
                  necessitatibus veritatis?
                </p>
                <ul>
                  <li>
                    <b>Equipment Maintenance and Repair:</b> Lorem ipsum dolor
                    sit amet consec itate excepturi maiores fugiat iusto minima,
                    sunt iure quas praesentium earum deserunt a. Dignissimos,
                    iure aut odio molestiae voluptatibus tetur adipisicing elit.
                    Dolores quidem corrupti fuga eaque voluptatum veniam
                    laudantium tenetur, soluta officia consequatur.
                  </li>
                  <li>
                    <b>Technical Support:</b> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolores quidem corrupti fuga
                    eaque volup itate excepturi maiores fugiat iusto minima,
                    sunt iure quas praesentium earum deserunt a. Dignissimos,
                    iure aut odio molestiae voluptatibus tatum veniam laudantium
                    tenetur, soluta officia consequatur.
                  </li>
                </ul>
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
              <Col md={3}>
                <img
                  src="Images/pw3.jpg"
                  alt=""
                  width={270}
                  height={440}
                  className="mb-3"
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <hr className="text-warning service_line" />
      </Container>

      {/* maintenance and repair fourth phase*/}
      <hr className="text-primary maintenance_line" />
      <Container fluid className="maintenance_container">
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
              <h6 className="mt-4 mx-5">
                <b>Equipment Maintenance and Repair:</b>
              </h6>
              <p className="mx-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate excepturi maiores fugiat iusto minima, sunt iure quas
                praesentium earum deserunt a. Dignissimos, iure aut odio
                molestiae volupt sentium earum deserunt a. Dignissimos, iure aut
                odio molestiae volupt atibus quaerat necessitatibus veritatis?
              </p>
              <ul>
                <li className="mx-5">
                  <b>Equipment Maintenance and Repair:</b> Lorem ipsum dolor sit
                  amet consec sentium earum deserunt a. Dignissimos, iure aut
                  odio molestiae volupt tetur adipisicing elit. Dolores quidem
                  corrupti fuga eaque voluptatum veniam laudantium tenetur,
                  soluta officia consequatur.
                </li>
                <li className="mx-5">
                  <b>Technical Support:</b> Lorem ipsum dolor sit amet
                  consectetur adipis sentium earum deserunt a. Dignissimos, iure
                  aut odio molestiae volupt icing elit. Dolores quidem corrupti
                  fuga eaque voluptatum veniam laudantium tenetur, soluta
                  officia consequatur.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <hr className="text-warning service_line" />
    </div>
  );
};

export default Services;
