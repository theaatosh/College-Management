const express=require("express");
const { createAchievement, deleteAchievement, updateAchievement, fetchAchievement } = require("../controller/achievementController");
const multer = require("multer");
const { createCloudinaryStorage } = require("../config/cloudinary");
const router=express.Router();

const achievementStorage=createCloudinaryStorage("achievement_images") 
const uploadAchievementImages=multer({storage:achievementStorage});


router.post('/create',createAchievement);
router.delete('/delete/:id',deleteAchievement)
router.put('/update/:id',updateAchievement);
router.get('/fetch',fetchAchievement);


module.exports=router;