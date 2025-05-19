const asyncHandler = require("express-async-handler");
const DevTasks = require("../models/TaskModel");
const { default: mongoose } = require("mongoose");
const create_Task = asyncHandler(async(req,res)=>{
    const {title,description,status,priority,duedate} = req.body;
    console.log(req.user);
     if (!req.user || !req.user.id) 
    {
        res.status(401);
        throw new Error("Unauthorized - No user ID");
    }
    else
    {
        // console.log("gfd"+req.user._id)
    }
    console.log("gfd"+ req.user.id)
   try {
  const creatingTask = await DevTasks.create({
    user_id: req.user.id,
    title,
    description,
    status,
    priority,
    duedate
  });

  res.status(200).json({ message: "Task Created", task: creatingTask });
} catch (error) {
  console.error("Error creating task:", error);
  res.status(500).json({ error: "Task creation failed", details: error.message });
}

});

module.exports = {create_Task}