import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../contexts/LoginContext";
import "./loginIn.css";

export default function LoginIn() {
  const navigate = useNavigate();
  const { user, logout } = useLogin();
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Go to user profile
  const goToProfile = () => {
    navigate('/user');
  };

  return (
    <div className="login-in-container">
      <div className="user-profile" onClick={toggleDropdown}>
        <div className="avatar-container">
          {/* You can replace this with any avatar image */}
          <img 
            src="./src/assets/icons/user-avatar.png" 
            alt="User Avatar" 
            className="user-avatar"
          />
        </div>
        <span className="user-name">{user?.name || "Jonh de Carvalho"}</span>
      </div>

      {showDropdown && (
        <div className="dropdown-menu">
          <button onClick={goToProfile} className="dropdown-item">
            Meu Perfil
          </button>
          <button onClick={handleLogout} className="dropdown-item">
            Sair
          </button>
        </div>
      )}

      {/* Invisible overlay to capture clicks outside dropdown */}
      {showDropdown && (
        <div 
          className="dropdown-overlay" 
          onClick={closeDropdown}
        ></div>
      )}
    </div>
  );
}
