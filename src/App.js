import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development- I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <h3>100997363</h3>
        <h4>Said Mohamed</h4>
        <h4>George Brown College, Toronto</h4>
      </header>

      {showForm ? (
        <form onSubmit={handleSubmit} className="data-entry-form">
          {/* ... Input fields go here ... */}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="entered-info">
          <h3>Entered Information:</h3>
          <p>Email: {formData.email}</p>
          <p>Full Name: {formData.fullName}</p>
          <p>Address: {formData.address}</p>
          <p>City: {formData.city}</p>
          <p>Province: {formData.province}</p>
          <p>Postal Code: {formData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
