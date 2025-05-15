const express = require('express');

const router = express.Router();
const {signup,login,userinfo} = require("../controller/devController");
const ValidateToken = require("../middleware/authorization");

// Public routes
router.post("/signup",signup);
router.post("/login",login);


// Protected route
router.get("/userinfo",ValidateToken,userinfo);



module.exports= router;