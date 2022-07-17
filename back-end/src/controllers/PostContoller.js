const { PostModel } = require('../models/PostManager');
const jwt = require('jsonwebtoken');


class PostController {
  static create = async (req, res) => {
    const token = req.cookies.access_token;
    const { id : author } = jwt.verify(token, process.env.JWT_AUTH_SECRET);
    const { title, content } = req.body;
    console.log(author)
    const newPost = new PostModel({
      title,
      content,
      author
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
    try {
      const posts = await PostModel.find();
      res.status(200).send(posts);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
}

module.exports = PostController;
