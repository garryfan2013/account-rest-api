var path = require('path');
var models = require(path.join(__dirname, '..','models'));

var createExpense = function (expense, user) {
  return models.Expense.create(expense)
          .then(function (result) {
            return user.addExpense(result);
          });
}

var createExpenses = function (expenses, user) {
  var funcs = [];
  expenses.forEach((v, i, a) => {
    funcs.push(createExpense(v, user));
  })
  return Promise.all(funcs);
}

var findExpenses = function (where) {
  return models.Expense.findAll({ where: where });
}

var findExpenseById = function (id) {
  return models.Expense.findById(id);
}

var deleteExpenseById = function (id) {
  return models.Expense.destroy({ where: { id: id } });
}

var updateExpenseById = function (id, values) {
  return models.Expense.update(values, {where: {id: id}});
}

module.exports = {
  createExpense: createExpense,
  createExpenses: createExpenses,
  findExpenses: findExpenses,
  findExpenseById: findExpenseById,
  deleteExpenseById: deleteExpenseById,
  updateExpenseById: updateExpenseById
}
