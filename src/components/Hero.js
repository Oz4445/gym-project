import React from "react";
import styled from "styled-components";

// 🔹 Estilos usando Styled Components
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 2rem; /* Agregamos padding lateral */

  @media (max-width: 740px) {
    height: 90vh; /* Reducimos un poco la altura en tablets */
    padding: 0 1.5rem;
  }

  @media (max-width: 355px) {
    height: 80vh; /* Reducimos más en móviles pequeños */
    padding: 0 1rem;
  }
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px; /* Limitar el ancho */

  @media (max-width: 740px) {
    padding: 1.5rem; /* Menos padding en tablets */
    max-width: 600px;
  }

  @media (max-width: 355px) {
    padding: 1rem; /* Aún menos en móviles */
    max-width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 740px) {
    font-size: 2.5rem; /* Más pequeño en tablets */
  }

  @media (max-width: 355px) {
    font-size: 2rem; /* Aún más pequeño en móviles */
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 740px) {
    font-size: 1.1rem; /* Más pequeño en tablets */
  }

  @media (max-width: 355px) {
    font-size: 1rem; /* Aún más pequeño en móviles */
  }
`;

const Button = styled.a`
  background: #ff5733;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background 0.3s;
  display: inline-block;

  &:hover {
    background: #e64c2b;
  }

  @media (max-width: 740px) {
    font-size: 1rem; /* Más pequeño en tablets */
    padding: 0.7rem 1.3rem;
  }

  @media (max-width: 355px) {
    font-size: 0.9rem; /* Aún más pequeño en móviles */
    padding: 0.6rem 1.2rem;
  }
`;

// 🔹 Componente Hero
const Hero = () => {
  return (
    <HeroSection id="inicio">
      <HeroVideo autoPlay loop muted>
        <source src="/assets/video.mp4" type="video/mp4" />
      </HeroVideo>
      <HeroContent>
        <Title>Transforma tu cuerpo, transforma tu vida</Title>
        <Paragraph>Únete a nuestro gimnasio y alcanza tus metas fitness con los mejores entrenadores.</Paragraph>
        <Button href="#planes">Ver Planes</Button>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
