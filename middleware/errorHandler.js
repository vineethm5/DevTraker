const {Constants} = require("../validators");
 const errorhandler = (err,req,res,next)=>{
    const statuscode = res.statuscode ? res.statuscode : 500

    switch(statuscode)
    {
        case Constants.VALIDATION_ERROR:
        res.json({title:"ValidationError",message:err.message,stacktrace:err.stack});
        case Constants.UNAUTHORIZED:
            res.json({title:"Unauthorized",message:err.message,stacktrace:err.stack});
        case Constants.FORBIDDEN:
            res.json({title:"Access forbidden",message:err.message,stacktrace:err.stack});
        case Constants.NOT_FOUND:
            res.json({title:"Page not found",message:err.message,stacktrace:err.stack});
        case Constants.SERVER_ERROR:
            res.json({title:"Server Error",message:err.message,stacktrace:err.stack})
    }
 }
 module.exports=errorhandler;
