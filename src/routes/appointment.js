const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

router.get("/list", async (req, res) => {
  const Appointments = await Appointment.find({});
  res.json(Appointments);
});

module.exports = router;
