module.exports = function (sequelize, DataTypes) {
  var family = sequelize.define('Family', {
    name: DataTypes.STRING
  });

  return family;
}
