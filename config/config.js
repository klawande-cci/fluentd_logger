var config = {};

const options = {
  host: process.env.HOST,
  port: process.env.PORT,
  timeout: 0.1,
  reconnectInterval: 600000
}

const defaultLevel = 0;
const tag = 'qa.agdataintegration';

config.options = options;
config.defaultLevel = process.env.LEVEL || defaultLevel;
config.tag = process.env.TAG || tag;

module.exports = config;