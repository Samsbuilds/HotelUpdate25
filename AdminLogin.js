// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialiser la navigation

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard'); // Rediriger vers DashboardAdmin
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Connexion Admin</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="input-field"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Se connecter</button>
      </form>

      <div className="employee-link">
        <p>Vous êtes employé ?</p>
        <button onClick={() => navigate('/employee')}>Cliquez ici</button> {/* Rediriger vers la page employé */}
      </div>
    </div>
  );
};

export default AdminLogin;
