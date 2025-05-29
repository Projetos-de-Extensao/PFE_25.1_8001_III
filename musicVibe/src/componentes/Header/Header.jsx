import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "./Header.css";

const categorias = [
  { value: "", label: "Categoria" },
  { value: "Classic", label: "Classic" },
  { value: "Rock", label: "Rock" },
  { value: "Eletrônica", label: "Eletrônica" },
  { value: "Pop", label: "Pop" },
];

function Header({ onSearch })  {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    date: "",
    category: "",
    cep: "",
    name: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFilters(f => ({ ...f, [name]: value }));
  };

  const handleSearch = e => {
    e.preventDefault();
    setError("");
    if (filters.cep && filters.cep.length !== 8) {
      setError("CEP deve ter 8 dígitos.");
      return;
    }
    if (onSearch) onSearch(filters);
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
                    <img src="../src/assets/icons/logoMusicaVibe.svg" alt="Logo MusicVibe" />
                </button>
                <div className="header-right">
                    <nav className="nav">
                        <button className="nav-btn" onClick={() => navigate('/sobre')}>Sobre</button>
                        <button className="nav-btn" onClick={() => navigate('/pesquisa')}>Categorias</button>
                        <button className="nav-btn" onClick={() => navigate('/pesquisa')}>Em Alta</button>
                    </nav>
                    <div className="auth-buttons">
                        <button className="btn" onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
                        <button className="btn btn-outline-login" onClick={() => navigate('/user')}>Entrar</button>
                    </div>
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
                    >
                        {categorias.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        name="cep"
                        placeholder="CEP"
                        value={filters.cep}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={handleChange}
                    />
                    <button className="btn" type="submit">Buscar</button>
                </div>
                {error && <div style={{ color: "red", textAlign: "center", width: "100%" }}>{error}</div>}
            </form>
        </header>
  )
};

export default Header;