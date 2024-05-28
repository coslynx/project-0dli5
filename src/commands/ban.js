// ban.js

const { Client, Intents } = require('discord.js');
const { token } = require('../utils/envVariables');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ban') {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason');

    if (!user) {
      return interaction.reply({ content: 'Please specify a user to ban.', ephemeral: true });
    }

    try {
      await interaction.guild.members.ban(user, { reason: reason });

      interaction.reply({ content: `Successfully banned ${user.tag}.`, ephemeral: true });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'There was an error while trying to ban the user.', ephemeral: true });
    }
  }
});

client.login(token);