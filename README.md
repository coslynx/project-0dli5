# README.md

Project: Discord Moderation Bot

Description:
This project aims to develop a Discord moderation bot that helps manage a server efficiently. The bot will have various features such as kick, ban, mute, warn, and clear chat commands. It will also include a customizable prefix for commands, an auto-moderation system, custom moderation rules and triggers, logging system, server stats display, scheduled messages, roles and permissions management, server uptime and ping check, and a welcome message for new members. 

Improvements:
- Automatic role assignment to new members
- Vote kick system
- User moderation history check
- User activity tracking and stats display
- Custom welcome message setup for new members

Tech Stack:
- Language: Node.js
- APIs: Discord.js
- Packages: discord.js (v13.1.0), mongoose (6.0.11), dotenv (10.0.0), moment (2.29.1), winston (3.3.3)

File Structure:
- `src`
  - `commands`
    - `ban.js`
    - `kick.js`
    - `mute.js`
    - `warn.js`
    - `clear.js`
    - `prefix.js`
    - `automod.js`
    - `customRules.js`
    - `logging.js`
    - `stats.js`
    - `scheduledMessages.js`
    - `rolesPermissions.js`
    - `uptime.js`
    - `welcomeMessage.js`
  - `features`
    - `assignRoles.js`
    - `voteKick.js`
    - `moderationHistory.js`
    - `userStats.js`
    - `customWelcomeMessage.js`
  - `utils`
    - `commandHandler.js`
    - `mongoDB.js`
    - `dateTime.js`
    - `envVariables.js`
    - `loggingSystem.js`
    - `errorHandling.js`
    - `messageCollector.js`
    - `documentation.js`
  - `index.js`

Dependencies:
- Utilize MongoDB for storing moderation logs and custom rules
- Use moment.js for date and time formatting
- Set up environment variables using dotenv for security
- Implement logging system using winston for tracking moderation actions
- Utilize Discord.js for integration with Discord API
- Implement error handling for smooth bot operation
- Use Discord.js's message collector for interactive commands

Ensure all commands are properly documented for future reference.