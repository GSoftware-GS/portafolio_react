import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wazifa from "../../Assets/Projects/wazifa.png"
import gswebdesigner from "../../Assets/Projects/gswebdesigner.png"
import github from "../../Assets/Projects/github.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Proyectos <strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          He aquí algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wazifa}
              isBlog={false}
              title="Wazifa Web"
              description="Wazifa es una banda que sabe cómo hacer que el público se mueva. Su música abarca géneros como el funk, el reggae, el soul, el rock y el ska, y cuenta con miembros de todo el mundo."
              demoLink="https://wazifa.es/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gswebdesigner}
              isBlog={false}
              title="GSwebdeisgner"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              demoLink="https://gswebdesigner.es"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github Personal"
              description="Github personal con algunos de mis proyectos y repositorios. Los lenguajes que utilizo en la mayoría de mis proyectos son JavaScript, React, Node, Python, Django, C++, C, Java, SQL, HTML, CSS, etc."
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
