// src/components/LoginModal.js
import React, { useState } from 'react';
import './LoginModal.css'; // Ensure the path to your CSS file is correct

function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Declare handleSubmit here
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const response = await fetch('http://localhost:5000/login', { // Update with your actual backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Login success:', data);
      onClose(); // Optionally close the modal on successful login
      // Here you can handle what happens after a successful login,
      // like updating the authentication context or redirecting the user
    } else {
      console.error('Login failed:', data);
      // Handle login failure, like showing an error message to the user
    }
  };

  // If the modal is not supposed to be open, return null to render nothing
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
