const User = require('../../models/user');
const Habit = require('../../models/habit');

module.exports = {
  addHabit
}

async function addHabit(req, res) {
  try {
    const userId = req.user._id;
    console.log(userId)
    const user = await User.findById(userId)
    const newHabit = new Habit(req.body)
    await newHabit.save()
    user.habit.push(newHabit)
    await user.save()
    console.log(newHabit);
  } catch(err) {
    console.log(err);
  }
}