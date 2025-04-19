const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // ✅ this must come BEFORE you use process.env

const Consumer = require("./models/Consumer");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


app.post("/api/addconsumer", async (req, res) => {
  try {
    const newConsumer = new Consumer(req.body);
    await newConsumer.save();
    res.status(201).json({ message: "Consumer added successfully" });
  } catch (error) {
    console.error("Error saving consumer:", error);  // 👈 this is important
    res.status(500).json({ message: "Failed to add consumer", error: error.message });
  }
});


app.get("/api/getAllconsumers", async (req, res) => {
  try {
    const consumers = await Consumer.find();
    res.json(consumers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/editconsumer/:id", async (req, res) => {
  try {
    const updatedConsumer = await Consumer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedConsumer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/deleteconsumer/:id", async (req, res) => {
  try {
    await Consumer.findByIdAndDelete(req.params.id);
    res.json({ message: "Consumer deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));