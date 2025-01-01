import React, { useState } from 'react';
import './Rooms.css'; // Importation du fichier CSS
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([
    { id: 1, number: '101', type: 'Chambre Double', status: 'Available' },
    { id: 2, number: '102', type: 'Chambre Deluxe', status: 'Occupied' },
    { id: 3, number: '103', type: 'Chambre avec Terrasse', status: 'Under Maintenance' },
    { id: 4, number: '104', type: 'Suit Room', status: 'Available' },
    { id: 5, number: '105', type: 'King Room', status: 'Occupied' },
    { id: 6, number: '106', type: 'Queen Room avec Balcon', status: 'Under Maintenance' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentRoom, setCurrentRoom] = useState({ number: '', type: '', status: '' });
  const [editIndex, setEditIndex] = useState(-1);
  const [roomToDelete, setRoomToDelete] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRoom({ number: '', type: '', status: '' });
    setEditIndex(-1);
  };

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setRoomToDelete(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRoom({ ...currentRoom, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex > -1) {
      const updatedRooms = rooms.map((room, index) =>
        index === editIndex ? { ...room, ...currentRoom } : room
      );
      setRooms(updatedRooms);
    } else {
      const newRoom = { ...currentRoom, id: rooms.length + 1 };
      setRooms([...rooms, newRoom]);
    }
    handleCloseModal();
  };

  const handleDeleteRoom = () => {
    if (roomToDelete) {
      setRooms(rooms.filter((room) => room.id !== roomToDelete.id));
      handleCloseDeleteModal();
    }
  };

  const availableRooms = rooms.filter((room) => room.status === 'Available');
  const occupiedRooms = rooms.filter((room) => room.status === 'Occupied');
  const maintenanceRooms = rooms.filter((room) => room.status === 'Under Maintenance');

  return (
    <div className="rooms-container">
      <h1>Liste des Chambres</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="primary" onClick={handleShowModal}>
          Ajouter une Chambre
        </Button>
        <Button variant="danger" onClick={handleShowDeleteModal}>
          Supprimer une Chambre
        </Button>
      </div>

      <div className="rooms-sections-wrapper">
        {/* Chambres Disponibles */}
        <div className="rooms-section">
          <h2>Disponibles</h2>
          <ul className="rooms-list">
            {availableRooms.map((room) => (
              <li key={room.id} className="room-item">
                <h3>{room.type}</h3>
                <p>Numéro : {room.number}</p>
                <span className="room-status available">{room.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chambres Occupées */}
        <div className="rooms-section">
          <h2>Occupées</h2>
          <ul className="rooms-list">
            {occupiedRooms.map((room) => (
              <li key={room.id} className="room-item">
                <h3>{room.type}</h3>
                <p>Numéro : {room.number}</p>
                <span className="room-status occupied">{room.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chambres Sous Maintenance */}
        <div className="rooms-section">
          <h2>Sous Maintenance</h2>
          <ul className="rooms-list">
            {maintenanceRooms.map((room) => (
              <li key={room.id} className="room-item">
                <h3>{room.type}</h3>
                <p>Numéro : {room.number}</p>
                <span className="room-status maintenance">{room.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Adding/Editing Room */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex > -1 ? 'Modifier' : 'Ajouter'} une Chambre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formRoomNumber">
              <Form.Label>Numéro de Chambre</Form.Label>
              <Form.Control
                type="text"
                name="number"
                value={currentRoom.number}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type de Chambre</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={currentRoom.type}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Statut</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={currentRoom.status}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez un statut</option>
                <option value="Available">Disponible</option>
                <option value="Occupied">Occupée</option>
                <option value="Under Maintenance">En Maintenance</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              {editIndex > -1 ? 'Modifier' : 'Ajouter'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for Deleting Room */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer une Chambre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDeleteRoom">
              <Form.Label>Sélectionnez une Chambre</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) =>
                  setRoomToDelete(rooms.find((room) => room.id === parseInt(e.target.value)))
                }
              >
                <option value="">Choisissez une chambre</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.type} - Numéro : {room.number}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleDeleteRoom}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Rooms;
