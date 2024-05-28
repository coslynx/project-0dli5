// filename: stats.js (JavaScript)

const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'stats',
  description: 'Display server stats and information',
  async execute(message) {
    const { guild } = message;
    const memberCount = guild.memberCount;
    const onlineCount = guild.members.cache.filter((member) => member.presence.status === 'online').size;
    const offlineCount = guild.members.cache.filter((member) => member.presence.status === 'offline').size;
    const channelCount = guild.channels.cache.size;
    const roleCount = guild.roles.cache.size;

    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Server Stats')
      .addFields(
        { name: 'Total Members', value: memberCount },
        { name: 'Online Members', value: onlineCount },
        { name: 'Offline Members', value: offlineCount },
        { name: 'Total Channels', value: channelCount },
        { name: 'Total Roles', value: roleCount },
      );

    message.channel.send({ embeds: [embed] });
  }
};