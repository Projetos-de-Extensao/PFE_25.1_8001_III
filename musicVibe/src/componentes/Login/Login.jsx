import React, { useState } from "react";
import "./login.css";
import { useLogin } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { closeLoginModal, login } = useLogin();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock login - in a real app, you would verify credentials with your API
    // For now, we'll just log in with the hardcoded name "Jonh de Carvalho"
    const userData = {
      name: "Jonh de Carvalho",
      email: username,
      // other user data would go here
    };
    
    login(userData);
    closeLoginModal();
    navigate("/user");
  };

  return (
    <div className="login-modal">
      <div className="login-modal-overlay" onClick={closeLoginModal}></div>
      <div className="login-modal-content">
        <button className="close-btn" aria-label="Fechar" onClick={closeLoginModal}>&times;</button>
        <div className="login-modal-header">
          <span className="welcome-text">
            Bem-vindo ao <span className="brand">MusicVibe</span>
          </span>
          <div className="signup-link">
            <span>Não tem uma conta?</span>
            <a href="#" className="signup">Cadastre-se</a>
          </div>
        </div>
        <h2 className="signin-title">Entrar</h2>
        <div className="social-row">
          <button className="social-btn google">
            <img src="src/assets/icons/logoGoogle.png" alt="Google" className="icon" />
            <span>Entrar com Google</span>
          </button>
          <button className="social-btn icon-btn" aria-label="Entrar com Facebook">
            <img src="src/assets/icons/logoFacebook.png" alt="Facebook" className="icon" />
          </button>
          <button className="social-btn icon-btn" aria-label="Entrar com Apple">
            <img src="src/assets/icons/logoApple.png" alt="Apple" className="icon" />
          </button>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="input-label" htmlFor="username">Digite seu usuário ou e-mail</label>
          <input 
            id="username" 
            type="text" 
            className="input" 
            placeholder="Usuário ou e-mail" 
            autoComplete="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="input-label" htmlFor="password">Digite sua senha</label>
          <input 
            id="password" 
            type="password" 
            className="input" 
            placeholder="Senha" 
            autoComplete="current-password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot-row">
            <a href="#" className="forgot-link">Esqueceu a senha?</a>
          </div>
          <button type="submit" className="signin-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}
