const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
  email: String,
  password: String,
});


module.exports= mongoose.model('User', Userschema);

// class UserManager {
//   static async register(userDatas) {
//     const registeredUser = await UserModel.save(userDatas);
//     return registeredUser;
//   }

//   login() {
//     return;
//   }

//   getUsers() {
//     return;
//   }
// }

// module.exports = UserManager;
