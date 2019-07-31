const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

router.get("/list", async (req, res) => {
  const patients = await Patient.find({});
  res.json(patients);
});

module.exports = router;
