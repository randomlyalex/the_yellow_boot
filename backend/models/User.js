const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  emailValidated: {
    type: Boolean,
  },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [8, 'Minimum password length must be 8 characters'],
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
