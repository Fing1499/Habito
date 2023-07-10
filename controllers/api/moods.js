const User = require('../../models/user');
const Mood = require('../../models/mood');

module.exports = {
  addMood
}

async function addMood(req, res) {
  try {
    console.log(req.user._id)
    console.log('req!!:', req.body)
    const user = await User.findById(req.user._id)
    const newMood = new Mood(req.body)
    await newMood.save()
    user.mood.push(newMood)
    await user.save();
  } catch(err) {
    console.log(err);
  }
}