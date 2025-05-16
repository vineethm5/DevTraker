const asyncHandler = require("express-async-handler");
const devtasker = require("../models/TaskModel");
const create_Task = asyncHandler(async(req,res)=>{
    const {title,description,status,priority,duedate} = req.body;
    const creatingTask = await devtasker.create({
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