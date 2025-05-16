const asyncHandler = require("express-async-handler");
const devtasker = require("../models/TaskModel");
const create_Task = asyncHandler(async(req,res)=>{
    const {title,description,status,priority,duedate} = req.body;
    console.log(duedate);
     if (!req.user || !req.user._id) 
    {
    res.status(401);
    throw new Error("Unauthorized - No user ID");
    }
    else
    {
        console.log(req.user)
    }

    const creatingTask = await devtasker.create({
        user_id:req.user._id,
        title:title,
        description:description,
        status:status,
        priority:priority,
        duedate:duedate

    });
    if(creatingTask)
    {
        res.status(200).json({message:"Task Created"});
    }
});

module.exports = {create_Task}