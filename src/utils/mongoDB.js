// Filename: src/utils/mongoDB.js (JavaScript)

const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for moderation logs
const moderationLogSchema = new mongoose.Schema({
  userId: String,
  username: String,
  action: String,
  reason: String,
  timestamp: { type: Date, default: Date.now },
});

// Create a model for moderation logs
const ModerationLog = mongoose.model('ModerationLog', moderationLogSchema);

// Function to save a moderation log entry
const saveModerationLog = async (userId, username, action, reason) => {
  try {
    const log = new ModerationLog({ userId, username, action, reason });
    await log.save();
    console.log('Moderation log saved successfully');
  } catch (error) {
    console.error('Error saving moderation log:', error);
  }
};

module.exports = { saveModerationLog };