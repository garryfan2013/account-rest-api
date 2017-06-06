
var path = require('path');
var restify = require('restify');
var models = require(path.join(__dirname, 'models'));
var routes = require(path.join(__dirname, 'routes'));

models.init(true)
.then(function (user) {
  var server = restify.createServer({
    name: 'restapi-server'
  });

  // Register restify plugin
  server.use(restify.queryParser());
  server.use(restify.bodyParser({ mapParams: true }));

  // Register all rest api handler
  routes(server);

  // Start server
  server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
  });
})
