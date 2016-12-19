/**
 * AmalgamateJS Base
 * @module AmalgamateJS
 * @see AmalgamateJS:Clients
 */
var logger = require('./logger');

/**
 * @description Creates an instance of the AmalgamateJS Base.
 * @classdesc Main adapter class that users use to interact with framework.
 */
class AmalgamateBase {
  /** @constructor */
  constructor () {
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
  addClient(client) {
    logger.debug('Adding client: ' + client.name);

    this.clients.push(client);
    this.clientNames.push(client.name);
  }

  /**
   * @description List the name of all the clients
   * @returns {String[]} Names of clients
   */
  getClients () {
    return this.clientNames;
  }

  /**
   * @description Attempts to connect all the clients to their corresponding
   *  servers.
   */
  connect() {
    logger.debug('Connecting ' + this.clients.length + ' client(s)...');

    this.clients.forEach(function(client) {
      client.connect();
    });
  }
}

module.exports = {
  Base: AmalgamateBase,
  FacebookClient: require('./clients/facebookClient'),
  DiscordClient: require('./clients/discordClient'),
};
