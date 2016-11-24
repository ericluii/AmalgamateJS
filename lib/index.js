/**
 * AmalgamateJS Base
 * @module AmalgamateJS
 * @see AmalgamateJS:Clients
 */
var logger = require('./logger');

/**
 * @description Creates an instance of the AmalgamateJS Base.
 * @classdesc Main adapter class that users use to interact with framework.
 * @constructor
 */
function AmalgamateBase() {
  logger.debug('Initializing AmalgamateBase...');

  logger.debug('Creating properties...');
  this.clients = [];
  this.clientNames = [];

  logger.debug('Done initializing AmalgamateBase.');
}

/**
 * @description Add an amalgamateJS client to the client list.
 * @param {Client} client The client that you wish to add.
 */
AmalgamateBase.prototype.addClient = function(client) {
  logger.debug('Adding client: ' + client.getName());

  this.clients.push(client);
  this.clientNames.push(client.getName());
};

/**
 * @description List the name of all the clients
 * @returns {String[]} Names of clients
 */
AmalgamateBase.prototype.getClients = function() {
  return this.clientNames;
};

/**
 * @description Attempts to connect all the clients to their corresponding servers.
 */
AmalgamateBase.prototype.connect = function() {
  logger.debug('Connecting ' + this.clients.length + ' client(s)...');

  this.clients.forEach(function(client) {
    client.connect();
  });
};

module.exports = {
  Base: AmalgamateBase,
  FacebookClient: require('./clients/facebookClient'),
  DiscordClient: require('./clients/discordClient'),
};
