import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddConsumer() {
  const [form, setForm] = useState({
    name: "",
    meterNumber: "",
    address: "", // ✅ Added address
    unitsConsumed: "",
    billAmount: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/addconsumer", form);
      navigate("/");
    } catch (err) {
      console.error("Error adding consumer:", err);
      alert("Error adding consumer. Check console for more details.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Consumer</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2" required />
        <input name="meterNumber" placeholder="Meter Number" onChange={handleChange} className="w-full border p-2" required />
        <input name="address" placeholder="Address" onChange={handleChange} className="w-full border p-2" required /> {/* ✅ Added address */}
        <input name="unitsConsumed" type="number" placeholder="Units Consumed" onChange={handleChange} className="w-full border p-2" required />
        <input name="billAmount" type="number" placeholder="Bill Amount" onChange={handleChange} className="w-full border p-2" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default AddConsumer;
