import React, { useState } from "react";
import "./styles.css";

export default function CadastroEvent({ onEventAdded }) {
  const [form, setForm] = useState({
    nome: "",
    dataEvento: "",
    estado: "",
    cidade: "",
    cep: "",
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
    if (
      !form.nome ||
      !form.dataEvento ||
      !form.estado ||
      !form.cidade ||
      !form.cep ||
      !form.horaInicio ||
      !form.horaFim ||
      !form.descricao
    ) return "Todos os campos são obrigatórios.";
    if (!/^\d{8}$/.test(form.cep)) return "CEP deve conter 8 dígitos.";
    if (form.horaFim <= form.horaInicio) return "Hora de término deve ser posterior à hora de início.";
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
      const res = await fetch("/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erro ao cadastrar evento.");
      setMsg("Evento cadastrado com sucesso!");
      setForm({
        nome: "",
        dataEvento: "",
        estado: "",
        cidade: "",
        cep: "",
        horaInicio: "",
        horaFim: "",
        descricao: "",
      });
      if (onEventAdded) onEventAdded();
    } catch {
      setError("Erro ao cadastrar evento.");
    }
    setLoading(false);
  };

  return (
    <section className="cadastro-evento-section">
      <form className="cadastro-evento-form" onSubmit={handleSubmit}>
        <h2 className="cadastro-evento-title">Cadastro do evento</h2>
        <div className="form-row">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} className="input-full" />
        </div>
        <div className="form-row">
          <label htmlFor="dataEvento" className="form-label">Data do evento</label>
          <input type="date" id="dataEvento" name="dataEvento" value={form.dataEvento} onChange={handleChange} />
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="estado" className="form-label">Estado</label>
            <input type="text" id="estado" name="estado" value={form.estado} onChange={handleChange} />
          </div>
          <div className="form-col">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input type="text" id="cidade" name="cidade" value={form.cidade} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="cep" className="form-label">CEP</label>
          <input type="number" id="cep" name="cep" value={form.cep} onChange={handleChange} />
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="horaInicio" className="form-label">Hora de início</label>
            <input type="time" id="horaInicio" name="horaInicio" value={form.horaInicio} onChange={handleChange} />
          </div>
          <div className="form-col">
            <label htmlFor="horaFim" className="form-label">Hora de término</label>
            <input type="time" id="horaFim" name="horaFim" value={form.horaFim} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea id="descricao" name="descricao" value={form.descricao} onChange={handleChange}></textarea>
        </div>
        <div className="form-row center">
          <button type="submit" className="btn-avancar" disabled={loading}>Cadastrar Evento</button>
        </div>
        {msg && <div style={{ color: "green", marginTop: 8 }}>{msg}</div>}
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      </form>
    </section>
  );
}
