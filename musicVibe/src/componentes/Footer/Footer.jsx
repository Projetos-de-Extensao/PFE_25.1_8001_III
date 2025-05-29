import { useNavigate } from 'react-router-dom';
import "./Footer.css";

function Footer() { 
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="social">
                        <a href="https://instagram.com/musicvibe" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/icons/logoInstragram.png" alt="Instagram" />
                        </a>
                        <a href="https://facebook.com/musicvibe" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/icons/logoFacebook.png" alt="Facebook" />
                        </a>
                    </div>
                    <div className="links">
                        <a href="#" onClick={() => navigate('/')}>Início</a>
                        <a href="#" onClick={() => navigate('/sobre')}>Sobre Nós</a>
                        <a href="#" onClick={() => navigate('/pesquisa')}>Eventos em Alta</a>
                        <a href="#" onClick={() => navigate('/cadastro-evento')}>Categorias</a>
                    </div>
                    <div className="contact">
                        <p><img src="../../../assets/icons/email.svg" alt="Email" /> suporte@musicvibe.com</p>
                        <p><img src="/assets/icons/Icon-awesome-phone-alt.svg" alt="Telefone" /> +21 123 456</p>
                        <p><img src="/assets/icons/Icon-calendar.svg" alt="Dias de Funcionamento" /> Segunda - Domingo</p>
                        <p><img src="/assets/icons/Icon-feather-clock.svg" alt="Horário" /> 8:00 AM - 10:00 PM (BRT)</p>
                        <p><img src="/assets/icons/map-pin.svg" alt="Endereço" /> Brasil</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 MusicVibe. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;