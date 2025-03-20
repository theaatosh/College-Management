const express=require("express");
const { createAchievement, deleteAchievement, updateAchievement, fetchAchievement } = require("../controller/achievementController");

const { createCloudinaryStorage } = require("../config/cloudinary");
const router = express.Router();

const {storeImage}=require('../config/cloudinary.js')


router.post('/create',storeImage("achievement").array('image',5),createAchievement);
router.delete('/delete/:id',deleteAchievement)
router.put('/update/:id',storeImage("achievement").array('image',5),updateAchievement);
router.get('/fetch',fetchAchievement);


module.exports = router;
