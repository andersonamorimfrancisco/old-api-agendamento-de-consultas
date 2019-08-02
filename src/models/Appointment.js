const mongoose = require("../config/db");

const AppointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
  },
  fixedPatient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
  },
  hour: Number,
  weekday: Number,
  day: Number,
  month: Number,
  year: Number,
  date: Date
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
