var path = require('path');
var models = require(path.join(__dirname, '..','models'));

var createUser = function (user) {
  return models.User.create(user);
}

var createUsers = function (users) {
  var funcs = [];
  users.forEach((v, i, a) => {
    funcs.push(createUser(v));
  })
  return Promise.all(funcs);
}

var findUsers = function (where) {
  return models.User.findAll({ where: where });
}

var findUserById = function (id) {
  return models.User.findById(id);
}

var deleteUserById = function (id) {
  return models.User.destroy({ where: { id: id } });
}

var updateUserById = function (id, values) {
  return models.User.update(values, {where: {id: id}});
}

module.exports = {
  createUser: createUser,
  createUsers: createUsers,
  findUsers: findUsers,
  findUserById: findUserById,
  deleteUserById: deleteUserById,
  updateUserById: updateUserById
}
