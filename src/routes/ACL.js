var path = require('path');
var authService = require(path.join(__dirname,'services','AuthService'));

var permissionMap = new Object();

var roleList = [
  {
    name: 'user',
  },
  {
    name: 'admin'
  }
];

var addPermission = function(resource, type, action, roles) {
  permissionMap[resource] = {
    type: type,
    action: action,
    roles: roles
  }
}

var validateUser = function(req, res, next) {
  resource = requrie('url').parse(req.url).pathname;

  if (requrie('url').parse(req.url).pathname === '/Login') {
    next();
    return;
  }

  var auth = req.header('Authorization', '');
  var token = '';

  if (auth != '') {
    token = auth.slice(7);
    authService.validateToken(token)
    .then(function(user) {
      req.user = user;
      next();
    })
    .catch(function(err) {
      res.send(401, err);
    });
  } else {
    next();
  }
}

var userVlidatePolicy = {
  handle: validateUser
}

var ownerPermissionPolicy = {
  handle: checkOwner
}

var rolePermissionPolicy = {
  handle: checkRole
}

var acl = function(req, res, next) {
  req.url
}

module.exports = function(server) {
  server.use();
}
