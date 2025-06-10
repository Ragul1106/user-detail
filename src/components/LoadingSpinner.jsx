import React from 'react';
import '../App.css'; 

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p>Loading user data...</p>
    </div>
  );
}

export default LoadingSpinner;