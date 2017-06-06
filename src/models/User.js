module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('User', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    gender: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false },
    password: DataTypes.STRING
  });

  return user;
}
