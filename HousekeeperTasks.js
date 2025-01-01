import React from 'react';
import './DashboardEmployee.css';  // Reusing the same CSS for layout

const HousekeeperTasks = () => {
  return (
    <div className="mainContent">
      <h1>Tâches des Femmes de Ménage</h1>
      <p>Voici vos tâches de nettoyage assignées:</p>
      {/* You can add dynamic tasks here */}
    </div>
  );
};

export default HousekeeperTasks;
