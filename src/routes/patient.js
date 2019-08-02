const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

router.get("/list", async (req, res) => {
  const patients = await Patient.find({});
  res.json(patients);
});

router.post("/create", async (req, res) => {
  const newPatient = await Patient.create(req.body);
  res.json(newPatient);
});

router.post("/edit", async (req, res) => {
  const newPatient = await Patient.findByIdAndUpdate(req.body._id, req.body);
  const patient = await Patient.findById(req.body._id);
  res.json(patient);
});

module.exports = router;
