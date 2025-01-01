import React, { useState } from 'react';
import './Reservations.css';

const Reservations = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const reservationsData = {
    recent: [
      { id: 1, client: 'Samia', status: 'upcoming' },
      { id: 2, client: 'Ahmed', status: 'in-progress' },
    ],
    cancelled: [
      { id: 3, client: 'Noussair', status: 'cancelled' },
    ],
    inProgress: [
      { id: 4, client: 'Aicha', status: 'in-progress' },
    ],
    upcoming: [
      { id: 5, client: 'badr', status: 'upcoming' },
      { id: 6, client: 'Mohamed El', status: 'upcoming' },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="reservations-container">
      {/* Onglets */}
      <div className="reservations-tabs">
        <button
          className={`reservations-tab ${activeTab === 'recent' ? 'active' : ''}`}
          onClick={() => handleTabClick('recent')}
        >
          Récentes
        </button>
        <button
          className={`reservations-tab ${activeTab === 'inProgress' ? 'active' : ''}`}
          onClick={() => handleTabClick('inProgress')}
        >
          En cours
        </button>
        <button
          className={`reservations-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleTabClick('upcoming')}
        >
          À venir
        </button>
        <button
          className={`reservations-tab ${activeTab === 'cancelled' ? 'active' : ''}`}
          onClick={() => handleTabClick('cancelled')}
        >
          Annulées
        </button>
      </div>

      {/* Sections */}
      <div className={`reservations-section ${activeTab === 'recent' ? 'active' : ''}`}>
        <h2>Récentes</h2>
        <ul>
          {reservationsData.recent.map((reservation) => (
            <li key={reservation.id}>
              <span>{reservation.client}</span>
              <span className={`reservation-status ${reservation.status}`}>
                {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`reservations-section ${activeTab === 'inProgress' ? 'active' : ''}`}>
        <h2>En cours</h2>
        <ul>
          {reservationsData.inProgress.map((reservation) => (
            <li key={reservation.id}>
              <span>{reservation.client}</span>
              <span className={`reservation-status ${reservation.status}`}>
                {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`reservations-section ${activeTab === 'upcoming' ? 'active' : ''}`}>
        <h2>À venir</h2>
        <ul>
          {reservationsData.upcoming.map((reservation) => (
            <li key={reservation.id}>
              <span>{reservation.client}</span>
              <span className={`reservation-status ${reservation.status}`}>
                {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`reservations-section ${activeTab === 'cancelled' ? 'active' : ''}`}>
        <h2>Annulées</h2>
        <ul>
          {reservationsData.cancelled.map((reservation) => (
            <li key={reservation.id}>
              <span>{reservation.client}</span>
              <span className={`reservation-status ${reservation.status}`}>
                {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reservations;
