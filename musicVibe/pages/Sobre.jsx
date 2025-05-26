import React from "react";
import Footer from "../componentes/Footer/Footer";
import Header from "../componentes/Header/Header";
import "../styles.css";

function Sobre() {
  return (
    <>
      <Header />
        

      <main className="sobre-main" style={{ background: "#f8f9fa", padding: "0 0 40px 0" }}>
        <section className="sobre-section container" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 0" }}>
          <h1>Quem Somos</h1>
          <p>
            Somos apaixonados por música e experiências inesquecíveis. Desde 2015, o <b>MusicVibe</b> conecta pessoas através de sons, cultura e vibração única.
            Mais do que um evento, somos um movimento que celebra a diversidade musical, a criatividade e a energia da comunidade.
            Nosso compromisso é oferecer um ambiente seguro, acolhedor e vibrante, onde a música une e transforma. Junte-se a nós nessa jornada sonora!
          </p>
          <ul>
            <li><b>Missão:</b> Conectar pessoas por meio da música e proporcionar experiências únicas.</li>
            <li><b>Visão:</b> Ser referência em eventos culturais e musicais no Brasil.</li>
            <li><b>Valores:</b> Diversidade, criatividade, respeito, inclusão e sustentabilidade.</li>
          </ul>
        </section>

        <section className="sobre-section container">
          <h2>Propósito e Identidade</h2>
          <p>
            O <b>MusicVibe</b> é focado em celebrar todos os estilos musicais: rock, eletrônico, sertanejo, indie, rap e muito mais.
            Nosso evento é feito para jovens, famílias e todos os amantes de música que buscam novas experiências e conexões.
            O que nos diferencia é a curadoria artística, o ambiente acolhedor e a energia contagiante de cada edição.
          </p>
        </section>

        <section className="sobre-section container">
          <h2>História dos Eventos</h2>
          <ul>
            <li><b>2016:</b> Primeira edição com bandas locais e DJs independentes.</li>
            <li><b>2018:</b> Parceria com projetos sociais e expansão para novos estilos.</li>
            <li><b>2022:</b> Mais de 10 mil pessoas reunidas em um final de semana inesquecível.</li>
          </ul>
          <p>
            Já recebemos artistas como <b>DJ Groove</b>, <b>Banda Pulsar</b> e <b>MC Flow</b>, além de momentos marcantes como o palco colaborativo e o sunset eletrônico.
          </p>
        </section>

        <section className="sobre-section container">
          <h2>Impacto e Cultura</h2>
          <p>
            Temos compromisso com a sustentabilidade, diversidade e cultura local. Nossas edições contam com coleta seletiva, acessibilidade e parcerias com projetos culturais e ONGs da região.
          </p>
        </section>

        <section className="sobre-section container">
          <h2>Equipe</h2>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img src="/src/equipe/joao.jpg" alt="João Silva" style={{ width: 100, borderRadius: "50%" }} />
              <p><b>João Silva</b><br />Fundador & Curador</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="/src/equipe/ana.jpg" alt="Ana Souza" style={{ width: 100, borderRadius: "50%" }} />
              <p><b>Ana Souza</b><br />Produtora Executiva</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="/src/equipe/rafael.jpg" alt="Rafael Lima" style={{ width: 100, borderRadius: "50%" }} />
              <p><b>Rafael Lima</b><br />Diretor Artístico</p>
            </div>
          </div>
        </section>

        <section className="sobre-section container">
          <h2>Imagens & Vídeos</h2>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <img src="/src/fotos/evento1.jpg" alt="Evento 1" style={{ width: 180, borderRadius: 8 }} />
            <img src="/src/fotos/evento2.jpg" alt="Evento 2" style={{ width: 180, borderRadius: 8 }} />
            <img src="/src/fotos/evento3.jpg" alt="Evento 3" style={{ width: 180, borderRadius: 8 }} />
            <video width="220" controls style={{ borderRadius: 8 }}>
              <source src="/src/videos/highlight.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </section>

        <section className="sobre-section container">
          <h2>Reconhecimento e Parcerias</h2>
          <ul>
            <li>Matéria na <b>Revista Música Brasil</b>: “O festival que está mudando a cena musical.”</li>
            <li>Patrocínio: <img src="/src/parceiros/logoPatrocinador1.png" alt="Patrocinador 1" style={{ height: 32, verticalAlign: "middle" }} /> <img src="/src/parceiros/logoPatrocinador2.png" alt="Patrocinador 2" style={{ height: 32, verticalAlign: "middle" }} /></li>
            <li>Depoimento: <i>“Nunca vivi uma vibe tão boa!”</i> – <b>MC Flow</b></li>
          </ul>
        </section>

        <section className="sobre-section container" style={{ textAlign: "center", marginTop: 40 }}>
          <h2>Junte-se à nossa comunidade!</h2>
          <p>
            <a href="mailto:suporte@musicvibe.com" className="btn" style={{ margin: 8 }}>Contato</a>
            <a href="https://instagram.com/musicvibe" className="btn btn-outline" style={{ margin: 8 }}>Instagram</a>
            <a href="/ingressos" className="btn btn-outline" style={{ margin: 8 }}>Próximos Eventos</a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Sobre;
