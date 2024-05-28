// File: src/commands/mute.js (JavaScript)

const { Client, Message, Permissions } = require('discord.js');
const { muteUser } = require('../utils/mongoDB');
const { errorEmbed, successEmbed } = require('../utils/embeds');

/**
 * Mute a user in the server
 * @param {Client} client - The Discord client
 * @param {Message} message - The message that triggered the command
 * @param {string[]} args - The command arguments
 */
async function muteCommand(client, message, args) {
    if (!message.member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
        return message.channel.send(errorEmbed('You do not have permission to use this command!'));
    }

    const target = message.mentions.users.first();
    if (!target) {
        return message.channel.send(errorEmbed('Please mention a user to mute.'));
    }

    const member = message.guild.members.cache.get(target.id);
    if (member) {
        try {
            await muteUser(target.id, message.guild.id);
            member.roles.add('MUTE_ROLE_ID');
            message.channel.send(successEmbed(`Successfully muted ${target.tag}.`));
        } catch (err) {
            console.error(err);
            message.channel.send(errorEmbed('An error occurred while muting the user.'));
        }
    } else {
        message.channel.send(errorEmbed('User not found in the server.'));
    }
}

module.exports = {
    name: 'mute',
    description: 'Mute a user in the server',
    execute: muteCommand,
};