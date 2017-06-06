var path = require('path');
var service = require(path.join(__dirname, '..','services','ExpenseService'));

module.exports = function (server) {
  server.get('/Expenses', function (req, res, next) {
    service.findExpenses({ UserId: req.user.id })
    .then(function (expenses) {
      res.send(200, expenses);
    })
    .catch(function (err) {
      console.log("ERROR!");
      error = new restify.errors.InternalServerError('get categories error!');
      next(error);
    });
  });

  server.get('/Expenses/:id', function (req, res, next) {
    service.findExpenseById(req.params.id)
    .then(function (expense) {
      res.send(200, expense);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  })

  server.del('Expenses/:id', function (req, res, next) {
    service.deleteExpenseById(req.params.id)
    .then(function (expense) {
      res.send(200);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  })

  server.post('/Expenses', function (req, res, next) {
    service.createExpenses(req.body, req.user)
    .then(function () {
      res.send(200);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  });

  server.put('/Expenses/:id', function (req, res, next) {
    service.updateExpenseById(req.params.id, req.body)
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
