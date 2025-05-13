const mongoose = require("mongoose");

const tb = mongoose.Schema({
    
    username:{
    type:String,
    required:[true,"Please enter the username"]
    },
    useremail:{
        type : String,
        required:[true,"Please enter email"],
        unique:true
    },
    password:{
        type : String,
        required :true
    }

},
{
    timestamp:true
});

module.exports=mongoose.model("user",tb,"User");