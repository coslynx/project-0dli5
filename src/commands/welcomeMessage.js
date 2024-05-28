// File: welcomeMessage.js (JavaScript)

const Discord = require('discord.js');

module.exports = {
  name: 'welcome',
  description: 'Send a welcome message to new members',
  execute(message, args) {
    const welcomeChannel = message.guild.channels.cache.find(channel => channel.name === 'welcome');
    if (!welcomeChannel) return message.channel.send('Error: Welcome channel not found.');

    const welcomeMessage = 'Welcome to our server! Enjoy your stay and have fun!';
    welcomeChannel.send(welcomeMessage);
  }
};