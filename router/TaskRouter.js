const express = require("express");
const router = express.Router();
const {create_Task} = require("../controller/TaskContoller");
const ValidateToken = require("../middleware/authorization");
router.post("/",ValidateToken,create_Task);

module.exports = router;