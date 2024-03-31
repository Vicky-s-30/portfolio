import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import {
  DiReact,
  DiNodejs,
  DiPython,
  DiGit
} from "react-icons/di";
import {
  SiJquery,
  SiRedux,
} from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { MdCss } from "react-icons/md";
import { FaBootstrap, FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <MdCss className="md-d-none"/><IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GrMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
