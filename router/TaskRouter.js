const express = require("express");
const router = express.Router();
const {create_Task,mytasks,mytaskk} = require("../controller/TaskContoller");
const ValidateToken = require("../middleware/authorization");
router.post("/",ValidateToken,create_Task);
router.get("/",ValidateToken,mytasks);
router.get("/:id",ValidateToken,mytaskk);

module.exports = router;