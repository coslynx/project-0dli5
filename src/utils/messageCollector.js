// File: messageCollector.js (JavaScript)

// Import necessary packages and files
const { MessageCollector } = require('discord.js');

// Function to create a message collector
const createMessageCollector = (channel, filter, options) => {
  return channel.createMessageCollector(filter, options);
};

// Export the function for external use
module.exports = {
  createMessageCollector,
};