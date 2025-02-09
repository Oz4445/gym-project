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

// 🔹 Botón de hamburguesa (visible solo en celulares)
const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  color: #00ff00; /* Verde neón */
  cursor: pointer;
  z-index: 2100;
  transition: transform 0.3s ease-in-out;
  display: none; /* Oculto por defecto */

  ${({ show }) => show && "display: block;"} /* Se muestra en móviles */

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

// 🔹 Menú móvil con efecto Zoom (visible solo en celulares)
const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "50%" : "150%")};
  transform: translate(-50%, 0) scale(${({ open }) => (open ? "1" : "0.8")});
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 1000;

  @media (min-width: 741px) {
    display: none;
  }
`;

// 🔹 Menú de escritorio (visible solo en pantallas grandes)
const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 740px) {
    display: none;
  }
`;

const DesktopLink = styled(Link)`
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
  color: #00ff00; /* Verde neón */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: #00cc00;
    transform: rotate(90deg);
  }
`;

// 🔹 Luz neón en los textos del menú
const MenuItem = styled(Link)`
  color: #00ff00; /* Verde neón */
  text-decoration: none;
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: bold;
  transition: text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 10px #00ff00, 0px 0px 20px #00ff00;
    color: #00cc00;
  }
`;

// 🔹 Componente principal
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 740);

  // Detectar si es móvil al cambiar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 740);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo src="/img/logo.jpg" alt="Logo de The Big Choco Gym" />
        </LogoContainer>

        {/* Menú de escritorio (visible en pantallas grandes) */}
        {!isMobile && (
          <DesktopNav>
            <DesktopLink to="/">Inicio</DesktopLink>
            <DesktopLink to="/servicios">Servicios</DesktopLink>
            <DesktopLink to="/planes">Planes</DesktopLink>
            <DesktopLink to="/coaches">Coaches</DesktopLink>
            <DesktopLink to="/nosotros">Nosotros</DesktopLink>
            <DesktopLink to="/contacto">Contacto</DesktopLink>
          </DesktopNav>
        )}

        {/* Botón de hamburguesa (solo visible en móviles) */}
        {isMobile && (
          <HamburgerButton
            show={isMobile}
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </HamburgerButton>
        )}
      </HeaderContainer>

      {/* Fondo con blur cuando el menú está abierto */}
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />

      {/* Menú móvil con zoom (solo en celulares) */}
      {isMobile && (
        <MobileMenu open={menuOpen}>
          <CloseButton onClick={() => setMenuOpen(false)}>✖</CloseButton>
          <MenuItem to="/" onClick={() => setMenuOpen(false)}>Inicio</MenuItem>
          <MenuItem to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</MenuItem>
          <MenuItem to="/planes" onClick={() => setMenuOpen(false)}>Planes</MenuItem>
          <MenuItem to="/coaches" onClick={() => setMenuOpen(false)}>Coaches</MenuItem>
          <MenuItem to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</MenuItem>
          <MenuItem to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</MenuItem>
        </MobileMenu>
      )}
    </>
  );
};

export default NavBar;
