import React, { useEffect, useState } from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";

const initialUser = {
  fullName: "João da Silva",
  email: "joao@email.com",
  password: "senha123",
  creditCard: "1234567812345678",
};

function maskCard(card) {
  return "**** **** **** " + card.slice(-4);
}

export default function UserProfile() {
  const [user, setUser] = useState(initialUser);
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [form, setForm] = useState(user);
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEdit = () => {
    setForm(user);
    setEditMode(true);
    setErrors({});
  };

  const handleCancel = () => {
    setEditMode(false);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Nome obrigatório";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "E-mail inválido";
    if (form.password.length < 6) errs.password = "Mínimo 6 caracteres";
    if (!/^\d{16}$/.test(form.creditCard)) errs.creditCard = "Cartão inválido";
    return errs;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setUser(form);
    setEditMode(false);
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/users");
      if (!res.ok) {
        const text = await res.text();
        console.error("Erro detalhado do backend (users):", text); // <-- debug
        throw new Error("Erro ao buscar usuários.");
      }
      const data = await res.json();
      setUsers(data);
      setMsg("");
    } catch (err) {
      setError("Erro ao buscar usuários.");
      console.error("Erro de conexão ou JS (users):", err); // <-- debug
    }
    setLoading(false);
  };

  const fetchEventos = async () => {
    try {
      const res = await fetch("/eventos");
      if (!res.ok) {
        const text = await res.text();
        console.error("Erro detalhado do backend (eventos):", text); // <-- debug
        throw new Error("Erro ao buscar eventos.");
      }
      const data = await res.json();
      setEventos(data);
    } catch (err) {
      // erro silencioso, pode adicionar setError se desejar
      console.error("Erro de conexão ou JS (eventos):", err); // <-- debug
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchEventos();
  }, []);

  return (
    <div className="user-profile-container">
      <h2>Perfil do Usuário</h2>
      <form className="user-form" onSubmit={handleSave} autoComplete="off">
        <div className="form-group">
          <label>Nome completo</label>
          <input
            type="text"
            name="fullName"
            value={editMode ? form.fullName : user.fullName}
            onChange={handleChange}
            readOnly={!editMode}
            className={errors.fullName ? "error" : ""}
          />
          {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={editMode ? form.email : user.email}
            onChange={handleChange}
            readOnly={!editMode}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Senha</label>
          <div className="input-with-btn">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={editMode ? form.password : user.password}
              onChange={handleChange}
              readOnly={!editMode}
              className={errors.password ? "error" : ""}
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? "Ocultar" : "Exibir"}
            </button>
          </div>
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Número do cartão</label>
          <div className="input-with-btn">
            <input
              type={showCard ? "text" : "password"}
              name="creditCard"
              value={
                editMode
                  ? form.creditCard
                  : showCard
                  ? user.creditCard
                  : maskCard(user.creditCard)
              }
              onChange={handleChange}
              readOnly={!editMode}
              className={errors.creditCard ? "error" : ""}
              maxLength={16}
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowCard((v) => !v)}
              tabIndex={-1}
            >
              {showCard ? "Ocultar" : "Exibir"}
            </button>
          </div>
          {errors.creditCard && <span className="error-msg">{errors.creditCard}</span>}
        </div>
        <div className="btn-group">
          {!editMode ? (
            <button type="button" className="edit-btn" onClick={handleEdit}>
              Editar
            </button>
          ) : (
            <>
              <button type="submit" className="save-btn">
                Salvar
              </button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <button
          type="button"
          className="edit-btn"
          onClick={() => navigate("/CadastroEvent")}
        >
          Ir para Cadastro de Evento
        </button>
      </div>
      <h2 style={{ marginTop: 48 }}>Usuários Cadastrados</h2>
      {loading && <div>Carregando...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {msg && <div style={{ color: "green" }}>{msg}</div>}
      <table style={{ width: "100%", marginTop: 16, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>Nome</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>E-mail</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Data Nascimento</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Estado</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.nome}</td>
              <td>{u.email}</td>
              <td>{u.dataNascimento}</td>
              <td>{u.estado}</td>
              <td>{u.cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Nova seção de eventos cadastrados */}
      <h2 style={{ marginTop: 48 }}>Eventos Cadastrados</h2>
      <table style={{ width: "100%", marginTop: 16, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>Nome</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Data</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Hora Início</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Hora Fim</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Cidade</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Estado</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>CEP</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((ev, i) => (
            <tr key={i}>
              <td>{ev.nome}</td>
              <td>{ev.dataEvento}</td>
              <td>{ev.horaInicio}</td>
              <td>{ev.horaFim}</td>
              <td>{ev.cidade}</td>
              <td>{ev.estado}</td>
              <td>{ev.cep}</td>
              <td>{ev.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
