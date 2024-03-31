import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/banner1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{textAlign:'justify'}}>
              I fell in love with programming and I am a dedicated developer
              with a passion for crafting captivating user experiences.
              <br />
              <br />
              I am a dedicated frontend developer with a passion for crafting
              captivating user experiences. Proficient in <b className="purple"> HTML, CSS, and
              JavaScript, </b> I am adept at utilizing modern frameworks and
              libraries like <b className="purple"> React.js and Node.js</b>. Additionally, I leverage the
              power of <b className="purple">Bootstrap</b> to streamline development and ensure seamless
              responsiveness across devices. I thrive on pushing the boundaries
              of frontend development, translating design concepts into dynamic
              and visually stunning web interfaces. With a keen eye for detail
              and a commitment to staying abreast of emerging technologies, I am
              driven to deliver innovative solutions that elevate the digital
              landscape.
              <br />
              <br />
              What sets me apart is my seamless integration of design tools like
              <b className="purple"> Figma, Photoshop, and Illustrator</b> into
              my workflow. This allows me to bridge the gap between design and
              development, ensuring that the final product not only meets but
              exceeds expectations. With a passion for pixel-perfect designs and
              a commitment to staying at the forefront of both design and
              development trends, I am poised to deliver innovative solutions
              that resonate with users on a profound level.
            </p>
          </Col>
          <Col md={4} className="myAvtar ">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Profile-img" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vicky-s-30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@developedbywiki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoLogoYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vigneshwaran-3010-s/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/toxic.wizard/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
