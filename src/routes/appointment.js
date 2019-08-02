const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

router.get("/list", async (req, res) => {
  const Appointments = await Appointment.find({}).populate("patient");
  res.json(Appointments);
});

router.post("/removepatient", async (req, res) => {
  await Appointment.findByIdAndUpdate(req.body._id, {
    patient: null
  });
  const appointment = await Appointment.findById(req.body._id);
  res.json(appointment);
});

router.post("/insertpatient", async (req, res) => {
  await Appointment.findByIdAndUpdate(req.body.appointmentId, {
    patient: req.body.patientId
  });
  const appointment = await Appointment.findById(req.body.appointmentId).populate("patient");
  res.json(appointment);
});

module.exports = router;
