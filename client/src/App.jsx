import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConsumerList from './components/ConsumerList';
import AddConsumer from './components/AddConsumer';
import EditConsumer from './components/EditConsumer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ConsumerList />} />
          <Route path="/add" element={<AddConsumer />} />
          <Route path="/edit/:id" element={<EditConsumer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
