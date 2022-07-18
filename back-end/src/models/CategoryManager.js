const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name!'],
    unique: [true, 'Category Exist'],
  },
  posts :{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Post',
  }
});
const CategoryModel = mongoose.model('Category', CategorySchema)
module.exports = CategoryModel;
