const CommentModel = require('../models/CommentManager');
const jwt = require('jsonwebtoken');

class CommentController {
  static create = async (req, res) => {
    const author = req.userId;
    const { content } = req.body;
    const { postId: parentPost } = req.params;
    console.log(parentPost);
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
    const { postId } = req.params;
    try {
      const comments = await CommentModel.find(
        postId ? { parentPost: postId } : {}
      );
      res.status(200).send(comments);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static getOne = async (req, res) => {
    const { commentId } = req.params;
    try {
      const comments = await CommentModel.findById(commentId);
      res.status(200).send(comments);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };

  static update = async (req, res) => {
    const { commentId } = req.params;
    const updatedComment = req.body;

    try {
      const comments = await CommentModel.updateOne(
        { _id: commentId },
        updatedComment
      );
      res.status(200).send(comments);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static delete = async (req, res) => {
    const { commentId } = req.params;
    try {
      const comments = await CommentModel.deleteOne({ _id: commentId });
      res.status(200).send(comments);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
}

module.exports = CommentController;
