const User = require('../models/user');

exports.getUser = async (userId) => {
  var userInfo = await User.findById(userId);
  return userInfo;
}