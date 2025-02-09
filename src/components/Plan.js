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

const PlansContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 740px) {
    gap: 1.5rem; /* Menos espacio entre tarjetas en tablets */
  }

  @media (max-width: 355px) {
    gap: 1rem; /* Aún menos en móviles pequeños */
  }
`;

const PlanCard = styled.div`
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

  @media (max-width: 355px) {
    width: 90%; /* Ocupa casi todo el ancho en móviles */
    padding: 1.2rem;
    font-size: 1rem;
  }
`;

// 🔹 Componente Plans
const Plans = () => {
  return (
    <Section id="planes">
      <Title>Nuestros Planes</Title>
      <PlansContainer>
        <PlanCard>Plan Básico</PlanCard>
        <PlanCard>Plan Premium</PlanCard>
      </PlansContainer>
    </Section>
  );
};

export default Plans;
