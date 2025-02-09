import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: black;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;

  @media (max-width: 740px) {
    padding: 3rem 1.5rem; /* Menos padding en tablets */
  }

  @media (max-width: 355px) {
    padding: 2rem 1rem; /* Menos padding en móviles pequeños */
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00ff00;

  @media (max-width: 740px) {
    font-size: 2.2rem; /* Más pequeño en tablets */
  }

  @media (max-width: 355px) {
    font-size: 2rem; /* Más pequeño en móviles */
  }
`;

const AboutText = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 740px) {
    font-size: 1.3rem; /* Más pequeño en tablets */
  }

  @media (max-width: 355px) {
    font-size: 1.1rem; /* Más pequeño en móviles */
    max-width: 90%;
  }
`;

// 🔹 Componente About
const About = () => {
  return (
    <Section id="nosotros">
      <Title>Sobre Nosotros</Title>
      <AboutText>
        Somos un gimnasio comprometido con tu bienestar y rendimiento físico. Ofrecemos los mejores equipos y entrenadores para ayudarte a alcanzar tus metas fitness.
      </AboutText>
    </Section>
  );
};

export default About;
