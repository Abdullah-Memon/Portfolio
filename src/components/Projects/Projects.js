import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="School Management System"
              description="An Management Level software with the collaboration of FIDX software developement team where I was assigned to participate under tasks such as Designing modules | Desktop Application | Website | Mobile Application."
              ghLink="https://github.com/Abdullah-Memon"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mobile Shop Managment System | POS"
              description="An point of sell system developed by myself under the supervision of FIDX team | Complete Programming using C# and Database with Store Procedures using MS SQL Server."
              ghLink="https://github.com/Abdullah-Memon"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Super Mart Management System | POS"
              description="An Point of Sell System Developed by myself under the supervission of FIDX  developers where I created | Complete Desktop Application using C# | Database with Store Procedures"
              ghLink="https://github.com/Abdullah-Memon"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio Website | React js Project"
              description="My perosnal portfolio webist uing javascript framework called React js. (Personal Project)"
              ghLink="https://github.com/Abdullah-Memon/Portfolio"
              // demoLink=""              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
