import React, { createContext, useState, useContext } from 'react';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const removeEmployee = (matricule) => {
    setEmployees(employees.filter((emp) => emp.matricule !== matricule));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, removeEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => useContext(EmployeeContext);
