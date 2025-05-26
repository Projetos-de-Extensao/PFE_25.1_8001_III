import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        placeholder='Digite o seu nome'
        type="text"
        value={props.valor}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
      />
    </div>
  );
}