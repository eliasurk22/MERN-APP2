import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Electricity Board</h1>
      <nav>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/add" className="px-2">Add Consumer</Link>
      </nav>
    </header>
  );
}

export default Header;
