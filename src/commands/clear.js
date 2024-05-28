// File: clear.js (Node.js)

const { Client, Message, Permissions } = require('discord.js');

/**
 * Clear command to delete a specified number of messages from a channel.
 * @param {Client} client - The Discord client
 * @param {Message} message - The message that triggered the command
 * @param {Array} args - The arguments provided with the command
 */
async function clearCommand(client, message, args) {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        return message.reply('You do not have permission to use this command.');
    }

    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
        return message.reply('Please provide a valid number of messages to delete.');
    } else if (amount <= 1 || amount > 100) {
        return message.reply('You can only delete between 1 and 99 messages.');
    }

    try {
        await message.channel.bulkDelete(amount, true);
        message.channel.send(`Successfully deleted ${amount - 1} messages.`).then(msg => msg.delete({ timeout: 5000 }));
    } catch (error) {
        console.error('Error clearing messages:', error);
        message.reply('An error occurred while trying to clear messages.');
    }
}

module.exports = {
    name: 'clear',
    description: 'Clear a specified number of messages from the channel',
    execute: clearCommand
};