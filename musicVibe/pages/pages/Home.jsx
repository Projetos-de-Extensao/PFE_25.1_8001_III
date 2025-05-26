import React from "react";


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

    </>
  )
};

export default Home;