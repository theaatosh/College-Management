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
                secure_url:{
                    type:String
                },
                public_id:{
                    type:String
                }
            }
        
    })

const eventModel=mongoose.model("Event",eventSchema)
module.exports=eventModel;