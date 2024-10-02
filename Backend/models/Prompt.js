const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  moodRange: {
    type: [Number], 
    required: true
  },
  promptText: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Prompt', promptSchema);
