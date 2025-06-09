import React from "react";
import "./styles.css";
import List from "../src/componentes/List/List";


function Pesquisa() {
  return (
    <section className="top-picks">
      <div className="container">
        <div className="top-picks-filter">
          <h2>Principais eventos Perto de Você</h2>
          <button className="btn btn-outline">
            <img src="src/filter.png" alt="" /> Filtrar
          </button>
        </div>
        <List/>
      </div>
    </section>
  );
}

export default Pesquisa;