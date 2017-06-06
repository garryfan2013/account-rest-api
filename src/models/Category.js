
module.exports = function (sequelize, DataTypes) {
  var category = sequelize.define('ExpenseCategory', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  return category;
}
