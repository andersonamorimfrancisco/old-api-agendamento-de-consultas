const express = require("express");

const router = express.Router();

const patientRouter = require("./patient");

router.use("/patient", patientRouter);

module.exports = router;
