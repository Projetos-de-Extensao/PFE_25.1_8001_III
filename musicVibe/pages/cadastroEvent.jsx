import React, { useState } from "react";
import "./Cadastro.css";

export default function CadastroEvent({ onEventAdded }) {
  const [form, setForm] = useState({
    nome: "",
    dataEvento: "",
    estado: "",
    cidade: "",
    cpfcnpj: "",
    horaInicio: "",
    horaFim: "",
    descricao: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.nome || !form.dataEvento || !form.estado || !form.cidade || !form.cpfcnpj || !form.horaInicio || !form.horaFim || !form.descricao)
      return "Todos os campos são obrigatórios.";
    if (form.horaFim <= form.horaInicio)
      return "Hora de término deve ser posterior à hora de início.";
    return "";
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setError("");
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    try {
      // Simulação de cadastro
      setTimeout(() => {
        setMsg("Evento cadastrado com sucesso!");
        setForm({
          nome: "",
          dataEvento: "",
          estado: "",
          cidade: "",
          cpfcnpj: "",
          horaInicio: "",
          horaFim: "",
          descricao: "",
        });
        setLoading(false);
        if (onEventAdded) onEventAdded();
      }, 1000);
    } catch {
      setError("Erro ao cadastrar evento.");
      setLoading(false);
    }
  };

  return (
    <section className="cadastro-evento-section">
      <form className="cadastro-evento-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="cadastro-evento-title">Cadastro do evento</h2>
        <div className="form-row">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite o nome da clínica"
            value={form.nome}
            onChange={handleChange}
            className="input-full"
          />
        </div>
        <div className="form-row">
          <label htmlFor="dataEvento" className="form-label">Datas do evento</label>
          <input
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="Selecione as datas"
            value={form.dataEvento}
            onChange={handleChange}
            className="input-full"
          />
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="cpfcnpj" className="form-label">CPF/CNPJ</label>
            <input
              type="text"
              id="cpfcnpj"
              name="cpfcnpj"
              placeholder="Digite o CPF/CNPJ"
              value={form.cpfcnpj}
              onChange={handleChange}
              className="input-full"
            />
          </div>
          <div className="form-col">
            <label htmlFor="estado" className="form-label">Estado</label>
            <input
              type="text"
              id="estado"
              name="estado"
              placeholder="Digite o CPF/CNPJ"
              value={form.estado}
              onChange={handleChange}
              className="input-full"
            />
          </div>
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              placeholder="Selecione sua uf"
              value={form.cidade}
              onChange={handleChange}
              className="input-full"
            />
          </div>
          <div className="form-col">
            <label htmlFor="horaInicio" className="form-label">Hora de início</label>
            <input
              type="time"
              id="horaInicio"
              name="horaInicio"
              placeholder="Digite o horário"
              value={form.horaInicio}
              onChange={handleChange}
              className="input-full"
            />
          </div>
          <div className="form-col">
            <label htmlFor="horaFim" className="form-label">Hora de termino</label>
            <input
              type="time"
              id="horaFim"
              name="horaFim"
              placeholder="Digite o horário"
              value={form.horaFim}
              onChange={handleChange}
              className="input-full"
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Digite o nome da clínica"
            value={form.descricao}
            onChange={handleChange}
            className="input-full"
            style={{ minHeight: 220 }}
          />
        </div>
        <div className="form-row center">
          <button type="submit" className="btn-avancar" disabled={loading}>
            {loading ? "Cadastrando..." : "Avançar"}
          </button>
        </div>
        {msg && <div style={{ color: "green", marginTop: 8 }}>{msg}</div>}
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      </form>
    </section>
  );
}
