const asyncHandler = require('express-async-handler');
const   User = require("../models/DevModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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



const login = asyncHandler(async(req,res)=>{
    const {useremail,password} = req.body;
    const finduser = await User.findOne({useremail});
    console.log(finduser);
    if(finduser && await bcrypt.compare(password,finduser.password))
    {
        const tocken = jwt.sign({
            useremail:finduser.useremail,
            username:finduser.username,
            id:finduser.id
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"10m"});

        res.status(200).json({message:"Login Successfull",tocken:tocken});
        
    }
    else
    {
        res.status(400);
        throw new Error("Invalid email or password")
    }
});


const userinfo = asyncHandler(async(req,res)=>{
   res.status(200).json({message:"hi",user: req.user});
    
})
module.exports = {signup,login,userinfo};