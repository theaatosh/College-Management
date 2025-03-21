const { storeImage } = require("../config/cloudinary");

const {
  createEvent,
  fetchEvent,
  deleteEvent,
  updateEvent,
} = require("../controller/eventsController");

const express = require("express");
const router = express.Router();

const upload = storeImage("event");
router.post(
  "/create",
  upload
    ? upload.array("eventPhotos", 5)
    : (req, res, next) =>
        res.status(400).json({ message: "problem in clodinary" }), // Ensure `storeImage` is valid
  createEvent
);

router.get("/fetch", fetchEvent);
router.delete("/delete/:id", deleteEvent);
router.put("/update/:id", storeImage("event").array("image", 5), updateEvent);

module.exports = router;
