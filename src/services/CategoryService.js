var path = require('path');
var models = require(path.join(__dirname, '..','models'));

var createCategory = function (category) {
  return models.Category.create(category);
}

var createCategories = function (categories) {
  var funcs = [];
  categories.forEach((v, i, a) => {
    funcs.push(createCategory(v));
  })
  return Promise.all(funcs);
}

var findCategories = function (where) {
  return models.Category.findAll({ where: where });
}

var findCategoryById = function (id) {
  return models.Category.findById(id);
}

var deleteCategoryById = function (id) {
  return models.Category.destroy({ where: { id: id } });
}

var updateCategoryById = function (id, values) {
  return models.Category.update(values, {where: {id: id}});
}

module.exports = {
  createCategory: createCategory,
  createCategories: createCategories,
  findCategories: findCategories,
  findCategoryById: findCategoryById,
  deleteCategoryById: deleteCategoryById,
  updateCategoryById: updateCategoryById
}
