const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostContoller');
const CommentController = require('./controllers/CommentContoller');

const express = require('express');
const router = express.Router();

router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);
router.get(
  '/user/logout',
  UserController.authorization,
  UserController.logout
);

//CRUD Posts
router.post(
  '/post',
  UserController.authorization,
  UserController.isAdmin,
  PostController.create
);

router.get('/post/:postId?', PostController.browse);

router.put(
  '/post/:postId',
  UserController.authorization,
  UserController.isAdmin,
  PostController.update //TODO
);

router.delete(
  '/post/:postId',
  UserController.authorization,
  UserController.isAdmin,
  PostController.delete //TODO
);

//CRUD Commentaires
router.post(
  '/comment/:postId',
  UserController.authorization,
  CommentController.create
);
router.get(
  '/comment/post/:postId?',
  UserController.authorization,
  CommentController.browse
);
router.get(
  '/comment/:commentId',
  UserController.authorization,
  CommentController.getOne
);
router.put(
  '/comment/:commentId',
  UserController.authorization,
  CommentController.update //TODO
);

router.delete(
  '/comment/:commentId',
  UserController.authorization,
  CommentController.delete //TODO
);

module.exports = router;
