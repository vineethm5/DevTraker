const asyncHandler = require("express-async-handler");
const DevTasks = require("../models/TaskModel");
const mongoose = require("mongoose");
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
    // console.log("gfd"+ req.user.id)
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

const mytasks = asyncHandler(async(req,res)=>{
  console.log(req.user.id);
  const tasks = await DevTasks.find({user_id:req.user.id});
  if(tasks)
  {
    res.status(200).json({Message:tasks})
  }
  else
  {
    res.status(401);
    throw new Error("Something went wrong");
  }
    
  
});


// Incorrect usage of findById:
// findById expects a single ID value, not an object like { _id: id }.

// Wrong req.body usage:
// You're assigning the entire req.body to id. If your body is something like { id: "123" }, then id will be an object, not the string ID you need.


const mytaskk = asyncHandler(async(req,res)=>{
  const task_id= req.params.id;
 if (!mongoose.Types.ObjectId.isValid(task_id)) {
    res.status(400);
    throw new Error("Invalid task ID");
  }

  taskk = await DevTasks.findById(task_id);
    
 

  if(!taskk)
  {
    res.status(404).json({message:"Details not found"});
    
  }
  else
  {
    res.status(200).json({taskk});
  }
})




module.exports = {create_Task,mytasks,mytaskk}