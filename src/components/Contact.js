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

const ContactInfo = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 740px) {
    font-size: 1.3rem; /* Más pequeño en tablets */
  }

  @media (max-width: 355px) {
    font-size: 1.1rem; /* Más pequeño en móviles */
  }
`;

// 🔹 Componente Contact
const Contact = () => {
  return (
    <Section id="contacto">
      <Title>Contacto</Title>
      <ContactInfo>
        <p>Email: contacto@thebigchocogym.com</p>
        <p>Teléfono: +123 456 789</p>
        <p>Dirección: Calle Fitness 123, Ciudad Gym</p>
      </ContactInfo>
    </Section>
  );
};

export default Contact;
