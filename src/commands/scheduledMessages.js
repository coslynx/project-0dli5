scheduledMessages.js (Node.js)
```javascript
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Function to send scheduled messages
const sendScheduledMessage = (channelId, message, scheduleTime) => {
  const channel = client.channels.cache.get(channelId);
  if (!channel) {
    console.error(`Channel with ID ${channelId} not found`);
    return;
  }

  const currentTime = new Date();
  const timeDifference = scheduleTime.getTime() - currentTime.getTime();

  if (timeDifference > 0) {
    setTimeout(() => {
      channel.send(message);
    }, timeDifference);
  } else {
    console.error('Scheduled time should be in the future');
  }
};

module.exports = {
  sendScheduledMessage
};
```  