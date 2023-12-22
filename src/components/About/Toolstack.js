import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiJupyter,
  SiXampp,
  SiAndroidstudio,
  SiMicrosoftsqlserver,
  SiAdobeillustrator,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Visual Studio</p>
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Visual Studio Code</p>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Jupyter Notebook</p>
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Xamp Server</p>
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Android Studio</p>
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">MS Sql Server</p>
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Adobe Illustrator</p>
        <SiAdobeillustrator />
      </Col>
    </Row>
  );
}

export default Toolstack;
