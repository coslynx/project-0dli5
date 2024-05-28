// File: userStats.js (JavaScript)

// Import necessary modules and dependencies
const moment = require('moment');
const mongoDB = require('../utils/mongoDB');

// Function to fetch and display user stats
const getUserStats = async (userId) => {
    try {
        const userStats = await mongoDB.getUserStats(userId);

        if (!userStats) {
            return "User stats not found.";
        }

        const { username, totalMessages, joinDate } = userStats;

        const formattedJoinDate = moment(joinDate).format('MMMM Do YYYY, h:mm:ss a');

        return `User: ${username}\nTotal Messages: ${totalMessages}\nJoin Date: ${formattedJoinDate}`;
    } catch (error) {
        console.error("Error fetching user stats:", error);
        return "An error occurred while fetching user stats.";
    }
};

// Export the function for external use
module.exports = { getUserStats };