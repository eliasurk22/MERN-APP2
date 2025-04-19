import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Electricity Board</h1>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/add" className="hover:underline">Add Consumer</Link>
        <button onClick={handleLogout} className="text-red-300 hover:text-white">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
