import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import CertificateCard from "./CertificateCard";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Know Who <strong className="purple">I'M</strong>
        </h1>
        <Aboutcard />

        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Professional <strong className="purple">Skills</strong>
        </h1>
        <Techstack />

        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Achievements & <strong className="purple">Certificates</strong>
        </h1>
        <CertificateCard/>

        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Tools I <strong className="purple">Use</strong>
        </h1>
        <Toolstack />


      </Container>
    </Container>
  );
}

export default About;
