/**
 * Amalgamate JS Discord Client
 * @module AmalgamateJS:Clients
 * @see module:AmalgamateJS
 */
var logger = require('../logger');

/**
 * @classdesc Discord Client class for handling Discord specific logic.
 * @description Constructor for Discord Client Class.
 * @param {Object.<string, Object>} properties Dictionary containing connection
 *  settings.
 * @constructor
 */
function DiscordClient(properties) {
  // Validate for...
}

/**
 * @description Retrieve the name and identifier for this client.
 * @returns {string} The name/identifier for this client.
 */
DiscordClient.prototype.getName = function() {
  return 'Discord:' + this.port;
};

/**
 * @description Attempt to connect to Discord.
 * @returns {boolean} True if succeeds, False otherwise.
 */
DiscordClient.prototype.connect = function() {
  logger.debug('Attempting to connect Discord Client...');

  // Do stuff
};

module.exports = DiscordClient;
