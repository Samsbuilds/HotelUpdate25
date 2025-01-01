import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

const EmployeeTasks = () => {
  const { tasks, addTask } = useTaskContext(); // Utilisez le hook ici
  const [matricule, setMatricule] = useState('');
  const [description, setDescription] = useState('');
  const [room, setRoom] = useState(''); // Nouvelle variable pour la chambre

  const handleAddTask = () => {
    if (matricule && description && room) {
      addTask({ matricule, description, room }); // Inclure la chambre dans la tâche
      setMatricule('');
      setDescription('');
      setRoom('');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#F5EEDC', borderRadius: '8px' }}>
      <h2>Gestion des tâches des employés</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Matricule de l'employé"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description de la tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Numéro de chambre"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button onClick={handleAddTask} style={{ backgroundColor: '#8B4513', color: 'white', padding: '5px 10px' }}>
          Ajouter une tâche
        </button>
      </div>

      <div>
        <h3>Liste des tâches</h3>
        {tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: '10px', backgroundColor: '#FFF8DC', padding: '10px', borderRadius: '5px' }}>
            <p>Matricule : {task.matricule}</p>
            <p>Description : {task.description}</p>
            <p>Chambre : {task.room || 'Aucune chambre associée'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTasks;
