import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddEmployer() {
  const [roomNumber, setRoomNumber] = useState('');
  const [type, setType] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
 
  };

  return (
    <div className="container d-flex justify-content-centre align-self-center" style={{ minHeight: '70vh' }}>
      <div className="card w-50">

        <div className=" text-center">
          <h3>Ajouter une Femme du menage</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
          <div className="form-group"> <label htmlFor="image">Image de Employer</label> <input type="file" className="form-control" id="image" name="image"  /> </div>
      
            <div className="form-group">
              <label htmlFor="roomNumber">Matricule :</label>
              <input
                type="text"
                className="form-control"
                id="roomNumber"
                name="roomNumber"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              /><br/>
            </div>
            <div className="form-group">
              <label htmlFor="roomNumber">Name :</label>
              <input
                type="text"
                className="form-control"
                id="roomNumber"
                name="roomNumber"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              /><br/>
            </div>
            <div className="form-group">
              <label htmlFor="type">Role :</label>
              <select
                className="form-control"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Sélectionnez un type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
                <option value="familiale">Familiale</option>
              </select>
            </div><br/>
          <br/>
            <br/>
            <button type="submit" className="btn btn-primary w-100">Ajouter </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployer;
