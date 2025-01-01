import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeLogin = () => {
  const navigate = useNavigate();

  // Liste des employés prédéfinis
  const employees = [
    { matricule: 'Fm10', name: 'Fatima' },
    { matricule: 'Fm20', name: 'Zahra' },
    { matricule: 'Tech11', name: 'Said' },
    { matricule: 'Tech22', name: 'Mohamed' },
  ];

  const [matricule, setMatricule] = useState('');
  const [error, setError] = useState('');

  const handleEmployeeLogin = (e) => {
    e.preventDefault();

    // Vérification de l'employé dans la liste
    const employee = employees.find((emp) => emp.matricule === matricule);

    if (employee) {
      navigate('/dashboard-employee', { state: { matricule: employee.matricule, name: employee.name } });
    } else {
      setError('Matricule incorrect. Veuillez réessayer.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Connexion Employé</h1>
      <form onSubmit={handleEmployeeLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Entrez votre matricule"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Se connecter</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2ecc71',
    color: '#fff',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default EmployeeLogin;
