import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Gonzalo Sánchez Calvente </span>
            de <span className="purple"> Granada, España</span>
            <br />y soy estudiante de <span className="purple"> Ingeniería Informática</span>
            <br />
            <br />
            Aparte de la programación, me gusta:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Diseñar y crear cosas
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender a solucionar nuevos problemas
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender nuevas tecnologías y herramientas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "De vez en cuando, una nueva tecnología, un antiguo problema y una gran idea se convierten en una innovación"{" "}
          </p>
          <footer className="blockquote-footer">Dean Kamen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
