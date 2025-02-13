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
            type:[String],
            required:true
        }
    
})

const Achievement=mongoose.model("Achievement",achievementSchema);
module.exports=Achievement;