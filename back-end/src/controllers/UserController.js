const { UserModel } = require('../models/UserManager');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');

class UserController {
  static register = async (req, res) => {
    const { lastname, firstname, email, password: clearpassword } = req.body;
    if (!email || !clearpassword) {
      res.status(400).send({ error: 'Please specify both email and password' });
      return;
    }
    const registeredUser = await UserModel.find({ email: email });
    if (registeredUser.length !== 0) {
      res.status(403).send('Email already exists');
      return;
    }
    const password = await argon2.hash(clearpassword);
    const user = new UserModel({
      lastname,
      firstname,
      email,
      password,
    });

    try {
      const result = await user.save();
      res.status(200).send(result);
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500);
    }
  };
  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send('Please specify both email and password');
      return;
    }
    try {
      const registeredUser = await UserModel.find({ email: email });
      if (registeredUser.length === 0) {
        res.status(403).send('Invalid credentials');
      } else {
        const { id, password: hash, role } = registeredUser[0];
        if (await argon2.verify(hash, password)) {
          const token = jwt.sign(
            {
              id: id,
              role: role,
            },
            process.env.JWT_AUTH_SECRET,
            { expiresIn: '1h' }
          );
          res
            .cookie('access_token', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
            })
            .status(200)
            .json({ id, email, role });
        } else {
          res.status(403).send('Invalid credentials');
        }
      }
    } catch (error) {
      console.error('error', error.message);
      res.sendStatus(500);
    }
  };
  static authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(401);
    }
    try {
      const { id, role } = jwt.verify(token, process.env.JWT_AUTH_SECRET);
      req.userId = id;
      req.userRole = role;
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };
  static isAdmin = (req, res, next) => {
    const role = req.userRole;
    if (role === 'admin') {
      return next();
    }
    return res.sendStatus(403);
  };
  static logout = (req, res) => {
    return res
      .clearCookie('access_token')
      .status(200)
      .send('Successfully logged out');
  };
}

module.exports = UserController;
