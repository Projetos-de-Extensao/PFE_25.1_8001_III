import React, { useState } from "react";
import "./Cadastro.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro({ onUserAdded }) {
  const [form, setForm] = useState({
    nome: "",
    cpfcnpj: "",
    dataNascimento: "",
    email: "",
    estado: "",
    cidade: "",
    senha: "",
    senha2: "",
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
    if (!form.nome || !form.cpfcnpj || !form.dataNascimento || !form.email || !form.estado || !form.cidade || !form.senha || !form.senha2)
      return "Todos os campos são obrigatórios.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "E-mail inválido.";
    if (form.senha.length < 6)
      return "A senha deve ter pelo menos 6 caracteres.";
    if (form.senha !== form.senha2)
      return "As senhas não coincidem.";
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
        return;
      }
      setMsg("Cadastro realizado com sucesso!");
      setForm({
        nome: "",
        cpfcnpj: "",
        dataNascimento: "",
        email: "",
        estado: "",
        cidade: "",
        senha: "",
        senha2: "",
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
      <form className="cadastro-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="cadastro-title">Primeiro Pequeno Passo</h2>
        <div className="form-row">
          <label htmlFor="nome" className="label-azul">Nome</label>
          <input type="text" name="nome" id="nome" placeholder="Digite o nome da clínica" value={form.nome} onChange={handleChange} className="input-full" />
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="cpfcnpj" className="label-azul">CPF/CNPJ</label>
            <input type="text" name="cpfcnpj" id="cpfcnpj" placeholder="Digite o CPF/CNPJ" value={form.cpfcnpj} onChange={handleChange} className="input-full" />
          </div>
          <div className="form-col">
            <label htmlFor="estado" className="label-azul">Estado</label>
            <input type="text" name="estado" id="estado" placeholder="Digite o CPF/CNPJ" value={form.estado} onChange={handleChange} className="input-full" />
          </div>
        </div>
        <div className="form-row double">
          <div className="form-col">
            <label htmlFor="dataNascimento" className="label-azul">Data de nascimento/criação</label>
            <input type="date" name="dataNascimento" id="dataNascimento" placeholder="Selecione a data" value={form.dataNascimento} onChange={handleChange} className="input-full" />
          </div>
          <div className="form-col">
            <label htmlFor="cidade" className="label-azul">Cidade</label>
            <input type="text" name="cidade" id="cidade" placeholder="Selecione sua uf" value={form.cidade} onChange={handleChange} className="input-full" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="label-azul">Email</label>
          <input type="email" name="email" id="email" placeholder="Insira o endereço de e-mail para login" value={form.email} onChange={handleChange} className="input-full" />
        </div>
        <div className="form-row">
          <label htmlFor="senha" className="label-azul">Crie uma senha</label>
          <input type="password" name="senha" id="senha" placeholder="Digite sua senha" value={form.senha} onChange={handleChange} className="input-full" />
        </div>
        <div className="form-row">
          <label htmlFor="senha2" className="label-azul">Repita a senha</label>
          <input type="password" name="senha2" id="senha2" placeholder="Repita a senha anterior" value={form.senha2} onChange={handleChange} className="input-full" />
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
