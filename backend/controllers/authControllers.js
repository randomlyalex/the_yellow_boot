const dotenv = require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { username, name, email, password } = req.body;

  //Check username or email already exists
  const userExists = await User.findOne({ $or: [{ email }, { username }] });
  if (userExists) {
    return res.status(400).json({
      msg: 'email or username already in use',
    });
  }
  let newUser = new User({
    username,
    name,
    email,
    password,
  });
  //Hash the password and create new user from request data
  bcrypt.hash(password, 10, async (err, hashedPass) => {
    if (err) {
      return res.json({
        error: err,
      });
    }
    newUser.password = hashedPass;
    try {
      await newUser.save();
      let userToken = await jwt.sign(
        { id: newUser._id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 }
      );
      return res.status(200).json({
        token: userToken,
        newUser: {
          id: newUser._id,
          username: newUser.username,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (err) {
      return res.status(400).send({ msg: 'error saving', error: err });
    }
  });
};

const login = async (req, res) => {
  const { username, email, password } = req.body;
  if (!password || !(email || username)) {
    res.status(400).json({ msg: 'Username or Email and password required.' });
  }
  const user = await User.findOne({ $or: [{ email }, { username }] });
  //this needs await adding and catches
  if (!user) return res.status(400).json({ msg: 'Incorrect details' });

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Login failed' });

  let userToken = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });

  return res.status(200).json({
    token: userToken,
    user: {
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
    },
  });
};

const getUser = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

module.exports = {
  register,
  login,
  getUser,
};
