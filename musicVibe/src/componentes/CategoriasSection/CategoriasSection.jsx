import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriasSection.css";

const categories = [
  { img: "../src/assets/photos/Rectangle 1361.png", label: "Show", value: "Classic"  },
  { img: "../src/assets/photos/Rectangle 1361-1.png", label: "Rock", value: "Rock" },
  { img: "../src/assets/photos/Rectangle 1361-2.png", label: "Pop", value: "Pop" },
  { img: "../src/assets/photos/Rectangle 1361-3.png", label: "Eletrônica", value: "Eletronic" },
];

function CategoriasSection() {
  const listRef = useRef(null);
  const navigate = useNavigate();

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

  const handleCategoryClick = (cat) => {
    localStorage.setItem("app-filters", JSON.stringify({
      dateRange: "",
      category: cat.value,
      bairro: "",
      name: ""
    }));
    navigate("/pesquisa");
  };

  return (
    <section id="categorias" className="categories">
      <div className="container">
        <div className="categories-header">
          <h2>Navegue por Categoria</h2>
        </div>
        <hr />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button className="arrow" onClick={scrollLeft}>
            <img src="../src/assets/icons/setaEsquerda.svg" alt="Seta Esquerda" />
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
            <img src="../src/assets/icons/setaDireita.svg" alt="Seta Direita" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoriasSection;
