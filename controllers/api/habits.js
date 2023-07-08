const User = require('../../models/user');
const Habit = require('../../models/habit');

module.exports = {
  addHabit
}

async function addHabit(req, res) {
  try {
    console.log(req.user._id)
    const user = await User.findById(req.user._id).populate('habit');
    const newHabit = new Habit(req.body);
    user.habit.push(newHabit);
    await Promise.all([newHabit.save(), user.save()]);
  } catch(err) {
    console.log(err);
  }
}