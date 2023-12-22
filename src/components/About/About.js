import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profile from "../../Assets/profile.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Know Who <strong className="purple">I'M</strong>
        </h1>
        <Row
          style={{
            justifyContent: "",
            padding: "10px ",
            paddingBottom:"0px",
            alignItems: "center",
          }}
          className="first-row"
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Let me introduce myself,{" "}
                <span className="purple">Abdullah</span>, as a dedicated student
                currently pursuing a Bachelor's degree in{" "}
                <span className="purple">Software Engineering</span> at{" "}
                <span className="purple">
                  QUEST University of Engineering Science and Technology
                </span>
                . With a passion for technology and a strong drive to solve
                complex challenges, I have nurtured my skills to excel in the
                field.
                <br />
                <br />
                My experience encompasses various aspects of software
                development, including Web development, Database, Desktop
                Application Development, and Mobile Application development.
                Proficient in programming languages such as C, C++, C#, Java,
                JavaScript, Python, and PHP, I am well-equipped to create
                efficient and innovative solutions.
              </p>
            </blockquote>
          </Col>
          <Col md={5} style={{ width: "30%" }} className="about-img">
            <img
              style={{ height: "auto", width: "300px" }}
              src={profile}
              alt="about"
              className="img-fluid profile"
            />
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "",
            paddingTop: "50px",
            alignItems: "center",
          }}
        >
          <Col
            style={{
              width: "100%",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
