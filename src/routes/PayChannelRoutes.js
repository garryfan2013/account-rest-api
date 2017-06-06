
var path = require('path');
var service = require(path.join(__dirname, '..','services','PayChannelService'));

module.exports = function (server) {
  server.get('/PayChannels', function (req, res, next) {
    service.findPayChannels()
    .then(function (pcs) {
      res.send(200, pcs);
    });
  });

  server.get('/PayChannels/:id', function (req, res, next) {
    service.findPayChannelById(req.params.id)
    .then(function (pc) {
      res.send(200, pc);
    });
  })

  server.del('/PayChannels/:id', function (req, res, next) {
    service.deletePayChannelById(req.params.id)
    .then(function (result) {
      res.send(200);
    });
  })

  server.post('/PayChannels', function (req, res, next) {
    service.createPayChannels(req.body)
    .then(function () {
      res.send(200);
    })
    .catch(function (err) {
      res.send(400, err);
    });
  });

  server.put('/PayChannels/:id', function (req, res, next) {
    service.updatePayChannelById(req.params.id, req.body)
    .then(function (result) {
      if (result) {
        res.send(200);
      } else {
        res.send(500);
      }
    });
  });
};
