// File: customRules.js (JavaScript)

// Import necessary modules
const mongoose = require('mongoose');

// Define the schema for custom moderation rules
const customRulesSchema = new mongoose.Schema({
  ruleName: { type: String, required: true },
  ruleDescription: { type: String, required: true },
  ruleAction: { type: String, required: true },
  ruleTrigger: { type: String, required: true },
});

// Create a model based on the schema
const CustomRule = mongoose.model('CustomRule', customRulesSchema);

// Function to add a new custom moderation rule
const addCustomRule = async (ruleName, ruleDescription, ruleAction, ruleTrigger) => {
  try {
    const newCustomRule = new CustomRule({
      ruleName,
      ruleDescription,
      ruleAction,
      ruleTrigger,
    });
    await newCustomRule.save();
    return 'Custom rule added successfully!';
  } catch (error) {
    console.error(error);
    return 'An error occurred while adding the custom rule.';
  }
};

// Function to get all custom moderation rules
const getAllCustomRules = async () => {
  try {
    const customRules = await CustomRule.find();
    return customRules;
  } catch (error) {
    console.error(error);
    return 'An error occurred while retrieving custom rules.';
  }
};

// Export the functions for external use
module.exports = {
  addCustomRule,
  getAllCustomRules,
};