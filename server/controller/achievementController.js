const Achievement=require("../models/achievementModel")

//achievement post garna
const createAchievement=async(req,res)=>{

        const{heading,subHeading,description}=req.body;
        
        try{
            if(!heading||!subHeading||!description){
              return  res.status(400).json({
                    message:"All fields are required"
                })
            }

            const post=await Achievement.create({heading,subHeading,description})
            if(post){
                res.status(201).json({
                    message:"achievement posted successfully",
                })
            }
            
        }catch(err){
            res.status(500).json({
                message:"Unable to post achievements"
            })
        }

 
 
    

}

//achievement del garna
const deleteAchievement=async(req,res)=>{
    const {id}=req.params;

    try{
        const exist=await Achievement.findById(id);
        
        if(!exist){
            return res.status(400).json({
                error:"Doesnot Exist"
            })
        }

        const achievement=await Achievement.findByIdAndDelete(id);        
        if(achievement){
            res.status(200).json({
                message:"Deleted Successfully",
                data:achievement
            })
        }

    }catch(err){
        res.status(500).json({
            message:"Unable to delete achievement"
        })
        console.log(err);
        
    }
}


//for fetching achievement
const fetchAchievement=async(req,res)=>{
    
    try{
        const achievementData=await Achievement.find();
        if(achievementData){
            res.status(200).json({
                message:"Achievements fetched successfully",
                data:achievementData
            })
        }
        }catch(err){
        res.status(500).json("Error fetching in achievement")
    }
}

//for updating achievements
const updateAchievement=async(req,res)=>{
    const {id}=req.params;
    try{

    }catch(err){
        res.status(500).json({message:"unable to update"})
        console.log(err);
        
    }
}

module.exports={createAchievement,deleteAchievement,fetchAchievement,updateAchievement}