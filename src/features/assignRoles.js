// Filename: assignRoles.js (JavaScript)

// Import necessary modules and packages
const Discord = require('discord.js');

// Function to assign roles to a user
const assignRoles = (message, targetUser, roles) => {
    // Check if the user has the necessary permissions to assign roles
    if (!message.member.hasPermission('MANAGE_ROLES')) {
        message.reply('You do not have the required permissions to assign roles.');
        return;
    }

    // Find the user mentioned in the message
    const user = message.mentions.users.first();
    if (!user) {
        message.reply('Please mention a user to assign roles.');
        return;
    }

    // Find the member object for the mentioned user
    const member = message.guild.members.cache.get(user.id);

    // Check if the member object exists
    if (!member) {
        message.reply('User is not a member of this server.');
        return;
    }

    // Loop through the roles array and assign each role to the user
    roles.forEach(roleName => {
        const role = message.guild.roles.cache.find(role => role.name === roleName);
        if (!role) {
            message.reply(`Role ${roleName} not found.`);
            return;
        }

        // Check if the bot has permissions to manage the role
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
            message.reply('I do not have the required permissions to manage roles.');
            return;
        }

        // Assign the role to the user
        member.roles.add(role)
            .then(() => {
                message.channel.send(`Role ${role.name} assigned to ${user.username}.`);
            })
            .catch(error => {
                console.error(`Error assigning role: ${error}`);
                message.reply('An error occurred while assigning the role.');
            });
    });
};

module.exports = assignRoles;