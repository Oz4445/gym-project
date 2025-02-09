import React from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación
import styled from "styled-components";

// 🔹 Estilos usando Styled Components
const HeaderContainer = styled.header`
  background: #222;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 740px) {
    padding: 0.8rem 1.5rem; /* Reducimos el padding en tablets */
    flex-direction: column; /* Para mejor ajuste */
    text-align: center;
  }

  @media (max-width: 355px) {
    padding: 0.5rem 1rem; /* Ajustamos aún más en móviles pequeños */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 740px) {
    flex-direction: column; /* Alineamos logo y título verticalmente */
  }
`;

const Logo = styled.img`
  height: 60px; /* Ajusta el tamaño del logo */
  margin-right: 15px; /* Espacio entre el logo y el texto */

  @media (max-width: 740px) {
    height: 50px; /* Más pequeño en tablets */
    margin-right: 0;
  }

  @media (max-width: 355px) {
    height: 40px; /* Aún más pequeño en móviles */
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem; /* Tamaño normal */

  @media (max-width: 740px) {
    font-size: 2rem; /* Más pequeño en tablets */
  }

  @media (max-width: 355px) {
    font-size: 1.5rem; /* Tamaño reducido en móviles */
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.5rem;

    @media (max-width: 740px) {
      gap: 1rem; /* Espaciado menor en tablets */
    }

    @media (max-width: 355px) {
      flex-direction: column; /* Menú en columna en móviles */
      align-items: center;
      gap: 0.8rem;
    }
  }

  li {
    display: inline;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.3rem; /* Tamaño normal */
    transition: color 0.3s;

    &:hover {
      color: #ff5733;
    }

    @media (max-width: 740px) {
      font-size: 1.1rem; /* Más pequeño en tablets */
    }

    @media (max-width: 355px) {
      font-size: 1rem; /* Tamaño reducido en móviles */
    }
  }
`;

// 🔹 Componente Header
const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/img/logo.jpg" alt="Logo de The Big Choco Gym" />
        <Title>The Big Choco Gym</Title>
      </LogoContainer>
      <Nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/planes">Planes</Link></li>
          <li><Link to="/coaches">Coaches</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
