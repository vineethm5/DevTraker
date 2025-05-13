const express = require('express');

const router = express.Router();
const {signup} = require("../controller/devController");

router.post("/signup",signup);



module.exports= router;