const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostContoller');
const CommentController = require('./controllers/CommentContoller');
const CategoryController = require('./controllers/CategoryContoller');

const express = require('express');
const router = express.Router();

router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);
router.get('/user/logout', UserController.authorization, UserController.logout);

//CRUD Posts
router.post(
  '/post',
  UserController.authorization,
  UserController.isAdmin,
  PostController.create
);

router.get('/post', PostController.getAllPosts);
router.get('/post/:postId', PostController.getOnePost);

router.put(
  '/post/:postId',
  UserController.authorization,
  UserController.isAdmin,
  PostController.update
);

router.delete(
  '/post/:postId',
  UserController.authorization,
  UserController.isAdmin,
  PostController.delete
);

//CRUD Commentaires
router.post(
  '/comment/:postId',
  UserController.authorization,
  CommentController.create
);
router.get('/comment/post/:postId?', CommentController.browse);
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

//CRUD Categories
router.post(
  '/category',
  UserController.authorization,
  UserController.isAdmin,
  CategoryController.create
);

router.get('/category/:categoryId?', CategoryController.browse);

router.put(
  '/category/:categoryId',
  UserController.authorization,
  UserController.isAdmin,
  CategoryController.update
);

router.delete(
  '/category/:categoryId',
  UserController.authorization,
  UserController.isAdmin,
  CategoryController.delete
);
module.exports = router;
