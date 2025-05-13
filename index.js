require("dotenv").config();
const express = require('express'); 
const dbConnect = require("./config/DevConfig");
const errorhandler = require("./middleware/errorHandler");
const app = express();
const PORT= process.env.PORT;

dbConnect();
app.use(express.json())
app.use("/api/auth/",require("./router/DevRouter"));
app.use(errorhandler);

app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Connected Successfully to the PORT ${PORT}`);
    }
})
