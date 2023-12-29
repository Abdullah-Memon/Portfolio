import React from 'react'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


const Berif_Intro = () => {
  return (
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
                    <p>
                      Apart from coding, some other activities that I love to
                      do!
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
                      "Growth fuels wisdom; each step forward is a lesson
                      learned."
                    </p>
                    <footer className="blockquote-footer">Abdullah</footer>
                  </blockquote>
                </Card.Body>
              </Card>
  )
}

export default Berif_Intro