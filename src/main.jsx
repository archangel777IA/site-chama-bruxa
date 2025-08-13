import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

// --- ADIÇÃO ---
// Importa e executa nosso script de animação uma vez, quando a aplicação carrega.
// Isso não altera a lógica de renderização do React.
import './animations/particle-animation.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);