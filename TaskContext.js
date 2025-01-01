import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const TaskContext = createContext();

// Fournisseur du contexte
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Fonction pour ajouter une tâche
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Fonction pour récupérer les tâches associées à un matricule spécifique
  const getTasksByMatricule = (matricule) => {
    return tasks.filter((task) => task.matricule === matricule);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, getTasksByMatricule }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
