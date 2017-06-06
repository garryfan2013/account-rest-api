
var path = require('path');
var service = require(path.join(__dirname, '..','services','FamilyService'));

module.exports = function (server) {
  server.get('/Families', function (req, res, next) {
    service.findFamilies()
    .then(function (families) {
      res.send(200, families);
    });
  });

  server.get('/Families/:id', function (req, res, next) {
    service.findFamilyById(req.params.id)
    .then(function (family) {
      res.send(200, family);
    });
  })

  server.del('/Families/:id', function (req, res, next) {
    service.deleteFamilyById(req.params.id)
    .then(function (result) {
      res.send(200);
    });
  })

  server.post('/Families', function (req, res, next) {
    service.createFamilies(req.body)
    .then(function () {
      res.send(200);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  });

  server.put('/Families/:id', function (req, res, next) {
    service.updateFamilyById(req.params.id, req.body)
    .then(function (result) {
      if (result) {
        res.send(200);
      } else {
        res.send(500);
      }
    });
  });
};
