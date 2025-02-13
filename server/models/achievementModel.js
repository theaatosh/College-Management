const mongoose=require("mongoose");

const achievementSchema=mongoose.Schema({
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
                type:String,
            },
            public_id:{
                type:String,
            },
        }
    
})

const Achievement=mongoose.model("Achievement",achievementSchema);
module.exports=Achievement;