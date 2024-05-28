// Filename: src/utils/commandHandler.js (JavaScript)

const { Client, Collection } = require('discord.js');
const fs = require('fs');
const { prefix } = require('../commands/prefix');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error while executing this command!');
    }
});

client.login('your-bot-token-here');