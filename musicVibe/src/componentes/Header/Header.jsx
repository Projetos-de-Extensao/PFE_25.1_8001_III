import React from "react";

const Header = () => {
    
        <header>
            <div className="container">
                <div className="logo">
                    <img src="src/logoMusicaVibe.svg" alt="Logo MusicVibe" />
                </div>
                <div className="header-right">
                    <nav className="nav">
                        <a href="#">Sobre Nós</a>
                        <a href="#">Cartegorias</a>
                        <a href="#">Em Alta</a>
                        <a href="#">Shows</a>
                    </nav>
                    <div className="auth-buttons">
                        <button className="btn">Cadastrar-se</button>
                        <button className="btn btn-outline-login">Entrar</button>
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <div className="container">
                    <input type="text" placeholder="Busque por Evento, Artista, Local..." />
                    <input type="text" placeholder="CEP ou Estado" />
                    <input type="date" />
                    <button className="btn">Buscar</button>
                </div>
            </div>
        </header>
    
};

export default Header;