import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from './Home2.js'
import profile from "../../Assets/profile.png";
import Type from "./Type";
import laptopImg from "../../Assets/about.png";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Abdullah Memon</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
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

              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      Hi Everyone, I am{" "}
                      <span className="purple">Abdullah Memon </span>
                      from <span className="purple"> Pakistan.</span>
                      <br />
                      I’m currently perusing path to earning a software
                      Engineering degree from{" "}
                      <span className="purple">
                        Quaid-e-Awam university of Engineering Science and
                        Technology
                      </span>{" "}
                      Nawabshah, With a strong foundation in{" "}
                      <span className="purple">
                        Web Development, Database, Desktop Application
                        Development and Android development.{" "}
                      </span>
                      <br />
                    </p>
                    <p>Apart from coding, some other activities that I love to do!</p>
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

      <Home2/>
    </section>
  );
}

export default Home;
