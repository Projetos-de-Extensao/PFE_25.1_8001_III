import "./sobre.css";

function Sobre() {
  return (
    <>
      <section className="hero-banner">
        <div className="overlay">
          <h1>NOSSA HISTORIA</h1>
        </div>
      </section>

      <main className="sobre-main">
        <section className="sobre-section container">
          <h2>Quem somos</h2>
          <p>
            Bem-vindo à MusicVibe, seu destino definitivo para eventos de música
            ao vivo. Somos especializados na organização de concertos e festivais
            inesquecíveis que unem amantes da música de todos os estilos.
            Com uma paixão pela música e um compromisso com a excelência,
            buscamos criar experiências únicas que toquem nosso público.
          </p>
        </section>

        <section className="sobre-section container">
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é conectar fãs aos seus artistas favoritos e criar uma
            comunidade vibrante por meio do poder da música ao vivo.
            Buscamos apresentar line-ups diversos que combinem artistas
            consagrados e talentos emergentes, promovendo um ambiente
            inclusivo e dinâmico em cada evento.
          </p>
        </section>

        <section className="sobre-section container">
          <h2>Experiência</h2>
          <p>
            Anos de expertise na indústria de eventos musicais.
          </p>
        </section>

        <section className="sobre-section container">
          <h2>Paixão</h2>
          <p>
            Movidos pelo amor à música ao vivo e ao entretenimento
          </p>
        </section>

        <section className="sobre-section container">
          <h2>Comunidade</h2>
          <p>
            Construindo uma audiência conectada e engajada.
          </p>
        </section>
      </main>
    </>
  );
}

export default Sobre;
