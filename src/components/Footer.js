import React from "react";
import styled from "styled-components";

// Estilos con Styled Components
const FooterContainer = styled.footer`
  background: black;
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-top: 4px solid #00ff00; /* Borde verde neón arriba */

  @media (max-width: 740px) {
    padding: 1.5rem; /* Menos padding en tablets */
    font-size: 1.1rem;
  }

  @media (max-width: 355px) {
    padding: 1rem; /* Menos padding en móviles pequeños */
    font-size: 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #00ff00; /* Texto en verde neón */

  @media (max-width: 740px) {
    font-size: 1.1rem;
  }

  @media (max-width: 355px) {
    font-size: 1rem;
  }
`;

// 🔹 Componente Footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 The Big Choco Gym. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
