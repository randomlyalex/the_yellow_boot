const dotenv = require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { username, name, email, password } = req.body;

  if (!username || !name || !email || !password) {
    res.status(400).json({ msg: 'Please enter all fields' });
  }

  const user = await User.findOne({ email });

  if (user) return res.status(400).json({ msg: 'Email already in use.' });

  const newUser = new User({ username, name, email, password });

  //fix this with async? https://attacomsian.com/blog/nodejs-password-hashing-with-bcrypt
  // https://www.npmjs.com/package/bcrypt#api
  // Create salt and hash
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
};

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
