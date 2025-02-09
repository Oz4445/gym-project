import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 🔹 Contenedor del Header
const HeaderContainer = styled.header`
  background: black;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2000;
`;

// 🔹 Contenedor del Logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 15px;

  @media (max-width: 740px) {
    height: 50px;
  }
`;

// 🔹 Botón de hamburguesa (visible solo en móviles)
const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  color: #00ff00;
  cursor: pointer;
  z-index: 2100;
  transition: transform 0.3s ease-in-out;
  display: ${({ show }) => (show ? "block" : "none")};

  ${({ open }) => open && "transform: rotate(90deg);"}
`;

// 🔹 Fondo con blur cuando el menú está abierto
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  z-index: ${({ open }) => (open ? "999" : "-1")};
`;

// 🔹 Menú móvil con transición de desplazamiento
const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(${({ open }) => (open ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  @media (min-width: 741px) {
    display: none;
  }
`;

// 🔹 Menú de escritorio (visible en pantallas grandes)
const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 740px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #00ff00;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #00cc00;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 35px;
  color: #00ff00;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: #00cc00;
    transform: rotate(90deg);
  }
`;

// 🔹 Componente principal
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil al cambiar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 740);
    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo src="/img/logo.jpg" alt="Logo de The Big Choco Gym" />
        </LogoContainer>

        {/* Menú de escritorio */}
        {!isMobile && (
          <DesktopNav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/planes">Planes</NavLink>
            <NavLink to="/coaches">Coaches</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </DesktopNav>
        )}

        {/* Botón de hamburguesa (solo en móviles) */}
        {isMobile && (
          <HamburgerButton show={isMobile} open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </HamburgerButton>
        )}
      </HeaderContainer>

      {/* Fondo con blur cuando el menú está abierto */}
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />

      {/* Menú móvil con desplazamiento */}
      {isMobile && (
        <MobileMenu open={menuOpen}>
          <CloseButton onClick={() => setMenuOpen(false)}>✖</CloseButton>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</NavLink>
          <NavLink to="/planes" onClick={() => setMenuOpen(false)}>Planes</NavLink>
          <NavLink to="/coaches" onClick={() => setMenuOpen(false)}>Coaches</NavLink>
          <NavLink to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</NavLink>
          <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
        </MobileMenu>
      )}
    </>
  );
};

export default NavBar;
