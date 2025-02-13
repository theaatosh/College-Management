const mongoose=require("mongoose");

const eventSchema=mongoose.Schema({
    
        heading:{
            type:String,
            required:true,
        },
        
        subHeading:{
                type:String,
    
            },
            description:{
                type:String,
                required:true
            },
            images:{
                type:[String],
                required:true
            }
        
    })

const eventModel=mongoose.model("Event",eventSchema)
module.exports=eventModel;