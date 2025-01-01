import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import DashboardAdmin from './DashboardAdmin';
import EmployeeLogin from './EmployeeLogin';
import Reservations from './Reservations';
import Rooms from './Rooms';
import Staff from './Staff';
import AddEmployer from "./ajouteremployer";
import DashboardEmployee from './DashboardEmployee';
import CRUDPage from "./affichagechambre";
import EmployeeTasks from './EmployeeTasks';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importation des providers
import { TaskProvider } from './TaskContext';
import { EmployeeProvider } from './EmployeeContext';

function App() {
  return (
    <TaskProvider> {/* Encapsulation avec le TaskProvider */}
      <EmployeeProvider> {/* Encapsulation avec le EmployeeProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<AdminLogin />} />  {/* Page de connexion Admin */}
            <Route path="/dashboard" element={<DashboardAdmin />}>  {/* Dashboard Admin */}
              <Route path="reservations" element={<Reservations />} />  {/* Page des Réservations */}
              <Route path="rooms" element={<Rooms />} />  {/* Page des Chambres */}
              <Route path="staff" element={<Staff />} />  {/* Page des Staff */} 
              <Route path="ajouteremployer" element={<AddEmployer />} />
              <Route path="afficherchambre" element={<CRUDPage />} /> {/* Page des Chambres */}
              <Route path="employeetasks" element={<EmployeeTasks />} />  {/* Page Employee Tasks */}
            </Route>
            <Route path="/employee" element={<EmployeeLogin />} />  {/* Page de connexion Employé */}
            <Route path="/dashboard/add-employer" element={<AddEmployer />} />
            <Route path="/dashboard-employee" element={<DashboardEmployee matricule="Fm10" name="Fatima" />} /> {/* Exemple avec matricule */}
          </Routes>
        </Router>
      </EmployeeProvider>
    </TaskProvider>
  );
}

export default App;
