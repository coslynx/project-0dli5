// File: errorHandling.js (JavaScript)

const handleError = (error) => {
  console.error(`An error occurred: ${error.message}`);
  // Additional error handling logic can be added here
};

module.exports = {
  handleError,
};