import React, { useState } from "react";
import "./user.css";

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
    </div>
  );
}
