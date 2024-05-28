// File: src/commands/warn.js (JavaScript)

const { Client, Message, MessageEmbed } = require('discord.js');
const { logWarn } = require('../utils/loggingSystem');

/**
 * Warn a user in the server.
 * @param {Client} client - The Discord client
 * @param {Message} message - The message that triggered the command
 * @param {String[]} args - The command arguments
 */
const warnCommand = async (client, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        return message.reply('You do not have permission to use this command.');
    }

    const user = message.mentions.users.first();
    if (!user) {
        return message.reply('Please mention the user to warn.');
    }

    const reason = args.slice(1).join(' ') || 'No reason provided';

    const embed = new MessageEmbed()
        .setColor('ORANGE')
        .setTitle('User Warned')
        .setAuthor(user.tag, user.displayAvatarURL())
        .addField('Warned by', message.author.tag)
        .addField('Reason', reason)
        .setTimestamp();

    try {
        await user.send(`You have been warned in ${message.guild.name}. Reason: ${reason}`);
    } catch (error) {
        console.error(`Failed to send warn message to ${user.tag}`);
    }

    logWarn(user, message.author, reason); // Log the warn in the system

    message.channel.send(embed);
};

module.exports = {
    name: 'warn',
    description: 'Warn a user in the server.',
    execute: warnCommand,
};