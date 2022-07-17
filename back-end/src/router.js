const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostContoller');

const express = require('express');
const router = express.Router();

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);
router.get(
  '/users/logout',
  UserController.authorization,
  UserController.logout
);
router.get(
  '/admin/posts',
  UserController.authorization,
  UserController.isAdmin,
  PostController.browse
);
router.post(
  '/posts',
  UserController.authorization,
  UserController.isAdmin,
  PostController.create
);

// router.get('/posts', UserController.authorization, UserController.getUsers);posts

module.exports = router;
