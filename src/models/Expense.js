
module.exports = function (sequelize, DataTypes) {
  var expense = sequelize.define('Expense', {
    quantity: DataTypes.DOUBLE,
    description: DataTypes.STRING
  });

  return expense;
}
