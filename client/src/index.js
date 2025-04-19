import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure that this file exists or create it
import App from './App'; // Ensure App component exists in the same folder

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
