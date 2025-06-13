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

// Event categories
const categorias = [
  { value: "Classic", label: "Clássico" },
  { value: "Rock", label: "Rock" },
  { value: "Eletronic", label: "Eletrônica" },
  { value: "Pop", label: "Pop" }
];

// Popular cities from all states for direct selection
const cidadesPopulares = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Fortaleza",
  "Brasília", "Curitiba", "Recife", "Porto Alegre", "Manaus", "Belém",
  "Goiânia", "Guarulhos", "Campinas", "São Luís", "Natal", "Maceió"
];

function CadastroEvent() {
  const [formData, setFormData] = useState({
    nome: "",
    data: "",
    estado: "",
    cidade: "",
    bairro: "",
    horaInicio: "",
    horaFim: "",
    descricao: "",
    imagem: null,
    banner: null,
    categoria: ""
  });
  
  const [previewImage, setPreviewImage] = useState(null);
  const [previewBanner, setPreviewBanner] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    
    if (file) {
      setFormData(prev => ({
        ...prev,
        [name]: file
      }));
      
      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === 'imagem') {
          setPreviewImage(reader.result);
        } else if (name === 'banner') {
          setPreviewBanner(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do evento:", formData);
    alert("Evento cadastrado com sucesso!");
  };

  return (
    <section className="cadastro-evento-section">
      <form className="cadastro-evento-form" onSubmit={handleSubmit}>
        <h2 className="cadastro-evento-title">Cadastro do evento</h2>
        <div className="form-row">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do evento" 
            className="input-full" 
          />
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="data" className="form-label">Datas do evento</label>
            <input 
              type="date" 
              id="data" 
              name="data" 
              value={formData.data}
              onChange={handleChange}
              placeholder="Selecione as datas" 
            />
          </div>
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="estado" className="form-label">Estado</label>
            <select 
              id="estado" 
              name="estado" 
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
          <div className="form-col">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input 
              type="text" 
              id="cidade" 
              name="cidade" 
              list="cidades-list"
              value={formData.cidade}
              onChange={handleChange}
              placeholder="Digite a cidade" 
            />
            <datalist id="cidades-list">
              {cidadesPopulares.map(cidade => (
                <option key={cidade} value={cidade} />
              ))}
            </datalist>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="bairro" className="form-label">Bairro</label>
          <input 
            type="text" 
            id="bairro" 
            name="bairro" 
            value={formData.bairro}
            onChange={handleChange}
            placeholder="Digite o bairro" 
          />
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="horaInicio" className="form-label">Hora de início</label>
            <input 
              type="time" 
              id="horaInicio" 
              name="horaInicio" 
              value={formData.horaInicio}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="horaFim" className="form-label">Hora de término</label>
            <input 
              type="time" 
              id="horaFim" 
              name="horaFim" 
              value={formData.horaFim}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="categoria" className="form-label">Categoria</label>
          <select 
            id="categoria" 
            name="categoria" 
            value={formData.categoria}
            onChange={handleChange}
            required
          >
            <option value="">Selecione a categoria</option>
            {categorias.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea 
            id="descricao" 
            name="descricao" 
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descrição do evento"
            rows="5"
          ></textarea>
        </div>
        
        <div className="form-row">
          <label htmlFor="banner" className="form-label">Banner do evento</label>
          <input 
            type="file" 
            id="banner" 
            name="banner" 
            accept="image/*"
            onChange={handleFileChange}
          />
          <span className="file-hint">Selecione uma imagem para o banner (recomendado: 1200x400px)</span>
          
          {previewBanner && (
            <div className="image-preview-container banner-preview">
              <img 
                src={previewBanner} 
                alt="Preview do banner" 
                className="image-preview" 
              />
              {formData.banner && (
                <div className="image-info">
                  <span>{formData.banner.name.substring(0, 20)}{formData.banner.name.length > 20 ? '...' : ''}</span>
                  <span>{Math.round(formData.banner.size / 1024)} KB</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="form-row">
          <label htmlFor="imagem" className="form-label">Imagem do evento</label>
          <input 
            type="file" 
            id="imagem" 
            name="imagem" 
            accept="image/*"
            onChange={handleFileChange}
          />
          <span className="file-hint">Selecione uma imagem principal para o evento (recomendado: quadrada)</span>
          
          {previewImage && (
            <div className="image-preview-container">
              <img 
                src={previewImage} 
                alt="Preview da imagem" 
                className="image-preview" 
              />
              {formData.imagem && (
                <div className="image-info">
                  <span>{formData.imagem.name.substring(0, 20)}{formData.imagem.name.length > 20 ? '...' : ''}</span>
                  <span>{Math.round(formData.imagem.size / 1024)} KB</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="form-row center">
          <button type="submit" className="btn-avancar">Avançar</button>
        </div>
      </form>
    </section>
  );
}

export default CadastroEvent;
