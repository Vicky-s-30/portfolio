import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Vigneshwaran </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I'm currently employed as a Frontend with UI/UX developer at TAGCS.
            <br />
            I've done my Masters in Computer Applications (MCA) and <br/> Bachelors in Computer Science (B.sc)
            <br />
            <br />
            Beyond coding, I enjoy indulging in various activities that add zest to my life.
          </p>
          <ul>
            <li className="about-activity mt-2" >
              <ImPointRight /> Diving into the virtual realms of gaming,
            </li>
            <li className="about-activity mt-2">
              <ImPointRight /> Sharing insights through tech blogs,
            </li>
            <li className="about-activity mt-2">
              <ImPointRight /> Exploring new destinations through travel.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The keystrokes of today pave the path for tomorrow!"{" "}
          </p>
          <footer className="blockquote-footer">Vigneshwaran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
