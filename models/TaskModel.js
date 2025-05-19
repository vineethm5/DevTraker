const mongoose = require("mongoose");

const devtasker_model = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"Please provide the user id"]
    },
    title:{
        type:String,
        required:[true,"Please enter the Title"]
    },
    description:{
        type:String,
        required:[true,"Please enter the description"]
    },

    status:{
        type:String,enum:['Active','Pending','Completed'],
        required:[true,"Please enter the status"]
    },
    priority:{
        type:String,enum:["Low","High"],
        required:[true,"Please enter the priority"]
    },
    duedate:{
        type:Date
    }


},
{
    timestamps:true
});

module.exports=mongoose.model("DevTasks",devtasker_model);