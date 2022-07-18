const { PostModel } = require('../models/PostManager');
const jwt = require('jsonwebtoken');

class PostController {
  static create = async (req, res) => {
    const author = req.userId;
    const { title, content } = req.body;
    const newPost = new PostModel({
      title,
      content,
      author,
    });

    try {
      const savedPost = await newPost.save();
      res.status(200).send(savedPost);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static browse = async (req, res) => {
    const { postId } = req.params;
    console.log(postId);
    try {
      const posts = await PostModel.find(postId ? { _id: postId } : {});
      res.status(200).send(posts);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };

  static update = async (req, res) => {
    //TODO
    const { postId } = req.params;
    const updatedPost = req.body;
    try {
      const posts = await PostModel.updateOne({ _id: postId }, updatedPost);
      res.status(204);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static delete = async (req, res) => {
    const postId = req.params;
    try {
      const posts = await PostModel.deleteOne({ _id: postId });
      if (result.deletedCount) {
        response.sendStatus(204);
      } else {
        response
          .status(404)
          .json({ message: `No todo found with id ${postId}` });
      }
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
}

module.exports = PostController;
