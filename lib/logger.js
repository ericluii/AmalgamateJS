/**
 * Logging Logic
 * @module Logging
 */

var winston = require('winston');
winston.emitErrs = true;

/**
 * @description Logging class, for logging things. We log to both stdout and
 *   the log file `./logs/amalgamate.log'.
 *   Logging Levels available are:
 *    * error
 *    * warn
 *    * info __this level and above is in the log file__
 *    * verbose
 *    * debug __this level and above is displayed in stdout__
 *    * silly
 *  <br/><br/>Call by using logger.error(msg), logger.warn(msg), etc.
 */
var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logs/amalgamate.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
module.exports.stream = {
  write: function(message) {
    logger.info(message);
  },
};
