
var path = require('path');
var jwt = require('jwt-simple');
var moment = require('moment');
var userService = require(path.join(__dirname, '..','services','UserService'));

var generateJWT = function (user) {
  var expires = moment().add('days', 7).valueOf();
  var token = jwt.encode({
    iss: user.id,
    exp: expires
  }, 'jwtTokenSecret');

  return {
    token : token,
    expires: expires,
    user: user.toJSON()
  };
}

var validateToken = function (token) {
  var info = jwt.decode(token, 'jwtTokenSecret');
  console.log("%s", info.iss);
  return userService.findUserById(info.iss);
}

var authenticateUser = function (username, password) {
  return userService.findUsers({ username: username })
  .then(function (users) {
    if (true/*users[0].password === password*/) {
      return generateJWT(users[0]);
    } else {
      console.log("password not correct!");
      throw new Error('Incorrect password!');
    }
  });
}

module.exports = {
  authticateUser: authticateUser,
  validateToken: validateToken
}
