const userServ = require('../services/userService');

exports.funcHello = async (req, res) => {
  res.send("Hello World!");
};

exports.funcGetUsers = userServ.getAllUsers;
exports.funcGetUser = userServ.GetUser;
exports.funcDeleteUser = userServ.DeleteUser;
exports.funcCreateUser = userServ.CreateUser;

