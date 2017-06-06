
var path = require('path');
var service = require(path.join(__dirname, '..','services','UserService'));

module.exports = function (server) {
  server.get('/Users', function (req, res, next) {
    service.findUsers()
    .then(function (users) {
      res.send(200, users);
    });
  });

  server.get('/Users/:id', function (req, res, next) {
    service.findUserById(req.params.id)
    .then(function (user) {
      res.send(200, user);
    });
  })

  server.del('/Users/:id', function (req, res, next) {
    service.deleteUserById(req.params.id)
    .then(function (result) {
      res.send(200);
    });
  })

  server.post('/Users', function (req, res, next) {
    service.createUsers(req.body)
    .then(function () {
      res.send(200);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  });

  server.put('/Users/:id', function (req, res, next) {
    service.updateUserById(req.params.id, req.body)
    .then(function (result) {
      if (result) {
        res.send(200);
      } else {
        res.send(500);
      }
    });
  });
};
