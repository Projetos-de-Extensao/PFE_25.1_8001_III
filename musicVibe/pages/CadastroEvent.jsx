import React from "react";
import "./styles.css";

function CadastroEvent() {
  return (
    <section className="cadastro-evento-section">
      <form className="cadastro-evento-form">
        <h2 className="cadastro-evento-title">Cadastro do evento</h2>
        <div className="form-row">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite o nome da clínica" className="input-full" />
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="data" className="form-label">Datas do evento</label>
            <input type="text" id="data" name="data" placeholder="Selecione as datas" />
          </div>
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="estado" className="form-label">Estado</label>
            <input type="text" id="estado" name="estado" placeholder="Digite o CPF/CNPJ" />
          </div>
          <div className="form-col">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input type="text" id="cidade" name="cidade" placeholder="Selecione sua uf" />
          </div>
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="hora-inicio" className="form-label">Hora de início</label>
            <input type="text" id="hora-inicio" name="hora-inicio" placeholder="Digite o horário" />
          </div>
          <div className="form-col">
            <label htmlFor="hora-fim" className="form-label">Hora de termino</label>
            <input type="text" id="hora-fim" name="hora-fim" placeholder="Digite o horário" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea id="descricao" name="descricao" placeholder="Digite o nome da clínica"></textarea>
        </div>
        <div className="form-row center">
          <button type="submit" className="btn-avancar">Avançar</button>
        </div>
      </form>
    </section>
  );
}

export default CadastroEvent;
