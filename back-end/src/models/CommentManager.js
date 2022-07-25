const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: ,
    required: [true, 'Please provide a content text!'],
    match: [/[a-zA-Z0-9@=\-'"]+/, 'Please provide correct expression'],
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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
});
const CommentModel = mongoose.model('Comment', CommentSchema);
module.exports = CommentModel;
