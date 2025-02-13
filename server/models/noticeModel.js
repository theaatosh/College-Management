const mongoose=require("mongoose")
const noticeSchema=mongoose.Schema({

    heading:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})

const Notice=mongoose.model("Notice",noticeSchema);
module.exports=Notice