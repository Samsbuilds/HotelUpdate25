import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function CRUDPage() {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRoom, setCurrentRoom] = useState({ roomNumber: '', type: '', view: '', status: '', floor: '', image: null });
  const [editIndex, setEditIndex] = useState(-1);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setCurrentRoom({
      ...currentRoom,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex > -1) {
      const updatedRooms = rooms.map((room, index) => (index === editIndex ? currentRoom : room));
      setRooms(updatedRooms);
    } else {
      setRooms([...rooms, currentRoom]);
    }
    setCurrentRoom({ roomNumber: '', type: '', view: '', status: '', floor: '', image: null });
    setEditIndex(-1);
    handleCloseModal();
  };

  const handleEdit = (index) => {
    setCurrentRoom(rooms[index]);
    setEditIndex(index);
    handleShowModal();
  };

  const handleDelete = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms);
  };

  return (
    <div className="container mt-5">
      <Button variant="primary" onClick={handleShowModal}>Ajouter une Chambre</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Numéro de Chambre</th>
            <th>Type</th>
            <th>Vue</th>
            <th>Statut</th>
            <th>Étage</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.roomNumber}</td>
              <td>{room.type}</td>
              <td>{room.view}</td>
              <td>{room.status}</td>
              <td>{room.floor}</td>
              <td>{room.image ? room.image.name : ''}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(index)}>Modifier</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(index)}>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter/Modifier une Chambre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formRoomNumber">
              <Form.Label>Numéro de Chambre</Form.Label>
              <Form.Control
                type="text"
                name="roomNumber"
                value={currentRoom.roomNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type de Chambre</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={currentRoom.type}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez un type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
                <option value="familiale">Familiale</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formView">
              <Form.Label>Vue</Form.Label>
              <Form.Control
                as="select"
                name="view"
                value={currentRoom.view}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez une vue</option>
                <option value="mer">Vue sur Mer</option>
                <option value="jardin">Vue sur Jardin</option>
                <option value="piscine">Vue sur Piscine</option>
                <option value="ville">Vue sur Ville</option>
              </Form.Control>
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
                <option value="disponible">Disponible</option>
                <option value="occupee">Occupée</option>
                <option value="maintenance">En Maintenance</option>
                <option value="reservee">Réservée</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formFloor">
              <Form.Label>Étage</Form.Label>
              <Form.Control
                as="select"
                name="floor"
                value={currentRoom.floor}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez un étage</option>
                <option value="1">1er Étage</option>
                <option value="2">2ème Étage</option>
                <option value="3">3ème Étage</option>
                <option value="4">4ème Étage</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image de la Chambre</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Sauvegarder</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CRUDPage;
