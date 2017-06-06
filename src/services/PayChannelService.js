var path = require('path');
var models = require(path.join(__dirname, '..','models'));

var createPayChannel = function (pc) {
  return models.PayChannel.create(pc);
}

var createPayChannels = function (pcs) {
  var funcs = [];
  PayChannels.forEach((v, i, a) => {
    funcs.push(createPayChannel(v));
  })
  return Promise.all(funcs);
}

var findPayChannels = function (where) {
  return models.PayChannel.findAll({ where: where });
}

var findPayChannelById = function (id) {
  return models.PayChannel.findById(id);
}

var deletePayChannelById = function (id) {
  return models.PayChannel.destroy({ where: { id: id } });
}

var updatePayChannelById = function (id, values) {
  return models.PayChannel.update(values, {where: {id: id}});
}

module.exports = {
  createPayChannel: createPayChannel,
  createPayChannels: createPayChannels,
  findPayChannels: findPayChannels,
  findPayChannelById: findPayChannelById,
  deletePayChannelById: deletePayChannelById,
  updatePayChannelById: updatePayChannelById
}
