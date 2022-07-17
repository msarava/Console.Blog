const CommentModel = require('../models/CommentManager');
const jwt = require('jsonwebtoken');

class CommentController {
  static create = async (req, res) => {
    const token = req.cookies.access_token;
    const { id: author } = jwt.verify(token, process.env.JWT_AUTH_SECRET);
    const { content, parentPost } = req.body;
    const newComment = new CommentModel({
      content,
      author,
      parentPost,
    });

    try {
      const savedComment = await newComment.save();
      res.status(200).send(savedComment);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static browse = async (req, res) => {
    try {
      const comments = await CommentModel.find();

      //TODO filter les comment d'un post particulier
      res.status(200).send(comments);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
}

module.exports = CommentController;
