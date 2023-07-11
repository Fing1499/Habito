const User = require('../../models/user');
const Habit = require('../../models/habit');
const mongoose = require('mongoose');
const habit = require('../../models/habit');

module.exports = {
  addHabit,
  index,
  completeHabit,
 
}


//TODO: ADD ERROR HANDLING FOR MULTIPLE DATES BEING ADDED WHEN SPAMMED
async function completeHabit(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const habits = await user.habit

    const objId = mongoose.Types.ObjectId(req.body.habit._id)
    const habit = await habits.find(habit => habit._id.equals(objId))
    console.log('REQ.BODY:', req.body.habit)
    habit.completed_today = !req.body.habit.completed_today



    if (await req.body.habit.completed_today !== true) {
      await habit.dates_completed.push(req.body.habit.dates_completed)
      habit.multiplier = habit.multiplier + (habit.multiplier * 0.01)
      if (new Date().toLocaleDateString('en-GB') === habit.dates_completed[-1]) {
        habit.previous_multiplier = habit.previous_multiplier + (habit.previous_multiplier * 0.01)
      }
    } else {
      await habit.dates_completed.pop(req.body.habit.dates_completed)
      habit.multiplier = habit.previous_multiplier
    }



    console.log('HABIT', habit)
    await user.save()
    res.end();
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
    const allHabits = await user.habit
    res.json(allHabits)
    console.log('ALL HABITS', allHabits);
  } catch (err) {
    console.log(err);
  }
} 