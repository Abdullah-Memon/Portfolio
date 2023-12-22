import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiMsqlServer,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiC,
  SiCsharp,
  SiPhp,
  SiFirebase,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
     <p className="icon-tag">C Programming</p>
        <SiC />
        <div class="card__progress">
          <progress value="95" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">C++ Programming</p>
        <CgCPlusPlus />
        <div class="card__progress">
          <progress value="95" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
     <p className="icon-tag">C Sharp</p>
        <SiCsharp />
        <div class="card__progress">
          <progress value="80" max="100">80</progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Python</p>
        <DiPython />
        <div class="card__progress">
          <progress value="75" max="100"></progress>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Java Programming</p>
        <DiJava />
        <div class="card__progress">
          <progress value="75" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
     <p className="icon-tag">HTML 5</p>
        <DiHtml5 />
        <div class="card__progress">
          <progress value="95" max="100"></progress>
        </div>
      </Col>

     <Col xs={4} md={2} className="tech-icons">
     <p className="icon-tag">CSS 3</p>
        <DiCss3 />
        <div class="card__progress">
          <progress value="95" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
     <p className="icon-tag">PHP Language</p>
        <SiPhp />
        <div class="card__progress">
          <progress value="65" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">JavaScript</p>
        <DiJavascript1 />
        <div class="card__progress">
          <progress value="75" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Node js</p>
        <DiNodejs />
        <div class="card__progress">
          <progress value="70" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">React js</p>
        <DiReact />
        <div class="card__progress">
          <progress value="75" max="100"></progress>
        </div>
      </Col>

     <Col xs={4} md={2} className="tech-icons">
     <p className="icon-tag">MS Sql</p>
        <DiMsqlServer />
        <div class="card__progress">
          <progress value="90" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
     <p className="icon-tag">MY Sql</p>
        <DiMysql />
        <div class="card__progress">
          <progress value="90" max="100"></progress>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Firebase</p>
        <SiFirebase />
        <div class="card__progress">
          <progress value="50" max="100"></progress>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <p className="icon-tag">Git</p>
        <DiGit />
        <div class="card__progress">
          <progress value="70" max="100"></progress>
        </div>
      </Col>
      
    </Row>
  );
}

export default Techstack;
