import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [consumers, setConsumers] = useState([]);

  const fetchConsumers = async () => {
    const res = await axios.get("http://localhost:5000/api/getAllconsumers");
    setConsumers(res.data);
  };

  useEffect(() => {
    fetchConsumers();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/deleteconsumer/${id}`);
    fetchConsumers();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Electricity Consumers</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add Consumer</Link>
      <table className="w-full table-auto border-collapse border border-gray-200 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Meter Number</th>
            <th className="border p-2">Units Consumed</th>
            <th className="border p-2">Bill Amount</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {consumers.map(consumer => (
            <tr key={consumer._id}>
              <td className="border p-2">{consumer.name}</td>
              <td className="border p-2">{consumer.meterNumber}</td>
              <td className="border p-2">{consumer.unitsConsumed}</td>
              <td className="border p-2">{consumer.billAmount}</td>
              <td className="border p-2">
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

export default Home;