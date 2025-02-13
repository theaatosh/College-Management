const Notice=require("../models/noticeModel")

//notice create garne
const createNotice=async(req,res)=>{
    const {heading,description}=req.body;

    try{
        if(!heading||!description){
         return   res.status(400).json({
                message:"All fields are required"
            })
        }

        await Notice.create({heading,description})
        res.status(200).json({
            message:"data created successfully"
        })
        
    }catch(err){
        res.status(500).json({
            message:"unable to create notice"
        })
    }

    
}

//notice fetch garna ko lagi
const fetchNotice=async(req,res)=>{
    try{
        const notices=await Notice.find();
        if(notices.length===0){
         return   res.status(200).json({
                message:"No notices found",
                data:[]
            })
        }
        res.status(200).json({
            message:"Notices fetched successfully",
            data:notices
        })
    }catch(err){
    res.status(500).json({
        message:"unable to fetch notices"
    })        
    }
}

//notice del garna ko lagi
const delNotice=async(req,res)=>{
    const {id}=req.params;    
    try{
        const notice=await Notice.findByIdAndDelete(id);
        if(!notice){
          return  res.status(404).json({
                error:"Notice not found"
            })
        }
        res.status(200).json({
            message:"Notice deleted Successfully"
        })
       
    }catch(err){
        res.status(500).json({
            message:"Unable to delete"
        })
    }
}


//notice update garna ko lagi
const updateNotice=async(req,res)=>{
    
    const {id}=req.params;
    const {heading,description}=req.body;
    try{
        if(!heading||!description){
          return  res.status(400).json({
                message:"All field required"
            })
        }
        const notice=await Notice.findByIdAndUpdate(id,{heading,description},{new:true});

        if(!notice){
           return res.status(400).json({
                message:"Cannot find"
            })
        }

        res.status(200).json({
            message:"Notice updated successfully",
            data:notice
        })
    }catch(err){
        res.status(500).json({
            message:"unable to update notice"
        })
    }
}

module.exports={createNotice,delNotice,fetchNotice,updateNotice}