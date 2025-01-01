import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optionnel, crée ce fichier pour ajouter des styles de base.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
