import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginProvider } from './contexts/LoginContext';
import Login from './componentes/Login/Login';
import { useLogin } from './contexts/LoginContext';
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer.jsx'
import './variables.css'; // Import global CSS variables

import Home from '../pages/Home.jsx'
import Sobre from '../pages/Sobre.jsx'
import Cadastro from '../pages/Cadastro.jsx'
import Cadastroevent from '../pages/CadastroEvent.jsx'
import Carrinho from '../pages/Carrinho.jsx'
import Pesquisa from '../pages/Pesquisa.jsx'
import User from '../pages/User.jsx'
import Event from '../pages/Event.jsx'

// Componente wrapper para incluir o modal de login quando necessário
function AppContent() {
  const { isLoginModalOpen } = useLogin();
  
  return (
    <>
      {isLoginModalOpen && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroevent" element={<Cadastroevent />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/event" element={<Event />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <LoginProvider>
        <Header />
        <AppContent />
        <Footer />
      </LoginProvider>
    </Router>
  );
}

export default App;
