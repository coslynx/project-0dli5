// File: src/utils/documentation.js (JavaScript)

/**
 * This file contains the documentation for the Discord moderation bot project.
 * It includes details about the project features, tech stack, and file structure.
 */

const documentation = {
  projectDescription: {
    description: "Develop a Discord moderation bot that helps manage a server efficiently.",
    features: [
      "kick", "ban", "mute", "warn", "clear chat commands",
      "customizable prefix for commands",
      "auto-moderation system",
      "custom moderation rules and triggers",
      "logging system",
      "user-friendly interface",
      "display server stats and information",
      "scheduled messages",
      "assign roles and permissions",
      "check server's uptime and ping",
      "welcome new members with custom message"
    ]
  },
  improvements: [
    "automatically assign roles to new members",
    "implement vote kick system",
    "check user's moderation history",
    "track user activity and display stats",
    "set up custom welcome message for new members"
  ],
  techStack: {
    languages: ["Node.js"],
    APIs: ["Discord.js"],
    packages: ["discord.js (v13.1.0)", "mongoose (6.0.11)", "dotenv (10.0.0)", "moment (2.29.1)", "winston (3.3.3)"],
    otherDetails: [
      "command handler for better code organization",
      "MongoDB for storing moderation logs and custom rules",
      "moment.js for date and time formatting",
      "dotenv for environment variables",
      "winston for logging system",
      "error handling for smooth operation",
      "Discord.js message collector for interactive commands",
      "proper documentation for all commands"
    ]
  },
  fileStructure: {
    "src": {
      "commands": {
        "ban.js": "",
        "kick.js": "",
        "mute.js": "",
        "warn.js": "",
        "clear.js": "",
        "prefix.js": "",
        "automod.js": "",
        "customRules.js": "",
        "logging.js": "",
        "stats.js": "",
        "scheduledMessages.js": "",
        "rolesPermissions.js": "",
        "uptime.js": "",
        "welcomeMessage.js": ""
      },
      "features": {
        "assignRoles.js": "",
        "voteKick.js": "",
        "moderationHistory.js": "",
        "userStats.js": "",
        "customWelcomeMessage.js": ""
      },
      "utils": {
        "commandHandler.js": "",
        "mongoDB.js": "",
        "dateTime.js": "",
        "envVariables.js": "",
        "loggingSystem.js": "",
        "errorHandling.js": "",
        "messageCollector.js": "",
        "documentation.js": ""
      },
      "index.js": ""
    },
    "README.md": ""
  }
};

module.exports = documentation;