const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'https://google-genai-hackathon.vercel.app/', // Update this to your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());   

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mood Range Schema
const moodRangeSchema = new mongoose.Schema({
  min: Number,
  max: Number,
  prompt: String,
});

const MoodRange = mongoose.model('MoodRange', moodRangeSchema);

// Handle chat with context
app.post('/api/chat', async (req, res) => {
  try {
    const { moodValue, userMessage } = req.body;
    
    if (moodValue === undefined || !userMessage) {
      return res.status(400).json({ message: 'Mood value and user message are required' });
    }

    // Find the appropriate mood range
    const moodRange = await MoodRange.findOne({
      min: { $lte: moodValue },
      max: { $gt: moodValue }
    });

    if (!moodRange) {
      return res.status(404).json({ message: 'No mood range found for this value' });
    }
 
    const chatPrompt = `Context: A user has shared the following message: "${userMessage}". From the user's message, we can infer the following emotional state: "${moodRange.prompt}". As a compassionate mental health chatbot, your response should adhere to the following guidelines:
    the number 1 priority is to talk like a friend you can use some light humour or if sad you can give some confidence 
    1. **Empathetic Acknowledgment**: Recognize the user's emotional state through your response without explicitly naming the mood or numerical values. Use phrases that reflect understanding and validate their feelings.
    
    2. **Thoughtful Engagement**: Craft a detailed reply that directly addresses the user's concerns while incorporating their emotional context. Ensure the response feels personal and relevant to the individual’s experience.
    
    3. **Validation and Support**: Depending on the inferred mood range, validate their feelings. For positive moods, celebrate their achievements and highlight strengths. For neutral to negative moods, emphasize empathy and provide emotional support, reassuring them that their feelings are valid.
    
    4. **Encouragement and Constructive Feedback**: Offer encouragement and constructive feedback aligned with their mood. For those in a positive state, encourage them to continue their progress. For neutral or negative emotions, gently propose coping strategies or solutions that may help them navigate their feelings.
    
    5. **Conversational Tone**: Maintain a warm and inviting tone throughout your response. Encourage further dialogue by posing open-ended questions that invite the user to share more about their feelings or experiences, or suggest helpful resources that might assist them.
    
    6. **Comprehensive Structure**: Ensure your response is thorough where needed like if you can give in one line or word give that but if require give some response encompassing 3-5 paragraphs. Each paragraph should flow logically, connecting the user's emotional state to thoughtful insights and suggestions. Remember to focus on emotional nuance and provide a response that is genuinely supportive and encouraging, without relying on mood metrics.`;

    const chatResult = await model.generateContent(chatPrompt);
    const aiResponse = chatResult.response.text();
    
    res.json({ response: aiResponse });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Initialize Mood Ranges
async function initializeMoodRanges() {
    try {
      const count = await MoodRange.countDocuments();
      if (count === 0) {
        const defaultRanges = [
          {
            min: 40,
            max: 51,
            prompt: "The user is feeling extremely positive, enthusiastic, and optimistic. They likely feel energized and ready to take on challenges."
          },
          {
            min: 30,
            max: 40,
            prompt: "The user is in a very good mood, feeling confident and optimistic about their circumstances."
          },
          {
            min: 20,
            max: 30,
            prompt: "The user is feeling quite good, generally positive, and content with their current situation."
          },
          {
            min: 10,
            max: 20,
            prompt: "The user is in a slightly positive mood, feeling generally okay but may have some minor concerns."
          },
          {
            min: 0,
            max: 10,
            prompt: "The user is feeling neutral to slightly positive, generally balanced but may be experiencing some uncertainty."
          },
          {
            min: -10,
            max: 0,
            prompt: "The user is feeling neutral to slightly negative, possibly experiencing some mild stress or concern."
          },
          {
            min: -20,
            max: -10,
            prompt: "The user is feeling somewhat down or upset, likely facing some challenges or disappointments."
          },
          {
            min: -30,
            max: -20,
            prompt: "The user is feeling quite negative or distressed, possibly dealing with significant difficulties or emotional pain."
          },
          {
            min: -40,
            max: -30,
            prompt: "The user is feeling very negative or troubled, likely experiencing serious problems or emotional distress."
          },
          {
            min: -51,
            max: -40,
            prompt: "The user is feeling extremely negative or in severe distress, potentially facing a crisis or overwhelming challenges."
          }
        ];
  
        await MoodRange.insertMany(defaultRanges);
        console.log('Default mood ranges initialized');
      }
  } catch (error) {
    console.error('Error initializing mood ranges:', error);
  }
}

initializeMoodRanges();

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (!process.env.GOOGLE_AI_KEY) {
    console.warn('WARNING: GOOGLE_AI_KEY is not set in environment variables');
  }
});
