const UserManager = require('../models/UserManager');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');

class UserController {
  static register = async (req, res) => {
    const { email, password: clearpassword } = req.body;
    const password = await argon2.hash(clearpassword);
    const user = new UserManager({ email, password });

    //TODO vérifier si mail et mpd renseignés + mail non utilisés

    try {
      const result = await user.save();
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };

  static login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send('Please specify both email and password');
    } else {
      // trouver le user via son mail : si pas de mail => erreur
      // Récupérer les info de user puis vérification argon2 : si mdp KO => erreur
      // Création du token
      // const token = jwt.sign(
      //   {
      //     id: id,
      //     role: role,
      //   },
      //   process.env.JWT_AUTH_SECRET,
      //   { expiresIn: '1h' }
      // );
      // Envoi via cookies
      // res
      // .cookie('access_token', token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === 'production',
      // })
      // .status(200)
      // .json({ id, email, role });
    }
  };
  static authorization = (req, res) => {
    const { email, password } = req.body;
  };
  static getUsers = (req, res) => {
    const { data } = req.body;
  };
}

module.exports = UserController;
