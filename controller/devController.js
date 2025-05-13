const asyncHandler = require('express-async-handler');
const   User = require("../models/DevModels");
const bcrypt = require("bcrypt");
const signup = asyncHandler(async(req,res)=>{
    const {username,useremail,password}= req.body;
    const Isfound = await User.findOne({useremail});
    // console.log(username);
    if(!Isfound)
    {
        const hashed_pass = await bcrypt.hash(password,10);
        const createUser = await User.create({
            username:username,
            useremail:useremail,
            password:hashed_pass
        });

        if(createUser)
        {
            res.status(201).json({message:"resource created"});
        }
    }
    else
    {
        res.status(400);
        throw new Error("User already exits");
    }

    
});


module.exports = {signup};