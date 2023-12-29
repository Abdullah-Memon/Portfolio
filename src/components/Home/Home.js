import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2.js";
import profile from "../../Assets/profile.png";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import laptopImg from "../../Assets/about.png";
import Berif_Intro from "./Berif_Intro.js";
import CertificateCard from "../About/CertificateCard.js";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h3 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h3>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Abdullah Memon</strong>
              </h1>

              <span className="heading-name"> Knows as </span>
              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} className="profile-content">
              <img
                src={profile}
                alt="home pic"
                className="img-fluid profile"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-section" id="introduction">
        <Container className="home-content">
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Berif <strong className="purple">Introduction</strong>
              </h1>

              <Berif_Intro />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          FOLLOW <strong className="purple"> ME </strong> ON
        </h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/Abdullah-Memon"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/connect-Abdullah/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/abdullah_codez"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </Container>

      <Container style={{paddingTop: "20px" }}>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          All <strong className="purple"> Certificates </strong>
        </h1>
        <CertificateCard />
      </Container>
    </section>
  );
}

export default Home;
