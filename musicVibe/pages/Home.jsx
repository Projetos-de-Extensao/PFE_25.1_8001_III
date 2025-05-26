import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import "../styles.css";

function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/src/logoMusicaVibe.svg" alt="Logo MusicVibe" />
          </div>
          <div className="header-right">
            <nav className="nav">
              <a href="#">Sobre Nós</a>
              <a href="#">Cartegorias</a>
              <a href="#">Em Alta</a>
              <a href="#">Shows</a>
            </nav>
            <div className="auth-buttons">
              <button className="btn">Cadastrar-se</button>
              <button className="btn btn-outline-login">Entrar</button>
            </div>
          </div>
        </div>
        <div className="search-bar">
          <div className="container">
            <input type="text" placeholder="Busque por Evento, Artista, Local..." />
            <input type="text" placeholder="CEP ou Estado" />
            <input type="date" />
            <button className="btn">Buscar</button>
          </div>
        </div>
      </header>

      <Banner />

      <section className="categories">
        <div className="container">
          <div className="categories-header">
            <h2>Navegue por Categoria</h2>
            <button className="btn btn-outline">Ver Mais</button>
          </div>
          <hr />
          <div className="category-list">
            <button className="arrow"><img src="/src/setaEsquerda.svg" alt="Seta Esquerda" /></button>
            <div className="category">
              <img src="/src/Rectangle 1361.png" alt="Show" />
              <p>Show</p>
            </div>
            <div className="category">
              <img src="/src/Rectangle 1361-1.png" alt="Rock" />
              <p>Rock</p>
            </div>
            <div className="category">
              <img src="/src/Rectangle 1361-2.png" alt="Pop" />
              <p>Pop</p>
            </div>
            <div className="category">
              <img src="/src/Rectangle 1361-3.png" alt="Eletrônica" />
              <p>Eletrônica</p>
            </div>
            <button className="arrow"><img src="/src/setaDireita.svg" alt="Seta Direita" /></button>
          </div>
        </div>
      </section>

      <section className="top-picks">
        <div className="container">
          <div className="top-picks-filter">
            <h2>Principais eventos Perto de Você</h2>
            <button className="btn btn-outline"><img src="/src/filter.png" alt="" /> Filtrar</button>
          </div>
          <hr />
          <div className="event-list">
            {[1, 2, 3, 4].map((_, i) => (
              <div className="event" key={i}>
                <img src={`/src/Rectangle 1363${i === 0 ? "" : i === 3 ? "-1-3" : `-${i}`}.png`} alt="" />
                <div className="event-details">
                  <p>13 de Ago</p>
                  <p>Dom - 10:00 AM</p>
                  <p>Elements Music and Arts Festival - Domingo</p>
                </div>
                <div className="event-actions">
                  <div className="btn-picks">
                    <button className="btn btn-outline">Ver Detalhes</button>
                    <button className="btn">Reservar Agora</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="white-background">
              <button className="btn btn-outline show-more-btn white-background-bottom">Mostrar Mais</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
};

export default Home;