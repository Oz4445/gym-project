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

const ServicesContainer = styled.div`
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

const ServiceCard = styled.div`
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

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #00ff00;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #ccc;
`;

// 🔹 Componente Services
const Services = () => {
  return (
    <Section id="servicios" aria-labelledby="title-servicios">
      <Title id="title-servicios">Nuestros Servicios</Title>
      <ServicesContainer>
        <ServiceCard>
          <ServiceTitle>Entrenamiento Personalizado</ServiceTitle>
          <ServiceDescription>
            Recibe una rutina diseñada especialmente para ti con el apoyo de un entrenador experto.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Clases Grupales</ServiceTitle>
          <ServiceDescription>
            Disfruta de sesiones de entrenamiento en grupo con diferentes niveles de intensidad.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Asesoramiento Nutricional</ServiceTitle>
          <ServiceDescription>
            Aprende a mejorar tu alimentación con nuestros especialistas en nutrición deportiva.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceTitle>Áreas de Pesas y Cardio</ServiceTitle>
          <ServiceDescription>
            Accede a nuestra amplia zona de entrenamiento con equipo de última generación.
          </ServiceDescription>
        </ServiceCard>
      </ServicesContainer>
    </Section>
  );
};

export default Services;
