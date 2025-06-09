import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import List from "../src/componentes/List/List.jsx";
import WhiteBoard from "../src/componentes/white-board/WhiteBoard.jsx"; 
import Pesquisa from "./Pesquisa.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  // Fotos do hero (adicione mais se quiser)
  const heroImages = [
    { src: "src/assets/photos/Rectangle 5.png", alt: "homem com microfone" },
    // { src: "src/assets/photos/OutraImagem.png", alt: "Outra imagem" },
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const heroRef = useRef(null);

  const scrollHeroLeft = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const scrollHeroRight = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  // Mostra todas as categorias, mas permite rolar para os lados
  const categories = [
    { img: "src/assets/photos/Rectangle 1361.png", label: "Show"  },
    { img: "src/assets/photos/Rectangle 1361-1.png", label: "Rock" },
    { img: "src/assets/photos/Rectangle 1361-2.png", label: "Pop" },
    { img: "src/assets/photos/Rectangle 1361-3.png", label: "Eletrônica" },
  ];

  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    navigate("/pesquisa", { state: { categoria: cat.label } });
  };

  return (
    <>
      <section className="hero">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="hero-content">
            <h1>Encontre sua vibe musical!!</h1>
            <button className="btn">Reserve Agora</button>
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
              <img src="src/assets/icons/setaEsquerda.svg" alt="Anterior" />
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
              <img src="src/assets/icons/setaDireita.svg" alt="Próxima" />
            </button>
          </div>
        </div>
      </section>

      <section id="categorias" className="categories">
        <div className="container">
          <div className="categories-header">
            <h2>Navegue por Categoria</h2>
          </div>
          <hr />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button className="arrow" onClick={scrollLeft}>
              <img src="src/assets/icons/setaEsquerda.svg" alt="Seta Esquerda" />
            </button>
            <div
              className="category-list"
              ref={listRef}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.9375rem",
                overflowX: "auto",
                scrollBehavior: "smooth",
                padding: "0.625rem 0",
                scrollbarWidth: "none"
              }}
            >
              {categories.map((cat, idx) => (
                <div
                  className="category"
                  key={cat.label + idx}
                  onClick={() => handleCategoryClick(cat)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={cat.img} alt={cat.label}/>
                  <p>{cat.label}</p>
                </div>
              ))}
            </div>
            <button id="my-list" className="arrow" onClick={scrollRight}>
              <img src="src/assets/icons/setaDireita.svg" alt="Seta Direita" />
            </button>
          </div>
        </div>
      </section>

      <section  className="top-picks">
        <div className="container">
          <div className="top-picks-filter">
            <h2>Principais eventos Perto de Você</h2>
          </div>
          <List />
          <WhiteBoard />
        </div>
      </section>
    </>
  );
}

export default Home;