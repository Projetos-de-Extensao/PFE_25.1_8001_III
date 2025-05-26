
function Footer() { 
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="social">
                        <a href="#"><img src="src/logoInstragram.png" alt="Instagram" /></a>
                        <a href="#"><img src="src/logoFacebook.png" alt="Facebook" /></a>
                    </div>
                    <div className="links">
                        <a href="#">Início</a>
                        <a href="#">Sobre Nós</a>
                        <a href="#">Eventos em Alta</a>
                        <a href="#">Categorias</a>
                    </div>
                    <div className="contact">
                        <p><img src="src/email.svg" alt="Email" /> suporte@musicvibe.com</p>
                        <p><img src="src/Icon awesome-phone-alt.svg" alt="Telefone" /> +21 123 456</p>
                        <p><img src="src/Icon calendar.svg" alt="Dias de Funcionamento" /> Segunda - Domingo</p>
                        <p><img src="src/Icon feather-clock.svg" alt="Horário" /> 8:00 AM - 10:00 PM (BRT)</p>
                        <p><img src="src/map-pin.svg" alt="Endereço" /> Brasil</p>
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