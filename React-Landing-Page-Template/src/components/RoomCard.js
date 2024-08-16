import React from 'react';
import './Roomcard.css'
const RoomCard = ({ room, onBook, isBook }) => (
  <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
    <img src={room.image} className="card-img-top" alt="Room" />
    <div className="card-body">
      <h5 className="card-title">{room.city}</h5>
      <p className="card-text">{room.info}</p>
      <button className="btn btn-primary" disabled={isBook} onClick={() => onBook(room)}>Book Room</button>
    </div>
  </div>
);

export default RoomCard;
