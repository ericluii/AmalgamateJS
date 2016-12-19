/**
 * Amalgamate JS Facebook Client
 * @module AmalgamateJS:Clients
 * @see module:AmalgamateJS
 */
var logger = require('../logger');

/**
 * @classdesc Facebook Client class for handling Facebook specific logic.
 * @description Constructor for Facebook Client Class.
 */
class FacebookClient {
  /**
   * @param {Object.<string, Object>} properties Dictionary containing
   *  connection settings.
   * @constructor
   */
  constructor (properties) {
    // Validate for
    //  - APP SECRET
    //  - VALIDATION TOKEN
    //  - PAGE ACCESS TOKEN
    //  - ENDPOINT
    //  - PORT
    this.properties = properties;
  }

  /**
   * @description Getter. Retrieve the name and identifier for this client.
   * @returns {string} The name/identifier for this client.
   */
  get name () {
    return 'Facebook:' + this.port;
  }

  /**
   * @description Attempt to connect to Facebook Messenger.
   * @returns {boolean} True if succeeds, False otherwise.
   */
  connect () {
    logger.debug('Attempting to connect Facebook Client...');

    // Do stuff
  }
}


module.exports = FacebookClient;
