import React from "react";

export default function Event() {
  return (
    <main className="container-event-page">
      <div className="event__banner">
        <div className="event__background-wrapper">
          <div
            className="event__background-image"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('src/sinfonia2.png')",
            }}
          ></div>
        </div>
        <div className="banner-container">
          <div className="banner-info-container">
            <h1 className="event-name">Sinfonia Jonh no alto da Lagoa</h1>
            <section className="pre-description">
              <div className="event-information-container">
                <p className="title">
                  <strong>Data:</strong> 8 a 25 de Maio
                </p>
              </div>
              <div className="event-information-container">
                <p className="title">
                  <strong>Horário:</strong> Quinta a Domingo - 19h
                </p>
              </div>
              <div className="event-information-container">
                <p className="title">
                  <strong>Local:</strong> Teatro Sérgio Cardoso, Rio de Janeiro
                </p>
              </div>
            </section>
          </div>
          <div className="floated-image">
            <img
              className="event-image"
              src="src/sinfonia1.png"
              alt="Sinfonia no Teatro"
            />
            <button className="btn main-banner-btn">Comprar Ingresso</button>
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
              <button className="btn">Comprar ingresso</button>
            </div>
          </div>
        </div>
      </section>

      <section className="description-event">
        <h3>Descrição do evento</h3>
        <strong>THE DAVE MATTHEWS BAND COVER</strong>
        <p>
          A Dave Matthews Band Cover Brasil é uma homenagem à época de ouro da
          banda, trazendo ao público clássicos e raridades dos anos 90 e meados
          dos anos 2000. O grupo recria com fidelidade o som autêntico da banda
          original, utilizando a formação clássica composta por voz, violão,
          baixo, bateria, violino e saxofone.
        </p>
        <p>
          Formada em 1991 em Charlottesville, Virginia, a Dave Matthws Band
          rapidamente se tornou uma das mais influentes e bem-sucedidas bandas de
          rock da sua geração. Liderada pelo carismático vocalista e guitarrista
          Dave Matthews, a banda se destacou por sua mistura única de rock, jazz,
          blues, música clássica e elementos do folk. Com hits como “Crash Into
          Me”, “Ants Marching” e “Satellite”, a Dave Matthews Band conquistou uma
          base de fãs devota e levou suas performances ao vivo a um novo patamar.
          Conhecida por sua habilidade técnica e a improvisação ao vivo, a banda se
          manteve relevante ao longo das décadas, sendo um ícone da música americana
          e global.
        </p>
        <div className="event-details">
          <p>
            <strong>Horários:</strong>
            <br />
            Abertura da Casa: 19h00
            <br />
            Show: 21:30
          </p>
          <p>
            <strong>ENDEREÇO</strong>
            <br />
            Bourbon Street Music Club
            <br />
            Rua dos Chanés 127, Moema, São Paulo - 04087-031
            <br />
            Próximo ao Metrô Eucaliptos
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
        <div className="event-map">
          <img src="src/mapa-exemplo.png" alt="Mapa do local" />
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
              <button className="btn">Comprar ingresso</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}