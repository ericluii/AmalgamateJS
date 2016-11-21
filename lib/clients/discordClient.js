var logger = require('../logger');

function DiscordClient(properties) {
  // Validate for...
}

DiscordClient.prototype.getName = function() {
  return 'Discord:' + this.port;
};

DiscordClient.prototype.connect = function() {
  logger.debug('Attempting to connect Discord Client...');

  // Do stuff
};

module.exports = DiscordClient;
