import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// 🔹 Estilos CSS
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: black;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 5px 20px rgba(0, 255, 0, 0.8);
  position: relative;
  max-width: 95%;

  @media (max-width: 740px) {
    max-width: 90%;
    padding: 10px;
  }

  @media (max-width: 355px) {
    max-width: 98%;
    padding: 8px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  color: #00ff00;
  font-size: 28px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    color: #00cc00;
    transform: scale(1.3);
  }
`;

const Video = styled.video`
  width: 85%;  /* Se agrandó aún más */
  max-width: 1000px; /* Más grande en pantallas grandes */
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 255, 0, 0.6);

  @media (max-width: 740px) {
    width: 98%;  /* Más grande en tablets */
  }

  @media (max-width: 355px) {
    width: 100%;  /* Ocupar todo el ancho en celulares pequeños */
  }
`;

const UnmuteMessage = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 255, 0, 0.8);
  color: black;
  padding: 12px 22px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 5px 15px rgba(0, 255, 0, 1);

  &:hover {
    background: #00cc00;
  }

  @media (max-width: 740px) {
    font-size: 16px;
    padding: 10px 18px;
  }

  @media (max-width: 355px) {
    font-size: 14px;
    padding: 8px 14px;
  }
`;

// 🔹 Componente principal
const VideoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  useEffect(() => {
    if (showPopup && videoRef.current) {
      const playVideo = async () => {
        try {
          videoRef.current.muted = true; // Se inicia silenciado para evitar bloqueo
          await videoRef.current.play(); // Intenta reproducir automáticamente

          // Verificamos si el navegador bloqueó el sonido
          setTimeout(() => {
            if (videoRef.current.muted) {
              setIsMuted(true); // Mostramos mensaje para activar sonido
            } else {
              setIsMuted(false);
            }
          }, 500);
        } catch (err) {
          console.warn("El navegador bloqueó la reproducción automática con sonido.");
        }
      };

      playVideo();
    }
  }, [showPopup]);

  // 🔊 Función para activar el sonido manualmente
  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      setIsMuted(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <Overlay>
        <PopupContent>
          <CloseButton onClick={handleClose}>✖</CloseButton>
          <Video ref={videoRef} autoPlay playsInline muted onEnded={handleClose}>
            <source src="/img/intro-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </Video>
          {isMuted && <UnmuteMessage onClick={handleUnmute}>🔊 Activar sonido</UnmuteMessage>}
        </PopupContent>
      </Overlay>
    )
  );
};

export default VideoPopup;
