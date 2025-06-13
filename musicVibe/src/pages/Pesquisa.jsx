import React, { useState, useEffect } from "react";
import List from "../componentes/List/List";
import "./pesquisa.css";

// Map of category values to display names
const categoryDisplayNames = {
  "Classic": "Clássico",
  "Rock": "Rock",
  "Eletronic": "Eletrônica",
  "Pop": "Pop"
};

function Pesquisa() {
  const [filters, setFilters] = useState({
    dateRange: "",
    category: "",
    bairro: "",
    name: ""
  });

  // Função para carregar filtros do localStorage
  const loadFilters = () => {
    const savedFilters = localStorage.getItem("app-filters");
    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters);
      
      // Convert old format to new format if needed
      if (parsedFilters.dateStart && !parsedFilters.dateRange) {
        parsedFilters.dateRange = parsedFilters.dateStart;
      }
      
      setFilters(parsedFilters);
    }
  };

  useEffect(() => {
    loadFilters();

    setTimeout(() => {
      const el = document.getElementById("list-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);

    // Adiciona listener para pesquisas subsequentes
    const handler = () => loadFilters();
    window.addEventListener("filters-updated", handler);
    return () => window.removeEventListener("filters-updated", handler);
  }, []);

  return (
    <section id="list-section" className="top-picks">
      <div className="container">
        <div className="top-picks-filter">
          <h2>Principais eventos Perto de Você</h2>
          <div className="active-filters">
            {filters.dateRange && (
              <div className="filter-tag">
                Data: {new Date(filters.dateRange).toLocaleDateString('pt-BR')}
              </div>
            )}
            {filters.category && (
              <div className="filter-tag">
                Categoria: {categoryDisplayNames[filters.category] || filters.category}
              </div>
            )}
            {filters.bairro && (
              <div className="filter-tag">
                Bairro: {filters.bairro}
              </div>
            )}
          </div>
       
        </div>
        
        {/* Adiciona o componente List com os filtros */}
        <List filters={filters} />
      </div>
    </section>
  );
}

export default Pesquisa;