const mongoose = require("mongoose");

const connect = async() =>{
    try{

        const connecting = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Conneted to the DB`,connecting.connection.host,connecting.connection.name);
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connect;