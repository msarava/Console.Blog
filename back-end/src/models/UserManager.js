const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: false,
    unique: false,
  },
  firstname: {
    type: String,
    required: false,
    unique: false,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Please provide an Email!'],
    unique: [true, 'Email Exist'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    unique: false,
  },
  role: String,
  picture: {
    type: String,
    required: false,
    unique: false,
  },
});

const UserModel = mongoose.model('User', UserSchema);



module.exports = {UserModel, UserSchema};
