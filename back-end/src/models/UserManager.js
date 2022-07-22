const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: 'Lastname is required',

    match: [/^[a-zA-Z ,.'-]+$/, 'Please fill a valid email address'],
  },
  firstname: {
    type: String,
    required: 'Firstname is required',

    match: [/^[a-zA-Z ,.'-]+$/, 'Please fill a valid email address'],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    required: 'Please provide a password!',
    minlength: 8,
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      'Please fill a valid password',
    ],
  },
  role: {
    type: String,
    default: 'user',
  },
  picture: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserModel, UserSchema };
