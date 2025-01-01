import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const DashboardAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirection to AdminLogin page
  };

  const goToReservations = () => {
    navigate('/dashboard/reservations');
  };

  const goToRooms = () => {
    navigate('/dashboard/rooms');
  };

  const goToStaff = () => {
    navigate('/dashboard/staff');
  };

  const goToEmployeeTasks = () => {
    navigate('/dashboard/employeetasks'); // Navigate to Employee Tasks page
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={{ color: '#fff' }}>Dashboard</h2>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem} onClick={goToReservations}>
            Réservations
          </li>
          <li style={styles.sidebarItem} onClick={goToRooms}>
            Chambres
          </li>
          <li style={styles.sidebarItem} onClick={goToStaff}>
            Staff
          </li>
          <li style={styles.sidebarItem} onClick={goToEmployeeTasks}>
            Employees Tasks
          </li>
        </ul>
        <button style={styles.logoutButton} onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>

      {/* Main content */}
      <div style={styles.mainContent}>
        <Outlet /> {/* This will render the EmployeeTasks component */}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
  },
  sidebarItem: {
    margin: '15px 0',
    cursor: 'pointer',
    fontSize: '18px',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '10px',
    marginTop: 'auto',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  },
  mainContent: {
    marginLeft: '260px',
    padding: '20px',
    width: 'calc(100% - 260px)',
  },
};

export default DashboardAdmin;
