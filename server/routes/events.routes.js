const { createEvent, fetchEvent, deleteEvent, updateEvent } = require("../controller/eventsController");
const express=require("express")
const router=express.Router();


router.get("/fetch",fetchEvent)
router.post("/create",createEvent)
router.delete("/delete/:id",deleteEvent)
router.put("/update/:id",updateEvent)

module.exports=router