import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}> 
            My expertise extends to database management, a critical component in
            designing and implementing effective systems. Additionally, I
            possess skills in WordPress development and graphic design, enabling
            me to create visually appealing and user-centric digital
            experiences.
            <br />
            <br />
            Driven by a commitment to continuous learning, I diligently stay
            updated with industry trends and emerging technologies. Renowned for
            my capacity to quickly grasp complex concepts, I am recognized as a
            quick learner with a structured thought process.
            <br />
            <br />
            Balancing academic endeavors with extracurricular interests, I have
            honed my ability to manage tasks effectively. Outside the realm of
            software engineering, I derive pleasure from gardening, fitness,
            artistic pursuits, and cinematic exploration.
            <br />
            <br />
            I am enthusiastic about the prospect of applying my expertise within
            a dynamic and collaborative environment. If you are seeking a
            dedicated software engineering student who thrives on innovation, I
            would welcome the opportunity to discuss how my skills and mindset
            align with your company's goals.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching about Technology.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying new stuff.
            </li>
          </ul>

          <p style={{ color: "#595959" }}>
            "Growth fuels wisdom; each step forward is a lesson learned."
          </p>
          <footer className="blockquote-footer">Abdullah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
