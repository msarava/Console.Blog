const UserController = require('./controllers/UserController');

const express = require('express');
const router = express.Router();

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);
router.post('/users/logout',UserController.authorization, UserController.logout);
router.get('/admin/posts',UserController.authorization, UserController.isAdmin, UserController.browse);
// router.get('/posts', UserController.authorization, UserController.read)




// router.get('/users', UserController.authorization, UserController.getUsers);

module.exports = router;
