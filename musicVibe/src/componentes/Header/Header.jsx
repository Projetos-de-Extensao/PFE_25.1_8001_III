import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "./Header.css";
import eventosData from "../../eventos.json";
import { useLogin } from '../../contexts/LoginContext';
import LoginIn from '../loginIn/LoginIn';

const categorias = [
  { value: "", label: "Categoria" },
  { value: "Classic", label: "Clássico" },
  { value: "Rock", label: "Rock" },
  { value: "Eletronic", label: "Eletrônica" },
  { value: "Pop", label: "Pop" },
];

function getBairrosUnicos() {
  const bairros = eventosData.eventos.map(ev => ev.bairro);
  return Array.from(new Set(bairros)).sort();
}

function Header({ onSearch })  {
  const navigate = useNavigate();
  const { openLoginModal, isLoggedIn } = useLogin();
  const [filters, setFilters] = useState({
    dateRange: "",
    category: "",
    bairro: "",
    name: ""
  });
  const [error, setError] = useState("");
  const [customBairro, setCustomBairro] = useState(""); 
  const bairros = getBairrosUnicos();

  const handleChange = e => {
    const { name, value } = e.target;
    setFilters(f => ({ ...f, [name]: value }));
    if (name === "bairro") setCustomBairro(value);
  };

  const handleCustomBairro = e => {
    setCustomBairro(e.target.value);
    setFilters(f => ({ ...f, bairro: e.target.value }));
  };

  const handleSearch = e => {
    e.preventDefault();
    setError("");
    if (onSearch) onSearch(filters);
    localStorage.setItem("app-filters", JSON.stringify(filters));
    navigate('/pesquisa');
  };

  return (  
    <header>
        <div className="container">
            <button
              className="logo"
              onClick={() => navigate('/')}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              aria-label="Ir para a página inicial"
            >
                <img src="./src/assets/icons/logoMusicaVibe.svg" alt="Logo MusicVibe" />
            </button>
            <div className="header-right">
                <nav className="nav">
                    <button className="nav-btn" onClick={() => navigate('/sobre')}>Sobre</button>
                    <button
                      className="nav-btn"
                      onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                          const el = document.getElementById('category-list');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      Categorias
                    </button>
                    <button className="nav-btn" onClick={() => navigate('/pesquisa')}>Em Alta</button>
                </nav>
                {isLoggedIn ? (
                  <LoginIn />
                ) : (
                  <div className="auth-buttons">
                    <button className="btn" onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
                    <button className="btn btn-outline-login" onClick={openLoginModal}>Entrar</button>
                  </div>
                )}
            </div>
        </div>
        <form className="search-bar" onSubmit={handleSearch}>
            <div className="container">
                <input
                    type="text"
                    name="name"
                    placeholder="Busque por Evento, Artista, Local..."
                    value={filters.name}
                    onChange={handleChange}
                />
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                    className="category-select"
                >
                    {categorias.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <div style={{ display: "flex", gap: 8 }}>
                  <select
                      name="bairro"
                      value={bairros.includes(customBairro) ? customBairro : ""}
                      onChange={handleChange}
                      style={{ minWidth: 120 }}
                  >
                      <option value="">Bairro</option>
                      {bairros.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                      <option value="">Outro...</option>
                  </select>
                  {customBairro && !bairros.includes(customBairro) && (
                    <input
                      type="text"
                      name="bairro"
                      placeholder="Digite o bairro"
                      value={customBairro}
                      onChange={handleCustomBairro}
                      style={{ minWidth: 120 }}
                    />
                  )}
                </div>
                <div className="date-range-container">
                  <input
                      type="text"
                      name="dateRange"
                      value={filters.dateRange}
                      onChange={handleChange}
                      style={{ minWidth: 180 }}
                      placeholder="Selecione o período"
                      className="date-range-input"
                      onFocus={(e) => e.target.type = "date"}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                  />
                </div>
                <button className="btn" type="submit">Buscar</button>
            </div>
            {error && <div style={{ color: "red", textAlign: "center", width: "100%" }}>{error}</div>}
        </form>
    </header>
  )
};

export default Header;