// File: src/utils/dateTime.js (JavaScript)

const moment = require('moment');

// Function to get the current date and time
function getCurrentDateTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

// Exporting the function
module.exports = {
  getCurrentDateTime,
};