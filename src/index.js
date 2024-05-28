// JavaScript

const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();
const { prefix } = require('./utils/envVariables');

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        switch (command) {
            case 'ban':
                require('./commands/ban')(message, args);
                break;
            case 'kick':
                require('./commands/kick')(message, args);
                break;
            case 'mute':
                require('./commands/mute')(message, args);
                break;
            case 'warn':
                require('./commands/warn')(message, args);
                break;
            case 'clear':
                require('./commands/clear')(message, args);
                break;
            case 'prefix':
                require('./commands/prefix')(message, args);
                break;
            case 'automod':
                require('./commands/automod')(message, args);
                break;
            case 'customrules':
                require('./commands/customRules')(message, args);
                break;
            case 'logging':
                require('./commands/logging')(message, args);
                break;
            case 'stats':
                require('./commands/stats')(message, args);
                break;
            case 'scheduledmessages':
                require('./commands/scheduledMessages')(message, args);
                break;
            case 'rolespermissions':
                require('./commands/rolesPermissions')(message, args);
                break;
            case 'uptime':
                require('./commands/uptime')(message, args);
                break;
            case 'welcomemessage':
                require('./commands/welcomeMessage')(message, args);
                break;
            case 'assignroles':
                require('./features/assignRoles')(message, args);
                break;
            case 'votekick':
                require('./features/voteKick')(message, args);
                break;
            case 'moderationhistory':
                require('./features/moderationHistory')(message, args);
                break;
            case 'userstats':
                require('./features/userStats')(message, args);
                break;
            case 'customwelcomemessage':
                require('./features/customWelcomeMessage')(message, args);
                break;
            default:
                message.channel.send('Invalid command. Type <prefix>help to see available commands.');
        }
    } catch (error) {
        console.error(error);
        message.channel.send('An error occurred while executing the command.');
    }
});

client.login(process.env.DISCORD_TOKEN);