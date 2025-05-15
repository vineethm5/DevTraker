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


})