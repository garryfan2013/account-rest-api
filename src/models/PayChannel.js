module.exports = function (sequelize, DataTypes) {
  var paychannel = sequelize.define('PayChannel', {
    name: DataTypes.STRING
  });

  return paychannel;
}
