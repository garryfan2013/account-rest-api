var path = require('path');
var models = require(path.join(__dirname, '..','models'));

var createFamily = function (family) {
  return models.Family.create(family);
}

var createFamilies = function (families) {
  var funcs = [];
  families.forEach((v, i, a) => {
    funcs.push(createFamily(v));
  })
  return Promise.all(funcs);
}

var findFamilies = function (where) {
  return models.Family.findAll({ where: where });
}

var findFamilyById = function (id) {
  return models.Family.findById(id);
}

var deleteFamilyById = function (id) {
  return models.Family.destroy({ where: { id: id } });
}

var updateFamilyById = function (id, values) {
  return models.Family.update(values, {where: {id: id}});
}

module.exports = {
  createFamily: createFamily,
  createFamilies: createFamilies,
  findFamilies: findFamilies,
  findFamilyById: findFamilyById,
  deleteFamilyById: deleteFamilyById,
  updateFamilyById: updateFamilyById
}
