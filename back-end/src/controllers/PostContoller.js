const { PostModel } = require('../models/PostManager');
const jwt = require('jsonwebtoken');
const CategoryModel = require('../models/CategoryManager');

class PostController {
  static create = async (req, res) => {
    const author = req.userId;
    const { title, content, category, picture } = req.body;
    const newPost = new PostModel({
      title,
      content,
      author,
      category,
      picture,
    });

    try {
      const savedPost = await newPost.save();
      const categoryInitial = await CategoryModel.find({ _id: category });
      const oldPostList = categoryInitial[0].posts;
      const updatedCategory = await CategoryModel.updateOne(
        { _id: category },
        { posts: [...oldPostList, savedPost._id] }
      );
      res.status(200).send(savedPost);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static getAllPosts = async (req, res) => {
    try {
      const posts = await PostModel.find()
        .populate('author')
        .populate('category')
        .populate('comment');
      res.status(200).send(posts);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static getOnePost = async (req, res) => {
    const { postId } = req.params;
    try {
      const post = await PostModel.find({ _id: postId })
        .populate('author')
        .populate('category')
        .populate('comment');

      res.status(200).send(post);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static update = async (req, res) => {
    const { postId } = req.params;
    const updatedPost = req.body;
    try {
      const posts = await PostModel.updateOne({ _id: postId }, updatedPost);
      res.sendStatus(204);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static delete = async (req, res) => {
    const { postId } = req.params;
    try {
      const posts = await PostModel.deleteOne({ _id: postId });
      if (posts.deletedCount) {
        res.sendStatus(204);
      } else {
        response
          .status(404)
          .json({ message: `No post found with id ${postId}` });
      }
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
}

module.exports = PostController;
