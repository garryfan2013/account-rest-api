var Sequelize = require("sequelize");
var path = require('path');
var config = require(path.join(__dirname, '..', 'config', 'config.json'));

var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config);

var User = sequelize.import(path.join(__dirname, 'User.js'));
var Expense = sequelize.import(path.join(__dirname, 'Expense.js'));
var Category = sequelize.import(path.join(__dirname, 'Category.js'));
var PayChannel = sequelize.import(path.join(__dirname, 'PayChannel.js'));
var Family = sequelize.import(path.join(__dirname, 'Family.js'));

// Relations define
User.hasMany(Expense);
User.belongsTo(Family);
Family.hasMany(User);
Expense.belongsTo(User);
Expense.belongsTo(Category);
Expense.belongsTo(PayChannel);
Category.hasMany(Expense);
PayChannel.hasMany(Expense);

var categories = ['水电费','看电影','吃饭','养车费','养孩费'];
function initCategories() {
  var promiseArray = [];

  categories.forEach((v, i, a) => {
    promiseArray.push(Category.create({ name: v }));
  })

  return Promise.all(promiseArray);
}

var channels = ['支付宝','微信支付','现金','银联卡','ICBC信用卡','ICBC借记卡','CMB信用卡','CMB借记卡'];

function initChannels() {
  var promiseArray = [];

  channels.forEach((v, i, a) => {
    promiseArray.push(PayChannel.create({ name: v }));
  })

  return Promise.all(promiseArray);
}

function initUser() {
  return User.create({
    name: '范佳',
    address: '东湖尚郡3栋3301室',
    username: 'garryfan',
    number: '82886709',
    birthday: '1983-01-31',
    gender: 1
  });
}

function init(force) {
  return sequelize.sync({ force: force})
          .then(function() {
            return initChannels();
          })
          .then(function () {
            return initCategories();
          })
          .then(function () {
            return initUser();
          });
}

module.exports = {
  init: init,
  handle: sequelize,
  User: User,
  Expense: Expense,
  Category: Category,
  PayChannel: PayChannel,
  Family: Family
};
