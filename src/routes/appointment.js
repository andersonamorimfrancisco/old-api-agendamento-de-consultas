const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

router.get("/list", async (req, res) => {
  const Appointments = await Appointment.find({})
    .populate("patient")
    .populate("fixedPatient");
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

router.post("/insertfixedpatient", async (req, res) => {
  await Appointment.updateMany(
    {
      hour: req.body.hour,
      weekday: req.body.weekday,
      week: { $gte: req.body.week }
    },
    { $set: { patient: req.body.patient._id, fixedPatient: req.body.patient._id } }
  );

  res.json({ success: true });
});

router.post("/removefixedpatient", async (req, res) => {
  await Appointment.updateMany(
    {
      hour: req.body.hour,
      weekday: req.body.weekday,
      patient: req.body.patient._id,
      week: { $gte: req.body.week }
    },
    { $set: { patient: null } }
  );

  await Appointment.updateMany(
    {
      hour: req.body.hour,
      weekday: req.body.weekday,
      fixedPatient: req.body.fixedPatient._id
    },
    { $set: { fixedPatient: null } }
  );

  res.json({ success: true });
});

module.exports = router;
