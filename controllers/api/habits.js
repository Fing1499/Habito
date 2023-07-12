const User = require('../../models/user');
const Habit = require('../../models/habit');
const mongoose = require('mongoose');
const habit = require('../../models/habit');

module.exports = {
  addHabit,
  index,
  completeHabit,
  getChartData
}

async function getChartData(req, res) {
  const user = await User.findById(req.user._id)
  const habits = await user.habit
  res.json(habits)
}


//TODO: ADD ERROR HANDLING FOR MULTIPLE DATES BEING ADDED WHEN SPAMMED
async function completeHabit(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const habits = await user.habit

    const objId = mongoose.Types.ObjectId(req.body.habit._id)
    const habit = await habits.find(habit => habit._id.equals(objId))
    console.log('REQ.BODY:', req.body.habit)
    habit.completed_today = req.body.habit.completed_today



    if (await req.body.habit.completed_today === true) {
      await habit.dates_completed.push(req.body.habit.dates_completed)
      habit.multiplier = habit.multiplier + (habit.multiplier * 0.01)
      habit.amount_completed += 1
    } else {
      await habit.dates_completed.pop(req.body.habit.dates_completed)
      habit.multiplier = habit.previous_multiplier
      habit.amount_completed = habit.previous_amount
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
    const newHabit = await new Habit(req.body)
    await newHabit.save()
    user.habit.push(newHabit)
    await user.save()
    console.log(newHabit);
    res.end()
  } catch(err) {
    console.log(err);
  }
}

async function index(req, res) {
  try {
    const tDay = new Date().toLocaleString('en-GB').split(',')[0];
    console.log(tDay)
    const user = await User.findById(req.user._id);
    const allHabits = await user.habit
    await allHabits.forEach((habit) => {

      if (!habit.dates_completed.includes(tDay)) {
        habit.previous_multiplier = habit.multiplier
        habit.previous_amount = habit.amount_completed
        habit.completed_today = false
        console.log('WHYYYYYY')
      } else {
        habit.completed_today = true
      }
      console.log('FOREACH', habit.habit, habit.dates_completed)
      console.log('HERE', habit.habit, habit.completed_today)
    })
    await user.save();
    res.json(allHabits)
    // console.log('ALL HABITS', allHabits);
    
    console.log('tDay', tDay)

  } catch (err) {
    console.log(err);
  }
} 