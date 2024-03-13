// frontend/src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to WellNest</h1>
      <button onClick={() => navigate('/login')}>Log In</button>
    </div>
  );
}

export default LandingPage;
