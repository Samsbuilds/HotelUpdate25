import React from 'react';
import './DashboardEmployee.css';  // Reusing the same CSS for layout

const TechnicianTasks = () => {
  return (
    <div className="mainContent">
      <h1>Tâches des Techniciens</h1>
      <p>Voici vos tâches techniques assignées:</p>
      {}
    </div>
  );
};

export default TechnicianTasks;
