const logger = require('fluent-logger');
const Enum = require('enum');
var config = require('../config/config');

const Levels = new Enum({'DEBUG': 0, 'REQUEST': 1, 'INFO': 2, 'WARN': 3, 'ERROR': 4, 'OFF': 5 });

const level = config.defaultLevel;
const tag = config.tag;
const options = config.options;

logger.configure(tag, options);

module.exports = {
  logError: (message) => {
    if(message.level >= level) {
      logger.emit('error', message);
    }
  },

  logInfo: (message) => {
    if(message.level >= level) {
      logger.emit('info', message);
    }
  },

  logWarning: (message) => {
    if(message.level >= level) {
      logger.emit('warn', message);
    }
  },

  logDebug: (message) => {
    if(message.level >= level) {
      logger.emit('debug', message);
    }
  },

  logREquest: (message) => {
    if(message.level >= level) {
      logger.emit('request', message);
    }
  },
}
