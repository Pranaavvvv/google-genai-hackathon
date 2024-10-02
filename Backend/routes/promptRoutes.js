const express = require('express');
const Prompt = require('../models/Prompt');
const router = express.Router();

 
router.get('/prompt/:moodValue', async (req, res) => {
  const moodValue = parseInt(req.params.moodValue, 10);

  try { 
    const prompt = await Prompt.findOne({
      moodRange: { $elemMatch: { $gte: moodValue, $lte: moodValue } }
    });

    if (!prompt) {
      return res.status(404).json({ message: 'No prompt found for this mood.' });
    }

    res.json({ prompt: prompt.promptText });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prompt', error });
  }
});

module.exports = router;
