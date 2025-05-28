import { useNavigate } from 'react-router-dom';
import "./Header.css";

function Header()  {
  const navigate = useNavigate();
  return (  
        <header>
            <div className="container">
                <div className="logo">
                    <img src="../src/assets/icons/logoMusicaVibe.svg" alt="Logo MusicVibe" />
                </div>
                <div className="header-right">
                    <nav className="nav">
                        <button className="nav-btn" onClick={() => navigate('/sobre')}>Sobre</button>
                        <button className="nav-btn" onClick={() => navigate('/pesquisa')}>Categorias</button>
                        <button className="nav-btn" onClick={() => navigate('/pesquisa')}>Em Alta</button>
                        <button className="nav-btn" onClick={() => navigate('/carrinho')}>Shows</button>
                    </nav>
                    <div className="auth-buttons">
                        <button className="btn" onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
                        <button className="btn btn-outline-login" onClick={() => navigate('/login')}>Entrar</button>
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <div className="container">
                    <input type="text" placeholder="Busque por Evento, Artista, Local..." />
                    <input type="text" placeholder="CEP ou Estado" />
                    <input type="date" />
                    <button className="btn" onClick={() => navigate('/pesquisa')}>Buscar</button>
                </div>
            </div>
        </header>
  )
};

export default Header;