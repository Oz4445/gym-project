import React from "react";
import styled from "styled-components";

// 🔹 Estilos usando Styled Components
const Section = styled.section`
  background: black;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;

  @media (max-width: 740px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.2rem;
  }

  @media (max-width: 355px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00ff00;

  @media (max-width: 740px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 355px) {
    font-size: 1.8rem;
  }
`;

const CoachesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 740px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @media (max-width: 355px) {
    gap: 0.8rem;
  }
`;

const CoachCard = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 255, 0, 0.6);
  font-size: 1.2rem;
  width: 270px;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 255, 0, 0.8);
  }

  @media (max-width: 740px) {
    width: 240px;
    padding: 1.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    width: 200px;
    font-size: 1rem;
  }

  @media (max-width: 355px) {
    width: 90%;
    padding: 1.2rem;
    font-size: 0.9rem;
  }
`;

const CoachImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;

  @media (max-width: 740px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }

  @media (max-width: 355px) {
    height: 140px;
  }
`;

const CoachName = styled.h3`
  font-size: 1.4rem;
  color: #00ff00;
  margin-bottom: 0.5rem;
`;

const CoachSpecialty = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #ccc;
`;

// 🔹 Componente Coaches
const Coaches = () => {
  return (
    <Section id="coaches" aria-labelledby="title-coaches">
      <Title id="title-coaches">Nuestros Coaches</Title>
      <CoachesContainer>
        <CoachCard>
          <CoachImage src="/img/coach1.jpg" alt="Juan Pérez" />
          <CoachName>Juan Pérez</CoachName>
          <CoachSpecialty>Especialista en Musculación</CoachSpecialty>
        </CoachCard>

        <CoachCard>
          <CoachImage src="/img/coach2.jpg" alt="María Gómez" />
          <CoachName>María Gómez</CoachName>
          <CoachSpecialty>Instructora de Yoga</CoachSpecialty>
        </CoachCard>

        <CoachCard>
          <CoachImage src="/img/coach3.jpg" alt="Carlos Rodríguez" />
          <CoachName>Carlos Rodríguez</CoachName>
          <CoachSpecialty>Entrenador de CrossFit</CoachSpecialty>
        </CoachCard>
      </CoachesContainer>
    </Section>
  );
};

export default Coaches;
