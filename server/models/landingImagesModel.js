const mongoose =require("mongoose");

const landingImagesSchema=new mongoose.Schema({
    images:[
       {
        secure_url:{
            type:String,
        },
        public_id:{
            type:String
        }
       }
    ]
})

const landingModel=mongoose.model("LandingImages",landingImagesSchema);
module.exports={landingModel}