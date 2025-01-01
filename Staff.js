import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Staff = () => {
  const navigate = useNavigate();

  // Employés prédéfinis
  const initialEmployees = [
    { name: 'Fatima', type: 'Femme de ménage', matricule: 'Fm10' },
    { name: 'Zahra', type: 'Femme de ménage', matricule: 'Fm20' },
    { name: 'Rokaya', type: 'Femme de ménage', matricule: 'Fm30' },
    { name: 'Simo', type: 'Technicien', matricule: 'Tech11' },
    { name: 'Said', type: 'Technicien', matricule: 'Tech22' },
    { name: 'Mohamed', type: 'Technicien', matricule: 'Tech33' },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    type: '',
    matricule: '',
  });

  const [selectedMatricule, setSelectedMatricule] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.type && newEmployee.matricule) {
      setEmployees([...employees, newEmployee]);
      setNewEmployee({ name: '', type: '', matricule: '' });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  const handleDeleteEmployee = () => {
    if (selectedMatricule) {
      setEmployees(employees.filter((employee) => employee.matricule !== selectedMatricule));
      setSelectedMatricule('');
    } else {
      alert('Veuillez sélectionner un employé à supprimer.');
    }
  };

  const handleEmployeeClick = (matricule, name) => {
    navigate(`/dashboard-employee`, { state: { matricule, name } });
  };

  return (
    <div style={styles.container}>
      <h1>Liste des employés</h1>

      <div style={styles.employeeSection}>
        <div style={styles.employeeType}>
          <h2>Femmes de ménage</h2>
          {employees.filter(emp => emp.type === 'Femme de ménage').length > 0 ? (
            employees
              .filter(emp => emp.type === 'Femme de ménage')
              .map((employee) => (
                <div key={employee.matricule} style={styles.employeeCard}>
                  <p onClick={() => handleEmployeeClick(employee.matricule, employee.name)}>
                    {employee.name} - Matricule : {employee.matricule}
                  </p>
                </div>
              ))
          ) : (
            <p>Aucune femme de ménage ajoutée.</p>
          )}
        </div>

        <div style={styles.employeeType}>
          <h2>Techniciens</h2>
          {employees.filter(emp => emp.type === 'Technicien').length > 0 ? (
            employees
              .filter(emp => emp.type === 'Technicien')
              .map((employee) => (
                <div key={employee.matricule} style={styles.employeeCard}>
                  <p onClick={() => handleEmployeeClick(employee.matricule, employee.name)}>
                    {employee.name} - Matricule : {employee.matricule}
                  </p>
                </div>
              ))
          ) : (
            <p>Aucun technicien ajouté.</p>
          )}
        </div>
      </div>

      <h2>Ajouter un employé</h2>

      <form onSubmit={handleAddEmployee} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nom de l'employé"
          value={newEmployee.name}
          onChange={handleInputChange}
          style={styles.input}
        />
        <select
          name="type"
          value={newEmployee.type}
          onChange={handleInputChange}
          style={styles.select}
        >
          <option value="">Type d'employé</option>
          <option value="Femme de ménage">Femme de ménage</option>
          <option value="Technicien">Technicien</option>
        </select>
        <input
          type="text"
          name="matricule"
          placeholder="Matricule"
          value={newEmployee.matricule}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>Ajouter</button>
      </form>

      <h2>Supprimer un employé</h2>
      <div style={styles.form}>
        <select
          value={selectedMatricule}
          onChange={(e) => setSelectedMatricule(e.target.value)}
          style={styles.select}
        >
          <option value="">Sélectionnez un employé</option>
          {employees.map((employee) => (
            <option key={employee.matricule} value={employee.matricule}>
              {employee.name} - {employee.matricule}
            </option>
          ))}
        </select>
        <button onClick={handleDeleteEmployee} style={styles.deleteButton}>Supprimer</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#faf3e0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  employeeSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  employeeType: {
    width: '45%',
    padding: '10px',
    backgroundColor: '#fff8e1',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  employeeCard: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f7e1b5',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: '1',
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: '1',
  },
  addButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2ecc71',
    color: '#fff',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#e74c3c',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Staff;
