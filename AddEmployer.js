import React, { useState } from 'react';
import { useEmployeeContext } from './EmployeeContext'; // Import du contexte des employés

const AddEmployer = () => {
  const { addEmployee } = useEmployeeContext(); // Utilisation du contexte pour ajouter un employé
  const [employee, setEmployee] = useState({
    name: '',
    status: '',
    matricule: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.status && employee.matricule) {
      addEmployee(employee); // Ajouter l'employé
      setEmployee({ name: '', status: '', matricule: '' }); // Réinitialiser le formulaire
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div>
      <h2>Ajouter un employé</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom de l'employé"
          value={employee.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Statut (ex: Disponible, Occupé)"
          value={employee.status}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="matricule"
          placeholder="Matricule"
          value={employee.matricule}
          onChange={handleInputChange}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddEmployer;
