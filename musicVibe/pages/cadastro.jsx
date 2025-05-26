import React from "react";
import "../cadastro.css";

export default function Cadastro() {
  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img src="/src/logoMusicaVibe.svg" alt="Logo MusicVibe" />
          </div>
          <nav className="nav">
            <a href="#">Sobre Nós</a>
            <a href="#">Cartegorias</a>
            <a href="#">Em Alta</a>
            <a href="#">Shows</a>
          </nav>
          <div className="user-info">
            <img src="/src/user-icon.svg" alt="Usuário" className="user-icon" />
            <span>Jonh de Carvalho</span>
          </div>
        </div>
      </header>

      <section className="cadastro-section">
        <form className="cadastro-form">
          <h2>Primeiro Pequeno Passo</h2>
          <div className="form-row">
            <label htmlFor="nome" className="label-azul">Nome</label>
            <input type="text" placeholder="Digite o nome da clínica" name="nome" id="nome" className="full-width" />
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="cpf_cnpj" className="label-azul">CPF/CNPJ</label>
              <input type="text" placeholder="Digite o CPF/CNPJ" name="cpf_cnpj" id="cpf_cnpj" />
            </div>
            <div className="form-col">
              <label htmlFor="estado" className="label-azul">Estado</label>
              <input type="text" placeholder="Digite seu estado" name="estado" id="estado" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="data_nascimento" className="label-azul">Data de nascimento/criação</label>
              <input type="date" name="data_nascimento" id="data_nascimento" placeholder="Selecione a data" />
            </div>
            <div className="form-col">
              <label htmlFor="cidade" className="label-azul">Cidade</label>
              <input type="text" placeholder="Selecione sua cidade" name="cidade" id="cidade" />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="email" className="label-azul">Email</label>
            <input type="email" placeholder="Insira o endereço de e-mail para login" name="email" id="email" className="full-width" />
          </div>
          <div className="form-row">
            <label htmlFor="senha" className="label-azul">Crie uma senha</label>
            <input type="password" placeholder="Digite sua senha" name="senha" id="senha" className="full-width" />
          </div>
          <div className="form-row">
            <label htmlFor="repita_senha" className="label-azul">Repita a senha</label>
            <input type="password" placeholder="Repita a senha anterior" name="repita_senha" id="repita_senha" className="full-width" />
          </div>
          <div className="form-row center">
            <button type="submit" className="btn-avancar">Avançar</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="social">
              <a href="#"><img src="/src/logoInstragram.png" alt="Instagram" /></a>
              <a href="#"><img src="/src/logoFacebook.png" alt="Facebook" /></a>
            </div>
            <div className="links">
              <a href="#">Início</a>
              <a href="#">Sobre Nós</a>
              <a href="#">Categorias</a>
              <a href="#">Eventos em Alta</a>
            </div>
            <div className="contact">
              <p><img src="/src/email.svg" alt="Email" /> suporte@musicvibe.com</p>
              <p><img src="/src/Icon awesome-phone-alt.svg" alt="Telefone" /> +21 123 456</p>
              <p><img src="/src/Icon calendar.svg" alt="Dias de Funcionamento" /> Segunda - Domingo</p>
              <p><img src="/src/Icon feather-clock.svg" alt="Horário" /> 8:00 AM - 10:00 PM (BRT)</p>
              <p><img src="/src/map-pin.svg" alt="Endereço" /> Brasil</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 MusicVibe. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
