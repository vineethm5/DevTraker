const express = require("express");
const router = express.Router();
const {create_Task,mytasks,mytaskk,updatetask,deleteTask} = require("../controller/TaskContoller");
const ValidateToken = require("../middleware/authorization");
router.post("/",ValidateToken,create_Task);
router.get("/",ValidateToken,mytasks);
router.get("/:id",ValidateToken,mytaskk);
router.put("/:id",ValidateToken,updatetask);
router.delete("/:id",ValidateToken,deleteTask);

module.exports = router;