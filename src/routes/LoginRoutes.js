var path = require('path');
var authService = require(path.join(__dirname, '..','services','AuthService'));

module.exports = function (server) {
  server.post('/Login', function (req, res, next) {
    authService.authenticateUser(req.body.username, "")
    .then(function (body) {
      res.send(200, body);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  });
}
