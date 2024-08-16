import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Sidebar = () => (
  <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
    <Link to="select-rooms" className="btn btn-primary mb-2">Select Rooms</Link>
    <Link to="selected-rooms" className="btn btn-primary mb-2">Selected Rooms</Link>
  </div>
);

export default Sidebar;

