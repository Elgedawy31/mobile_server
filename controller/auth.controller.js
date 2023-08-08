const { UserModel } = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CreateUser = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);

  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    location: req.body.location,
    password: hash,
  });

  try {
    await newUser.save();

    res.status(200).json("User Created");
  } catch (error) {
    res.status(500).json("Error From Create User", error);
  }
};

const Login = async (req, res) => {
  try {
    const User = await UserModel.findOne({ email: req.body.email });

    const statusPassword = bcrypt.compareSync(req.body.password , User.password);

    if (statusPassword) {
      const UserToken = jwt.sign({ id: User._id } , process.env.JWTPass);


      res.status(200).json({User , Token: UserToken});
    } else {
      res.status(404).json("User Not Founded");
    }
  } catch (error) {

    res.status(500).json(error)
  }
};

module.exports = { CreateUser, Login };
