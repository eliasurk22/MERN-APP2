const mongoose = require("mongoose");

const ConsumerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  meterNumber: { type: String, required: true, unique: true },
  address: {type: String,required: true,},
  unitsConsumed: { type: Number, required: true },
  billAmount: { type: Number, required: true },
});

module.exports = mongoose.model("Consumer", ConsumerSchema);