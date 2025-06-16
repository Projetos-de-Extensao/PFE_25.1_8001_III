import React, { useRef, useState } from "react";
import "./styles.css";
import List from "../componentes/List/List.jsx";
import WhiteBoard from "../componentes/white-board/WhiteBoard.jsx"; 
import CategoriasSection from "../componentes/CategoriasSection/CategoriasSection"; // novo import

function Home() {
  // Fotos do hero (adicione mais se quiser)
  const heroImages = [
    { src: "../src/assets/photos/Rectangle 5.png", alt: "homem com microfone" },
    { src: "../src/assets/photos/Rectangle 51.png", alt: "homem com microfone na multitão" },
    // { src: "../src/assets/photos/OutraImagem.png", alt: "Outra imagem" },
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const heroRef = useRef(null);

  const scrollHeroLeft = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const scrollHeroRight = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="hero">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="hero-content">
            <h1>Encontre sua vibe musical!!</h1>
            <button className="btn" onClick={() => window.location.href = '/pesquisa'}>Reserve Agora</button>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <img
              src={heroImages[heroIndex].src}
              alt={heroImages[heroIndex].alt}
              className="hero-image"
              ref={heroRef}
              style={{ width: "100%", display: "block" }}
            />
            <button
              className="arrow hero-arrow hero-arrow-left"
              onClick={scrollHeroLeft}
              style={{
                position: "absolute",
                left: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <img src="../src/assets/icons/setaEsquerda.svg" alt="Anterior" />
            </button>
            <button
              className="arrow hero-arrow hero-arrow-right"
              onClick={scrollHeroRight}
              style={{
                position: "absolute",
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <img src="../src/assets/icons/setaDireita.svg" alt="Próxima" />
            </button>
          </div>
        </div>
      </section>

      {/* Substitua a section de categorias pelo novo componente */}
      <CategoriasSection />

      <section  className="top-picks">
        <div className="container">
          <div className="top-picks-filter">
            <h2>Principais eventos Perto de Você</h2>
          </div>
          <List />
        </div>
      </section>
    </>
  );
}

export default Home;