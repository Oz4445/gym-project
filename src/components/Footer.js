import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

// 🔹 Estilos con Styled Components
const FooterContainer = styled.footer`
  background: black;
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-top: 4px solid #00ff00;

  @media (max-width: 740px) {
    padding: 1.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 355px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #00ff00;

  @media (max-width: 740px) {
    font-size: 1.1rem;
  }

  @media (max-width: 355px) {
    font-size: 1rem;
  }
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #00ff00;
    font-size: 1.8rem;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #ffffff;
      transform: scale(1.2);
    }
  }

  @media (max-width: 740px) {
    gap: 0.8rem;
    a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 355px) {
    gap: 0.6rem;
    a {
      font-size: 1.3rem;
    }
  }
`;

const PrivacyPolicy = styled.a`
  display: block;
  margin-top: 1rem;
  color: #00ff00;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: white;
    text-decoration: underline;
  }

  @media (max-width: 740px) {
    font-size: 0.9rem;
  }

  @media (max-width: 355px) {
    font-size: 0.8rem;
  }
`;

// 🔹 Componente Footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 The Big Choco Gym. Todos los derechos reservados.</FooterText>
      
      {/* Iconos de redes sociales */}
      <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
      </SocialIcons>

      {/* Enlace a política de privacidad */}
      <PrivacyPolicy href="/politica-de-privacidad">Política de Privacidad</PrivacyPolicy>
    </FooterContainer>
  );
};

export default Footer;
