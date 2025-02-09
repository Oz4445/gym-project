import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"; // 🔹 Se agregó el nuevo menú hamburguesa
import Services from "./components/Services";
import Plans from "./components/Plan";
import Coaches from "./components/Coaches";
import About from "./Paginas/About";
import Contact from "./components/Contact";
import VideoPopup from "./components/VideoPopup"; // Importamos el popup
import styled from "styled-components";

// Contenedor principal
const MainContainer = styled.main`
  padding: 2rem;
  text-align: center;
  background: black;
  color: white;
  min-height: 100vh;
`;

// 🔹 Sección multimedia (video + imágenes del gym)
const MediaSection = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const GymVideo = styled.video`
  width: 60%;
  max-width: 700px;
  aspect-ratio: 16/9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);

  /* Efecto Pump */
  animation: pump 2s infinite alternate ease-in-out;

  @keyframes pump {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

// 🔹 Galería de imágenes del gimnasio
const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const GymImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// 📌 SECCIÓN DE PRODUCTOS (Verde Neón)
const ProductsSection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background: #121212;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  background: black;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 255, 0, 0.6);
  width: 250px;
  text-align: center;
  font-size: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
  color: white;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 255, 0, 0.9);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const BuyButton = styled.button`
  background: #00ff00;
  color: black;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #00cc00;
  }
`;

function App() {
  return (
    <Router>
      <NavBar /> {/* 🔹 Se agregó el nuevo menú hamburguesa */}
      <VideoPopup /> {/* Se muestra el popup al cargar la página */}
      <MainContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 style={{ color: "#00ff00" }}>Bienvenido a The Big Choco Gym</h2>

                {/* Sección multimedia */}
                <MediaSection>
                  <GymVideo autoPlay loop muted>
                    <source src={`${process.env.PUBLIC_URL}/img/gym-video.mp4`} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </GymVideo>
                  <GalleryContainer>
                    <GymImage src={`${process.env.PUBLIC_URL}/img/gym1.jpg`} alt="Interior del gimnasio 1" />
                    <GymImage src={`${process.env.PUBLIC_URL}/img/gym2.jpg`} alt="Interior del gimnasio 2" />
                    <GymImage src={`${process.env.PUBLIC_URL}/img/gym3.jpg`} alt="Interior del gimnasio 3" />
                    <GymImage src={`${process.env.PUBLIC_URL}/img/gym4.jpg`} alt="Interior del gimnasio 4" />
                  </GalleryContainer>
                </MediaSection>

                {/* 📌 Sección de productos */}
                <ProductsSection>
                  <h2 style={{ color: "#00ff00" }}>Nuestros Productos</h2>
                  <ProductGrid>
                    <ProductCard>
                      <ProductImage src={`${process.env.PUBLIC_URL}/img/protein.jpg`} alt="Proteína en Polvo" />
                      <h3 style={{ color: "#00ff00" }}>Proteína en Polvo</h3>
                      <p>Mejora tu rendimiento y recuperación muscular.</p>
                      <BuyButton>Comprar</BuyButton>
                    </ProductCard>

                    <ProductCard>
                      <ProductImage src={`${process.env.PUBLIC_URL}/img/gloves.jpg`} alt="Guantes de Gimnasio" />
                      <h3 style={{ color: "#00ff00" }}>Guantes de Gimnasio</h3>
                      <p>Protege tus manos durante los entrenamientos.</p>
                      <BuyButton>Comprar</BuyButton>
                    </ProductCard>

                    <ProductCard>
                      <ProductImage src={`${process.env.PUBLIC_URL}/img/shaker.jpg`} alt="Shaker para Batidos" />
                      <h3 style={{ color: "#00ff00" }}>Shaker para Batidos</h3>
                      <p>Prepara y mezcla tus suplementos fácilmente.</p>
                      <BuyButton>Comprar</BuyButton>
                    </ProductCard>
                  </ProductGrid>
                </ProductsSection>
              </>
            }
          />
          <Route path="/servicios" element={<Services />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;