const UserRepository = require('../repositories/User');

exports.checkUser = async (userId) => {
  // giai ma userId
  // phan tich ....
  var userInfo = await UserRepository.getUser(userId);
  return userInfo ? true : false;
}