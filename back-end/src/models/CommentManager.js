const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please provide a content text!'],
    unique: false,
  },
  createdAt: {
    type: Date,
    immutable : true,
    default: () => Date.now(),
    required: [true, 'Please provide a creation date!'],
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
