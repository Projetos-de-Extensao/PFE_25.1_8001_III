import React from "react";
import "./styles.css";
import List from "../src/componentes/List/List.jsx";
import WhiteBoard from "../src/componentes/white-board/WhiteBoard.jsx"; 


function Home() {
  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="categories-header">
            <h2>Navegue por Categoria</h2>
            <button className="btn btn-outline">Ver Mais</button>
          </div>
          <hr />
          <div className="category-list">
            <button className="arrow">
              <img src="src/assets/icons/setaEsquerda.svg" alt="Seta Esquerda" />
            </button>
            <div className="category">
              <img
                src="src/assets/photos/Rectangle 1361.png"
                alt="Show"
              />
              <p>Show</p>
            </div>
            <div className="category">
              <img
                src="src/assets/photos/Rectangle 1361-1.png"
                alt="Rock"
              />
              <p>Rock</p>
            </div>
            <div className="category">
              <img src="src/assets/photos/Rectangle 1361-2.png" alt="Pop" />
              <p>Pop</p>
            </div>
            <div className="category">
              <img
                src="src/assets/photos/Rectangle 1361-3.png"
                alt="Eletrônica"
              />
              <p>Eletrônica</p>
            </div>
            <button className="arrow">
              <img
                src="src/assets/icons/setaDireita.svg"
                alt="Seta Direita"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="top-picks">
        <div className="container">
          <div className="top-picks-filter">
            <h2>Principais eventos Perto de Você</h2>
            <button className="btn btn-outline">
              <img src="/src/filter.png" alt="" /> Filtrar
            </button>
          </div>
          <hr />
          <List/>
          <WhiteBoard />
        </div>
      </section>
    </>
  );
}

export default Home;