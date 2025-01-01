import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTaskContext } from './TaskContext';

const DashboardEmployee = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { matricule, name } = location.state || {};
  const { getTasksByMatricule } = useTaskContext();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (matricule) {
      setTasks(getTasksByMatricule(matricule));
    }
  }, [matricule, getTasksByMatricule]);

  const handleLogout = () => {
    navigate('/employee');
  };

  if (!matricule || !name) {
    return <p>Erreur : données manquantes. Veuillez vous reconnecter.</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Bienvenue {name} (Matricule : {matricule})</h1>
        <button style={styles.logoutButton} onClick={handleLogout}>Se déconnecter</button>
      </div>
      <h2>Vos Tâches</h2>
      {tasks.length > 0 ? (
        <ul style={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={index} style={styles.taskItem}>{task.description}</li>
          ))}
        </ul>
      ) : (
        <p>Aucune tâche assignée pour le moment.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#faf3e0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
  },
  taskItem: {
    backgroundColor: '#f7e1b5',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
};

export default DashboardEmployee;
