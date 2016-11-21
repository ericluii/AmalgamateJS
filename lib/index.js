/*
 * Module dependencies
 */
var logger = require('./logger');

/*
 * AmalgamateJS Constructor
 * @constructor
 */
function AmalgamateJS() {
  logger.debug('Initializing AmalgamateJS...');

  logger.debug('Creating properties...');
  this.clients = [];
  this.clientNames = [];

  logger.debug('Done initializing AmalgamateJS.');
}

// Class Functions
AmalgamateJS.prototype.addClient = function(client) {
  logger.debug('Adding client: ' + client.getName());

  this.clients.push(client);
  this.clientNames.push(client.getName());
};

AmalgamateJS.prototype.getClients = function() {
  return this.clientNames;
};

AmalgamateJS.prototype.connect = function() {
  logger.debug('Connecting ' + this.clients.length + ' client(s)...');

  this.clients.forEach(function(client) {
    client.connect();
  });
};

module.exports = {
  'Base': AmalgamateJS,
  'FacebookClient': require('./clients/facebookClient'),
  'DiscordClient': require('./clients/discordClient')
};
