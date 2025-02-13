const express=require("express");
const { storeImage } = require("../config/cloudinary");
const { landingController } = require("../controller/landingController");
const router=express.Router();

router.post('/create',storeImage("landing").array('image',3),landingController)


module.exports=router