// src/App.js
import React, { useState } from 'react';
import './App.css';
import LoginModal from './components/LoginModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      <h1>WellNest</h1>
      <button onClick={() => setIsModalOpen(true)} style={{ padding: '10px 20px' }}>Log In</button>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
