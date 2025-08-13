import React from 'react';
import ReactDOM from 'react-dom/client';
// --- GARANTA QUE ESTA LINHA ESTEJA EXATAMENTE ASSIM ---
import App from './App.jsx'; 
import './styles/global.css';
import './animations/particle-animation.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);