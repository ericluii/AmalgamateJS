var logger = require('../logger');

function FacebookClient(properties) {
  // Validate for
  //  - APP SECRET
  //  - VALIDATION TOKEN
  //  - PAGE ACCESS TOKEN
  //  - ENDPOINT
  //  - PORT
};

FacebookClient.prototype.getName = function() {
  return "Facebook:" + this.port;
};

FacebookClient.prototype.connect = function() {
  logger.debug("Attempting to connect Facebook Client...");

  // Do stuff
};

module.exports = FacebookClient;
