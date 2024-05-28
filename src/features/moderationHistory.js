// File: src/features/moderationHistory.js (JavaScript)

const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment');
const mongoDB = require('../utils/mongoDB');

/**
 * Fetches the moderation history of a user.
 * @param {Client} client - The Discord client
 * @param {Message} message - The message triggering the command
 * @param {string[]} args - The command arguments
 */
const moderationHistory = async (client, message, args) => {
    try {
        // Check if user has permission to view moderation history
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply('You do not have permission to view the moderation history.');
        }
        
        // Get the user mentioned in the command
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('Please mention a user to view their moderation history.');
        }
        
        // Fetch moderation history from the database
        const moderationLogs = await mongoDB.fetchUserModerationHistory(user.id);
        if (moderationLogs.length === 0) {
            return message.reply('No moderation history found for this user.');
        }
        
        // Prepare and send the moderation history as an embedded message
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Moderation History for ${user.tag}`)
            .setDescription('Here is the moderation history for this user:')
            .setTimestamp();
        
        moderationLogs.forEach(log => {
            const { action, moderator, timestamp, reason } = log;
            embed.addField(action, `Moderator: ${moderator}\nTimestamp: ${moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}\nReason: ${reason}`);
        });
        
        message.channel.send({ embeds: [embed] });
    } catch (error) {
        console.error('Error fetching moderation history:', error);
        message.reply('An error occurred while fetching the moderation history. Please try again later.');
    }
};

module.exports = moderationHistory;