const winston = require('winston')

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'webapp.log' })
  ]
});

const info = (module, text) => {
  return logger.info(`[${module}] - ${text}`)
}

const error = (module, text) => {
  return logger.error(`[${module}] - ${text}`)
}

module.exports = { info, error }