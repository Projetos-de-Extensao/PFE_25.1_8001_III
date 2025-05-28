import React, { useState } from "react";
import "./cadastro.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro({ onUserAdded }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    dataNascimento: "",
    estado: "",
    cidade: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.nome || !form.email || !form.senha || !form.dataNascimento || !form.estado || !form.cidade)
      return "Todos os campos são obrigatórios.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "E-mail inválido.";
    if (form.senha.length < 6)
      return "A senha deve ter pelo menos 6 caracteres.";
    return "";
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setError("");
    const err = validate();
    if (err) {
      setError(err);
      navigate("/"); 
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Erro detalhado do backend:", text);
        setError(`Erro ao cadastrar. Status: ${res.status} - ${text}`);
        setLoading(false);
        navigate("/"); 
        return;
      }
      setMsg("Cadastro realizado com sucesso!");
      setForm({
        nome: "",
        email: "",
        senha: "",
        dataNascimento: "",
        estado: "",
        cidade: "",
      });
      if (onUserAdded) onUserAdded();
      navigate("/"); 
    } catch (err) {
      setError("Erro ao cadastrar. Verifique sua conexão ou o backend.");
      console.error("Erro de conexão ou JS:", err);
      navigate("/"); 
    }
    setLoading(false);
  };

  return (
    <section className="cadastro-section">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>
        <div className="form-row">
          <label htmlFor="nome" className="label-azul">Nome</label>
          <input type="text" name="nome" id="nome" value={form.nome} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="label-azul">E-mail</label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="senha" className="label-azul">Senha</label>
          <input type="password" name="senha" id="senha" value={form.senha} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="dataNascimento" className="label-azul">Data de Nascimento</label>
          <input type="date" name="dataNascimento" id="dataNascimento" value={form.dataNascimento} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="estado" className="label-azul">Estado</label>
          <input type="text" name="estado" id="estado" value={form.estado} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="cidade" className="label-azul">Cidade</label>
          <input type="text" name="cidade" id="cidade" value={form.cidade} onChange={handleChange} />
        </div>
        <div className="form-row center">
          <button type="submit" className="btn-avancar" disabled={loading}>Cadastrar</button>
        </div>
        {msg && <div style={{ color: "green", marginTop: 8 }}>{msg}</div>}
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      </form>
    </section>
  );
}
