const express = require("express");
const profile = require("../models/profile.model");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const router = express.Router();

const getProfile = async (req, res) => {
  const { id } = req.query;
  try {
    const profile_data = await profile
      .find({ _id: new ObjectId(id) })
      .select({ name: 1, email: 1 });
    res.status(200).json({
      response: profile_data,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createProfile = async (req, res) => {
  const payload = req.body;
  try {
    const profile_payload = new profile(payload);
    const { name, email, _id } = await profile_payload.save();
    console.log(name, email, _id);
    res.status(200).json({
      response: { name, email, id: _id },
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteProfile = async (req, res) => {
  const { id } = req.query;
  try {
    console.log(id);
    const profile_data = await profile.deleteOne({ _id: new ObjectId(id) });
    console.log(profile_data);
    res.status(200).json({
      resonse: profile_data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

const updateProfile = async (req, res) => {
  const { id, name, email } = req.body;
  try {
    const update_profile = await profile.updateOne(
      { _id: new ObjectId(id) },
      { name, email }
    );
    res.status(200).json({
      response: update_profile,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

router
  .route("/")
  .get(getProfile)
  .post(createProfile)
  .delete(deleteProfile)
  .put(updateProfile);

module.exports = router;
