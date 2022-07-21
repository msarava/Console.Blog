const CommentModel = require('../models/CommentManager');
const jwt = require('jsonwebtoken');
const { PostModel } = require('../models/PostManager');

class CommentController {
  static create = async (req, res) => {
    const author = req.userId;
    const { content } = req.body;
    const { postId: post } = req.params;
    const newComment = new CommentModel({
      content,
      author,
      post,
    });

    try {
      const savedComment = await newComment.save();
      const initialPost = await PostModel.findOne({ _id: post });
      const oldCommentList = initialPost.comment;
      const updatedPost = await PostModel.updateOne(
        { _id: post },
        {
          comment: [...oldCommentList, savedComment._id],
        }
      );

      res.status(200).send(savedComment);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static browse = async (req, res) => {
    const { postId } = req.params;
    try {
      const comments = await CommentModel.find({ post: postId }).populate(
        'author'
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
