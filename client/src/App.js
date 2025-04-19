import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddConsumer from './components/AddConsumer';
import EditConsumer from './components/EditConsumer';
import Header from './components/Header'; // optional nav bar
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddConsumer />} />
          <Route path="/edit/:id" element={<EditConsumer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
