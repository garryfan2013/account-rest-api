
var path = require('path');
var userRoutes = require(path.join(__dirname, 'UserRoutes'));
var categoryRoutes = require(path.join(__dirname, 'CategoryRoutes'));
var payChannelRoutes = require(path.join(__dirname, 'PayChannelRoutes'));
var familyRoutes = require(path.join(__dirname, 'FamilyRoutes'));
var expenseRoutes = require(path.join(__dirname, 'ExpenseRoutes'));
var loginRoutes = require(path.join(__dirname, 'LoginRoutes'));
var acl = require(path.join(__dirname, 'ACL'));

module.exports = function (server) {
  // acl must be called at the first place or it will not take effect
  acl(server);
  userRoutes(server);
  categoryRoutes(server);
  payChannelRoutes(server);
  familyRoutes(server);
  expenseRoutes(server);
  loginRoutes(server);
}
