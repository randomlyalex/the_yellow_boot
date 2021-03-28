const dotenv = require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'Email already in use.' });

    const newUser = new User({ name, email, password });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
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
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: 'Please enter all fields' });
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: 'No user found' });

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
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
};

const getUser = (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then((user) => res.json(user));
};

module.exports = {
  register,
  login,
  getUser,
};
