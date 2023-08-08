const { UserModel } = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const DeleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);

    res.status(200).json("User Deleted");
  } catch (error) {
    res.status(500).json("Error From Delete User", error);
  }
};

const getUser = async (req, res) => {
  try {
    const User = await UserModel.findById(req.params.id);

    !User && res.status(404).json("No User");

    res.status(200).json(User);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { DeleteUser, getUser };
