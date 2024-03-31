import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJirasoftware,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaBitbucket } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostman/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobeillustrator/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop/>
      </Col>
    </Row>
  );
}

export default Toolstack;
