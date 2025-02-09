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

  @media (max-width: 355px) {
    font-size: 2rem;
  }
`;

const PlansContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 740px) {
    gap: 1.5rem;
  }

  @media (max-width: 355px) {
    gap: 1rem;
  }
`;

const PlanCard = styled.div`
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

  @media (max-width: 355px) {
    width: 90%;
    padding: 1.2rem;
    font-size: 1rem;
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #00ff00;
`;

const PlanPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const PlanDescription = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #ccc;
`;

// 🔹 Componente Plan
const Plan = () => {
  return (
    <Section id="planes" aria-labelledby="title-planes">
      <Title id="title-planes">Nuestros Planes</Title>
      <PlansContainer>
        <PlanCard>
          <PlanTitle>Plan Básico</PlanTitle>
          <PlanPrice>$20/mes</PlanPrice>
          <PlanDescription>
            Acceso a todas las máquinas de cardio y pesas. 
            Ideal para principiantes que buscan mejorar su condición física.
          </PlanDescription>
        </PlanCard>

        <PlanCard>
          <PlanTitle>Plan Premium</PlanTitle>
          <PlanPrice>$40/mes</PlanPrice>
          <PlanDescription>
            Incluye acceso total al gimnasio, clases grupales y asesoramiento personalizado con un entrenador.
          </PlanDescription>
        </PlanCard>
      </PlansContainer>
    </Section>
  );
};

export default Plan;
