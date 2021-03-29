const dotenv = require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { username, name, email, password } = req.body;

  //Check username or email already exists
  const userExists = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (userExists) {
    return res.status(400).send('email or username already in use');
  }
  let newUser = new User({ username, name, email, password });
  //Hash the password and create new user from request data
  bcrypt.hash(password, 10, async function (err, hashedPass) {
    if (err) {
      return res.json({ error: err });
    }
    newUser.password = hashedPass;
    try {
      await newUser.save();
      let userToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
      });
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
      return res.status(400).send(err);
    }
  });
};

function register_old(req, res) {
  const { username, name, email, password } = req.body;

  if (!username || !name || !email || !password) {
    res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'Email already in use.' });
  });

  let newUser = new User({ username, name, email, password });

  // Create salt and hash and save
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((newUser) => {
        jwt.sign(
          { id: newUser._id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              newUser: {
                id: user._id,
                username: user.username,
                name: user.name,
                email: user.email,
              },
            });
          }
        );
      });
    });
  });
}

const login = async (req, res) => {
  const { username, email, password } = req.body;
  if (!password || !(email || username)) {
    res.status(400).json({ msg: 'Username or Email and password required.' });
  }
  const user = await User.findOne({
    $or: [{ email }, { username }],
  });
  //this needs await adding and catches
  if (!user) return res.status(400).json({ msg: 'Incorrect details' });

  // Validate password
  bcrypt.compare(password, user.password).then((isMatch) => {
    if (!isMatch) return res.status(400).json({ msg: 'Login failed' });

    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
          },
        });
      }
    );
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
