const User = require('../../models/user');
const Habit = require('../../models/habit');
const mongoose = require('mongoose');

module.exports = {
  addHabit,
  index,
  completeHabit
}

async function completeHabit(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const habits = user.habit
    console.log('habits:', habits)
    const habit = habits.find(habit => habit._id.equals(mongoose.Types.ObjectId(req.body._id)))
    console.log('REQ.BODY:', req.body._id)
    console.log('habit', habit)
    habit.dates_completed.push(req.body.dates_completed)
    habit.completed_today = !req.body.completed_today
    await user.save()
    console.log(habit);
  } catch (err) {
    console.log(err);
  }
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

async function index(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const allHabits = user.habit
    res.json(allHabits)
    console.log(user);
  } catch (err) {
    console.log(err);
  }
} 