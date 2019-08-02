const express = require("express");

const router = express.Router();

const patientRouter = require("./patient");
const appointmentRouter = require("./appointment");

router.use("/patient", patientRouter);
router.use("/appointment", appointmentRouter);

module.exports = router;
