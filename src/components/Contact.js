import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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

const ContactContainer = styled.div`
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);
  text-align: center;

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

const ContactInfo = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 740px) {
    font-size: 1.3rem;
  }

  @media (max-width: 355px) {
    font-size: 1.1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 100%;
  background: #222;
  color: white;

  &:focus {
    outline: 2px solid #00ff00;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 100%;
  height: 120px;
  background: #222;
  color: white;

  &:focus {
    outline: 2px solid #00ff00;
  }
`;

const Button = styled.button`
  background: #00ff00;
  color: black;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #00cc00;
  }
`;

// 🔹 Componente Contact
const Contact = () => {
  return (
    <Section id="contacto">
      <ContactContainer>
        <Title>Contacto</Title>
        <ContactInfo>
          <p><FaEnvelope /> contacto@thebigchocogym.com</p>
          <p><FaPhone /> +123 456 789</p>
          <p><FaMapMarkerAlt /> Calle Fitness 123, Ciudad Gym</p>
        </ContactInfo>

        <ContactForm>
          <Input type="text" placeholder="Tu Nombre" required />
          <Input type="email" placeholder="Tu Email" required />
          <TextArea placeholder="Tu Mensaje" required></TextArea>
          <Button type="submit">Enviar Mensaje</Button>
        </ContactForm>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
