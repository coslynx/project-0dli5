// Filename: uptime.js (JavaScript)

// Import necessary packages and modules
const moment = require('moment');

// Function to calculate server uptime
const calculateUptime = () => {
    const startTime = moment(process.env.START_TIME);
    const currentTime = moment();
    const uptime = moment.duration(currentTime.diff(startTime));
    const formattedUptime = `${uptime.days()} days, ${uptime.hours()} hours, ${uptime.minutes()} minutes, ${uptime.seconds()} seconds`;
    
    return formattedUptime;
};

// Export the function for external use
module.exports = calculateUptime;