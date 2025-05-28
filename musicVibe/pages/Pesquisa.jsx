import React from "react";
import "./styles.css";

function Pesquisa() {
  return (
    <section className="top-picks">
      <div className="container">
        <div className="top-picks-filter">
          <h2>Principais eventos Perto de Você</h2>
          <button className="btn btn-outline">
            <img src="src/filter.png" alt="" /> Filtrar
          </button>
        </div>
        <hr />
        <div className="event-list">
          <div className="event">
            <img src="src/assets/photos/Rectangle 1363.png" alt="" />
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
          <div className="event">
            <img src="src/assets/photos/Rectangle 1363-1.png" alt="" />
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
          <div className="event">
            <img src="src/assets/photos/Rectangle 1363-2.png" alt="" />
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
          <div className="event">
            <img src="src/assets/photos/Rectangle 1361-3.png" alt="" />
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
        </div>
        <img src="src/assets/photos/fundo_branco_degrade.png" alt="" />
        <button className="btn btn-outline show-more-btn">Mostrar Mais</button>
      </div>
    </section>
  );
}

export default Pesquisa;