const cloudinary=require('cloudinary');
const {CloudinaryStorage}=require("multer-storage-cloudinary");


//config cloudinary

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,

});

//yo xai setup cloudinary ko lagi
const createCloudinaryStorage=(folderName)=>{

    return new CloudinaryStorage({
        cloudinary,
        params:{
            folder:folderName,
            allowed_formats:['jpg','jpeg','png'],
        },
    })
}
module.exports={createCloudinaryStorage,cloudinary}

