const mongoose = require("mongoose");

const devtasker_model = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:[true]
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
        type:String,
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
    timestamp:true
});

module.exports=mongoose.Model("DevTasker",devtasker_model);