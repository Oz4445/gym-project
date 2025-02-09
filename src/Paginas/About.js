import React from "react";
import styled from "styled-components";

// 🔹 Estilos usando Styled Components
const Section = styled.section`
  background: black;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 740px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 355px) {
    padding: 2rem 1rem;
  }
`;

const AboutContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);

  @media (max-width: 740px) {
    padding: 1.5rem;
  }

  @media (max-width: 355px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #00ff00;

  @media (max-width: 740px) {
    font-size: 2.2rem;
  }

  @media (max-width: 355px) {
    font-size: 2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin-bottom: 1.5rem;
  color: #ddd;
  line-height: 1.6;

  @media (max-width: 740px) {
    font-size: 1.3rem;
  }

  @media (max-width: 355px) {
    font-size: 1.1rem;
    max-width: 90%;
  }
`;

const AboutImage = styled.img`
  width: 200px;
  height: auto;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 255, 0, 0.6);

  @media (max-width: 740px) {
    width: 180px;
  }

  @media (max-width: 355px) {
    width: 150px;
  }
`;

// 🔹 Componente About
const About = () => {
  return (
    <Section id="nosotros">
      <AboutContainer>
        <Title>Sobre Nosotros</Title>
        <AboutText>
          Somos un gimnasio comprometido con tu bienestar y rendimiento físico. Ofrecemos los mejores equipos y entrenadores para ayudarte a alcanzar tus metas fitness.
        </AboutText>
        <AboutImage src="/img/gym-logo.jpg" alt="Nuestro gimnasio" />
      </AboutContainer>
    </Section>
  );
};

export default About;
