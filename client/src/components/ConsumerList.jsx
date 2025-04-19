import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ConsumerList() {
  const [consumers, setConsumers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getAllConsumers')
      .then(res => setConsumers(res.data))
      .catch(err => console.error('Error fetching consumers:', err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteConsumer/${id}`);
      setConsumers(consumers.filter(consumer => consumer._id !== id));
    } catch (err) {
      console.error('Error deleting consumer:', err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Consumers List</h2>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Meter Number</th>
            <th className="p-2">Amount Due</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {consumers.map(consumer => (
            <tr key={consumer._id}>
              <td className="p-2">{consumer.name}</td>
              <td className="p-2">{consumer.meterNumber}</td>
              <td className="p-2">{consumer.amountDue}</td>
              <td className="p-2">
                <Link to={`/edit/${consumer._id}`} className="text-blue-500 mr-2">Edit</Link>
                <button onClick={() => handleDelete(consumer._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsumerList;
