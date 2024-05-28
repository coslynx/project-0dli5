// File: src/utils/envVariables.js (JavaScript)

require('dotenv').config();

const envVariables = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  MONGODB_URI: process.env.MONGODB_URI,
  PREFIX: process.env.PREFIX,
  // Add more environment variables as needed for the project
};

module.exports = envVariables;