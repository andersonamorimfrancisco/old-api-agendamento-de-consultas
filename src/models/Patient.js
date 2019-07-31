const mongoose = require("../config/db");

const PatientSchema = new mongoose.Schema({
  name: String,
  contact: String,
  category: Number,
  note: String
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
