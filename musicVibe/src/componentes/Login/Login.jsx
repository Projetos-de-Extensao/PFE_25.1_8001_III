import React from "react";
import "../login.css";

export default function Login() {
  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <button className="close-btn" aria-label="Fechar">&times;</button>
        <div className="login-modal-header">
          <span className="welcome-text">
            Bem-vindo ao <span className="brand">LOREM</span>
          </span>
          <div className="signup-link">
            <span>Não tem uma conta?</span>
            <a href="#" className="signup">Cadastre-se</a>
          </div>
        </div>
        <h2 className="signin-title">Entrar</h2>
        <div className="social-row">
          <button className="social-btn google">
            <img src="/src/google.svg" alt="Google" className="icon" />
            <span>Entrar com Google</span>
          </button>
          <button className="social-btn icon-btn" aria-label="Entrar com Facebook">
            <img src="/src/facebook.svg" alt="Facebook" className="icon" />
          </button>
          <button className="social-btn icon-btn" aria-label="Entrar com Apple">
            <img src="/src/apple.svg" alt="Apple" className="icon" />
          </button>
        </div>
        <form className="login-form">
          <label className="input-label" htmlFor="username">Digite seu usuário ou e-mail</label>
          <input id="username" type="text" className="input" placeholder="Usuário ou e-mail" autoComplete="username" />
          <label className="input-label" htmlFor="password">Digite sua senha</label>
          <input id="password" type="password" className="input" placeholder="Senha" autoComplete="current-password" />
          <div className="forgot-row">
            <a href="#" className="forgot-link">Esqueceu a senha?</a>
          </div>
          <button type="submit" className="signin-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}
