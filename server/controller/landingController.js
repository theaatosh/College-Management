const {landingModel}=require("../models/landingImagesModel")
const landingController=async(req,res)=>{
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

module.exports={landingController}