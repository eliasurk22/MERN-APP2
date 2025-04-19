import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditConsumer() {
  const [form, setForm] = useState({ name: "", meterNumber: "", unitsConsumed: "", billAmount: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/api/getAllconsumers").then(res => {
      const consumer = res.data.find(c => c._id === id);
      if (consumer) {
        setForm(consumer);
      }
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/editconsumer/${id}`, form);
    navigate("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit Consumer</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2" required />
        <input name="meterNumber" value={form.meterNumber} onChange={handleChange} className="w-full border p-2" required />
        <input name="unitsConsumed" type="number" value={form.unitsConsumed} onChange={handleChange} className="w-full border p-2" required />
        <input name="billAmount" type="number" value={form.billAmount} onChange={handleChange} className="w-full border p-2" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}

export default EditConsumer;