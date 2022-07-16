const mongoose = require('mongoose');
const { UserSchema } = require('../models/UserManager');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title!'],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
    required: [true, 'Please provide a creation date!'],
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  picture: {
    type: String,
  },
  Author: UserSchema,
});

module.exports = mongoose.model('Post', PostSchema);
