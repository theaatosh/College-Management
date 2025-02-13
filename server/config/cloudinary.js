const cloudinary=require('cloudinary').v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");
const multer = require("multer");

//config cloudinary

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,

});

//yo xai setup cloudinary ko lagi
 const storeImage=(folderName)=>{
    console.log(folderName);
    
  const storage=  new CloudinaryStorage({
        cloudinary:cloudinary,
        params: {
            folder: folderName,
            allowed_formats: ['jpg', 'jpeg', 'png'],
          },
    })
    
    return multer({storage})
}
module.exports={storeImage,cloudinary}

