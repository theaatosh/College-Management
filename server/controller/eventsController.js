const { cloudinary } = require("../config/cloudinary");
const eventModel = require("../models/eventModel");

//for fetching event
const fetchEvent = async (req, res) => {
  try {
    const eventData = await eventModel.find();
    if (eventData) {
      res.status(200).json({
        message: "Events fetched successfully",
        data: eventData,
      });
    } else {
      res.status(200).json({
        message: "No Events",
        data: eventData,
      });
    }
  } catch (err) {
    res.status(500).json("Error fetching in events");
  }
};

//for creating event
const createEvent = async (req, res) => {
  const { heading, subHeading, description } = req.body;
  let secure_url = null;
  let public_id = null;
  req.files?.forEach((image) => {
    (secure_url = image.path), (public_id = image.filename);
  });
  const images = {
    secure_url,
    public_id,
  };
  try {
    if (!heading || !subHeading || !description || req.files.length === 0) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const post = await eventModel.create({
      heading,
      subHeading,
      description,
      images,
    });
    if (post) {
      res.status(201).json({
        message: "event posted successfully",
        data: post,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Unable to post event",
    });
  }
};

//for deleting event
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const exist = await eventModel.findById(id);

    if (!exist) {
      return res.status(400).json({
        error: "Doesnot Exist",
      });
    }
    await cloudinary.uploader.destroy(exist?.images?.public_id);
    const event = await eventModel.findByIdAndDelete(id);
    if (event) {
      res.status(200).json({
        message: "Deleted Successfully",
        data: event,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Unable to delete event",
    });
    console.log(err);
  }
};

//for updating event
const updateEvent = async (req, res) => {
  const { id } = req.params;

  let secure_url = null;
  let public_id = null;
  req.files?.forEach((image) => {
    (secure_url = image.path), (public_id = image.fullname);
  });

  const images = {
    secure_url,
    public_id,
  };
  const { heading, subHeading, description } = req.body;
  try {
    if (!heading || !subHeading || !description || req.files.length === 0) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const exist = await eventModel.findById(id);

    if (!exist) {
      return res.status(400).json({
        error: "Doesnot Exist",
      });
    }
    const del = await cloudinary.uploader.destroy(exist?.images?.public_id);
    console.log(del);

    const event = await eventModel.findByIdAndUpdate(
      id,
      { heading, subHeading, description, images },
      { new: true }
    );

    if (event) {
      res.status(200).json({
        message: "Updated Successfully",
        data: event,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Unable to update event",
    });
    console.log(err);
  }
};

module.exports = { fetchEvent, createEvent, deleteEvent, updateEvent };
