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

  @media (max-width: 480px) { /* Para celulares medianos y pequeños */
    padding: 2.5rem 1.2rem;
  }

  @media (max-width: 355px) { /* Para celulares muy pequeños */
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

  @media (max-width: 480px) {
    font-size: 2rem; /* Más pequeño en celulares medianos */
  }

  @media (max-width: 355px) {
    font-size: 1.8rem; /* Más pequeño en móviles pequeños */
  }
`;

const CoachesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 740px) {
    gap: 1.5rem; /* Menos espacio entre tarjetas en tablets */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Menos espacio en móviles medianos */
  }

  @media (max-width: 355px) {
    gap: 0.8rem; /* Aún menos en móviles pequeños */
  }
`;

const CoachCard = styled.div`
  background: #121212;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);
  font-size: 1.2rem;
  width: 250px;
  text-align: center;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 255, 0, 0.9);
  }

  @media (max-width: 740px) {
    width: 220px; /* Más pequeñas en tablets */
    padding: 1.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    width: 200px; /* Más pequeñas en celulares medianos */
    font-size: 1rem;
  }

  @media (max-width: 355px) {
    width: 90%; /* Ocupa casi todo el ancho en móviles */
    padding: 1.2rem;
    font-size: 0.9rem;
  }
`;

const CoachImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 740px) {
    height: 180px; /* Más pequeña en tablets */
  }

  @media (max-width: 480px) {
    height: 160px; /* Más pequeña en celulares medianos */
  }

  @media (max-width: 355px) {
    height: 140px; /* Más pequeña en móviles */
  }
`;

// 🔹 Componente Coaches
const Coaches = () => {
  return (
    <Section id="coaches">
      <Title>Nuestros Coaches</Title>
      <CoachesContainer>
        <CoachCard>
          <CoachImage src="/img/coach1.jpg" alt="Juan Pérez" />
          Juan Pérez - Musculación
        </CoachCard>
        <CoachCard>
          <CoachImage src="/img/coach2.jpg" alt="María Gómez" />
          María Gómez - Yoga
        </CoachCard>
        <CoachCard>
          <CoachImage src="/img/coach3.jpg" alt="Carlos Rodríguez" />
          Carlos Rodríguez - CrossFit
        </CoachCard>
      </CoachesContainer>
    </Section>
  );
};

export default Coaches;
