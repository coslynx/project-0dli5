// File: kick.js (Node.js)

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const { prefix } = require('../utils/envVariables');
const { logKick } = require('../utils/loggingSystem');

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'kick') {
    if (!message.member.permissions.has('KICK_MEMBERS')) {
      return message.reply('You do not have permission to kick members.');
    }

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.cache.get(user.id);
      if (member) {
        member
          .kick()
          .then(() => {
            message.reply(`${user.tag} has been kicked.`);
            logKick(user, message.author);
          })
          .catch((error) => {
            message.reply('I was unable to kick the member.');
            console.error(error);
          });
      } else {
        message.reply('That user is not in this server.');
      }
    } else {
      message.reply('You need to mention a user to kick.');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);