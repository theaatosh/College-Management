const {landingModel}=require("../models/landingImagesModel")

//for adding images
const createImages=async(req,res)=>{
console.log(req.files);

try{

if(req.files.length<2){
    return res.status(400).json({
        message:"Select at least two photos"
    })
}
let secure_url=null;
let public_id=null;
const imagesArr=req.files?.map((image)=>{
    return(
        {
            secure_url:image?.path,
            public_id:image?.filename
        }
    )
}

)

if(imagesArr){
    const created=await landingModel.create({images:imagesArr})

   if(created){
    res.status(201).json({
        data:created,
        message:"images added successfully"
    })
   }
}
console.log(imagesArr);
}catch(err){
    console.log("Error adding photo",err);
    res.status(500).json({message:"Unable to add landing page images"})
    
}

}

//for fetching images
const fetchImages=async(req,res)=>{

    try{
        const images=await landingModel.find();
        if(images){
            res.status(200).json({
                message:"Images fetched successfully",
                data:images
            })
        }
        
    }catch(err){
        console.log("Error Fetching images",err);
        res.status(500).json({
            message:"error fetching images"
        })
        
    }
}


//for deleting images

const deleteImages=async(req,res)=>{
    console.log("hello");
    
    const {id,public_id}=req.params
    try{
        if(id){
            const del = await landingModel.findByIdAndUpdate(
                id, 
                { $pull: { images: { public_id: public_id } } },
                { new: true }
            );
            
            if (del) {
                res.status(200).json({
                    message: 'Image deleted successfully',
                    deletedDocument: del
                });
            } else {
                res.status(404).json({ message: 'Landing page not found' });
            }
            
        }

    }catch(err){
        console.log("Error deleting images",err);
        res.status(500).json({
            message:"error Deleting images"
        })
    }
}
module.exports={createImages,fetchImages,deleteImages}