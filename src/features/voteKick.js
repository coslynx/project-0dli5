// File: src/features/voteKick.js (JavaScript)

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!voteKick')) {
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Please mention a member to initiate a kick vote.');
    }

    const voteEmbed = {
      color: 0xff0000,
      title: 'Vote Kick Initiated',
      description: `Do you want to kick ${member}? React with ✅ to kick.`,
    };

    const voteMessage = await message.channel.send({ embeds: [voteEmbed] });
    await voteMessage.react('✅');

    const filter = (reaction, user) => {
      return reaction.emoji.name === '✅' && user.id !== client.user.id;
    };

    const collector = voteMessage.createReactionCollector({ filter, time: 15000 });

    collector.on('collect', (reaction, user) => {
      if (reaction.emoji.name === '✅') {
        message.channel.send(`Vote to kick ${member} passed. Initiating kick...`);
        member.kick();
      }
    });

    collector.on('end', (collected) => {
      if (collected.size === 0) {
        message.channel.send('Vote to kick failed. No votes received.');
      }
    });
  }
});

client.login('your-bot-token');