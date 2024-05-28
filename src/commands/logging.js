// logging.js

const { Client, Intents } = require('discord.js');
const winston = require('winston');

// Initialize Winston Logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Function to log moderation actions
const logModerationAction = (action, moderator, target, reason) => {
  logger.info(`${action} | Moderator: ${moderator} | Target: ${target} | Reason: ${reason}`);
};

module.exports = {
  logModerationAction
};