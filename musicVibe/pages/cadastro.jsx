import React, { useState } from "react";
import "./Cadastro.css";

// Array of Brazilian states (UFs)
const estadosBrasil = [
  { uf: "AC", nome: "Acre" },
  { uf: "AL", nome: "Alagoas" },
  { uf: "AP", nome: "Amapá" },
  { uf: "AM", nome: "Amazonas" },
  { uf: "BA", nome: "Bahia" },
  { uf: "CE", nome: "Ceará" },
  { uf: "DF", nome: "Distrito Federal" },
  { uf: "ES", nome: "Espírito Santo" },
  { uf: "GO", nome: "Goiás" },
  { uf: "MA", nome: "Maranhão" },
  { uf: "MT", nome: "Mato Grosso" },
  { uf: "MS", nome: "Mato Grosso do Sul" },
  { uf: "MG", nome: "Minas Gerais" },
  { uf: "PA", nome: "Pará" },
  { uf: "PB", nome: "Paraíba" },
  { uf: "PR", nome: "Paraná" },
  { uf: "PE", nome: "Pernambuco" },
  { uf: "PI", nome: "Piauí" },
  { uf: "RJ", nome: "Rio de Janeiro" },
  { uf: "RN", nome: "Rio Grande do Norte" },
  { uf: "RS", nome: "Rio Grande do Sul" },
  { uf: "RO", nome: "Rondônia" },
  { uf: "RR", nome: "Roraima" },
  { uf: "SC", nome: "Santa Catarina" },
  { uf: "SP", nome: "São Paulo" },
  { uf: "SE", nome: "Sergipe" },
  { uf: "TO", nome: "Tocantins" }
];

// Popular cities from all states for direct selection
const cidadesPopulares = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Fortaleza",
  "Brasília", "Curitiba", "Recife", "Porto Alegre", "Manaus", "Belém",
  "Goiânia", "Guarulhos", "Campinas", "São Luís", "Natal", "Maceió"
];

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf_cnpj: "",
    estado: "",
    data_nascimento: "",
    cidade: "",
    email: "",
    senha: "",
    repita_senha: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do cadastro:", formData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <section className="cadastro-section">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2 className="cadastro-title">Primeiro Pequeno Passo</h2>
        <div className="form-row">
          <label htmlFor="nome" className="label-azul">Nome</label>
          <input 
            type="text" 
            placeholder="Digite seu nome completo" 
            name="nome" 
            id="nome" 
            className="full-width"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="cpf_cnpj" className="label-azul">CPF/CNPJ</label>
            <input 
              type="text" 
              placeholder="Digite o CPF/CNPJ" 
              name="cpf_cnpj" 
              id="cpf_cnpj"
              value={formData.cpf_cnpj}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="estado" className="label-azul">Estado</label>
            <select 
              name="estado" 
              id="estado" 
              value={formData.estado}
              onChange={handleChange}
            >
              <option value="">Selecione o estado</option>
              {estadosBrasil.map(estado => (
                <option key={estado.uf} value={estado.uf}>
                  {estado.uf} - {estado.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="data_nascimento" className="label-azul">Data de nascimento/criação</label>
            <input 
              type="date" 
              name="data_nascimento" 
              id="data_nascimento" 
              placeholder="Selecione a data"
              value={formData.data_nascimento}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="cidade" className="label-azul">Cidade</label>
            <input 
              type="text" 
              placeholder="Digite sua cidade" 
              name="cidade" 
              id="cidade"
              list="cidades-list"
              value={formData.cidade}
              onChange={handleChange}
            />
            <datalist id="cidades-list">
              {cidadesPopulares.map(cidade => (
                <option key={cidade} value={cidade} />
              ))}
            </datalist>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="label-azul">Email</label>
          <input 
            type="email" 
            placeholder="Insira o endereço de e-mail para login" 
            name="email" 
            id="email" 
            className="full-width"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="senha" className="label-azul">Crie uma senha</label>
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            name="senha" 
            id="senha" 
            className="full-width"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="repita_senha" className="label-azul">Repita a senha</label>
          <input 
            type="password" 
            placeholder="Repita a senha anterior" 
            name="repita_senha" 
            id="repita_senha" 
            className="full-width"
            value={formData.repita_senha}
            onChange={handleChange}
          />
        </div>
        <div className="form-row center">
          <button type="submit" className="btn-avancar">Avançar</button>
        </div>
      </form>
    </section>
  );
}

export default Cadastro;
