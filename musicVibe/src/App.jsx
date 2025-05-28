import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer.jsx'

import Home from '../pages/Home.jsx'
import Sobre from '../pages/Sobre.jsx'
import Cadastro from '../pages/Cadastro.jsx'
import CadastroEvent from '../pages/CadastroEvent.jsx'
import Carinho from '../pages/Carinho.jsx'
import Pesquisa from '../pages/Pesquisa.jsx'
import User from '../pages/User.jsx'
import Event from '../pages/Event.jsx' 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-evento" element={<CadastroEvent />} />
        <Route path="/carrinho" element={<Carinho />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/evento" element={<Event />} />
        <Route path="/user" element={<User />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
