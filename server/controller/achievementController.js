const { cloudinary } = require("../config/cloudinary");
const Achievement = require("../models/achievementModel");

//achievement post garna
const createAchievement = async (req, res) => {
  console.log(req.body);
  let secure_url = null;
  let public_id = null;
  req.files?.forEach((element) => {
    (secure_url = element.path), (public_id = element.filename);
  });
  const images = {
    secure_url,
    public_id,
  };
  const { acheivementHeading, acheivementSubHeading, acheivementDescription } =
    req.body;

  try {
    if (
      !acheivementHeading ||
      !acheivementSubHeading ||
      !acheivementDescription ||
      req.files.length === 0
    ) {
      return res.status(401).json({
        message: "All fields are required",
      });
    }

    const post = await Achievement.create({
      heading: acheivementHeading,
      subHeading: acheivementSubHeading,
      description: acheivementDescription,
      images,
    });
    if (post) {
      console.log(post);
      res.status(201).json({
        message: "achievement posted successfully",
        data: post,
      });
    }
  } catch (err) {
    console.log("Unable to post achievements" + err);

    res.status(500).json({
      message: "Unable to post achievements",
    });
  }
};

//achievement del garna
const deleteAchievement = async (req, res) => {
  const { id } = req.params;

  try {
    const exist = await Achievement.findById(id);

    if (!exist) {
      return res.status(400).json({
        error: "Doesnot Exist",
      });
    }
    await cloudinary.uploader.destroy(exist?.images?.public_id);
    const achievement = await Achievement.findByIdAndDelete(id);
    if (achievement) {
      res.status(200).json({
        message: "Deleted Successfully",
        data: achievement,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Unable to delete achievement",
    });
    console.log(err);
  }
};

//for fetching achievement
const fetchAchievement = async (req, res) => {
  try {
    const achievementData = await Achievement.find();
    if (achievementData) {
      res.status(200).json({
        message: "Achievements fetched successfully",
        data: achievementData,
      });
    } else {
      res.status(200).json({
        message: "No achievements",
        data: achievementData,
      });
    }
  } catch (err) {
    res.status(500).json("Error fetching in achievement");
  }
};

//for updating achievements
const updateAchievement = async (req, res) => {
  const { id } = req.params;
  let secure_url = null;
  let public_id = null;
  req.files?.forEach((element) => {
    (secure_url = element.path), (public_id = element.filename);
  });
  const images = {
    secure_url,
    public_id,
  };
  console.log(images);

  const { heading, subHeading, description } = req.body;
  try {
    if (!heading || !subHeading || !description || req.files.length === 0) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const exist = await Achievement.findById(id);
    console.log(exist);

    if (!exist) {
      return res.status(400).json({
        error: "Doesnot Exist",
      });
    }
    console.log(exist.images.public_id);

    const deletedImage = await cloudinary.uploader.destroy(
      exist?.images?.public_id
    );

    const achievement = await Achievement.findByIdAndUpdate(
      id,
      { heading, subHeading, description, images },
      { new: true }
    );
    if (achievement) {
      res.status(200).json({
        message: "Updated Successfully",
        data: achievement,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Unable to update achievement",
    });
    console.log(err);
  }
};

module.exports = {
  createAchievement,
  deleteAchievement,
  fetchAchievement,
  updateAchievement,
};
