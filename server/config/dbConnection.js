const mongoose=require("mongoose");
require("dotenv").config();

const dbConnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected succesfully");
    }catch(err){
        console.log("Cannot connect to db",err);
        
    }
}

module.exports=dbConnection