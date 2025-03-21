const express = require("express");
const { storeImage } = require("../config/cloudinary");
const {
  createImages,
  fetchImages,
} = require("../controller/landingController");
const router = express.Router();

router.post(
  "/create",
  storeImage("landing").array("landingPic", 5),
  createImages
);
router.get("/fetch", fetchImages);
// router.delete('/delete/:id/images/:public_id',deleteImages)

module.exports = router;
