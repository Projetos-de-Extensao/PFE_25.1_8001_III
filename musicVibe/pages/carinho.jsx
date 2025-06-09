import React from "react";

function Carinho() {
  return (
    <main className="carrinho-main">
      <section className="carrinho-lista">
        <h2 className="carrinho-titulo">Tickets</h2>
        <div className="carrinho-item">
          <img src="src/evento1.jpg" alt="Event 1" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">Aug 13<br />Sun • 10:00am</div>
            <div className="carrinho-nome">
              <strong>Elements Music and Arts Festival – Sunday<br />Pocono Raceway</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pay in up to 12x</span>
              <span className="carrinho-preco">$99.00</span>
              <img src="src/lock.svg" alt="Lock" className="carrinho-lock" />
            </div>
          </div>
        </div>
        <div className="carrinho-item">
          <img src="src/evento2.jpg" alt="Event 2" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">Aug 13<br />Sun • 11:00am</div>
            <div className="carrinho-nome">
              <strong>Orange County Fair - Admission<br />Orange County Fair and Event Center</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pay in up to 12x</span>
              <span className="carrinho-preco">$99.00</span>
              <img src="src/lock.svg" alt="Lock" className="carrinho-lock" />
            </div>
          </div>
        </div>
        <div className="carrinho-item">
          <img src="src/evento3.jpg" alt="Event 3" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">Aug 13<br />Sun • 11:00am</div>
            <div className="carrinho-nome">
              <strong>Audien (21+ Event)<br />AYU Dayclub</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pay in up to 12x</span>
              <span className="carrinho-preco">$99.00</span>
              <img src="src/lock.svg" alt="Lock" className="carrinho-lock" />
            </div>
          </div>
        </div>
        <div className="carrinho-item">
          <img src="src/evento1.jpg" alt="Event 4" className="carrinho-img" />
          <div className="carrinho-info">
            <div className="carrinho-data">Aug 13<br />Sun • 10:00am</div>
            <div className="carrinho-nome">
              <strong>Elements Music and Arts Festival – Sunday<br />Pocono Raceway</strong>
            </div>
            <div className="carrinho-pagamento">
              <span className="carrinho-parcelamento">Pay in up to 12x</span>
              <span className="carrinho-preco">$99.00</span>
              <img src="src/lock.svg" alt="Lock" className="carrinho-lock" />
            </div>
          </div>
        </div>
      </section>
      <aside className="carrinho-resumo">
        <div className="carrinho-box">
          <div className="carrinho-resumo-linha">
            <span>Events (1)</span>
            <span>$1,600.00</span>
          </div>
          <div className="carrinho-resumo-linha">
            <span>Tickets (1)</span>
            <span>$99.00</span>
          </div>
          <div className="carrinho-resumo-linha">
            <span>Products (1)</span>
            <span>$97.50</span>
          </div>
          <div className="carrinho-resumo-linha">
            <span>Total shipping</span>
            <span>$10.00</span>
          </div>
          <div className="carrinho-resumo-subtotal">
            <span>Subtotal</span>
            <span className="carrinho-resumo-total">$1,797.50</span>
          </div>
          <button className="carrinho-btn">Continue to payment</button>
        </div>
      </aside>
    </main>
  );
}

export default Carinho;