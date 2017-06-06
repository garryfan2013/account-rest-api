
var path = require('path');
var service = require(path.join(__dirname, '..','services','CategoryService'));

module.exports = function (server) {
  server.get('/Categories', function (req, res, next) {
    service.findCategories()
    .then(function (categories) {
      res.send(200, categories);
    })
    .catch(function (err) {
      error = new restify.errors.InternalServerError('get categories error!');
      next(error);
    });
  });

  server.get('/Categories/:id', function (req, res, next) {
    service.findCategoryById(req.params.id)
    .then(function (category) {
      res.send(200, category);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  })

  server.del('/Categories/:id', function (req, res, next) {
    service.deleteCategoryById(req.params.id)
    .then(function (result) {
      res.send(200);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  })

  server.post('/Categories', function (req, res, next) {
    service.createCategories(req.body)
    .then(function () {
      res.send(200);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  });

  server.put('/Categories/:id', function (req, res, next) {
    service.updateCategoryById(req.params.id, req.body)
    .then(function (result) {
      if (result) {
        res.send(200);
      } else {
        res.send(500);
      }
    })
    .catch(function (err) {
      res.send(400, err);
    });
  });
};
