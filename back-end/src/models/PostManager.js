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
  category: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Category',
    required: [true, 'Please provide a category!'],
  },
  comment: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment',
    required: [true, 'Please provide a category!'],
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = { PostModel };
