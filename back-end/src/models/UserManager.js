const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: 'Lastname is required',

    match: [/^[a-z ,.'-]+$/, 'Please fill a valid email address'],
  },
  firstname: {
    type: String,
    required: 'Firstname is required',

    match: [/^[a-z ,.'-]+$/, 'Please fill a valid email address'],
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
    required: [true, 'Please provide a password!'],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
