const User = require('../../models/user');
const Mood = require('../../models/mood');

module.exports = {
  addMood,
  getMoodData
}

async function getMoodData(req, res) {
  try {
    const user = await User.findById(req.user._id)
    res.json(user.mood) 
  } catch (err) {
    console.log(err)
  }
}

async function addMood(req, res) {
  try {
    console.log(req.user._id)
    console.log('req!!:', req.body)
    const user = await User.findById(req.user._id)
    if (user.mood.some(mood => mood.current_date === req.body.current_date)) {
      console.log('if')
      const moodIndex = await user.mood.findIndex((mood) => mood.current_date === req.body.current_date)
      user.mood[moodIndex] = req.body
    } else {
      console.log('else')
      const newMood = new Mood(req.body)
      await newMood.save()
      user.mood.push(newMood)
    }
    console.log(user.mood)
    await user.save();
    res.json();
  } catch(err) {
    console.log(err);
  }
}