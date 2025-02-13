const eventModel=require('../models/eventModel')
const fetchEvent=async(req,res)=>{
    try{
        const eventData=await eventModel.find();
        if(eventData){
            res.status(200).json({
                message:"Events fetched successfully",
                data:eventData
            })
        }else{
            res.status(200).json({
                message:"No Events",
                data:eventData
            })
        }
        
        }catch(err){
        res.status(500).json("Error fetching in events")
    }
}

const createEvent=async(req,res)=>{
    const{heading,subHeading,description}=req.body;
        
    try{
        if(!heading||!subHeading||!description){
          return  res.status(400).json({
                message:"All fields are required"
            })
        }

        const post=await eventModel.create({heading,subHeading,description})
        if(post){
            res.status(201).json({
                message:"event posted successfully",
                data:post
            })
        }
        
    }catch(err){
        res.status(500).json({
            message:"Unable to post event"
        })
    }
}

const deleteEvent=async(req,res)=>{
    const {id}=req.params;

    try{
        console.log("helo");
        
        const exist=await eventModel.findById(id);
        
        if(!exist){
            return res.status(400).json({
                error:"Doesnot Exist"
            })
        }

        const event=await eventModel.findByIdAndDelete(id);        
        if(event){
            res.status(200).json({
                message:"Deleted Successfully",
                data:event
            })
        }

    }catch(err){
        res.status(500).json({
            message:"Unable to delete event"
        })
        console.log(err);
        
    }
}

const updateEvent=async(req,res)=>{
    const {id}=req.params;

    const {heading,subHeading,description}=req.body
    try{
        if(!heading||!subHeading||!description){
            return res.status(400).json({
                message:"all fields are required"
            })
        }
        
        const exist=await eventModel.findById(id);

        if(!exist){
            return res.status(400).json({
                error:"Doesnot Exist"
            })
        }

        const event=await eventModel.findByIdAndUpdate(id,
            {heading,subHeading,description},
            {new:true});        

        if(event){
            res.status(200).json({
                message:"Updated Successfully",
                data:event
            })
        }

    }catch(err){
        res.status(500).json({
            message:"Unable to update event"
        })
        console.log(err);
        
    }
}

module.exports={fetchEvent,createEvent,deleteEvent,updateEvent}