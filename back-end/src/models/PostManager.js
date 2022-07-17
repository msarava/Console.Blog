const mongoose = require('mongoose');
const { UserSchema } = require('../models/UserManager');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title!'],
  },
  content: {
    type: String,
    required: [true, 'Please provide a content!'],
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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = { PostModel };
