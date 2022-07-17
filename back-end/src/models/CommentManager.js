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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  parentPost :{
    type :mongoose.Schema.Types.ObjectId,
    ref :'Post'
  }
});
const CommentModel =  mongoose.model('Comment', CommentSchema);
module.exports = CommentModel;
