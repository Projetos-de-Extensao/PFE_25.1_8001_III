import React from "react";
import "./carrinho.css"; 

function Carrinho() {
  return (
    <main className="carrinho-main">
      <section className="carrinho-lista">
        <h2 className="carrinho-titulo">Ingressos</h2>
        <div className="carrinho-item">
          <img src="src/assets/photos/eventPhotos/idioShow.png" alt="Evento 1" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">13 Ago<br />Dom • 10:00</div>
            <div className="carrinho-nome">
              <strong>Elements Music and Arts Festival – Domingo<br />Pocono Raceway</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pague em até 12x</span>
              <span className="carrinho-preco">R$99,00</span>
              <img src="src/assets/icons/lock.svg" alt="Cadeado" className="carrinho-lock" />
            </div>
          </div>
        </div>
        <div className="carrinho-item">
          <img src="src/assets/photos/eventPhotos/beatifullMusic.png" alt="Evento 2" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">13 Ago<br />Dom • 11:00</div>
            <div className="carrinho-nome">
              <strong>Orange County Fair - Entrada<br />Orange County Fair and Event Center</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pague em até 12x</span>
              <span className="carrinho-preco">R$99,00</span>
              <img src="../src/assets/icons/lock.svg" alt="Cadeado" className="carrinho-lock" />
            </div>
          </div>
        </div>
        <div className="carrinho-item">
          <img src="src/assets/photos/eventPhotos/rapShow.png" alt="Evento 3" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">13 Ago<br />Dom • 11:00</div>
            <div className="carrinho-nome">
              <strong>Audien (Evento 21+)<br />AYU Dayclub</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pague em até 12x</span>
              <span className="carrinho-preco">R$99,00</span>
              <img src="../src/assets/icons/lock.svg" alt="Cadeado" className="carrinho-lock" />
            </div>
          </div>
        </div>
        <div className="carrinho-item">
          <img src="src/assets/photos/eventPhotos/rockMetalMusic.png" alt="Evento 4" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">13 Ago<br />Dom • 10:00</div>
            <div className="carrinho-nome">
              <strong>Elements Music and Arts Festival – Domingo<br />Pocono Raceway</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pague em até 12x</span>
              <span className="carrinho-preco">R$99,00</span>
              <img src="../src/assets/icons/lock.svg" alt="Cadeado" className="carrinho-lock" />
            </div>
          </div>
        </div>
      </section>
      <aside className="carrinho-resumo">
        <div className="carrinho-box">
          <div className="carrinho-resumo-linha">
            <span>Eventos (1)</span>
            <span>R$1.600,00</span>
          </div>
          <div className="carrinho-resumo-linha">
            <span>Ingressos (1)</span>
            <span>R$99,00</span>
          </div>
          <div className="carrinho-resumo-linha">
            <span>Produtos (1)</span>
            <span>R$97,50</span>
          </div>
          <div className="carrinho-resumo-linha">
            <span>Frete total</span>
            <span>R$10,00</span>
          </div>
          <div className="carrinho-resumo-subtotal">
            <span>Subtotal</span>
            <span className="carrinho-resumo-total">R$1.797,50</span>
          </div>
          <button className="carrinho-btn">Continuar para o pagamento</button>
        </div>
      </aside>
    </main>
  );
}

export default Carrinho;