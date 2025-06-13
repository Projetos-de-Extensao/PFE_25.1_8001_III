import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Event.css";

export default function Event() {
  const location = useLocation();
  const navigate = useNavigate();
  const { eventData } = location.state || {};

  return (
    <div>
    <main className="container-event-page">
      <div className="event__banner">
        <div className="event__background-wrapper">
          <div
            className="event__background-image"
            style={{
              backgroundImage:
                `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('${eventData.banner || eventData.img}')`,
            }}
          ></div>
        </div>
        <div className="banner-container">
          <div className="banner-info-container">
            <h1 className="event-name">{eventData.title}</h1>
            <section className="pre-description">
              <div className="event-information-container">
                <p className="title">
                  <strong>Data:</strong> {eventData.weekDay}, {eventData.date}
                </p>
              </div>
              <div className="event-information-container">
                <p className="title">
                  <strong>Horário:</strong> {eventData.time}
                </p>
              </div>
              <div className="event-information-container">
                <p className="title">
                  <strong>Local:</strong> {eventData.bairro}, {eventData.cidade} -{" "}
                  {eventData.estado}
                </p>
              </div>
            </section>
          </div>
          <div className="floated-image">
            <img
              className="event-image"
              src={eventData.img}
              alt={eventData.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/default-event.png";
              }}
            />
          </div>
        </div>
      </div>

      <section className="event__section">
        <div className="summary">
          <div className="range-tickets">
            <div className="ticket-information">
              <span className="ticket-icon"></span>
              Ingressos a R$99,00
              <br />
              <span className="ticket-payment">Pague em até 12x</span>
            </div>
            <div className="buy-tickets">
              <button className="btn" ><a href="/Carrinho">Comprar ingresso</a></button>
            </div>
          </div>
        </div>
      </section>

      <section className="description-event">
        <h3>Descrição do evento</h3>
        <div className="event-meta">
          <strong>{eventData.title}</strong>
        </div>
        <p>
          {eventData.descricao ||
            "Não há descrição disponível para este evento."}
        </p>
        <div className="event-details">
          <p>
            <strong>Horários:</strong>
            <br />
            Abertura da Casa: {eventData.time.split("às")[0].trim()}
            <br />
            Show: {eventData.time.split("às")[1].trim()}
          </p>
          <p>
            <strong>ENDEREÇO</strong>
            <br />
            {eventData.bairro}
            <br />
            {eventData.cidade} - {eventData.estado}
          </p>
          <p>
            <strong>Informações, reservas de grupo e eventos corporativos:</strong>
            <br />
            TELEFONE 11 5095-6100
            <br />
            Whatsapp: +55.1197060-0113
            <br />
            Horário: Segunda à sábado das 11:00 às 19:00h
          </p>
        </div>
        
        <div className="summary summary-bottom">
          <div className="range-tickets">
            <div className="ticket-information">
              <span className="ticket-icon"></span>
              Ingressos a R$99,00
              <br />
              <span className="ticket-payment">Pague em até 12x</span>
            </div>
            <div className="buy-tickets">
              <button className="btn"><a href="/Carrinho">Comprar ingresso</a></button>
            </div>
          </div>
        </div>
      </section>

      <div className="back-link">
        <button onClick={() => navigate(-1)} className="btn-back">
        <img src="src/assets/icons/setaEsquerda.svg" alt="Voltar" className="back-icon" />
        </button>
      </div>
    </main>
    </div>
  );
}