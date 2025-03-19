const { storeImage } = require("../config/cloudinary");
const { createEvent, fetchEvent, deleteEvent, updateEvent } = require("../controller/eventsController");
const express=require("express")
const router=express.Router();


router.get("/fetch",fetchEvent)
router.post("/create",storeImage("event").array('image',3),createEvent)
router.delete("/delete/:id",deleteEvent)
router.put("/update/:id",storeImage("event").array('image',3),updateEvent)

module.exports=router